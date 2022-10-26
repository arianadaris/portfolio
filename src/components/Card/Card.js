import React from 'react';
import styles from '../../constants/Theme.module.css';
import cardStyles from './Card.module.css';
import { Icon } from '@iconify/react';
import '../../constants/Colors';

export default function Card(props) {
    const { color, num, projectTitle, projectImage } = props;
    const tags = [
        "UX/UI Design", "Javascript", "HTML/CSS", "React", "Framer Motion"
    ];

    const createTag = (tag) => {
        return <h1 className={`${cardStyles.tag} ${styles.white} ${styles.size16} ${styles.foundersRegular}`}>{ tag }</h1>;
    }

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <div className={`${cardStyles.cardContainer}`} style={{ backgroundColor: color }}>
            <div className={`${cardStyles.hover}`}>
                <h1 className={`${cardStyles.num} ${styles.white} ${styles.foundersRegular} ${styles.size24}`}>{ num }</h1>
                <img className={`${cardStyles.image}`} src={projectImage} alt={ projectTitle } />
                <div className={`${cardStyles.container} ${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                    <h1 className={`${styles.size32} ${styles.foundersRegular} ${styles.white}`}>{ projectTitle }</h1>
                    <div className={`${styles.flexRow} ${styles.center}`}>
                        <Icon className={cardStyles.icon} icon="akar-icons:github-outline-fill" />
                        <Icon className={cardStyles.icon} icon="bi:arrow-up-right" />
                    </div>
                </div>
                <div className={`${styles.flexRow} ${styles.center} ${cardStyles.tagsContainer}`}>
                    { tagElements }
                </div>
            </div>
        </div>
    );
}