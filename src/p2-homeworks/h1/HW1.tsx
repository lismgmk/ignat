import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'User Name',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    time: '22:00'
};

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function HW1() {
    return (
        <div>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


        </div>
    )
}

export default HW1
