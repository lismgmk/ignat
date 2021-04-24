import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import Button from "@material-ui/core/Button";
import {Input} from "@material-ui/core";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: (e: any) => void  // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error

    return (
        <div>
            <input value={name}
                   onBlur={setNameCallback}
                   onChange={setNameCallback}
                   className={error ? inputClass : ''}/>
            <span>{error}</span>
            <Button variant="contained" color="secondary" size="small" onClick={addUser} disabled={!name}>add</Button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
