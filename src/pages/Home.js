import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>TasteIT</h1>
        <p>TasteIT is a recipie app which allows to add and browse recipes</p>
        <NavLink to='/recipies'>Browse recipes</NavLink>
      </div>
      <div>
        <h2>Looking for recipes</h2>
      </div>
      <div className='home_cards'>
        <div className='card'>
          <h4>Browse recipes</h4>
          <p>Find the Awesome recipe across globes</p>
        </div>
        <div className='card'>
          <h4>Add recipe</h4>
          <p>Add recipe from your country</p>
        </div>
        <div className='card'></div>

      </div>

    </div>
  );
};

export default Home;