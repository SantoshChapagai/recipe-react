import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flags from "../Components/Flags";
import "./card.css";

const Card = ({ recipe }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="card_container">
      <div>
        
      </div>
      <div className="flag">
        <Flags recipe={recipe} />
      </div>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className="more">
        <Link to={`/recipes/${recipe.id}`}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
