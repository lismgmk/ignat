import {actionType, stateType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: stateType[], action: actionType): stateType[] => {
    switch (action.type) {
        case "sort": {
            if(action.payload === 'up'){
                return  state.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0
                    }
                )

            }
            else if (action.payload === 'down'){
                return   state.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0
                    }
                )

            }
            else{
                return state
            }

        }
        case "check": {

            return state.filter(i => i.age > 18)
        }
        default: return state
    }
};