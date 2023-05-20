//import { Link } from "react-router-dom";
import styled from "styled-components";


export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  padding: 100px 10px 10px 10px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const MenuCloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.secondary};
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;