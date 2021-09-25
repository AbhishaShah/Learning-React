/* Managing global state management by passing data through nested components */

import { useReducer, createContext } from "react";
import UseReducerHookWithUseContextConsumer from "./UseReducerHookWithUseContextConsumer";

export const CounterContext = createContext();

const initialState = 0;

const reducer = (state,action) => {
    switch(action){
        case "increment":
           return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const UseReducerHookWithUseContextProvider = () => {
    const [counter,dispatch] = useReducer(reducer, initialState);
    return (
        <CounterContext.Provider value={{counterState:counter, counterDispath:dispatch}}>
            <div>
                <UseReducerHookWithUseContextConsumer />
            </div>
        </CounterContext.Provider>
    );
} 

export default UseReducerHookWithUseContextProvider;