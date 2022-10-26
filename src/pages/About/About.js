import React from 'react';
import styles from '../../constants/Theme.module.css';
import aboutStyles from './About.module.css';

import Heading from '../../components/Heading/Heading';
import Socials from '../../components/Socials/Socials';
import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';
import EmailButton from '../../components/EmailButton/EmailButton';

export default function About() {
    const symbol = "0x1F44B"; // waving hand emoji

    return (
        <div className={`${styles.container}`}>

            {/* About Me Label */}
            <div className={styles.flexRow}>
                <Heading firstWord="About" secondWord="Me" />
                <div className={styles.line} />
            </div>

            {/* Hi I'm Ariana Daris - Paragraphs and Image */}
            <div className={`${styles.flexRow}`}>
                <div className={`${aboutStyles.pHalf}`}>
                    <h1 className={`${styles.ogg} ${styles.size48}`}>Hi, I'm Ariana Daris! <div className={aboutStyles.emoji}><span role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span></div></h1>
                    <p className={`${styles.foundersLight} ${styles.size24}`}>I’m a senior at Arizona State University studying Computer Science with a concentration in Software Engineering. I am graduating in December of 2022 with my Bachelor’s degree, and anticipate earning a Master’s degree in Computer Science the following December.</p>
                    <p className={`${styles.foundersLight} ${styles.size24}`}>Outside of school, I enjoy learning about front-end development and UX/UI design. I’m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it’s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.</p>
                </div>
                <div className={`${styles.center} ${aboutStyles.pSecondHalf}`}>
                    <img className={`${aboutStyles.frame}`} src={require('../../assets/images/personal/PersonalFrame.png')} alt="Ariana Daris" />
                    <Socials style={{marginTop: 'auto', marginBottom: 'auto', color: '#3C3C3C'}}/>
                </div>
            </div>

            {/* Education, Specialty, Familiarity */}
            <div className={`${styles.flexRow} ${styles.spaceBetween} ${aboutStyles.tags}`}>
                <div className={`${aboutStyles.tagContainer}`}>
                    <h1 className={`${aboutStyles.tagTitle} ${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Education</h1>
                    <h1 className={`${aboutStyles.tagText} ${styles.foundersLight} ${styles.size24}`}>Computer Science, B.S. <br/> <span className={`${styles.foundersLightItalic} ${styles.caps} ${styles.size18}`}>Arizona State University</span></h1>
                </div>
                <hr />
                <div className={`${aboutStyles.tagContainer}`}>
                    <h1 className={`${aboutStyles.tagTitle} ${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Specialized In</h1>
                    <h1 className={`${styles.foundersLight} ${styles.size24}`}>Software Development<br/>Fullstack Development</h1>
                </div>
                <hr />
                <div className={`${aboutStyles.tagContainer}`}>
                    <h1 className={`${aboutStyles.tagTitle} ${aboutStyles.tagtagTitleText} ${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Familiar With</h1>
                    <h1 className={`${styles.foundersLight} ${styles.size24}`}>Agile Scrum, APIs, GitHub, MongoDB and MySQL</h1>
                </div>
            </div>
            
            {/* Expertise Section */}
            <div className={`${aboutStyles.coloredContainer} ${styles.flexRow}`} style={{backgroundColor: '#EAF1F6'}}>
                <div className={`${aboutStyles.expHalf}`}>
                    <h1 className={`${styles.ogg} ${styles.size32}`}>My Expertise</h1>
                    <p className={`${aboutStyles.expP} ${styles.foundersLight} ${styles.size24}`}>During highschool, I had the opportunity to take a web development class which introduced me to HTML and CSS. Before studying Computer Science in college, I taught myself Java and Python using Youtube videos and respective documentation.</p>
                    <OutlinedButton title="View More Work" link="/work" />
                </div>
                <div className={`${aboutStyles.expSecondHalf}`}>
                    <div className={styles.line} />
                    <div className={`${aboutStyles.expSection}`}>
                        <h1 className={`${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Programming Languages</h1>
                        <div className={`${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Javascript ES6</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>HTML/CSS</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Java</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Python</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>C++</h1>
                        </div>
                    </div>
                    <div className={styles.line} />
                    <div className={`${aboutStyles.expSection}`}>
                        <h1 className={`${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Frameworks & Libraries</h1>
                        <div className={`${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>React</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>React Native</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>NodeJS</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>FramerMotion</h1>
                        </div>
                    </div>
                    <div className={styles.line} />
                    <div className={`${aboutStyles.expSection}`}>
                        <h1 className={`${styles.caps} ${styles.foundersLight} ${styles.size24}`}>Development & Design Tools</h1>
                        <div className={`${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Figma</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Visual Studio Code</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Adobe XD</h1>
                            <h1 className={`${styles.foundersLight} ${styles.size18}`}>Adobe Illustrator</h1>
                        </div>
                    </div>
                    <div className={styles.line} />
                </div>
            </div>

            {/* My Experience Label */}
            <div className={styles.flexRow}>
                <Heading firstWord="My" secondWord="Experience" />
                <div className={styles.line} />
            </div>
            <div>
                <p className={`${styles.foundersLight} ${styles.size24}`}>While completing my ungraduate degree, I have had the opportunity to work for amazing tech companies which have inspired me in varous ways to continue learning about software development.</p>
            </div>
            
            {/* Experience Section */}
            <div className={`${aboutStyles.coloredContainer}`} style={{backgroundColor: '#F3F6F7'}}>
                <h1 className={`${styles.ogg} ${styles.size32}`}>Let's Get In Touch!</h1>
                <p className={`${aboutStyles.expP} ${styles.foundersLight} ${styles.size24}`}>I am looking forward to taking on freelance opportunities, and would love to hear about your next excting project! Feel free to send me a message and let’s chat.</p>
                <EmailButton />
            </div>

        </div>
    );
}