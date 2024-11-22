import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Category from './components/Category/Category'
import  Category2 from'./components/Category/Category2'
import  Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import chair from './components/hero/ga.png'
import Products from './components/Products/Products';
import chair2 from './components/hero/bag.png'
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";

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
const BannerData2 ={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"14 jan to 28 jan",
  Image:chair2,
  title2: "Accent Chair",
  title3:"Winter Sale",
  title4:"lorem ipsum, dolor sit amet consecteur",
  bgColor:"#2dcc6f",
};
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
   const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
   };
   React.useEffect(() => {
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
       
      }
    );
    AOS.refresh();
   },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup ={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data ={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Footer/>
      <Popup orderPopup={orderPopup}
      setOrderPopup={setOrderPopup}/>
    </div>
  );
};

export default App;
