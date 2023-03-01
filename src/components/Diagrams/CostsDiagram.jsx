import React from 'react';
import {Diagram} from "./Diagram.jsx";

export const CostsDiagram = ({filteredData}) => {

    let dataSets = [
        {label: 'Jan', value: 0,},
        {label: 'Feb', value: 0,},
        {label: 'Mar', value: 0,},
        {label: 'Apr', value: 0,},
        {label: 'May', value: 0,},
        {label: 'Jun', value: 0,},
        {label: 'Jul', value: 0,},
        {label: 'Aug', value: 0,},
        {label: 'Sep', value: 0,},
        {label: 'Oct', value: 0,},
        {label: 'Nov', value: 0,},
        {label: 'Dec', value: 0,},
    ]
    filteredData.map(el => {
        dataSets[el.date.getMonth()].value += +el.cost
    })
    return (
        <Diagram dataSets={dataSets}/>

    );
};