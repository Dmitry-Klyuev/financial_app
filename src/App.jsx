import {Costs} from "./components/Costs/Costs.jsx";
import {NewCost} from "./components/NewCost/NewCost.jsx";
import React, {useState} from "react";
function App() {
    const [data, setData] = useState([
        {id: 1, date: new Date(), desc: 'Холодильник', cost: '999'},
        {id: 2, date: new Date(), desc: 'MacBook', cost: '1200'},
        {id: 3, date: new Date(), desc: 'AirPods', cost: '200'},
    ])
    const addCostHandler = (costData) => {
        console.log(costData.date.getFullYear());
        setData(prevState => [costData, ...prevState])
    }
    return (
        <div>
            <NewCost addCostHandler={addCostHandler}/>
            <Costs data={data} />
        </div>
    )
}

export default App
