import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Category from './components/Category/Category'
import  Category2 from'./components/Category/Category2'
import  Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import chair from './components/hero/ga.png'

const BannerData ={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 jan to 29 jan",
  Image:chair,
  title2: "Lounge Chair",
  title3:"Winter Sale",
  title4:"lorem ipsum, dolor sit amet consecteur",
  bgColor:"#f42c37",
};
const App = () => {
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data ={BannerData}/>
    </div>
  );
};

export default App;
