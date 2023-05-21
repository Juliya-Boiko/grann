import { OrderEmptySection, OrderEmptyText } from "./OrderEmpty.styled";
import { GroupLinks } from "components/GroupLinks";

export const OrderEmpty = () => {
  return (
    <OrderEmptySection>
      <OrderEmptyText>Для оформлення замовлення потрібно обрати товар</OrderEmptyText>
      <GroupLinks />
    </OrderEmptySection>
  );
}