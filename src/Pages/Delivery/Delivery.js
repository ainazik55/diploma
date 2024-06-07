// Delivery.js
import React from 'react';
import './Delivery.css';

function Delivery() {
  return (
    <section className="Delivery">
      <div className="container">
<ul class="hover-effect-scale">
  <li>
   <img src="https://www.vespa.com/wlassets/vespa/master/vespa_world/Dior_Vespa_946/vespa_dior_2100x900/original/vespa_dior_2100x900.jpg" alt="" />
    <div>
      <h3>MAKE AN ORDER</h3>
      {/* <p>Текст</p> */}
      <a href="https://api.whatsapp.com/send?phone=709884939">more details</a>
    </div>
  </li>
</ul>
      
        
        
        <h1>Delivery Information</h1>
        <p>
          At Dior, we are committed to providing you with a seamless delivery experience. Whether you're purchasing a gift for a loved one or treating yourself, we ensure that your order is handled with the utmost care.
        </p>
        <h2>Delivery Options</h2>
        <ul>
          <li>Standard Delivery: 3-5 business days</li>
          <li>Express Delivery: 1-2 business days</li>
          <li>Same Day Delivery: Available in select locations</li>
        </ul>
        <h2>Packaging</h2>
        <p>
          Each Dior purchase is beautifully packaged in our signature gift box, tied with a satin ribbon. We strive to create an unforgettable unboxing experience for our customers.
        </p>
        <h2>International Shipping</h2>
        <p>
          Dior offers international shipping to many countries worldwide. Please check our website for more information on shipping availability and rates for your location.
        </p>
      </div>
    </section>
  );
}

export default Delivery;
