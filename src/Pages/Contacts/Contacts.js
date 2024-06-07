// pages/Contacts.js
import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <section className="Contacts">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to reach out to us through the following channels:</p>
        <div className="contact-methods">
          <div className="contact-method">
            <h2>Email</h2>
            <p>sheishenbekovaainazik5@gmail.com</p>
          </div>
          <div className="contact-method">
            <h2>Phone</h2>
            <p>+996 709 88 49 39</p>
          </div>
          <div className="contact-method">
            <h2>Address</h2>
            <p>Aitkul Ubukeev 46, Karakol, kyrgyzstan</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
