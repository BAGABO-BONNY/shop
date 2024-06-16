import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-5">
          <div className="py-8">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              FSHOP
            </a>
            <p className="text-gray-600 hover:text-black/90 lg:pr-24 pt-3">
              Welcome to FSHOP, your ultimate destination for stylish and
              affordable furniture. Whether you’re looking to revamp your living
              room, upgrade your bedroom.
            </p>
            <p className="pt-3">Made by software developer Bagabo Bonny</p>
            <a
              href="https://github.com/BAGABO-BONNY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our GitHub Account
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:pl-10">
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3">Address</h1>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-gray-600 dark:text-white" />
                  <p className="text-gray-600 dark:text-white">Nyagatare, Eastern Province, Rwanda</p>
                </div>
                <div className="flex items-center gap-3 mt-6" >
                  <FaMobileAlt className="text-gray-600 dark:text-white" />
                  <p className="text-gray-600 dark:text-white">+0788837128</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=61555186797204"> 
                <FaFacebook  className="text-3xl hover:text-primary duration-300 mt-5"/>
                </a>
                <a href="https://www.linkedin.com/in/bagabo-bonny-88057b2a0/"> 
                <FaLinkedin  className="text-3xl hover:text-primary duration-300 mt-5"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
