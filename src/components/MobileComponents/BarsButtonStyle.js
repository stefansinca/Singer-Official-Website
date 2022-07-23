import  { NavLink  as Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: white;
    width: 100%;
    height: 91%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    justify-content: center;
    flex-grow: 1;
    transition: height ease 0.3s;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-size: 2rem;
    padding: 12px;
`

export const mainDiv = `
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 3;
`
export const socialIcon = {
    margin: '10px 15px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    width: 20,
    height: 20,
  }

  export const socialDiv = {
    position: 'absolute',
    bottom: '5em'
  }
