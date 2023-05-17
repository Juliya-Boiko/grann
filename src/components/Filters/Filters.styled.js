import styled from "styled-components";

export const FiltersSection = styled.section`
  margin: 0 0 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px;
  }
`;

export const FiltersBtn = styled.button`
  padding: 10px 30px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 100px;
  color: ${p => p.accent ? p.theme.colors.accent : 'inherit'};
  background-color: ${p => p.accent ? p.theme.colors.primary : 'transparent'};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;