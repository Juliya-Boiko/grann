import { Link } from "react-router-dom";
import styled from "styled-components";

export const OffersSection = styled.section`
  padding: 120px 10px 50px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 150px 100px;
  }
`;

export const OffersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: -50px;
  }
`;

export const OffersItem = styled.li`
  position: relative;
  @media screen and (max-width: 1439px) {
    &:not(:last-child) {
      margin: 0 0 65px 0;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: calc((100% - 200px)/ 2 );
    margin: 50px;
  }
`;

export const OffersLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: -30px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 276px;
  height: 67px;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
`;