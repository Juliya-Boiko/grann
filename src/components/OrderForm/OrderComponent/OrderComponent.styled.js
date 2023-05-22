import styled from "styled-components";

export const OrderComponentWrapper = styled.div`
  position: relative;
  margin: 0 0 30px 0;
`;

export const OrderComponentInput = styled.input`
  width: 100%;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  &:disabled {
    opacity: 0.4;
  }
`;

export const OrderComponentError = styled.p`
  position: absolute;
  top: 0;
  left: 20px;
  font-weight: 700;
  font-size: 10px;
  color: red;
`;