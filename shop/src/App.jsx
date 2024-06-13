import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Category from './components/Category/Category'

const App = () => {
  return (
    <div className=' dark:bg-gray-900'>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  );
};

export default App;
