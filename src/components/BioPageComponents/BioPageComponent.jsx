import React from "react";
import HeaderComponent from "../HomePageComponents/HeaderComponent";
import "./BioPageComponent.css";

export const BioPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className="parent-div-bio">
        <div className="bio-div">
          <h1>BIO</h1>
          <img
            className="first-bio-img"
            src={require("./../../media/first-bio-img.jpg")}
            alt="artist-photo"
          />
        </div>

        <main className="main-bio">
          <img
            className="main-bio-img"
            src={require("..//..//media/bio-img.jpg")}
            alt="bio-img"
          />
          <h2 className="bio-h2">BIO</h2>
          <p className="bio-paragraph">
            Yvonne is a Romanian born, Timisoara based singer and songwriter who
            is blessed with synesthesia, a unique condition where when one sense
            is activated, another kicks in at the same time. When she hears
            music, she sees colors and shapes, her music having an admirable
            sense of authenticity.
            <br />
            <br />
            Yvonne released her first album, A Million Colors, in December 2021
            which was received with delight and positive reviews. About Just
            Somebody, the first track of the album, Yvonne confessed that it is
            "more than a song; it is a lesson in discovering a new perspective".
            <br />
            <br />
            Yvonne's creations are a wave of emotion, sprinkled with mystery,
            curiosity and wrapped in sincere feelings. Complex and experimental
            harmonies give her songs a feeling of sensual mysticism, accompanied
            by introspection and charm.
          </p>

          <button className="bio-contact-button">Contact</button>
        </main>
      <footer className="bio-footer">
      <a href="https://www.instagram.com/_yvooo/?hl=ro" className="a-bio-icon"><img className='bio-icon' src={require('../../media/instagram1.png')} /> </a>
      <a href="https://open.spotify.com/artist/7uir3Q8eMSiu8CmBoyNRWm?si=_ySi3PwKSCasDdffOW52uQ" className="a-bio-icon"><img className='bio-icon' src={require('../../media/spotify1.png')} /> </a>
      <a href="https://www.facebook.com/yvoonne23" className="a-bio-icon"><img className='bio-icon' src={require('../../media/facebook1.png')} /> </a>
      </footer>
      <p className="footer-paragraph">© 2022 Yvonne Music. All Rights Reserved.</p>
      </div>
    </>
  );
};
