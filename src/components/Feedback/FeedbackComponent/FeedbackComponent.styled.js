import styled from "styled-components";

export const FeedbackComponentWrapper = styled.div`
  position: relative;
  margin: 0 0 20px 0;
`;

export const FeedbackComponentInput = styled.input`
  width: 100%;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.secondary};
  outline: ${p => p.accentOutline ? '1px solid red' : 'none' };
`;

export const FeedbackComponentError = styled.p`
  position: absolute;
  top: 0;
  left: 20px;
  font-weight: 700;
  color: red;
`;