/* Simple useState hook example with creating and incrementing state type counter variable. */

import React, { useState } from "react";

const BasicUseStateHook = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button
                value = {counter}
                onClick = {() => setCounter(counter + 1)} > Increment </button>
            <p> Counter: {counter} </p>
        </div>
    );
} 

export default BasicUseStateHook;