
import React from 'react';
import Image from 'next/image';
const Signchat = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Image src="3.png" alt="logo" />
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lets Chart</button>
      </div>
    );
  };
  
  export default Signchat;
