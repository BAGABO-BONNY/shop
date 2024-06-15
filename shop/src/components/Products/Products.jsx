import React from 'react'
import Heading from "../shared/Heading";
import Image1 from "../hero/lenz.png";
import Image2 from "../hero/bo.png";
import Image3 from "../hero/ru.png";
import Image4 from "../hero/ta.png";
import ProductsCard from './ProductsCard';

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
        title:" Tulip Chair",
        price: "320",
        aosDelay: "200",
    },
    {
        id:4,
        img:Image4,
        title:" Chair",
        price: "220",
        aosDelay: "400",
    }
]
const Products = () => {
  return (
    <div>
        <div className='container'>
            {/*Header section */}
            <Heading title="Our Products" subtitle ={"Explore Our Products"} />
            {/*body section */}
            <ProductsCard  data= {ProductsData}/>
        </div>
    </div>
  )
}

export default Products;