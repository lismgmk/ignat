import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import Button from "@material-ui/core/Button"
import s from './Affairs.module.css'
import {Container} from "@material-ui/core";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (val: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <span className={s.margin}>
     <Button variant="contained" color="primary" size="small" onClick={setAll}>All</Button>
            </span>
            <span className={s.margin}>
     <Button variant="contained" color="primary" size="small" onClick={setHigh}>High</Button>
            </span>
            <span className={s.margin}>
     <Button variant="contained" color="primary" size="small" onClick={setMiddle}>Middle</Button>
            </span>
            <span className={s.margin}>
     <Button variant="contained" color="primary" size="small" onClick={setLow}>Low</Button>
            </span>


        </div>
    )
}

export default Affairs
