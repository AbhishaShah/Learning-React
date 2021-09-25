import { useReducer } from "react";

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

const BasicUseReducerHook = () => {
const [counter, dispatch]  = useReducer(reducer,initialState);
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>

        </div>
    );
} 

export default BasicUseReducerHook;