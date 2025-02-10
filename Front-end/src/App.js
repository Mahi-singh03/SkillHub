import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PrivateComponent from './components/privateRotes'; // Handles route protection
import Login from './components/LogIn';
import DetailBar from './components/Detail-Bar';
import Home from './components/Home';
import Courses from './components/Courses';
import Registration from './components/Registration';
import ScrollToTop from './components/ScrollToTop';
import CourseCard from './components/CoursesDetails';
import Gallery from './components/gallery';
import ProfileCard from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  const handleAuthChange = (userData) => {
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar isLoggedIn={isLoggedIn} handleAuthChange={handleAuthChange} />
        {isLoggedIn && <DetailBar />}
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/course/:courseID" element={<CourseCard />} />
          <Route path="/Registration" element={<Registration handleAuthChange={handleAuthChange} />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login" element={<Login handleAuthChange={handleAuthChange} />} />

          {/* Protected routes */}
          <Route element={<PrivateComponent isLoggedIn={isLoggedIn} />}>
            <Route path="/Profile" element={<ProfileCard />} />
            <Route path="/Logout" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
