import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  navBtn,
  socialIcon
} from "./HeaderComponentStyle";
import "./HeaderComponentStyle.js";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/bio" activeStyle>
            BIO
          </NavLink>
          <NavLink to="/contact" activeStyle>
            CONTACT
          </NavLink>
          <NavLink to="/blog" activeStyle>
            BLOG
          </NavLink>
        </NavMenu>
        <NavLink to="/home">
          <img src={require('../../media/yvonne.png')} />
        </NavLink>
        <Bars />
        <div style={navBtn}>
            <img src={require('../../media/instagram.png')} style={socialIcon} />
            <img src={require('../../media/spotify.png')} style={socialIcon} />
            <img src={require('../../media/facebook.png')} style={socialIcon} />
        </div>
      </Nav>
    </>
  );
};

export default HeaderComponent;
