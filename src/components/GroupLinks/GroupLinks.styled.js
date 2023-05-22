import { Link } from "react-router-dom";
import styled from "styled-components";

export const GroupLinksContainer = styled.div`
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    width: 800px;
  }
`;

export const GroupLinksItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67px;
  text-transform: uppercase;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  color: ${p => p.primary ? p.theme.colors.accent : p.theme.colors.primary};
  background-color: ${p => p.primary ? p.theme.colors.primary : p.theme.colors.accent};
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
   &:not(:last-child) {
      margin: 0 20px 0 0;
    }
  }
`;
