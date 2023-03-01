import styles from './CostItem.module.css'
import {CostDate} from "../CostDate/CostDate.jsx";
import {Card} from "../../UI/Card/Card.jsx";

export const CostItem = ({date, cost, desc}) => {

    return<li>
        <Card className={styles.costItem}>
            <CostDate date={date}/>
            <div className={styles.costItem__description}>
                <h2>{desc}</h2>
                <div className={styles.costItem__price}>${cost}</div>
            </div>
        </Card>
    </li>
}