/* Always use setter function with previous value to update value of state variable */

import React, { useState } from "react";

const UseStateHookWithPreviousState = () => {
    const intialCounter = 0;
    const [counter, setCounter] = useState(intialCounter);

    const IncrementFive = () => {
        for(let i=0; i<5; i++){
            setCounter(preCounter => preCounter + 1);

        }
    }

    return (
        <div>
            <button onClick = {() => setCounter(preCounter => counter + 1)} > Increment </button>
            <button onClick = {() => setCounter(preCounter => counter - 1)} > Decrement </button>
            <button onClick = {() => setCounter(intialCounter)} > Reset </button>


            <button onClick = {() => IncrementFive()} > Increment5 </button>

            <p> Counter: {counter} </p>
        </div>
    );
} 

export default UseStateHookWithPreviousState;