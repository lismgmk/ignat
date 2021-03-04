import React from 'react';
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"


function Message(props: MessageDataType) {
    return (
        <div className={s.message}>

            <div className={s.avatarImg}>
                <img src = {props.avatar}></img>
            </div>
            <div className={s.text}>
                <div className={s.textName}>
                    {props.name}
                </div>
                <input type='text' value={props.message}/>
                <div className={s.textTime}>
                    {props.time}
                </div>
            </div>

        </div>

    )
}

export default Message
