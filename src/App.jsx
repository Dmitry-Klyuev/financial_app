import {Costs} from "./components/Costs/Costs.jsx";
import {NewCost} from "./components/NewCost/NewCost.jsx";
import React from "react";

function App() {
    const data = [
        {date: new Date(), desc: 'Холодильник', cost: '999.99'},
        {date: new Date(), desc: 'MacBook', cost: '1200.99'},
        {date: new Date(), desc: 'AirPods', cost: '200'},
    ]
    const addCostHandler = (data) => {
        console.log(data);
        console.log('app called')
    }
    return (
        <div>
            <NewCost addCostHandler={addCostHandler}/>
            <Costs data={data} />
        </div>
    )
}

export default App
