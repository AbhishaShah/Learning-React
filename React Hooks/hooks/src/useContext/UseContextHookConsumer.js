/* Simple useState hook example with creating and incrementing state type counter variable. */

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