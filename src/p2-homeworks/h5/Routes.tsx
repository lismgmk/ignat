import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior-plus";


export const PATH = {
    PRE_ITEMS: '/pre-items',
    ITEMS: '/items',
    ITEMS_PLUS: '/items-plus',
}

function Routes() {
    return (
        <div>

            <Switch>

            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_ITEMS}/>}/>

            <Route path={PATH.PRE_ITEMS} render={() => <PreJunior/>}/>
            <Route path={PATH.ITEMS} render={() => <Junior/>}/>
            <Route path={PATH.ITEMS_PLUS} render={() => <JuniorPlus/>}/>

            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
