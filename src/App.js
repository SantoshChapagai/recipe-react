import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import AddRecipe from './pages/AddRecipie';
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipies' element={<Recipies />} />
          <Route path='/addrecipie' element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;