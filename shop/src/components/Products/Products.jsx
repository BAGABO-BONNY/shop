import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from "../shared/Heading";
import Image1 from "../hero/ke.png";
import Image2 from "../hero/gi.png";
import Image3 from "../hero/ir.png";
import Image4 from "../hero/at.png";
import ProductsCard from './ProductsCard';
import Image5 from "../hero/me.png";
import Image6 from "../hero/se.png";

const ProductsData =[
    {
        id:1,
        img:Image1,
        title:"Club Chair",
        price: "120",
        aosDelay: "0",
    },
    {
        id:2,
        img:Image2,
        title:"Rocking Chair",
        price: "520",
        aosDelay: "300",
    },
    {
        id:3,
        img:Image3,
        title:"Tulip Chair",
        price: "320",
        aosDelay: "200",
    },
    {
        id:4,
        img:Image4,
        title:"Chair",
        price: "220",
        aosDelay: "400",
    }
];

const ProductsData2 =[
    {
        id:1,
        img:Image5,
        title:"Club Chair",
        price: "120",
        aosDelay: "0",
    },
    {
        id:2,
        img:Image6,
        title:"Rocking Chair",
        price: "520",
        aosDelay: "300",
    },
    {
        id:3,
        img:Image3,
        title:"Tulip Chair",
        price: "320",
        aosDelay: "200",
    },
    {
        id:4,
        img:Image4,
        title:"Chair",
        price: "220",
        aosDelay: "400",
    }
];

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className='container'>
        {/*Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/*body section */}
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
