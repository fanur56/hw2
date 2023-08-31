import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            const users = [...state]
            if (action.payload === 'up') {
                users.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
                return users
            }
            if (action.payload === 'down') {
                users.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    }
                    if (a.name > b.name) {
                        return -1
                    }
                    return 0
                })
                return users
            }
            return state // need to fix
        }
        case 'check': {
            if (action.payload === 18) {
                return [...state].filter(u => u.age > 18)
            }
            return state // need to fix
        }
        default:
            return state
    }
}
