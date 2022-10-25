import React from 'react';
import styles from '../../constants/Theme.module.css';
import headerStyles from './Header.module.css';
import { Icon } from '@iconify/react';

export default function Header() {
    return(
        <div className={headerStyles.container}>
            <h1 className={`${headerStyles.logo} ${styles.foundersLight} ${styles.caps}`}>Ariana Daris</h1>
            <div className={headerStyles.nav}>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps}`} href="/work">Work</a>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps}`} href="/about">About</a>
                <a className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps}`} href="/contact">Contact</a>
                <Icon className={`${headerStyles.navItem}`} icon="bx:moon" />
            </div>
        </div>
    );
}