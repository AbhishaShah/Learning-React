import React, { useState, useEffect, useRef } from 'react';

const UseRefHookWithTimer = () => {
 const [counter,setCounter] = useState(0);
 const intervalReference = useRef();
 
 useEffect(() => {
   intervalReference.current =  setInterval(() => {
         setCounter(prevCounter => prevCounter + 1);
     }, 1000);
     return () => {
        clearInterval(intervalReference.current);
     };
 }, []);
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={()=>clearInterval(intervalReference.current)}>Stop Timer</button>
        </div>
    );
};

export default UseRefHookWithTimer;
