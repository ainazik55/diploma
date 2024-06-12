import React from 'react';
import './Home.css';
import video from '../../img/dior-video.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="home">
      <section className="banner">
        <video width="100%" height="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </section>

      

      <section className="info">
        {/* Первая картинка */}
        <div className="hover-text-one flex">
          <figure className="effect-text-two">
            <img src="https://fashiongtonpost.com/wp-content/uploads/2020/08/christiandior_main.jpg" alt="Christian Dior" />
            <figcaption>
              <h3>Christian DIOR</h3>
              <p>The only fashion designer who became a celebrity and revered from his very first collection</p>
            </figcaption>
          </figure>
        </div>
        {/* Вторая картинка */}
        <div className="hover-text-one flex">
          <figure className="effect-text-one">
            <img src="https://images.adsttc.com/media/images/63a3/2f3f/a452/0822/a34f/ae60/newsletter/christian-dior-designer-of-dreams-exhibition-oma_7.jpg?1671638952" alt="Galerie Dior" />
            <figcaption>
              <h3>Galerie Dior</h3>
              <p>This is the place for fashion lovers in Paris!</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="highlights">
        <h2>Why Choose Us?</h2>
        <div className="highlight">
          <h3>Quality Products</h3>
          <p>We ensure the best quality in all our products.</p>
        </div>
        <div className="highlight">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and on time.</p>
        </div>
        <div className="highlight">
          <h3>Customer Support</h3>
          <p>Our support team is here to assist you 24/7.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;