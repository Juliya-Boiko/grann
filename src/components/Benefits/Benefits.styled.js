import styled from "styled-components";
import { motion } from "framer-motion";

export const BenefitsSection = styled.section`
  padding: 0 10px 100px 10px;
  text-align: center;
  line-height: 1.25;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px 120px 100px;
    text-align: start;
  }
`;

export const BenefitsWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 60px 0 0 0;
  }
`;

export const BenefitsList = styled.ul`
  padding: 0 0 100px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 500px;
    padding: 0;
  }
`;

export const BenefitsItem = styled(motion.li)`
  &:not(:last-child) {
    margin: 0 0 40px 0;
  }
`;

export const BenefitsSubtitle = styled.p`
  margin: 0 0 20px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;