// pages/About.js
import React from 'react';
import Slider from 'react-slick';
import './About.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://r.lvmh-static.com/uploads/2019/02/site-cover-1584x872.jpg',
    'https://rusoch.fr/files/2022/11/1668807475344-600x337.jpg',
    'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-11/315937017_5844827442238539_842668604099295175_n%20copy_0.jpg?itok=jC9N3hdN',
    'https://rusoch.fr/files/2022/11/1668807475758-scaled.jpg',
    'https://www.dior.com/couture/var/dior/storage/images/horizon/fashion/mens-fashion/man/beach-capsule-visuel2/column-1/43982373-6-fre-FR/column-1.jpg?imwidth=3000',
    'https://r.lvmh-static.com/uploads/2017/07/christian-dior_-designer-of-dreams_scenography-22-adrien-dirand-1062x584.jpg',
  ];

  return (
    <section className="About">
      <div className="About-content">
        <h2>CHRISTIAN DIOR</h2>
        <p>The internationally recognized brand Christian Dior - named after its founder, the famous French fashion designer - has long been famous for its luxurious collections of sophisticated women's clothing.</p>
      </div>
      <div className="About-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`Dior ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

export default About;
