const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAT): {themeId: number} => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeIdAT = {
    type: string
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id })
