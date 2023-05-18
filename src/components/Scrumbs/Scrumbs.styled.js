import styled from "styled-components";

export const ScrumbsSection = styled.div`
  padding: 30px 10px 0 10px;
  font-size: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 20px 100px 0 100px;
  }
`;