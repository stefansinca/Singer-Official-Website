import React, { useState } from "react";

import { Nav, NavLink, socialIcon, socialDiv } from "./BarsButtonStyle";

const BarsButton = () => {
  return (
    <>
      <Nav>
        <NavLink to="/bio">BIO</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="contact">CONTACT</NavLink>
        <div style={socialDiv}>
          <img src={require("../../media/instagram1.png")} style={socialIcon} />
          <img src={require("../../media/spotify1.png")} style={socialIcon} />
          <img src={require("../../media/facebook1.png")} style={socialIcon} />
        </div>
      </Nav>
    </>
  );
};

export default BarsButton;
