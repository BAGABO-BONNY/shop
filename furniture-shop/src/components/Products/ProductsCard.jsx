import React from 'react';

const ProductsCard = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {data.map((product) => (
        <div
          key={product.id}
          className='p-6 bg-white rounded-lg shadow-md'
          data-aos="fade-up"
          data-aos-delay={product.aosDelay}
        >
          <img src={product.img} alt={product.title} className='w-full h-40 object-cover mb-4' />
          <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
          <p className='text-gray-600'>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
