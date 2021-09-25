
import { useContext } from "react";
import { CounterContext } from "./UseReducerHookWithUseContextProvider";


const UseReducerHookWithUseContextConsumer = () => {
    const counterContext = useContext(CounterContext);
    return (
        <div>
            <p>Counter: {counterContext.counterState}</p>

            <button onClick={() => counterContext.counterDispath("increment")}>Increment</button>
            <button onClick={() => counterContext.counterDispath("decrement")}>Decrement</button>
            <button onClick={() => counterContext.counterDispath("reset")}>Reset</button>

        </div>
    );
} 

export default UseReducerHookWithUseContextConsumer;