import React, { useEffect } from "react";
import Slider from "react-slick";
import Image1 from "./ga.png";
import Image2 from "./lau.png";
import Image3 from "./nny.png";
import Button from "../shared/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSlide = [
  {
    id: 1,
    img: Image1,
    subtitle: "Designed for comfort",
    title: "Lounge",
    title2: "Furniture",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Designed for comfort",
    title: "Accent",
    title2: "Furniture",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Designed for comfort",
    title: "Adirondack",
    title2: "Furniture",
  },
];

const Hero = ({ handleOrderPopup }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center dark:bg-gray-900">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlide.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/50 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[500px] h-[400px] sm:h-[450px] sm:scale-110 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
