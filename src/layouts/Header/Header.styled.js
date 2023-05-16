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
    &:not(:last-child) {
      margin: 0 86px 0 0;
    }
  }
`;

export const HeaderLogo = styled(Link)`
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
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  a {
    display: none;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      display: inline-block;
      margin: 0 102px 0 0;
    }
  }
`;

export const HeaderMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 37px;
  margin: 0 20px 0 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;

export const HeaderBasketBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 30px;
    height: 30px;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: inherit;
  }
`;