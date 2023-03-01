import React from 'react';
import {DiagramBar} from "./DiagramBar.jsx";
import styles from './Diagram.module.css'

export const Diagram = ({dataSets}) => {
    const dataSetsValue = dataSets.map(el => el.value)
    const MaxValue = Math.max(...dataSetsValue)

    return (
        <div className={styles.diagram}>
            {dataSets?.map(el => <DiagramBar key={el.label}
                                             value={el.value}
                                             maxValue={MaxValue}
                                             label={el.label}
            />)}
        </div>
    );
};