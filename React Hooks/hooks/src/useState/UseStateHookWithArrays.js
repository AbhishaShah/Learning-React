/* useState does not merge the array,it will only replace it. 
    * So at the time of add/update operation, 
    * always copy the existing array using spread operator and then overwrite specific array value
*/

import React, { useState } from "react";

const UseStateHookWithArrays = () => {
    const [items,setItems] = useState([]);

    const addItem = () => {
        const newItem = Math.floor(Math.random() * 10) + 1;
        setItems([...items,{
            id:items.length,
            value:newItem
        }]);
    }
    return (
        <div>
         <button onClick={addItem}>Add a number</button>
         <ul>
             {
                 items.map((item) => (
                     <li key={item.id}>{item.value}</li>
                 ))
             }
         </ul>
        </div>
    );
} 

export default UseStateHookWithArrays;