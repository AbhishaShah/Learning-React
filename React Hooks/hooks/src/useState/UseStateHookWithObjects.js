/* useState does not merge the object,it will only replace the object. 
    * So at the time of update operation, 
    * always copy the existing object using spread operatorand then overwrite specific object value
*/

import React, { useState } from "react";

const UseStateHookWithObjects = () => {
    const [names,setNames] = useState({firstName:"Abhi",lastName:"Shah"});


    return (
        <div>
            <input
                name="FirstName"
                value={names.firstName}
                placeholder="Enter First Name"
                onChange = {e => setNames({ ...names, firstName:e.target.value })}
                   
            />

            <input
                name="LastName"
                value={names.lastName}
                placeholder="Enter Last Name"
                onChange = {(e) => setNames({ ...names,lastName:e.target.value })}
            />
            <p>Given FirstName: {names.firstName} </p>
            <p>Given LastName: {names.lastName} </p>
            <h2>{JSON.stringify(names)}</h2>

        </div>
    );
} 

export default UseStateHookWithObjects;