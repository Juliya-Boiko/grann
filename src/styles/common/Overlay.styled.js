import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(112, 90, 102, 0.2), rgba(112, 90, 102, 0.2));
`;