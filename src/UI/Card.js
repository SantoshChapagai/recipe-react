import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Flags from '../Components/Flags';
import './card.css'

const Card = ({ recipe }) => {
  return (

    <div className='card_container'>
      <div className='flag'>
        <Flags recipe={recipe} />
      </div>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className='more'>
        <Link to={`/recipes/${recipe.id}`}>See more</Link>
      </div>
    </div >
  );
};

export default Card;