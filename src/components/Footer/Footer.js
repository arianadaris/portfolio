import React from 'react';
import styles from '../../constants/Theme.module.css';
import footerStyles from './Footer.module.css';

import Socials from '../Socials/Socials';

export default function Footer() {
    return(
        <div className={footerStyles.container}>
            <a href="/"><h1 className={`${footerStyles.logo} ${styles.foundersLight} ${styles.caps} ${styles.size24}`}>Ariana Daris</h1></a>
            <div className={footerStyles.nav}>
                <a className={`${footerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/work">Work</a>
                <a className={`${footerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/about">About</a>
                <a className={`${footerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/contact">Contact</a>
            </div>
            <Socials />
        </div>
    );
}