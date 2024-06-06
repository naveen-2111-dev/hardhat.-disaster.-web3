import React from 'react';
import { FaPaw,FaTimes } from 'react-icons/fa'; 
import { useContract } from "../context/ContractContext";

const TopBar = () => {

  const { openConnect, setOpenConnect, setWord } = useContract();
  const buttontext = !openConnect? 'connect':`close`

  const handleOpenConnect = () => {
    setOpenConnect(!openConnect)

    try {
      if (window.ethereum) {
        setWord("installed")
      } else {
        setWord("install")
      }
    } catch (err) {
      console.log(`error ${err}`);
    }
  }

  return (
    <div className="w-full p-4">
      <nav className="w-full flex justify-end">
        <button className=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg items-center shadow-lg transition hover:scale-105 duration-300 ease-in-out" onClick={handleOpenConnect}>
          {buttontext} {openConnect ? <FaTimes className='ml-2' /> : <FaPaw className='ml-2' />}
        </button>
      </nav>
    </div>
  );
}

export default TopBar;
