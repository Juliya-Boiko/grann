import { Form } from 'formik';
import styled from 'styled-components';

export const OrderFormContainer = styled(Form)`
  padding: 40px 0 0 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 500px;
    padding: 0;
  }
`;

export const OrderFormSubtitle = styled.h3`
  margin: 0 0 20px 0;
  font-weight: 300;
  font-size: 18px;
`;

export const OrderFormLabel = styled.label`
  display: flex;
  margin: 0 0 20px 0;
  cursor: pointer;
  input {
    margin: 0 20px 0 0;
  }
`;

export const OrderFormAddress = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 0 30px 0;
  input {
    margin: 0;
  }
`;

export const OrderFormComment = styled.textarea`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 180px;
  margin: 0 0 30px 0;
  padding: 10px 30px;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  resize: none;
`;

export const OrderFormTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;
  padding: 20px 0 0 0;
  border-top: 1px solid ${p => p.theme.colors.accent};
  font-size: 18px;
`;

export const OrderFormPrice = styled.span`
  font-weight: 700;
`;

export const OrderFormBtn = styled.button`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  color: inherit;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
`;