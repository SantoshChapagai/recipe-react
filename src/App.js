import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import Header from './Components/Header';
import SingleRecipe from './Components/SingleRecipe';
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/addrecipe' element={<AddRecipe />} />
          <Route path="recipes/:singlerecipe" element={<SingleRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;