import styled from "styled-components";

export const DeliverySection = styled.section`
  padding: 0 10px 100px 10px;
  line-height: 1.25;
`;

export const DeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DeliveryItem = styled.li`
  position: relative;
  max-width: 290px;
  &:not(:last-child) {
    margin: 0 0 80px 0;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -40px;
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${p => p.theme.colors.complementary.accent};
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
    &:not(:last-child) {
      margin: 0 60px 0 0;
      &::after {
        display: none;
      }
    }
  }
  svg {
    margin: 0 0 30px 0;
  }
`;

export const DeliverySubtitle = styled.p`
  text-transform: uppercase;
  margin: 0 0 10px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;