import React from "react";

export default function Instructions({title, steps}){
    return (
        <div className={title.toLowerCase().replace(/ /g,"-")}>
            <h3>{title}</h3>
            <ol>
            {
                steps.map( (step,i) => (
                    <li key={i}>{step}</li>
                ))
            }
            </ol>
        </div>
    );
}