/* On page load username should get focus */

import {useEffect,useRef} from "react";

const BasicUseRefHook = () => {

    const usernameReference = useRef();

    useEffect(() => {
        usernameReference.current.focus();
    }, []);

    return (
        <form>
           <input ref={usernameReference} type="text" placeholder="Enter username" name="username"/> <br/>
           <input type="password" placeholder="Enter password" name="password"/>
        </form>
    );
}  

export default BasicUseRefHook;