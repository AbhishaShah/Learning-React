/* Simple useState hook example with creating and incrementing state type counter variable. */
import React from "react";
import UseContextHookConsumer from "./UseContextHookConsumer";

export const UserContext = React.createContext();
export const EmailContext = React.createContext();

const UseContextHookProvider = () => {
    const userName = "Abhisha";
    const userEmail = "test59@gmail.com"
    return (
        <div>
            <UserContext.Provider value={userName}>
              <EmailContext.Provider value={userEmail}>
                 <UseContextHookConsumer />
              </EmailContext.Provider>
            </UserContext.Provider>
        </div>
    );
} 

export default UseContextHookProvider;