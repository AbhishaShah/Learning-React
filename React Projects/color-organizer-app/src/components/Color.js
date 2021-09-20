import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Color({id,title, color, rating,onRemove = f => f}){
  return (
      <section className="color-Box">
          <div style={{width:"150px",height:"150px",backgroundColor:color}}></div>
          <h1>{title}</h1>
          <StarRating selectedStars={rating} />
          <button className="deleteColor" onClick={() => onRemove(id)}>
              <FaTrash />
          </button>
      </section>
  )   
}