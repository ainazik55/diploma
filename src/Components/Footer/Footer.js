import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import dior from '../../img/640px-Dior_Logo.svg.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <img src={dior} alt="logo" className="logo" />
          <p>The Dior brand has always been at the forefront of innovation in the world of fashion and beauty. The brand's creative directors, such as Christian Dior, Yonn Galliano, Raf Simons and Maria Grazia Chiuri, have made significant contributions to the industry.</p>
        </div>
        <div className="footer-section links">
          <h2>Site Map</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact </h2>
          <p>Email: sheishenbekovaainazik5@gmail.com</p>
          <p>Phone: +996 709 88 49 39</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 | dior.com
      </div>
    </footer>
  );
}

export default Footer;
