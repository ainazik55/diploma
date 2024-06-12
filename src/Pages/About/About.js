import React from 'react';
import './About.css';
import Accordion from '../../Components/Accordion/Accordion';

function About() {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/FB_epTwSTbI?si=GJZQclpDv7J9lv5X',
      text: 'Dior Holiday 2024 - The Garden of Dreams'
    },
    {
      url: 'https://www.youtube.com/embed/um6Fp8-Xneg?si=dPuuJ4qEwuGTjgYC',
      text: 'The Dior Cruise 2024 Show'
    }
  ];

  const accordionItems = [
    {
      title: 'What does the word Dior mean?',
      content: 'Christian Dior SE is a French company founded by designer Christian Dior and entrepreneur Marcel Boussac as a haute couture atelier in 1946.'
    },
    {
      title: 'How old is the Dior brand?',
      content: '74 years old'
    },
    {
      title: 'Why was Dior called Dior?',
      content: 'The internationally recognized brand Christian Dior - named after its founder, the famous French fashion designer - has long been famous for its luxurious collections of sophisticated womens clothing'
    },
    {
      title: 'How to understand that the original is Dior?',
      content: 'The original leather is soft and bends well. For a fake, you need to apply force to bend it. Plus, the fonts are different - the fake one has a larger inscription and is simply painted on top of the leather. In the original, the letters are slightly hammered into the leather and filled with paint inside.'
    },
    {
      title: 'Who was the face of Dior?',
      content: 'For one of its past campaigns, Dior invited the young American director John Cameron Mitchell, and world-famous stars Ian McKellen and Marion Cotillard were cast in the leading roles .'
    }
  ];

  const cards = [
    {
      image: 'https://image.spletnik.ru/resize/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700,dpr=2/https://image.spletnik.ru/image/2023/10/23/5lzN/original.webp',
      text1: 'Elizabeth Debicki',
      text2: 'model'
    },
    {
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/230112095206-03-delphine-arnault-dior.jpg?c=original',
      text1: 'Delphine Arnault',
      text2: 'Chief Executive Officer'
    },
    {
      image: 'https://cdn.fw-daily.com/2017/03/6096.jpg',
      text1: 'Maria Grazia Chiuri',
      text2: 'Fashion designer'

    }
  ];

  return (
    <section className="About">
      <div className="About-content">
        <h2 className="About-title">CHRISTIAN DIOR</h2>
        <p>The internationally recognized brand Christian Dior - named after its founder, the famous French fashion designer - has long been famous for its luxurious collections of sophisticated women's clothing.</p>
      </div>
      
      <div className="accordion-section">
        <h2>About Christian Dior</h2>
        <Accordion items={accordionItems} />
      </div>

      {videos.map((video, index) => (
        <div key={index} className="About-item">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-container">
            <p>{video.text}</p>
          </div>
        </div>
      ))}

      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${index +1}`} />
            <h2>{card.text1}</h2>
            <p>{card.text2}</p>
          </div>
        ))}
      </div>

      <div className="contact-info">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:sheishenbekovaainazik5@gmail.com">sheishenbekovaainazik5@gmail.com</a></p>
        <p>Phone: <a href="https://api.whatsapp.com/send?phone=709884939">+996 709 88 49 39</a></p>
      </div>
    </section>
  );
}

export default About;
