import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from "../pages/Profile";
import Volunteer from "../pages/Volunteer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/Volunteer' element={<Volunteer/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
