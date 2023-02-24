import {Costs} from "./components/Costs/Costs.jsx";

function App() {
    const data = [
        {date: new Date(), desc: 'Холодильник', cost: '999.99'},
        {date: new Date(), desc: 'MacBook', cost: '1200.99'},
        {date: new Date(), desc: 'AirPods', cost: '200'},
    ]
    return (
        <div>
            <Costs data={data}/>
        </div>
    )
}

export default App
