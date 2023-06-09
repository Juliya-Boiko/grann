import styled from "styled-components";
import { motion } from "framer-motion";

export const FaqSection = styled.section`
  padding: 100px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop})  {
    padding: 120px 200px;
  }
`;

export const FaqLabel= styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0;
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FaqQuestion = styled.p`
  max-width: 260px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.3;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
    max-width: 860px;
  }
`;

export const FaqAnswer = styled.div`
  padding: 20px 0 0 0;
  line-height: 1.4;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;