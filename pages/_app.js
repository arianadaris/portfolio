import '../styles/globals.css';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ariana Daris | Fullstack Developer</title>
        <meta name="description" content="Ariana Daris Developer Portfolio" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <div className="w-full">
        <Header />
        <main className="">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>

    </>

  )
}

export default MyApp
