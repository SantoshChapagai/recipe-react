import React from "react";
import { NavLink } from "react-router-dom";
import './card.css'

const InfoCard = ({ heading, description, linkText, link }) => {
  return (
    <div className="card">
      <h4>{heading}</h4>
      <p>{description}</p>
      <NavLink to={link}>{linkText}</NavLink>
    </div>
  );
};

export default InfoCard;
