import React from 'react';
import { FaMoneyCheckAlt, FaHandHoldingHeart, FaHandsHelping, FaCog } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='bg-blue-200 w-80 shadow-xl rounded-2xl h-screen'>
      <div className='flex flex-col items-center gap-3 h-full'>
        <div className='flex flex-col gap-3 mt-10 w-64'>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>
            <FaMoneyCheckAlt className='inline-block mr-2' /> raise Fund
          </button>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>
            <FaHandHoldingHeart className='inline-block mr-2' /> donate
          </button>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>
            <FaHandsHelping className='inline-block mr-2' /> volunteer
          </button>
        </div>
        <div className='flex-grow'></div>
        <div className='mb-10'>
          <button className='p-3 rounded-xl font-serif capitalize'>
            <FaCog className='inline-block mr-2' /> settings
          </button>
          <div className='mt-5 flex flex-col items-center'>
          <span>profile</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
