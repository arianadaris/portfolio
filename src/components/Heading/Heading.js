import React from 'react';
import styles from '../../constants/Theme.module.css';
import headingStyles from './Heading.module.css';
import { Icon } from '@iconify/react';

export default function Header(props) {
    const { firstWord, secondWord } = props;

    return(
        <div className={`${styles.flexRow} ${headingStyles.container}`}>
            <h1 className={`${styles.ogg} ${styles.caps} ${styles.size24}`}>{ firstWord }</h1>
            <div >
                <img className={`${headingStyles.dawn}`} src={require('../../assets/images/icons/Dawn.png')} alt="Dawn" />
            </div>
            <h1 className={`${styles.ogg} ${styles.caps} ${styles.size24}`}>{ secondWord }</h1>
        </div>
    );
}