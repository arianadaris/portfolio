import React from 'react';
import styles from '../../constants/Theme.module.css';
import cardStyles from './Card.module.css';
import { Icon } from '@iconify/react';
import '../../constants/Colors';
import { motion } from 'framer-motion';

export default function Card(props) {
    const { color, num, projectTitle, projectImage } = props;

    var test = 1;
    if(num === '02.' || num === '04.')
        test = 1.5;
        
    const tags = [
        "UX/UI Design", "Javascript", "HTML/CSS", "React", "Framer Motion"
    ];

    const createTag = (tag) => {
        return <p className={`${cardStyles.tag} ${styles.white} ${styles.size16} ${styles.foundersRegular}`}>{ tag }</p>;
    }

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <motion.div 
            className={`${cardStyles.cardContainer}`} style={{ backgroundColor: color }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: test }}
        >
            <div className={`${cardStyles.hover}`}>
                <p className={`${cardStyles.num} ${styles.white} ${styles.foundersRegular} ${styles.size32}`}>{ num }</p>
                <img className={`${cardStyles.image}`} src={projectImage} alt={ projectTitle } />
                <div className={`${cardStyles.container} ${styles.flexRow} ${styles.spaceBetween} ${styles.center}`}>
                    <p className={`${cardStyles.title} ${styles.size32} ${styles.foundersRegular} ${styles.white}`}>{ projectTitle }</p>
                    <div className={`${styles.flexRow} ${styles.center}`}>
                        <Icon className={cardStyles.icon} icon="akar-icons:github-outline-fill" />
                        <Icon className={cardStyles.icon} icon="bi:arrow-up-right" />
                    </div>
                </div>
                <div className={`${styles.flexRow} ${styles.center} ${cardStyles.tagsContainer}`}>
                    { tagElements }
                </div>
            </div>
        </motion.div>
    );
}