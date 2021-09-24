/* using [] as second parameter in useEffect, we can render useEffect only once
    * Here one time we have attached mousemove event, next time we do not want to attach it again
    * so only mouse moved message will log every time when mouse move.
*/

import React, { useState, useEffect } from "react";

const UseEffectHookRenderOnce = () => {
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
    },[]);

    return (
        <>
        <h1>X: {x}, Y: {y}</h1>
        </>
    );
}  

export default UseEffectHookRenderOnce;