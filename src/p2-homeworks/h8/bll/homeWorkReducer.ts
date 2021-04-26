import {actionType, stateType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: stateType[], action: actionType): stateType[] => {
    switch (action.type) {
        case "sort": {
           let newState = [...state].sort((a, b) => {
                            if (a.name > b.name) return 1;
                            else if (a.name < b.name) return -1;
                            else return 0
                        }
                    )
            return action.payload === 'up' ? newState : newState.reverse()
               }
        case "check": {
            return state.filter(i => i.age > action.payload)
        }
        default: return state
    }
};