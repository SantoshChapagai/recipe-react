import React from "react";
import { NavLink } from "react-router-dom";
import "./css/styles.css";
import InfoCard from "../UI/InfoCard";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home">
        <video autoPlay loop muted id="background_video">
          <source
            src="https://player.vimeo.com/external/456896527.sd.mp4?s=5f834301c1c496b5e7f8fa8c0772defd2760df7b&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="list_holder">
            <h1>4ooDy</h1>
            <p>4ooDy is a recipe app which allows to add and browse recipes</p>
            <NavLink to="/recipes">Browse recipes</NavLink>
          </div>
        </div>
      </div>
      <div>
        <h2>Awesome recipes around the world</h2>
      </div>
      <div className="home_cards">
        <InfoCard
          heading="Browse recipes"
          description="Find the Awesome recipe across globes. You can search recipes based on name or country"
          link="/recipes"
          linkText="All recipes"
        />
        <InfoCard
          heading="Add recipe"
          description="Add recipe from your country and help people to try different foods"
          link="/addrecipe"
          linkText="Add recipe"
        />
        <InfoCard
          heading="More about the projects"
          description="Visit our homepage"
          link="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
          linkText="Business college Helsinki"
        />
      </div>
    </div>
  );
};

export default Home;
