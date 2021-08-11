type themeType = 'dark'| 'red' | 'some' | 'light' | 'green'

const initState = {
    theme:  'dark'|| 'red' || 'some' || 'light' || 'green' as themeType
};

export type InitialStateTypeH12 = typeof initState

export const themeReducer = (state = initState, action: changeThemeCType): InitialStateTypeH12 => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: themeType) => ({type: 'CHANGE-THEME' , theme} as const)

export type changeThemeCType= ReturnType<typeof changeThemeC>