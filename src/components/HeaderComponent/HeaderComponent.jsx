import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./HeaderComponent.css";

const HeaderComponent = () => {
  const barsRef = useRef('');

  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const [socialIcon, setSocialIcon] = useState("socialIcon");
  const [paragraph, setParagraph] = useState("paragraph-div");

  const [logo, setLogo] = useState(require("../../media/yvonne.png"));

  //Social Icon Div generating on Toggle
  const [socialDiv, setSocialDiv] = useState("social-div");

  //Burger Menu
  const [burgerColor, setBurgerColor] = useState('line');

  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else {
      setActive("nav-menu");
    }

    //Toggle Burger Icon
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else {
      setIcon("nav-toggler");
    }

    //Social Icons
    if (socialIcon === "socialIcon") {
      setSocialIcon("socialIcon toggle-social");
    } else {
      setSocialIcon("socialIcon");
    }

    //Footer Paragraph
    if (paragraph === "paragraph-div") {
      setParagraph("paragraph-div paragraph-div-toggle");
    } else {
      setParagraph("paragraph-div");
    }

    //Logo nav
    if (logo === require("../../media/yvonne.png")) {
      setLogo(require("../../media/yvonneBlack.png"));
    } else {
      setLogo(require("../../media/yvonne.png"));
    }

    //Social Div
    if (socialDiv === "social-div") {
      setSocialDiv("social-div social-div-toggle");
    } else {
      setSocialDiv("social-div");
    };

    //Burger Color
    if(burgerColor === 'line') {
      setBurgerColor('line line-toggle')
    }
    else {
      setBurgerColor('line');
    }
  };

  return (
    <div className="nav">
      <div className={active} ref={barsRef} style={active ? {height: barsRef.current.scrollHeight + 'px'} : {height: '0px'}}>
        <NavLink to="/bio" className="nav-link">
          BIO
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          CONTACT
        </NavLink>
        <NavLink to="/blog" className="nav-link">
          BLOG
        </NavLink>

        <div className={socialDiv}>
          <a href="https://www.instagram.com/_yvooo/?hl=ro"><img src={require("../../media/instagram1.png")} className="icon" /></a>
          <a href="https://www.facebook.com/yvoonne23"><img src={require("../../media/facebook1.png")} className="icon" /></a>
          <a href="https://open.spotify.com/artist/7uir3Q8eMSiu8CmBoyNRWm?si=_ySi3PwKSCasDdffOW52uQ"><img src={require("../../media/spotify1.png")} className="icon" /></a>
        </div>

        <div className={paragraph}>
          © 2022 Yvonne Music. All Rights Reserved.
        </div>
      </div>

      <NavLink to="/home" className="nav-logo">
        <img src={logo} className='img-logo'/>
      </NavLink>

      <div className={socialIcon}>
      <a href="https://www.instagram.com/_yvooo/?hl=ro"><img src={require("../../media/instagram.png")} className="icon" /></a>
      <a href="https://www.facebook.com/yvoonne23"><img src={require("../../media/facebook.png")} className="icon" /></a>
      <a href="https://open.spotify.com/artist/7uir3Q8eMSiu8CmBoyNRWm?si=_ySi3PwKSCasDdffOW52uQ"><img src={require("../../media/spotify.png")} className="icon" /></a>
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default HeaderComponent;
