import React, { useState } from 'react';
import { FaMoneyCheckAlt, FaHandHoldingHeart, FaHandsHelping, FaCog, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { MdMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate();
  const [side, setSide] = useState(false);

  const HandleSideBarOpen = () => {
    setSide(!side);
  }

  const Navigate = (choice) => {
    switch (choice) {
      case 'raise':
        navigate("/Fundraiser");
        break;
      case 'donate':
        navigate("/Donate");
        break;
      case 'volunteer':
        navigate("/Volunteer");
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {
        side ? (
          <div className='flex justify-center items-center m-2 bg-blue-200 shadow-xl rounded-2xl h-screen'>
            <div className='flex flex-col items-center gap-3 h-full'>
              <div className='flex flex-col gap-3 mt-10 w-64 m-5'>
                <button className='p-3 bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold capitalize shadow-xl hover:border border-blue-500 hover:text-white' onClick={() => Navigate("raise")}>
                  <FaMoneyCheckAlt className='inline-block mr-2' /> raise Fund
                </button>
                <button className='p-3 bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold capitalize shadow-xl hover:border border-blue-500 hover:text-white' onClick={() => Navigate("donate")}>
                  <FaHandHoldingHeart className='inline-block mr-2' /> donate
                </button>
                <button className='p-3 bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold capitalize shadow-xl hover:border border-blue-500 hover:text-white' onClick={() => Navigate("volunteer")}>
                  <FaHandsHelping className='inline-block mr-2' /> volunteer
                </button>
              </div>
              <div className='flex-grow'></div>
              <div className='mb-10'>
                <div className='mt-5 flex flex-col items-center'>
                  <span>profile</span>
                </div>
                <button className='p-3 rounded-xl font-serif capitalize'>
                  <FaCog className='inline-block mr-2' /> settings
                </button>
              </div>
            </div>
            <div onClick={HandleSideBarOpen} className='closebar text-blue-400'>
              {side ? (<FaChevronLeft className='text-sm' />) : ""}
            </div>
          </div>
        ) : (
          <MdMenu onClick={HandleSideBarOpen} className='text-2xl mt-6 text-blue-500 m-5 hover:outline' />
        )
      }
    </div>
  );
}

export default SideBar;
