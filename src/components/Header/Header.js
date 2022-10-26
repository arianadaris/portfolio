import React from 'react';
import styles from '../../constants/Theme.module.css';
import headerStyles from './Header.module.css';
import { Icon } from '@iconify/react';

export default function Header() {
    return(
        <div className={headerStyles.container}>
            <a href="/"><h1 className={`${headerStyles.logo} ${styles.foundersLight} ${styles.caps} ${styles.size24}`}>Ariana Daris</h1></a>
            <div className={headerStyles.nav}>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/work">Work</a>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/about">About</a>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`} href="/contact">Contact</a>
                <Icon className={`${headerStyles.navItem} ${styles.size16}`} icon="bx:moon" />
            </div>
            
        </div>
    );
}