// Footer.js
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook'; // Assuming you're using Material-UI for icons
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/Twitter'; // Twitter icon as X
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f8ff', color: 'black', padding: '40px 0', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        
        {/* About Section */}
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h3 style={{ marginBottom: '15px' }}>Bigbasket</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
              <Link to="/aboutus" style={linkStyle}>About Us</Link>
            </li>
           
            <li style={{ margin: '10px 0' }}>
             <Link to="privacy-policy" style={linkStyle}>Privacy Policy</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/terms" style={linkStyle}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h3 style={{ marginBottom: '15px' }}>Help</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>
              <a href="#faq" style={linkStyle}>FAQs</a>
            </li>
            <li style={{ margin: '10px 0' }}>
              <a href="#contact" style={linkStyle}>Contact Us</a>
            </li>
            <li style={{ margin: '10px 0' }}>
              <a href="#wallet-faqs" style={linkStyle}>bb Wallet FAQs</a>
            </li>
            <li style={{ margin: '10px 0' }}>
              <a href="#vendor-connect" style={linkStyle}>Vendor Connect</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h3 style={{ marginBottom: '15px' }}>Follow Us</h3>
          <div>
            <a href="https://facebook.com" style={{ marginRight: '10px', color: 'black', transition: 'color 0.3s' }} className="footer-icon">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" style={{ marginRight: '10px', color: 'black', transition: 'color 0.3s' }} className="footer-icon">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" style={{ marginRight: '10px', color: 'black', transition: 'color 0.3s' }} className="footer-icon">
              <XIcon />
            </a>
            <a href="https://pinterest.com" style={{ color: 'black', transition: 'color 0.3s' }} className="footer-icon">
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Cities We Serve Section */}
      <div style={{ backgroundColor: '#111', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px', color: 'white' }}>Cities We Serve</h4>
          <p style={{ textAlign: 'center', color: '#888' }}>
            Abohar | Abu Road | Achampet | Achrol | Adampur | Addanki | Adilabad | Agra | Ahmedabad | Aizawl | Alappuzha | Almora | ... {/* Add more cities */}
          </p>
        </div>
      </div>

      {/* App Download Section */}
      <div style={{ backgroundColor: '#000', textAlign: 'center',padding:'30px' }}>
        <a href="https://play.google.com" style={{ marginRight: '10px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigowS5DTVVME-P_pHZSDaubqQWQK3tJD0W9zAPeXfwk_wULjUxse3kiDBf9IoBQtorw&usqp=CAU" alt="Google Play" style={{ width: '150px' }} />
        </a>
        <a href="https://apple.com/app-store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on-the_App_Store_Badge.svg.png" alt="App Store" style={{ width: '150px' }} />
        </a>
      </div>
    </footer>
  );
};

// Define a common style for the links
const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  padding: '5px 0',
  borderBottom: '2px solid transparent',
  transition: 'border-color 0.3s, color 0.3s',
};

export default Footer;
