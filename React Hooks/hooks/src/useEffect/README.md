# **useEffect()**
- **Usage:** When component needs to perform some actions/output something after every render. (for managing side-effects).
- Examples of side-effects are fetch requests, manipulating DOM directly, use of timer functions like setTimeout().
- useEffect() hook accepts 2 arguments:
    
    `useEffect(callback[, dependencies]);`
    - `callback` is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
    - `dependencies` is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

- ***Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run.*** That’s the sole purpose of useEffect().

    ```Javascript
    import React, { useState, useEffect } from "react";

    export default function Checkbox() {
    const [name, setName] = useState("");

    useEffect(() => {
        alert(`Given Name: ${name}`);
    });
    return (
        <>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </>
    );
    }    

## **The dependencies of useEffect()**
1. **Not provided:** the side-effect runs after ***every*** rendering.
    ```Javascript
   useEffect(() => {
        alert(`Given Name: ${name}`);  // Runs after EVERY rendering
    });
    ```
2. **An empty array []:** the side-effect runs ***once*** after the initial rendering. (Useful for initialization)
    ```Javascript
   useEffect(() => {
        alert(`Given Name: ${name}`);  // Runs ONCE after initial rendering
    },[]);
    ```
3. **Has props or state values[prop1,stat1...]:** the side-effect runs ***only when any depenendecy value changes.***
    ```Javascript
   useEffect(() => {
        alert(`Given Name: ${name}`);  // Runs ONCE after initial rendering  and after every rendering ONLY IF `prop` or `state` changes
    },[inputname]);
    ```    
