import { Link } from "react-router-dom";
import styled from "styled-components";


export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  padding: 30px 10px;
  background-color: ${p => p.theme.colors.secondary};
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;
`;

export const ModalOrders = styled.div`
  margin: 0 0 40px 0;
`;

export const ModalItem = styled.div`
display: flex;
  margin: 0 0 20px 0;
`;

export const ModalInfo = styled.div`
  min-width: 170px;
  margin: 0 0 0 20px;
`;

export const ModalText = styled.p`
  margin: 0 0 ${p => p.margin ? p.margin : 0} 0;
  font-weight: 300;
  font-size: 18px;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  /* @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  } */
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;

export const ModalSummary = styled.div`
  padding: 30px 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  font-weight: 700;
`;

export const ModalTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;
`;

export const ModalLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 22px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 10px;
  overflow: hidden;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.primary};
`;