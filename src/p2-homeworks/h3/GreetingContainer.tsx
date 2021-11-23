import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // fixed any to Array of UserType
    addUserCallback: (name: string) => void // fixed any to string => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // fixed any to string
    const [error, setError] = useState<string>('') // fixed any to string

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed any to ChangeElement
        setName(e.currentTarget.value) // fixed from '' to event.currentTarget.value
        setError('') // added
    }

    // Func added:
    function addUsrLogicFunc() {
        alert(`Hello ${name}!`)
        addUserCallback(name)
        setError('')
        setName('')
    }

    //Keypress func added:
    const keyPress = (e:KeyboardEvent<HTMLInputElement>) => {  // !!!!! how write function ?????
        if (e.currentTarget.value && e.key === 'Enter') addUsrLogicFunc()
    }

    const addUser = (name: string) => {
        if(name.length){
            addUsrLogicFunc()
        } else { setError('Enter the name') }

    }

    const totalUsers = users.length // fixed 0 to users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyPress = {keyPress}
        />
    )
}

export default GreetingContainer
