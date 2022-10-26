import React from 'react';
import styles from '../../constants/Theme.module.css';
import btnStyles from './EmailButton.module.css';
import { Icon } from '@iconify/react';

export default function EmailButton() {
    return (
        <div className={`${btnStyles.btnContainer}`}>
            <div className={`${styles.flexRow} ${styles.center} ${btnStyles.hover}`}>
                <p className={`${styles.foundersLight} ${styles.size24} ${styles.white}`}>arianarajewski@gmail.com</p>
                <Icon className={`${btnStyles.arrow} ${styles.white}`}icon="ant-design:mail-outlined" />
            </div>
        </div>
    );
}