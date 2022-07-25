import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import React from "react";

import { Nav, NavLink, Bars } from "../HomePageComponents/HeaderComponentStyle";
import "./BarsButtonStyle";
import BarsButton from "./BarsButton";
import "./MobileHeaderComponent.css";

export const MobileHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  //taking the height of the screen
  const barsRef = useRef();

  const BarsOpen = () => (
    <>
      <Nav style={{ alignItems: "center", backgroundColor: "white" }}>
        <NavLink to="/home">
          <img
            src={require("../../media/yvonneBlack.png")}
            style={{ width: "70%" }}
          />
        </NavLink>
        <Bars onClick={() => setIsOpen(!isOpen)} style={{ color: "black" }} />
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

  return (
    <>
      <CSSTransition in={isOpen} timeout={300} classNames="transition">
        <div
          className="bars-parent"
          ref={barsRef}
          style={
            isOpen
              ? {
                  height: barsRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          {isOpen ? <BarsOpen /> : <BarsClosed />}
        </div>
      </CSSTransition>
    </>
  );
};

export default MobileHeaderComponent;
