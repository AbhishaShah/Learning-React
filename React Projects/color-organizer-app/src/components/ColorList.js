import React from "react";
import Color from "./Color"

export default function ColorList( {colors = [], onRemoveColor = f => f} ) {
    if(!colors.length) return <div> No Colors listed.(Add new Color) </div>;

    return ( 
        <div className="color-container">
            {
                colors.map( color => <Color key={color.id} {...color} onRemove={onRemoveColor} />)
            }
        </div>
    )
}