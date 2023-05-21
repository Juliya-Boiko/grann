import styled from "styled-components";

export const NavDotsWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const NavDotsItem = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${p => p.accent ? p.theme.colors.primary : p.theme.colors.accent};
  cursor: pointer;
  &:not(:last-child) {
    margin: 0 20px 0 0;
  }
`;