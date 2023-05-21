import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 10px 0;
  height: auto;
  &:hover {
    div {
      display: flex;
    }
  }
`;

export const ProductCardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  height: 40px;
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    height: 67px;
    font-size: 18px;
  }
`;

export const ProductCardInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 12px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop})  {
    font-size: 18px;
  }
`;

export const ProductCardName = styled.p`
  margin: 0 0 10px 0;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop})  {
    font-size: 24px;
  }
`;

export const ProductCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  svg {
    min-width: 25px;
    height: 25px;
    fill: inherit;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: 30px;
      height: 30px;
    }
  }
`;