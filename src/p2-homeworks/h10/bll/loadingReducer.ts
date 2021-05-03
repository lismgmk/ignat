export const initState = {
    load: false
};

export type initialStateType = {
    load: boolean
}

const ACTION_TYPE = 'ACTION_TYPE';

export type ActionType = {
    type: 'ACTION_TYPE'
    load: boolean
}

export const loadingReducer = (state: initialStateType = initState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ACTION_TYPE: {
            return {
                ...state, load: action.load
            }
        }
        default: return state;
    }
};



export const loadingAC = (load: boolean) : ActionType=> {
    return ({type: ACTION_TYPE, load})
}; // fix any