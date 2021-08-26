import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import CSS from 'csstype';
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Albums from "./Albums";

const StyledMenu = styled.nav<{ open: boolean }>`
    background-color: #2b2d42;
    top: 0;
    left: 0;
    height: 100vh;
    width: 35vw;
    position: fixed;
    z-index: 1;
    padding: 10rem 0;
    flex-direction: column;
    box-shadow: 0 3px 20px grey;
    display: ${({ open }) => (open ? "flex" : "none")};

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" :"translateX(-100%)")};
`;

const StyledLink = styled.a`
    padding: 0 2rem;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: #f7f7f9;

    :hover {
        color: grey;
        cursor: pointer;
        text-decoration: underline;
    }
`;

/*
const LinkStyles: CSS.Properties = {
  color: '#f7f7f9',
  
};*/

const HomeLink = withRouter(({ history }) => (
  <StyledLink href="" onClick={() => { history.push('/') }}>Home</StyledLink>
))

const PhotosLink = withRouter(({ history }) => (
  <StyledLink href="" onClick={() => { history.push('/photos') }}>All Photos</StyledLink>
))

const AlbumsLink = withRouter(({ history }) => (
  <StyledLink href="" onClick={() => { history.push('/albums') }}>Albums</StyledLink>
))

const AccountLink = withRouter(({ history }) => (
  <StyledLink href="" onClick={() => { history.push('/account') }}>Account</StyledLink>
))


const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div>
      <StyledMenu open={open}>
        <a onClick={() => close()}><HomeLink /></a>
        <a onClick={() => close()}><PhotosLink /></a>
        <a onClick={() => close()}><AlbumsLink /></a>
        <a onClick={() => close()}><AccountLink /></a>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
     </div>
   );
};

export default Menu

/**References: 
 * https://javascript.plainenglish.io/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193
 * https://fettblog.eu/typescript-react/styles/
 * https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 */