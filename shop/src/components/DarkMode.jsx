import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {theme === "light" ? (
        <FaMoon className="text-xl text-gray-600 dark:text-gray-400" />
      ) : (
        <IoSunnySharp className="text-xl text-yellow-500" />
      )}
    </button>
  );
};

export default DarkMode;

