import React, {useState} from 'react';
import styles from './Costs.module.css'
import {Card} from "../UI/Card/Card.jsx";
import {CostsFilter} from "./CostsFilter/CostsFilter.jsx";
import {CostList} from "./CostList/CostList.jsx";
import {CostsDiagram} from "../Diagrams/CostsDiagram.jsx";

export const Costs = ({data}) => {
    const [year, setYear] = useState('2023')
    const yearChangeHandler = (year) => {
        setYear(year)
    }
    const filteredData = data.filter(el => el.date.getFullYear().toString() === year)

    return (
        <Card className={styles.costs}>
            <CostsFilter year={year} onChangeYear={yearChangeHandler}/>
            <CostsDiagram filteredData={filteredData}/>
            <CostList filteredData={filteredData}/>
        </Card>
    );
};