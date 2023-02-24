import React from 'react';
import styles from './CostDate.module.css'

export const CostDate = ({date}) => {
    const year = date.getFullYear()
    const month = date.toLocaleString('ru-RU', {month: 'long'})
    const day = date.toLocaleString('ru-RU', {day: '2-digit'})
    return (
        <div className={styles.costDate}>
            <div className={styles.costDate__month}>{month}</div>
            <div className={styles.costDate__year}>{year}</div>
            <div className={styles.costDate__day}>{day}</div>
        </div>
    );
};