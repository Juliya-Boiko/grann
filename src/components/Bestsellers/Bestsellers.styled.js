import { Link } from "react-router-dom";
import styled from "styled-components";

export const BestsellersSection = styled.section`
  padding: 100px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 120px 100px;
  }
`;

export const BestsellersWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    margin: 0 -15px 80px -15px;
  }
`;

export const BestsellersActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 80px 0;
  }
`;

export const BestsellersNavBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 27px;
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 22px;
  overflow: hidden;
  fill: ${p => p.theme.colors.primary};
  transform: ${p => p.reversed ? 'rotate(180deg)' : 'rotate(0deg)'};
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
  svg {
    width:42px;
    height: 8px; 
    fill: inherit;
  }
`;

export const BestsellersLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67px;
  padding: 0 30px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 604px;
  }
`;