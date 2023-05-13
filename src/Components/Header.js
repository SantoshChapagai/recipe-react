import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'

const Header = () => {
  return (
    <header>
      <h3>Taste It</h3>
      <div calss="nav">
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/recipes'>recipes</NavLink></li>
            <li><NavLink to='addrecipe'>Add a recipe</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;