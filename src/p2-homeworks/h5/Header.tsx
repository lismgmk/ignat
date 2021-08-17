import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.mainContainer}>
            <div className={s.container}>
                <NavLink to={PATH.PRE_ITEMS} className={s.linkStyle} activeClassName={s.activeLink}>Pre ITEMS</NavLink>
                <NavLink to={PATH.ITEMS} className={s.linkStyle} activeClassName={s.activeLink}>ITEMS</NavLink>
                <NavLink to={PATH.ITEMS_PLUS} className={s.linkStyle} activeClassName={s.activeLink}>ITEMS++</NavLink>
            </div>
        </div>
    )
}

export default Header
