import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter.reducer";

const reducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());