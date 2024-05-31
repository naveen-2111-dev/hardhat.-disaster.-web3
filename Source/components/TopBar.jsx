import React from 'react';
import { FaPaw } from 'react-icons/fa'; 

const TopBar = () => {
  return (
    <div className="w-full p-4">
      <nav className="w-full flex justify-end">
        <button className=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect <FaPaw className='ml-2'/>
        </button>
      </nav>
    </div>
  );
}

export default TopBar;
