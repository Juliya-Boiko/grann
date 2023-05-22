import styled from "styled-components";

export const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10px 30px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 120px 100px;
  }
`;

export const ProcessText = styled.p`
  margin: 0 0 30px 0;
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 660px;
    margin: 0 0 80px 0;
    font-size: 24px;
  }
`;