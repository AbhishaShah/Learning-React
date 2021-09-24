/* To implement component clean up code such as cancelling subscription or removing event listners or timer events.
    * You can write function inside useEffect function and then return it.
*/

import React, { useState, useEffect } from "react";

const UseEffectHookWithCleanup = () => {
    const [display,setDisplay] = useState(true);

    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Toggle Display</button>
            { display && <MousePointers />}
        </div>
    )
}

const MousePointers = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("mouse moved");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("UseEffect rendered"); // will render only once
        window.addEventListener("mousemove",logMousePosition);

       return () => {
            console.log("Component unmounting code")
            window.removeEventListener("mousemove",logMousePosition);
        } // cleanup code -> remove eventlistener once component got unmounted
    },[]);

    return (
        <>
        <h1>X: {x}, Y: {y}</h1>
        </>
    );
}  

export default UseEffectHookWithCleanup;