import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/styles.css'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <video autoPlay loop muted play-inline id="background_video">
          <source src="https://player.vimeo.com/external/365129177.sd.mp4?s=14d315c4858f8cf7778befff7069056e0b4de516&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        {/* <div>
          <video autoPlay loop muted play-inline id="background_video">
            <source src="../video/smoke.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className='container'>
          <h1>TasteIT</h1>
          <p>TasteIT is a recipe app which allows to add and browse recipes</p>
          <NavLink to='/recipes'><button>Browse recipes</button></NavLink>
        </div>
      </div>
      <div>
        <h2>Looking for the recipes?</h2>
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