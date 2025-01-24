import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PrivateComponent from './components/privateRotes'; // Handles route protection
import Login from './components/LogIn';
import DetailBar from './components/Detail-Bar';
import Contact from './components/contact';
import Home from './components/Home';
import Courses from './components/Courses';
import Registration from './components/Registration';
import ScrollToTop from './components/ScrollToTop';
import CourseCard from './components/CoursesDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(user !== null);
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        {isLoggedIn && <DetailBar />}
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/course/:courseID" element={<CourseCard />} /> {/* Dynamic Course Details */}
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Gallery" element={<h1>Gallery</h1>} />
          <Route path="/Login" element={<Login />} />
          
          {/* Protected routes */}
          <Route element={<PrivateComponent isLoggedIn={isLoggedIn} />}>
            <Route path="/Profile" element={<h1>Profile</h1>} />
            <Route path="/Logout" element={<h1>Logout</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
