import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../Images/logo.png';
import logo2 from '../Images/logo2.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();

  useEffect(() => {
    const updateLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(user !== null);
    };

    const updateRegistrationStatus = () => {
      const isUserRegistered = localStorage.getItem('isRegistered');
      setIsRegistered(isUserRegistered === 'true');
    };

    // Initial checks
    updateLoginStatus();
    updateRegistrationStatus();

    // Listener for changes in localStorage
    const handleStorageChange = () => {
      updateLoginStatus();
      updateRegistrationStatus();
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isRegistered'); // Optionally clear registration status
    setIsLoggedIn(false);
    setIsRegistered(false);
    navigate('/');
    window.dispatchEvent(new Event('storage')); // Notify other components
  };

  return (
    <nav className="nav-bar" ref={navRef}>
      <div className="nav-container">
        <Link className="nav-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Restaurant Logo" className="nav-logo" />
          <img src={logo2} alt="Restaurant Logo 2" className="nav-logo2 desktop-only" />
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className={`nav-link ${location.pathname === '/Courses' ? 'active' : ''}`}
            to="/Courses"
            onClick={closeMenu}
          >
            Courses
          </Link>
          {!isLoggedIn && !isRegistered && (
            <Link
              className={`nav-link ${location.pathname === '/Registration' ? 'active' : ''}`}
              to="/Registration"
              onClick={closeMenu}
            >
              Register
            </Link>
          )}
          <Link
            className={`nav-link ${location.pathname === '/Gallery' ? 'active' : ''}`}
            to="/Gallery"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          {isLoggedIn && (
            <Link
              className={`nav-link ${location.pathname === '/Profile' ? 'active' : ''}`}
              to="/Profile"
              onClick={closeMenu}
            >
              Profile
            </Link>
          )}
          {isLoggedIn ? (
            <Link className="nav-link" to="/Logout" onClick={handleLogout}>
              Log out
            </Link>
          ) : (
            <Link
              className={`nav-link ${location.pathname === '/Home' ? 'active' : ''}`}
              to="/Login"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
