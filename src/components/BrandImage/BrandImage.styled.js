import styled from "styled-components";

export const BrandImageContainer = styled.div`
  position: relative;
  width: ${p => p.width.mobile};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.width.desktop};
  }
`;

export const BrandImageWrapper = styled.div`
  position: absolute;
  width: 75%;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
`;