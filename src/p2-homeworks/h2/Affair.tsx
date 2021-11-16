import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // any fixed
    deleteAffairCallback: (id: number) => void // any fixed
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(props.affair._id)
    }// fixed

    return (
        <div>
            <div className={styles.affairContainer}>
                <div className={styles.affairName}> {props.affair.name} </div>
                <div className={styles.affairPriority}>{props.affair.priority}</div>
                <button onClick={() => deleteCallback(props.affair._id)}>X</button>
            </div>
        </div>
    )
}

export default Affair
