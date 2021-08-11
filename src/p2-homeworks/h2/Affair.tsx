import Button from '@material-ui/core/Button';
import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";
import {Box, Container} from "@material-ui/core";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: ( _id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        debugger
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.marginLeft}>
            <div>
                {props.affair.name}
            </div>

            <span className={s.marginTop}>
                <Button variant='contained' size="small" color="secondary" onClick={deleteCallback}>X</Button>
            </span>
        </div>
    )
}

export default Affair
