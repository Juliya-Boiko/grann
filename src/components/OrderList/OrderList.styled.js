import styled from "styled-components";

export const OrderListSection = styled.section`
  padding: 0 10px 40px 10px;
`;

export const OrderListWrapper = styled.div`
  padding: 40px 20px 60px 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
`;

export const OrderListSubtitle = styled.p`
  margin:  0 0 30px 0;
  font-size: 18px;
`;

export const OrderListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin:  0 0 20px 0;
  }
`;

export const OrderListActions = styled.div`
  display: flex;
  align-items: center;
  min-width: 110px;
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