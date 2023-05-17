import styled from "styled-components";

export const PageTitle = styled.h1`
  margin: 0 auto 40px auto;
  text-align: center;
  font-family: 'Moniqa';
  font-size: 80px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 100%;
    font-size: 100px;
  }
`;