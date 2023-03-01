import React, {useState} from 'react';
import styles from './NewCostForm.module.css'

export const NewCostForm = ({onChangeData}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [hidden, setHidden] = useState(true)
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        const costData = {
            desc: name,
            cost: amount,
            date: new Date(date),
        }
        onChangeData(costData)
        setName('')
        setAmount('')
        setDate('')
        setHidden(true)
    }
    if (hidden){
        return <div className={styles.newCost__actions} style={{justifySelf: "center"}}><button  onClick={()=>setHidden(false)}> Добавить новый расход</button></div>
    }
    return (
        <form onSubmit={formSubmitHandler}>
        <div className={styles.newCost__controls}>
            <div className={styles.newCost__control}>
                <label>Название</label>
                <input type="text"
                       value={name}
                       onChange={nameChangeHandler}/>
            </div>
            <div className={styles.newCost__control}>
                <label>Сумма</label>
                <input type="number"
                       min='0.01'
                       step='0.01'
                       value={amount}
                       onChange={amountChangeHandler}
                />
            </div>
            <div className={styles.newCost__control}>
                <label>Дата</label>
                <input type="date"
                       value={date}
                       onChange={dateChangeHandler}
                />
            </div>

            <div className={styles.newCost__actions}>
                <button type='submit'>Добавить расход
                </button>
                <button onClick={()=>setHidden(true)}>Отменить</button>
            </div>
        </div>
    </form>
    );
};