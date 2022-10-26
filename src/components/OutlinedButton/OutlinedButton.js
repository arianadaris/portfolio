import React from 'react';
import styles from '../../constants/Theme.module.css';
import btnStyles from './OutlinedButton.module.css';
import { Icon } from '@iconify/react';

export default function OutlinedButton(props) {
    const { title, link } = props;

    return (
        <div className={`${btnStyles.btnContainer}`}>
            <a href={link}><div className={`${styles.flexRow} ${styles.center} ${btnStyles.hover}`}>
                <h1 className={`${styles.foundersLight} ${styles.size24}`}>{ title }</h1>
                <Icon className={`${btnStyles.arrow}`}icon="bytesize:arrow-right" />
            </div></a>
        </div>
    );
}