import React from "react";
import { SocialIcon } from "react-social-icons";
import MediaQuery from "react-responsive";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  navBtn,
  socialIcon,
  navLinkImg
} from "./HeaderComponentStyle";
import "./HeaderComponentStyle.js";
import MobileHeaderComponent from "../MobileComponents/MobileHeaderComponent";

const HeaderComponent = () => {
  return (
    <>
      <MediaQuery maxWidth={768}>
        <MobileHeaderComponent />
      </MediaQuery>
      <MediaQuery minWidth={769}>
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
          <img src={require('../../media/yvonne.png')}/>
        </NavLink>
        <div style={navBtn}>
            <img src={require('../../media/instagram.png')} style={socialIcon} />
            <img src={require('../../media/spotify.png')} style={socialIcon} />
            <img src={require('../../media/facebook.png')} style={socialIcon} />
        </div>
      </Nav>
      </MediaQuery>
    </>
  );
};

export default HeaderComponent;
