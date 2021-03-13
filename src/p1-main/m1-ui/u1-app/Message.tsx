import React from 'react';
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"


function Message(props: MessageDataType) {
    return (
        <div className={s.message}>

                <img src = {props.avatar} alt={'avatar'} className={s.avatarImg}/>

            <div className={s.circle}></div>
            <div className={s.text}>
                    <div className={s.textName}>{props.name}</div>
                    <div className={s.textContent}>{props.message}</div>
                <div className={s.textTime}>{props.time}</div>
            </div>
        </div>

    )
}

export default Message
