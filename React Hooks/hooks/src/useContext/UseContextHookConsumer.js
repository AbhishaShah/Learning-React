/* Get data using useContxt hook */

import React, { useContext } from "react";
import { UserContext, EmailContext } from "./UseContextHookProvider";

const UseContextHookConsumer = () => {
    const user = useContext(UserContext);
    const email = useContext(EmailContext);

    return (
        <div>
            <p> Username: {user} </p>
            <p> Email: {email} </p>

        </div>
    );
} 

export default UseContextHookConsumer;