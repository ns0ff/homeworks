import React, {ChangeEvent, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // fixed any to string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // fixed any to function
    addUser: (name: string) => void // fixed any to function
    error: string // fixed any to string
    totalUsers: number // fixed any to number
    keyPress: (e: KeyboardEvent<HTMLInputElement>) => void // added function
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    // const inputClass = s.error // need to fix with (?:) // wtf??

    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.inputContainer}>
                    <SuperInputText value={name} onChange={setNameCallback} onKeyPress={keyPress} className={styles.input}/>
                </div>

                <SuperButton onClick={() => {addUser(name)}} className={styles.addBtn}>add</SuperButton>

                <div><span className={styles.span}>{totalUsers}</span></div>
            </div>
            <div> {error ? <span className={styles.error}>{error}</span> : ''} </div>
        </div>
    )
}

export default Greeting