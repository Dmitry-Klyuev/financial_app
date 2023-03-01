import React from 'react';
import styles from './CostsFilter.module.css'
export const CostsFilter = ({year, onChangeYear}) => {

    const yearChangeHandler = (event) => {
        onChangeYear(event.target.value);
    };

    return (
        <div className={styles.costsFilter}>
            <div className={styles.costsFilter__control}>
                <label>Выбор По Году</label>
                <select value={year} onChange={yearChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
};