import { ADD_ONE } from "../actions"

const initialState = {
    count: 1
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ONE:
            return {...state, count: state.count + 1}
        default:
            return state
    }
}