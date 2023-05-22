//import { Link } from "react-router-dom";
import styled from "styled-components";


export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 10px 10px 40px;
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
  right: 20px;
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

export const MenuNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 150px 0;
  a {
    &:not(:last-child) {
      margin: 0 0 30px 0;
    }
  }
`;