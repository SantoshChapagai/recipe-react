import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import "./css/styles.css";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/recipes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const searchFilter = data.filter((recipes) => {
    return recipes.name?.toLowerCase().includes(searchInput.toLowerCase());
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipes">
      <input onChange={searchInputHandler} className="input_style" />
      <div className="all_card">
        {searchFilter.map((data) => (
          <Card key={data.id} recipe={data} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
