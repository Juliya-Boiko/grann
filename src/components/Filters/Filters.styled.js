import styled from "styled-components";
import { motion } from "framer-motion";

export const FiltersSection = styled.section`
  margin: 0 0 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px;
  }
`;

export const FiltersBtn = styled(motion.button)`
  padding: 10px 30px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 100px;
  color: ${p => p.accent === "true" ? p.theme.colors.accent : 'inherit'};
  background-color: ${p => p.accent  === "true" ? p.theme.colors.primary : 'transparent'};
  transition: box-shadow 200ms ease-in-out;
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
  &:hover {
    box-shadow: inset 0px 0px 190px 80px rgba(221,213,198,0.6);
  }
`;