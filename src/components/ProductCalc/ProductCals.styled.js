import styled from "styled-components";


export const ProductCalcContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin: 0 0 30px 0;
`;

export const ProductCalcActions = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductCalcBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export const ProductCalcAmount = styled.span`
  width: 25px;
  text-align: center;
  margin: 0 10px;
  font-size: 24px;
`;