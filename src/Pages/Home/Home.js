import React from 'react';
import './Home.css';
import video from '../../img/dior-video.mp4'

function Home() {
  return (
    <div className="home">
      <section className="banner">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
        {/* <img src="https://www.japantimes.co.jp/uploads/imported_images/uploads/2021/11/np_file_124444.jpeg" alt="" /> */}
      </section>


      <section className="info ">
        {/* Первая картинка */}
        <div class="hover-text-one flex ">
          <figure class="effect-text-two ">
            <img src="https://fashiongtonpost.com/wp-content/uploads/2020/08/christiandior_main.jpg" alt="" />
            <figcaption>
              <h3>Christian DIOR</h3>
              <p>the only fashion designer who became a celebrity and revered from his very first collection</p>
            </figcaption>
          </figure>
        </div>
        {/* <!-- Вторая картинка --> */}
        <div class="hover-text-one flex ">
          <figure class="effect-text-one  ">
            <img src="https://images.adsttc.com/media/images/63a3/2f3f/a452/0822/a34f/ae60/newsletter/christian-dior-designer-of-dreams-exhibition-oma_7.jpg?1671638952" alt="" />
            <figcaption>
              <h3>Galerie Dior</h3>
              <p>This is the place for fashion lovers in Paris!</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* <section className="banner">
        <img src="https://cdn.sortiraparis.com/images/80/83043/957699-dior-j-adore-l-exposition-gratuite-qui-celebre-le-parfum-iconique-de-la-maison.jpg" alt="Banner 2" />
      </section> */}

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
