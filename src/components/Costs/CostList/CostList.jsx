import React from 'react';
import {CostItem} from "../CostItem/CostItem.jsx";
import styles from './CostList.module.css'

export const CostList = ({filteredData}) => {
    if (filteredData.length === 0) {
        return <h2 className={styles.costList__fallback}>В этом году расходов нет</h2>
    }
    return (
        <ul className={styles.costList}>
            {filteredData.map(el => (
                <CostItem key={el.id}
                          date={el.date}
                          desc={el.desc}
                          cost={el.cost}
                />
            ))}
        </ul>
    );
};