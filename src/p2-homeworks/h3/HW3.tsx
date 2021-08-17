import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
       const newId = v1()
        let newUser = {
            _id: newId,
            name: name
        }

       const userCopy= [...users, newUser]
        setUsers(userCopy)
    }

    return (
        <div>
            <hr/>

<h3>Enter something</h3>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {console.log(users)}
            <hr/>

            <hr/>
        </div>
    )
}

export default HW3
