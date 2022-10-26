import React from 'react';
import styles from '../../constants/Theme.module.css';
import socialStyles from './Socials.module.css';
import { Icon } from '@iconify/react';

export default function Socials(props) {
    const { style } = props;

    return (
        <div className={`${styles.flexRow} ${styles.center} ${socialStyles.socialContainer}`} style={style} >
            <a href="https://dribbble.com/arianadaris" target="_blank" rel="noreferrer"><Icon className={`${socialStyles.icon}` } icon="akar-icons:dribbble-fill" /></a>
            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer"><Icon className={`${socialStyles.icon} ${socialStyles.spacing}`} icon="akar-icons:linkedin-box-fill" /></a>
            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer"><Icon className={`${socialStyles.icon}`} icon="akar-icons:github-fill" /></a>
        </div>
    );
}