import React, { useEffect } from 'react';
import Heading from '../shared/Heading';
import Img1 from '../hero/b.jpg';
import Img2 from '../hero/l.jpg';
import Img3 from '../hero/o.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogData = [
  {
    title: 'how to choose perfect Furniture',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer bibendum felis a arcu placerat, sed aliquam ipsum vehicula. Proin non sem a arcu vestibulum vestibulum. Fusce sed felis nec erat fringilla bibendum. Nulla facilisi. Ut nec eros ut lorem sollicitudin luctus. Nulla dictum massa et neque faucibus, non laoreet eros malesuada. Sed eu velit vestibulum, accumsan velit sit amet, facilisis risus. Integer convallis eros ac turpis euismod, vel consequat est scelerisque',
    published: 'jan 20,2024  by  Laurent',
    Image: Img1,
  },
  {
    title: 'how to choose perfect Furniture',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer bibendum felis a arcu placerat, sed aliquam ipsum vehicula. Proin non sem a arcu vestibulum vestibulum. Fusce sed felis nec erat fringilla bibendum. Nulla facilisi. Ut nec eros ut lorem sollicitudin luctus. Nulla dictum massa et neque faucibus, non laoreet eros malesuada. Sed eu velit vestibulum, accumsan velit sit amet, facilisis risus. Integer convallis eros ac turpis euismod, vel consequat est scelerisque',
    published: 'jan 20,2024  by Salim',
    Image: Img2,
  },
  {
    title: 'how to choose perfect Furniture',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer bibendum felis a arcu placerat, sed aliquam ipsum vehicula. Proin non sem a arcu vestibulum vestibulum. Fusce sed felis nec erat fringilla bibendum. Nulla facilisi. Ut nec eros ut lorem sollicitudin luctus. Nulla dictum massa et neque faucibus, non laoreet eros malesuada. Sed eu velit vestibulum, accumsan velit sit amet, facilisis risus. Integer convallis eros ac turpis euismod, vel consequat est scelerisque',
    published: 'jan 20,2024  by Bagabo',
    Image: Img3,
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='my-12'>
      <div className='container'>
        <Heading title='Recent News' subtitle={'Explore Our Blogs'} />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 mb-5'>
          {BlogData.map((data, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
            >
              <div className='overflow-hidden rounded-2xl mb-8'>
                <img
                  src={data.Image}
                  alt=''
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                />
              </div>
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
