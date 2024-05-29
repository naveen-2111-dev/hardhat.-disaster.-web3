import React from 'react';

const SideBar = () => {
  return (
    <div className='bg-blue-200 w-80 shadow-xl rounded-2xl h-screen'>
      <div className='flex flex-col items-center gap-3 h-full'>
        <div className='mt-10'>profile</div>
        <div className='flex flex-col gap-3 mt-40 w-64'>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>raise Fund</button>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>donate</button>
          <button className='p-3 bg-blue-300 hover:bg-blue-400 rounded-xl font-serif capitalize shadow-xl hover:border border-blue-500 hover:text-white'>volunteer</button>
        </div>
        <div className='flex-grow'></div>
        <div className='mb-10'>
          <button className='p-3 rounded-xl font-serif capitalize'>settings</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
