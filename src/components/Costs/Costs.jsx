import React from 'react';
import styles from './Costs.module.css'
import {CostItem} from "./CostItem/CostItem.jsx";
import {Card} from "../UI/Card/Card.jsx";
import {NewCost} from "../NewCost/NewCost.jsx";

export const Costs = ({data}) => {
    return (
        <Card className={styles.costs}>
            <CostItem date={data[0].date}
                      desc={data[0].desc}
                      cost={data[0].cost}
            />
            <CostItem date={data[1].date}
                      desc={data[1].desc}
                      cost={data[1].cost}
            />
            <CostItem date={data[2].date}
                      desc={data[2].desc}
                      cost={data[2].cost}
            />
        </Card>
    );
};