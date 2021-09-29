import { useState } from "react";

export const useInput = initialValue => {
    const [value,setValue] = useState(initialValue);

    const bind = {
        value,
        onChange: e => setValue(e.target.value)
    }
    
    const reset = () => setValue(initialValue);

    return [value,bind,reset];
};