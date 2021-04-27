import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.mainContainer}>
            <div className={s.container}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.linkStyle} activeClassName={s.activeLink}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.linkStyle} activeClassName={s.activeLink}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.linkStyle} activeClassName={s.activeLink}>Junior++</NavLink>
            </div>
        </div>
    )
}

export default Header
