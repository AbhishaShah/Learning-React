import { useContext } from "react";
import Color from "./Color";
import { ColorContext } from "./ColorProvider";

export default function ColorList() {
    const {colors} = useContext(ColorContext);
    if(!colors.length) return <div style={{textAlign:"center"}}> No Colors listed.(Add new Color) </div>;

    return ( 
        <div className="color-container">
            {
                colors.map( color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}