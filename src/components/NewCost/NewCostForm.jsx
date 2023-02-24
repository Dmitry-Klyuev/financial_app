import React, {useState} from 'react';
import styles from './NewCostForm.module.css'

export const NewCostForm = ({onChangeData}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    //Альтернативный вариант
    // const [form, setForm] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // })

    const nameChangeHandler = (e) => {
        setName(e.target.value)
        //Альтернативный способ
        // setName((prevState) => {
        //     return {...prevState,
        //     name: e.target.value}
        // })
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
            name,
            amount,
            date: new Date(date),
        }
        onChangeData(costData)

        setName('')
        setAmount('')
        setDate('')
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
                    <button>Отменить</button>
                </div>
            </div>
        </form>
    );
};