import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/styles.css'


const Home = () => {
  return (
    <div className='home_container'>
      <div className='home'>
        <video autoPlay loop muted id="background_video">
          <source src="https://player.vimeo.com/external/456896527.sd.mp4?s=5f834301c1c496b5e7f8fa8c0772defd2760df7b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className='container'>
          <div className='list_holder'>
            <h1>4ooDy</h1>
            <p>4ooDy is a recipe app which allows to add and browse recipes</p>
            <NavLink to='/recipes'><button>Browse recipes</button></NavLink>
          </div>
        </div>
      </div>
      <div>
        <h2>Awesome recipes around the world</h2>
      </div>
      <div className='home_cards'>
        <div className='card'>
          <h4>Browse recipes</h4>
          <p>Find the Awesome recipe across globes. You can search recipes based on name or country</p>
          <NavLink to="/recipes">All recipes</NavLink>
        </div>
        <div className='card'>
          <h4>Add recipe</h4>
          <p>Add recipe from your country and help people to try different foods</p>
          <NavLink to="/addrecipe">Add recipe</NavLink>
        </div>
        <div className='card'>
          <h4>More about the projects</h4>
          <p>Visit our homepage</p>
          <NavLink to="https://en.bc.fi/qualifications/full-stack-web-developer-program/">Business College Helsinki</NavLink>
        </div>

      </div>

    </div>
  );
};

export default Home;