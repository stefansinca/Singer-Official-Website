import React from 'react';
import {NavLink} from 'react-router-dom';

import HeaderComponent from './/../HeaderComponent/HeaderComponent'
import YoutubeEmbed from '../YoutubeComponent/YoutubeEmbed';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import {
  slides,
  containerStyles
} from '../CarouselComponent/slides';

import './HomePageComponent.css';

const HomePageComponent = () => {
  return (
    <div className='parent-div-home'>
      <HeaderComponent />

      <header className='header'>
      <img src={require("..//..//media/first-bio-img.jpg")} alt="artist-photo"  className='header-img'/>
      <div className='second-header'>
      <img src={require('../../media/text-1659340383981.png')} alt='' className='album-name-img'/>
      <h2 className='h2-header'>NOW AVAILABLE EVERYWHERE</h2>
      <p className='header-p'>"This is a story. Your story. A story of perseverance. A journey that brings us <br />  from the darkness to the light."</p>
      <a href='https://open.spotify.com/album/1ua8rwCe6RdDiFoyROmnIc?si=tFhSLfJmSJiZgaVaHF4uPw' className='header-nav-button'>
          <button className="header-btn">LISTEN NOW</button>
          </a>
      </div>
      </header>

      <section className='video-section'>
        <YoutubeEmbed embedId='4XyZC3RGb3M'/>
      </section>

      <main style={containerStyles}>
          <CarouselComponent slides={slides} />
      </main>

    </div>
    
  )
}

export default HomePageComponent