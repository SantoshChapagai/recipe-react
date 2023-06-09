import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'

const Header = () => {
  return (
    <header>
      <NavLink to="/"><h3>4ooDy</h3></NavLink>
      <div calss="nav">
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/recipes'>Recipes</NavLink></li>
            <li><NavLink to='addrecipe'>Add a recipe</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;