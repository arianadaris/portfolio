import React from 'react';
import styles from '../../constants/Theme.module.css';
import headerStyles from './Header.module.css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Header() {
    return(
        <motion.div 
            className={headerStyles.container}
            initial={{ y: -175 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <a href="/">
                <motion.p 
                    className={`${headerStyles.logo} ${styles.foundersLight} ${styles.caps} ${styles.size24}`}
                    initial={{ y: -175 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    Ariana Daris
                </motion.p>
            </a>
            <div className={headerStyles.nav}>
                <motion.a 
                    className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`}
                    href="/work" 
                    initial={{ y: -175 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    Work
                </motion.a>
                <motion.a 
                    className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`}
                    href="/about"
                    initial={{ y: -175 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.40 }}
                >
                    About
                </motion.a>
                <motion.a 
                    className={`${headerStyles.navItem} ${styles.foundersRegular} ${styles.caps} ${styles.size16}`}
                    href="/contact"
                    initial={{ y: -175 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}    
                >Contact</motion.a>
                <motion.div
                initial={{ y: -175 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.50 }}
                >
                    <Icon className={`${headerStyles.navItem} ${headerStyles.icon} ${styles.size16} `} icon="bx:moon" style={{marginRight: '8rem'}} />
                </motion.div>
                
            </div>
            
        </motion.div>
    );
}