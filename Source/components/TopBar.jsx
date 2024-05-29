import React from 'react';

const TopBar = () => {
  return (
    <div>
      <nav className="flex ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect
        </button>
      </nav>
    </div>
  );
}

export default TopBar;
