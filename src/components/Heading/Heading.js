import React from 'react';
import styles from '../../constants/Theme.module.css';
import headingStyles from './Heading.module.css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Header(props) {
    const { firstWord, secondWord } = props;

    return(
        <motion.div
            className={`${styles.flexRow} ${headingStyles.container}`}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5, delay: 0.6 }}
        >
            <p className={`${styles.ogg} ${styles.caps} ${styles.size24}`}>{ firstWord }</p>
            <div >
                <img className={`${headingStyles.dawn}`} src={require('../../assets/images/icons/Dawn.png')} alt="Dawn" />
            </div>
            <p className={`${styles.ogg} ${styles.caps} ${styles.size24}`}>{ secondWord }</p>
        </motion.div>
    );
}