import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from "../pages/Profile";
import Volunteer from "../pages/Volunteer";
import FundRaiser from '../pages/FundRaiser';
import Donate from '../pages/Donate';

const App = () => {
  return (
    <div className='bg-blue-100'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/Volunteer' element={<Volunteer/>}/>
          <Route path='/Fundraiser' element={<FundRaiser />} />
          <Route path='/Donate' element={<Donate/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
