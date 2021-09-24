/* After each button click counter incremented and so component re-render, 
    * so that useeffect also called after every render and update title of document each time
*/

import React, { useState, useEffect } from "react";

const BasicUseEffectHook = () => {
const [counter, setCounter] = useState(0);


useEffect(() => {
    document.title = `You clicked ${counter} times`;
});

return (
    <>
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Clicked {counter} times </button>
    </>
);
}  

export default BasicUseEffectHook;