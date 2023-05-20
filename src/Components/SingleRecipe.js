import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Flags from './Flags';
import './styles.css';


const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data)
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:4000/recipes/${params.singlerecipe}`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [params.singlerecipe]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='back_button'>
        <button onClick={() => navigate(-1)}>Go back </button>
      </div>
      <div className='single_recipe'>
        <div className='basic_information'>
          <div className='image'>

            <div className='flag'>
              <Flags recipe={data} />
            </div>
            <img src={data.image} alt={data.name} />
          </div>
          <div className='main_info'>
            <h3>Recipe name: {data.name}</h3>
            <h3>Author: {data.author}</h3>
            <h3>Country: {data.country}</h3>
            <div className='single_description'>
              <p>Description: {data.description}</p>
            </div>
          </div>
        </div>
        <div className='cooking_info'>
          <div className="single_ingredient">
            <h3>Ingredients</h3>
            {data?.ingredients?.map((item, index) => (
              <table key={item.index}>
                <td>
                  <tr>{item.quantity}: {item.ingredient}</tr>
                </td>
              </table>
            ))}
          </div>
          <div className='single_instruction'>
            <h3>Instructions</h3>
            <p>{data.instruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;