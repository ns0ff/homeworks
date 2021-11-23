import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import style from "../../p1-main/m1-ui/u1-app/homework.module.css";

// types
export type UserType = {
    _id: string // fixed from any to string
    name: string // fixed from any to string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // fixed from any to UserType

    const addUserCallback = (name: string) => { // fixed from any to string
        let newUsr = {_id: v1(), name: name}
        let newArr = [...users, newUsr]
        setUsers(newArr) // fixed from [] to newArr
    }

    return (
        <div className={style.homeworkContainer}>
            <span className={style.homeworkTitle}>Homework 3</span>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
