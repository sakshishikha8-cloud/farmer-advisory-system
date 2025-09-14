import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaUser, FaHistory, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { scrollToElement } from "../utils/scrollUtils";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">AgriAid</Link>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <button 
            onClick={() => scrollToElement('about', 80)} 
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            About
          </button>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/login" className="auth-btn login">Login</Link>
          <Link to="/signup" className="auth-btn signup">Sign Up</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaHome className="mobile-icon" />
            <span>Home</span>
          </Link>
          <button 
            className="mobile-link" 
            onClick={() => {
              scrollToElement('about', 80);
              setIsOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left' }}
          >
            <FaInfoCircle className="mobile-icon" />
            <span>About</span>
          </button>
          <Link to="/profile" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaUser className="mobile-icon" />
            <span>Profile</span>
          </Link>
          <Link to="/history" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaHistory className="mobile-icon" />
            <span>History</span>
          </Link>
          <Link to="/login" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaSignInAlt className="mobile-icon" />
            <span>Login</span>
          </Link>
          <Link to="/signup" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaUserPlus className="mobile-icon" />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

