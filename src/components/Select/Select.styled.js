import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 288px;
  font-size: 18px;
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin: 0 20px 20px 0;
    }
  }
`;

export const SelectLabel = styled.div`
height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SelectOptions = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  left: 0;
  z-index: 5;
  width: 100%;
  padding: 10px 30px 30px 30px;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
`;

export const SelectText = styled.p`
  cursor: pointer;
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;