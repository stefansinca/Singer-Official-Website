
import React from 'react';

import HeaderComponent from '../HomePageComponents/HeaderComponent';
import './ContactPageComponent.css'

const ContactPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className="parent-div-bio">
        <div className="bio-div">
          <h1 className='h1-contact'>CONTACT</h1>
          <img
            className="first-bio-img"
            src={require("./../../media/first-bio-img.jpg")}
            alt="artist-photo"
          />
        </div>

        <main className="main-bio">
          <img
            className="main-contact-img"
            src={require("..//..//media/bio-img.jpg")}
            alt="bio-img"
          />
          <h2 className="contact-h2">CONTACT</h2>
          <p className="contact-paragraph">
          For info + booking please email:
          </p>
          <p className='contact-email-paragraph' onClick={() => window.location = 'mailto: yvonnemos444@gmail.com'}>yvonnemos444@gmail.com</p>
          <p className='contact-email-paragraph' onClick={() => window.location = 'https://www.facebook.com/yvoonne23'}>Facebook</p>
          <p className='contact-email-paragraph' onClick={() => window.location = 'https://www.instagram.com/_yvooo/?hl=ro'}>Instagram</p>
        </main>
      <footer className="bio-footer">
      <a href="https://www.instagram.com/_yvooo/?hl=ro" className="a-bio-icon"><img className='bio-icon' src={require('../../media/instagram1.png')} /> </a>
      <a href="https://www.facebook.com/yvoonne23" className="a-bio-icon"><img className='bio-icon' src={require('../../media/facebook1.png')} /> </a>
      <a href="https://open.spotify.com/artist/7uir3Q8eMSiu8CmBoyNRWm?si=_ySi3PwKSCasDdffOW52uQ" className="a-bio-icon"><img className='bio-icon' src={require('../../media/spotify1.png')} /> </a>
      </footer>
      <p className="footer-paragraph">© 2022 Yvonne Music. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default ContactPageComponent;