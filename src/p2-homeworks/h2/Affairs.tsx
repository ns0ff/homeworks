import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // any fixed
    filteredAffairs: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>
            <div>{props.filteredAffairs.map((a: AffairType) => (
                <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback}/>))}
            </div>

            <div className={s.btnContainer}>
                <button onClick={setAll} className={s.btn}>All</button>
                <button onClick={setHigh} className={s.btn}>High</button>
                <button onClick={setMiddle} className={s.btn}>Middle</button>
                <button onClick={setLow} className={s.btn}>Low</button>
            </div>
        </div>
    );
}

export default Affairs
