import React from 'react';
import styles from './Card.module.css'

export const Card = ({children, className}) => {
    const classes = `${className} ${styles.card}`
    return (
        <div className={classes}>
            {children}
        </div>
    );
};