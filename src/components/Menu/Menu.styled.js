import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";

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

export const MenuNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 150px 0;
  /* a {
    &:not(:last-child) {
      margin: 0 0 30px 0;
    }
  } */
`;

export const MenuHash = styled(motion(HashLink))`
  cursor: pointer;
  &:not(:last-child) {
    margin: 0 0 30px 0;
  }
`;

export const MenuLink = styled(motion(Link))`
  margin: 0 0 30px 0;
`;