import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px 120px 30px;
  text-align: center;
  font-size: 18px;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
  }
`;

export const FooterLogo = styled(motion(Link))`
  width: 255px;
  height: 201px;
  margin: 0 0 40px 0;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const FooterContacts = styled.div`
  margin: 0 0 40px 0;
`;

export const FooterAddress = styled.address`
  margin: 0 0 20px 0;
  font-style: normal;
`;

export const FooterLink = styled.a`
  display: block;
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;

export const FooterSocList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 0 40px 0;
`;

export const FooterSocItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  fill: ${p => p.theme.colors.white};
  &:not(:last-child) {
    margin: 0 40px 0 0;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: inherit;
  }
`;

export const FooterInfo = styled.p`
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;