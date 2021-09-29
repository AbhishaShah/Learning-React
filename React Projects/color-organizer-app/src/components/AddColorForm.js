import React, { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { ColorContext } from "./ColorProvider";

export default function AddColorForm({onAddNewColor = f => f}) {
    const [title,bindTitle,resetTitle] = useInput("");
    const [color,bindColor,resetColor] = useInput("#000000");

    const { addColor } = useContext(ColorContext);
    const submit = e => {
        e.preventDefault();
        addColor(title,color);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit} className="addcolorform">
            <input 
                type="text" 
                {...bindTitle}
                placeholder="Add color title" 
                required 
            />
            <input 
                type="color" 
                {...bindColor}
                required />
            <button>ADD</button>
        </form>
    );
}