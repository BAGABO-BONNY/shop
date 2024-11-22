import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../shared/Button';
import Image1 from '../hero/cupBoard.png';
import Image2 from '../hero/el.png';
import Image3 from '../hero/ga.png';

const Category = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Cupboards</p>
                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>
            <img src={Image1} alt="Cupboards" className="w-[120px] absolute top-4 right-4" />
          </div>

          {/* Second column */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Chairs</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
              </div>
            </div>
            <img src={Image2} alt="Chairs" className="w-[120px] absolute top-4 right-4" />
          </div>

          {/* Third column */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div>
              <div className="space-y-2 mb-4">
                <p className="text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Sofa</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </div>
            </div>
            <img src={Image3} alt="Sofa" className="w-[320px] absolute top-4 right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
