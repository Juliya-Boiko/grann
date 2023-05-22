import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BestsellersSection = styled.section`
  padding: 100px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 120px 100px;
  }
`;

export const BestsellersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  margin: 0 0 40px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
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

export const BestsellersLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67px;
  margin: 0 auto;
  padding: 0 30px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 604px;
  }
`;