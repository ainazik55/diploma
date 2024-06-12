// pages/Contacts.js
import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <section className="Contacts">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h2>Email</h2>
            <p>Christian Dior@gmail.com</p>
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
        <div className="contacts-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15466.31345645536!2d78.391487!3d42.490203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1625684054483!5m2!1sen!2sus" 
          title="Контактная информация"
          width="1000%"
          height="450"
          allowFullScreen=""
          loadin="lazy"
          referrerPolicy="no-referrer-when-downgrade">

          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
