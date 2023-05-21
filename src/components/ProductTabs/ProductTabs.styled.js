import styled from "styled-components";

export const ProductTabsContainer = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const ProductTabsWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const ProductTabsItem = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 0 0 16px 0;
  border-bottom: 4px solid ${p => p.accent ? p.theme.colors.primary : p.theme.colors.accent};
  cursor: pointer;
`;

export const ProductTabsDescr = styled.div`
  padding: 30px 0 0 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 40px 0 0 0;
  }
`;