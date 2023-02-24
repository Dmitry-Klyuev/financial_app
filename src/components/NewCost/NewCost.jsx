import React from 'react';
import styles from './NewCost.module.css'
import {NewCostForm} from "./NewCostForm.jsx";

export const NewCost = ({addCostHandler}) => {
    const onChangeData = (data) => {
        const costData = {
            ...data,
            id: Math.random().toString()
        }
        addCostHandler(costData)
    }

    return (
        <div className={styles.newСost}>
            <NewCostForm onChangeData={onChangeData}/>
        </div>
    );
};