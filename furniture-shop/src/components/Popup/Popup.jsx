import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

// Placeholder Button component
const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`py-2 px-4 mt-4 rounded-full ${bgColor} ${textColor} hover:opacity-90`}
    >
      {text}
    </button>
  );
};

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[300px] p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-md relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Order Now</h1>
          <button
            onClick={() => setOrderPopup(false)}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <IoMdCloseCircleOutline size={24} className='cursor-pointer' />
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="form-input mb-2 w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input mb-2 w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Address"
            className="form-input mb-4 w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <Button
            text="Order Now"
            bgColor="bg-primary"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
