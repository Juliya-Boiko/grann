import styled from "styled-components";

export const ProductsSection = styled.section`
  padding: 0 10px 100px 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px 120px 100px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;