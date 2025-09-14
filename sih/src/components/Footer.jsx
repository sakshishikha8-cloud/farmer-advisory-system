import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { scrollToElement } from "../utils/scrollUtils";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Left Column */}
        <div className="footer-brand">
          <h2>AgriAid</h2>
          <p>Copyright © {new Date().getFullYear()} AgriAid</p>
          <p>All rights reserved</p>

          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Links / Right Columns */}
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><button onClick={() => scrollToElement('about', 80)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', textDecoration: 'none', font: 'inherit' }}>About</button></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </div>

          <div>
            <h4>Features</h4>
            <ul>
              <li><button onClick={() => scrollToElement('query', 80)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', textDecoration: 'none', font: 'inherit' }}>AI Advisory</button></li>
              <li><Link to="/history">Query History</Link></li>
              <li><button onClick={() => scrollToElement('about', 80)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', textDecoration: 'none', font: 'inherit' }}>About Us</button></li>
              <li><button onClick={() => scrollToElement('contact', 80)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', textDecoration: 'none', font: 'inherit' }}>Contact Us</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
