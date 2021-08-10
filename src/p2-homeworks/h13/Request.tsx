import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsApi} from "./RequestsApi";


function Request() {

    const [value, setValue] = useState(true);
    const [message, setMessage] = useState('');


    const postCheckBox = () => {
        requestsApi.postTodolist(value)
            .then(data => {
                console.log(data)
                setMessage(data.data.errorText)})
            .catch(error=> setMessage(error.response.data.errorText))
    }
    return (

        <div>
            <div>
                <SuperCheckbox
                    checked={value}
                    onChangeChecked={setValue}
                >
                    Переключатель
                </SuperCheckbox>
            </div>
            <div>{message}</div>
            <div>
                <SuperButton
                    onClick={postCheckBox}
                >
                    Отправить запрос
                </SuperButton>
            </div>


        </div>
    )
}

export default Request;
