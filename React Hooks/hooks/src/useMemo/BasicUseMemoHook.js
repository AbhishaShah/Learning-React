
import React, { useState, useMemo } from "react";

const BasicUseMemoHook = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => setCounterOne(counterOne + 1);
    const incrementTwo = () => setCounterTwo(counterTwo + 1);

    const isEven = useMemo( () => {
        let i = 1;
        while(i < 200000000) i++;
        return counterOne % 2 === 0;
    },[counterOne]);

    return (
        <>
            <button onClick={incrementOne}>Counter One - {counterOne} </button>
            <span>{isEven ? " Even" : " Odd"}</span>
            <br/>
            <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>

        </>
    );
}  

export default BasicUseMemoHook;