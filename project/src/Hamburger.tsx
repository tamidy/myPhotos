import React from "react";
import styled from "styled-components";

const StyledHamburger = styled.button<{ open: boolean }> `
  position: fixed;
  left: 2vw;
  top: 2.5vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  div {
      position: relative;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: black;
  }

  left: ${({ open }) => (open ? "29vw" : "2vw")};
  div {
    transition: all 0.3s linear;
    transform-origin: 1px;
  
    :first-child {
      transform: ${({ open }) =>
        (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => 
        (open ? "translateX(20px)":"translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
        (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  <StyledHamburger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger

/**References: 
 * https://javascript.plainenglish.io/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193
 * 
 */