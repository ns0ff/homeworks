import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
                <SuperButton onClick={() => deleteCallback(props.affair._id)} className={styles.closeBtn}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
