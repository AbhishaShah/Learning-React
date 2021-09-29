import  { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { ColorContext } from "./ColorProvider";

export default function Color({id, title, color, rating}){
  const {removeColor,rateColor} = useContext(ColorContext);
  return (
      <section className="color-Box">
          <div style={{width:"150px",height:"150px",backgroundColor:color}}></div>
          <h1>{title}</h1>
          <StarRating 
            selectedStars={rating}
            onRate = {ratingincrease => rateColor(id,ratingincrease) } />
          <button className="deleteColor" onClick={() => removeColor(id)}>
              <FaTrash />
          </button>
      </section>
  )   
}