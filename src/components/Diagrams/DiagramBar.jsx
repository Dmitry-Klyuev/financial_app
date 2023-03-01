import React from 'react';
import styles from './DiagramBar.module.css'

export const DiagramBar = ({maxValue, value, label}) => {
    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round(value / maxValue * 100) + '%';
    }
    return (
        <div className={styles.diagramBar}>
            <div className={styles.diagramBar__inner}>
                <div className={styles.diagramBar__fill} style={{height:barFillHeight}}></div>
            </div>
            <div className={styles.diagramBar__label}>{label}</div>
        </div>
    );
};