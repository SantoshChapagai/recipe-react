import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css'

const Card = ({ recipe }) => {
  return (
    <div className='card_holder'>
      <div className='card'>
        <img src={recipe.image} alt={recipe.name} />
        <h4>{recipe.name}</h4>
        <NavLink to={'/recipes/:singlerecipe'}>See more</NavLink>
      </div>
    </div>
  );
};

export default Card;