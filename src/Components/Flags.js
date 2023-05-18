import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Flags = ({ recipe }) => {
  const [flag, setFlag] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (recipe && recipe.country) {
      setIsLoading(true);
      axios
        .get(`https://restcountries.com/v3.1/name/${recipe.country}`)
        .then(res => {
          setFlag(res.data.map(data => data.flags.svg));
          setIsLoading(false);
        })
    }
  }, [recipe.country, recipe]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {flag && <img src={flag} alt={recipe.country} />}
    </div>
  );
};

export default Flags;