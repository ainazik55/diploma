import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowCircleUp } from 'react-icons/fa'; // Import FaArrowCircleUp
import './Footer.css';

const Footer = () => {
  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
<div className="footer-section about">
  <h1>Dior</h1>
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
 <div className="footer-section category">
  <h2>Category </h2>
  <ul>
    <li><a href="http://localhost:3000/categories/for-children">For Children</a></li>
    <li><a href="http://localhost:3000/categories/for-her">For Her</a></li>
    <li><a href="http://localhost:3000/categories/for-house">For House</a></li>
    <li><a href="http://localhost:3000/categories/for-him">For Him</a></li>
    {/* Добавьте свои категории здесь */}
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
      <div className="footer-content">
        {/* Your existing footer content */}
      </div>
      {/* Back to Top button */}
      <button onClick={scrollToTop} className="back-to-top-button">
        <FaArrowCircleUp />
      </button>
      
    </footer>
  );
}

export default Footer;

