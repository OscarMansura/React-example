import React from 'react';

import './hero.css';

function Hero() {
    return (
      <article className='hero'>
          <img className='hero__image' src="https://placeimg.com/1200/800/tech" alt="" />
          <h2 className='hero__title'>O multibanco no telemóvel</h2>
          <p className='hero__text'>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. </p>
      </article>
    )
}

export default Hero;
