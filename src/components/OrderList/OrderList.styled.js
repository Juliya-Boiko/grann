import styled from "styled-components";

export const OrderContent = styled.div`
  padding: 0 10px 40px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 60px 100px 120px 100px;
  }
`;

export const OrderListSection = styled.section`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 500px;
  }
`;

export const OrderListWrapper = styled.div`
  padding: 40px 20px 60px 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
     padding: 40px 50px 60px 50px;
  }
`;

export const OrderListSubtitle = styled.p`
  margin:  0 0 30px 0;
  font-size: 18px;
`;

export const OrderListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin:  0 0 20px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    flex-wrap: nowrap;
  }
`;

export const OrderListActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 120px;
  margin: 0 0 0 30px;
`;

export const OrderListBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  margin: 0 0 0 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;