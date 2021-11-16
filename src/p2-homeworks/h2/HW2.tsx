import React, {useState} from 'react'
import Affairs from './Affairs'
import style from "../../p1-main/m1-ui/u1-app/homework.module.css";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // any fixed
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
    } // any fixed
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // any fixed
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // any fixed
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    else return affairs // fixed
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // any fixed
    return affairs.filter(a => a._id !== _id)// fixed
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // any fixed
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // any fixed

    return (
        <div className={style.homeworkContainer}>
            <span className={style.homeworkTitle}>Homework 2</span>

            <Affairs
                filteredAffairs={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
