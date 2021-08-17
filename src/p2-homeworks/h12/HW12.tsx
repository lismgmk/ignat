import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, changeThemeCType, InitialStateTypeH12} from "./bll/themeReducer";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'some', 'green', 'light'];

function HW12() {

    const theme = useSelector<AppStoreType, InitialStateTypeH12>(state => state.theme)
    const dispatch = useDispatch<Dispatch<changeThemeCType>>();
    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
               <h3>Change color</h3>
            </span>
            <SuperRadio
                name={"radio"}
                options={themes}
                value={theme.theme}
                onChangeOption={(e) => {
                    dispatch(changeThemeC(e))
                }}
            />


            <hr/>
        </div>
    );
}

export default HW12;
