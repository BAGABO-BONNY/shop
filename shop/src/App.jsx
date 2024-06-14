import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Category from './components/Category/Category'
import  Category2 from'./components/Category/Category2'

const App = () => {
  return (
    <div className=' dark:bg-gray-900'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
    </div>
  );
};

export default App;
