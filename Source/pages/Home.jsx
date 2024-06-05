import React from 'react';
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Connect from "../components/connect";

const Home = () => {
  return (
    <div className="flex h-screen relative">
      <SideBar className="z-20" />
      <div className="flex-1 flex flex-col relative z-10">
        <TopBar className="z-20" />
        <div className="flex-1 flex justify-center items-center z-30">
          <Connect className="z-30" />
        </div>
      </div>
    </div>
  );
};

export default Home;