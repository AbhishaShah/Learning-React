import React from "react";
import { useInput } from "../hooks/useInput";

export default function AddColorForm({onAddNewColor = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onAddNewColor(titleProps.value,colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit} className="addcolorform">
            <input 
                type="text" 
                {...titleProps}
                placeholder="Add color title" 
                required 
            />
            <input 
                type="color" 
                {...colorProps}
                required />
            <button>ADD</button>
        </form>
    );
}