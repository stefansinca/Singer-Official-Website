import { useState } from "react";
import React from "react";

import { Nav, NavLink, Bars } from "../HomePageComponents/HeaderComponentStyle";
import "./BarsButtonStyle";
import BarsButton from "./BarsButton";

export const MobileHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const BarsOpen = () => (
    <>
      <Nav style={{ alignItems: "center", backgroundColor: "white" }}>
      <NavLink to="/home">
          <img
            src={require("../../media/yvonneBlack.png")}
            style={{ width: "70%" }}
          />
      </NavLink>
        <Bars onClick={() => setIsOpen(!isOpen)} style={{color: "black"}} />
      </Nav>
      <BarsButton />
      
    </>
  );

  const BarsClosed = () => (
    <>
      <Nav style={{ alignItems: "center" }}>
        <NavLink to="/home">
          <img
            src={require("../../media/yvonne.png")}
            style={{ width: "70%" }}
          />
        </NavLink>
        <Bars onClick={() => setIsOpen(!isOpen)} />
      </Nav>
    </>
  );

  return <>
  {isOpen ? <BarsOpen /> : <BarsClosed />}
  </>;
};

export default MobileHeaderComponent;
