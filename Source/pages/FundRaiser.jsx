import React from 'react';
import SideBar from "../components/SideBar";
import Form from "../components/Form";

const FundRaiser = () => {
  return (
    <div className="flex h-screen relative">
      <SideBar className="z-20" />
      <div className="flex-1 p-4">
        <Form />
      </div>
    </div>
  );
};

export default FundRaiser;
