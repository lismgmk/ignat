import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import set = Reflect.set;
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, InitialStateTypeH12} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'green', 'light'];

function HW12() {

    const theme = useSelector<AppStoreType, InitialStateTypeH12>(state => state.theme)
    const dispatch = useDispatch();
    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={"radio"}
                options={themes}
                value={theme.theme}
                onChangeOption={(e) => {
                    dispatch(changeThemeC(e))
                }}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
