/* After each button click counter incremented and so component re-render, 
    * so that useeffect render first time when complenet render
    * We have added dependency variable counter as second argument to useEffect
    * useEffect next time only render when counter value updated.
*/

import React, { useState, useEffect } from "react";

const UseEffectHookWithDependencyVariable = () => {
const [counter, setCounter] = useState(0);
const [name, setName] = useState("");

useEffect(() => {
    console.log("UseEffect rendered");
    document.title = `You clicked ${counter} times`;
},[counter]);

return (
    <>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Clicked {counter} times </button>
    </>
);
}  

export default UseEffectHookWithDependencyVariable;