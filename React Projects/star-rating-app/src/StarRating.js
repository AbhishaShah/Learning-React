import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

/* The Star component renders an individual star and uses the selected
   * property to fill it with the appropriate color. 
*/
const Star = ({selected = false,onSelect=f=>f}) => {
   return <FaStar className="star" color = {selected ? 'orange':'grey'} onClick={onSelect}/>
}

/* Create dynamic array of specific length: Useful to creates 5 or 10 or desired level of star rating */
const createArray = length => [...Array(length)];

/* Select the total number of stars and map over it and render Star components. */
export default function StarRating({totalStars = 5,style = {} }) { 
    const [selectedStars,setSelectedStars] = useState(0); // It will hold the user’s rating.
    return (
        <div className="starRating" style = {{padding:"5px",...style}}>
         { createArray(totalStars).map((n, i) => (
            <Star 
                key={i} 
                selected={selectedStars > i} 
                onSelect = {() => setSelectedStars(i+1)}
            /> ))   
         }
         <p style={{textAlign:"center"}}> <b> <span style={{color:"orange"}}>{selectedStars}</span> out of {totalStars} stars </b> </p>
        </div>
    );
   }
   
   