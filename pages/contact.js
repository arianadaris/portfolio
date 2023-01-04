import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Icon } from '@iconify/react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');

  const btn = useRef();

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Form validation
  const [ errors, setErrors ] = useState({});

  useEffect(() => {
    errors.name ? nameRef.current.classList.add('error') : nameRef.current.classList.remove('error');
    errors.email ? emailRef.current.classList.add('error') : emailRef.current.classList.remove('error');
    errors.subject ? subjectRef.current.classList.add('error') : subjectRef.current.classList.remove('error');
    errors.message ? messageRef.current.classList.add('error') : messageRef.current.classList.remove('error');
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    console.log(isValidForm);

    if(isValidForm) {
      // If the form inputs are valid
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
      });

      // Handle success/error

      const { error } = await res.json();
      // Error Message
      if (error) {
        console.log(error);

        // Handle error
        btn.current.classList.add('animate-send');
        setTimeout(showError, 2000);

        return;
      }

      // Handle success
      btn.current.classList.add('animate-send');
      setTimeout(showSuccess, 2000);
    }
  };

  const showSuccess = () => {
    btn.current.classList.remove('animate-send');
    btn.current.classList.add('bg-green-200', 'text-green-800');
    btn.current.value = 'Message Sent!'
    console.log('Message sent');

    // Clear the textboxes 
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';

    setTimeout(restart, 2000);
  };

  const showError = () => {
    btn.current.classList.remove('animate-send');
    btn.current.classList.add('bg-red-200', 'text-red-800');
    btn.current.value = 'Error';
    console.log('Could not send message');

    // Clear the textboxes 
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';

    setTimeout(restart, 2000);
  };

  const restart = () => {
    btn.current.value = 'Send Message';

    btn.current.classList.remove('bg-green-200', 'text-green-800', 'bg-red-200', 'text-red-800');

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if(name.length <= 0) {
      tempErrors['name'] = true;
      isValid = false;
    }

    if(email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }

    if(subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }

    if(message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({...tempErrors});
    console.log('errors', errors);
    return isValid;
  };

  return (
    <>
      <Head>
        <title>Ariana Daris - Contact</title>
      </Head>
      <main className="overflow-y-hidden h-screen">
        <Header />
        <section className="flex xs:flex-col md:flex-row xs:space-x-0 md:space-x-10 h-fit xs:pt-10 md:pt-40">
          <div className="flex flex-col space-y-4 xs:w-full md:w-[50%]">
            <h1 className="text-black dark:text-white">Let's get in touch!</h1>
            <p className="dark:text-white/75 pb-10">I am currently looking for freelance opportunities and would love to be a part of your next project! Feel free to say hi!</p>
            <a className="xs:hidden md:flex hover:text-black text-black dark:text-white hover:underline" href="mailto:arianarajewski@gmail.com">arianarajewski@gmail.com</a>
            <div className="space-x-6 xs:hidden md:flex">
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:dribbble-fill" />
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:linkedin-box-fill" />
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:github-fill" />
            </div>
          </div>
          <form className="flex flex-col space-y-4 xs:w-full md:w-[50%] xs:mt-0 md:mt-0" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input type='text' placeholder='Your Name' name='name' onChange={(e) => {setName(e.target.value)}} ref={nameRef} />
              <input type='email' placeholder='Email Address' name='email' onChange={(e) => {setEmail(e.target.value)}} ref={emailRef} />
            </div>
            <input type='text' placeholder='Subject' name='subject' onChange={(e) => {setSubject(e.target.value)}} ref={subjectRef} /> 
            <textarea type='text' placeholder='Your Message' onChange={(e) => {setMessage(e.target.value)}} ref={messageRef} ></textarea>
            <div className='bg-[#A5C3F3] w-[50%] mr-0 ml-auto rounded-xl'>
              <input type='submit' id='submit' value="Send Message" name='message' ref={btn} />
            </div>
          </form>
          <div className="xs:flex md:hidden justify-center mt-16">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;