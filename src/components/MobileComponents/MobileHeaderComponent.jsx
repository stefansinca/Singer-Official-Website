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
            alt='logo'
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
            alt='logo'
          />
        </NavLink>
        <Bars onClick={() => setIsOpen(!isOpen)} />
      </Nav>
    </>
  );

  return (
    <>
      {/* CSSTransition hold the whole functionality and I use it for being able to apply transition to all components */}
       <CSSTransition in={isOpen} timeout={300} classNames="transition">
        <div
          ref={barsRef} // passing the UseRef Hook refference
          style={
            // if user Mobile Menu (Bars) is open, take only the height that you need to display the menu without scrooling
            isOpen
              ? {
                  height: barsRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          {/* if Mobile Menu is open, then display <BarsOpen/> which is the Mobile Menu, 
          otherwise display <BarsClosed /> which is the page rendered without the Mobile Menu */}
          {isOpen ? <BarsOpen /> : <BarsClosed />}
        </div>
       </CSSTransition>
      
    </>
  );
};

export default MobileHeaderComponent;
