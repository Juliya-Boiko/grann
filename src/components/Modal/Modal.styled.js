import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 100;
  padding: 30px 10px;
  background-color: ${p => p.theme.colors.secondary};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 40px 100px;
  }
`;

export const ModalWrapper = styled.div`
  margin: 0 0 40px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 80px 0;
  }
`;

export const ModalContent = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ModalOrders = styled.div`
  margin: 0 0 40px 0;
`;

export const ModalItem = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 650px;
  }
`;

export const ModalInfo = styled.div`
  min-width: 170px;
  margin: 0 0 0 20px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 300px;
  }
`;

export const ModalText = styled.p`
  margin: 0 0 ${p => p.margin ? p.margin : 0} 0;
  font-weight: 300;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const ModalSummary = styled.div`
  padding: 30px 20px;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  font-weight: 700;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 320px;
  }
`;

export const ModalTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;
`;

export const ModalOrderBtn = styled(motion.button)`
  display: inline-block;
  width: 100%;
  padding: 22px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
`;