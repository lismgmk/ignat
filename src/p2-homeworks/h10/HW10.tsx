import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, initialStateType, initState, loadingAC} from "./bll/loadingReducer";
import store, {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";

function HW10() {
    const load = useSelector<AppStoreType, boolean>(state => state.loading.load)

    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        // dispatch
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
        // console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {load
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
