import styled from "styled-components";

export const SectionTitle = styled.h2`
  max-width: 355px;
  margin: 0 auto 60px auto;
  text-align: center;
  font-family: 'Moniqa';
  font-size: 80px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 100%;
    font-size: 100px;
  }
`;