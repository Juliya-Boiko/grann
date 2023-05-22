import styled from "styled-components";

export const ScrumbsSection = styled.div`
  padding: 30px 10px;
  font-size: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 20px 100px 0 100px;
  }
  a {
    position: relative;
    &:hover, &:focus {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background-color: ${p => p.theme.colors.primary};
      }
    }
  }
`;