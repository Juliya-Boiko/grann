import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 16px;
  font-size: 16px;
  border-bottom: 1px solid ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    height: 140px;
    padding: 23px 100px 26px 100px;
    justify-content: space-between;
  }
`;

export const HeaderNav = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
  a {
    position: relative;
    &:not(:last-child) {
      margin: 0 86px 0 0;
    }
    &:hover, &:focus {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background-color: ${p => p.theme.colors.primary};
      }
    }
  }
`;

export const HeaderLogo = styled(motion(Link))`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 99px;
  height: 79px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    top: 23px;
    width: 115px;
    height: 91px;
  }
  &:hover, &:focus {
    img {
      transform: scale(1.04);
    }
  }
  img {
    width: 100%;
    height: 100%;
    transition: ${p => p.theme.transition};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  a {
    display: none;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      position: relative;
      display: inline-block;
      margin: 0 102px 0 0;
      &:hover, &:focus {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 1px;
          background-color: ${p => p.theme.colors.primary};
        }
      }
    }
  }
`;