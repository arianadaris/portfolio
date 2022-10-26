import React from 'react';
import styles from '../../constants/Theme.module.css';
import homeStyles from './Home.module.css';
import '../../constants/Colors';
import { motion } from 'framer-motion';

import Heading from '../../components/Heading/Heading';
import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';
import Card from '../../components/Card/Card';
import EmailButton from '../../components/EmailButton/EmailButton';

export default function Home() {
    const symbol = "0x1F44B"; // waving hand emoji

    // Generate project cards


    return (
        <div className={styles.container}>

            {/* Impact Driven Label */}
            <div className={styles.flexRow}>
                <Heading firstWord="Impact" secondWord="Driven" />
                <motion.div 
                    className={styles.line} 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />
            </div>

            {/* Fullstack Developer UX/UI Designer Title */}
            <div className={`${homeStyles.title} ${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                <p className={`${styles.ogg} ${styles.size48}`}>Fullstack Developer</p>
                <img className={`${homeStyles.icon}`} src={require('../../assets/images/personal/PersonalIcon.png')} alt="Ariana Daris" />
                <p className={`${styles.ogg} ${styles.size48}`}>UX/UI Designer</p>
            </div>
            <p 
                className={`${styles.foundersLight} ${styles.size24}`}
            >
                I am a self-taught developer and designer based in the United States. I create beautiful and engaging experiences for all users with empathy and inclusion in mind.
            </p>

            {/* Two Card Columns */}
            <div className={`${styles.flexRow}`}>
                <div className={`${homeStyles.half}`}>
                    <OutlinedButton title="About Me" link="/about" />
                    <Card 
                        color={global.GREEN} 
                        num="02." 
                        projectTitle="Spotify Aura" 
                        projectImage={require('../../assets/images/projects/SpotifyAura_Mockup.webp')}
                    />
                    <Card 
                        color={global.PURPLE} 
                        num="04." 
                        projectTitle="Portfolio V3" 
                        projectImage={require('../../assets/images/projects/PortfolioV3_Mockup.webp')}
                    />
                </div>
                <div className={`${homeStyles.half}`}>
                    <Card
                        color={global.BLUE} 
                        num="01." 
                        projectTitle="Personal Portfolio" 
                        projectImage={require('../../assets/images/projects/Portfolio_Mockup.webp')}
                    />
                    <Card 
                        color={global.PINK} 
                        num="03." 
                        projectTitle="The Nook" 
                        projectImage={require('../../assets/images/projects/Nook_Mockup.webp')}
                    />
                    <OutlinedButton title="View More Work" link="/work" />
                </div>
            </div>

            {/* Contact Section */}
            <div>
                <div className={styles.flexRow}>
                    <Heading firstWord="Contact" secondWord="Me" />
                    <div className={styles.line} />
                </div>
                <p className={`${homeStyles.contactTitle} ${styles.ogg} ${styles.size48}`}>Let's Get In Touch!</p>
                <p className={`${homeStyles.contactText} ${styles.foundersLight} ${styles.size24}`}>Whether you're just saying <span role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span>, or you're looking to start a new project, feel free to send me a message! Currently, I am open to remote freelancing work.</p>
                <EmailButton />
            </div>
        </div>
    );
}