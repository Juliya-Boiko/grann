import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "redux/ordersSlice";
import { DeleteBtn } from "components/buttons/DeleteBtn";
import { OrderListSection, OrderListWrapper, OrderListSubtitle,
  OrderListItem, OrderListActions } from "./OrderList.styled";

export const OrderList = () => {
  const { items } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  return <OrderListSection>
    <OrderListWrapper>
      <OrderListSubtitle>Ваше замовлення:</OrderListSubtitle>
      <ul>
        {items.map(({ id, name, price, options, totalAmount }) => {
          return <OrderListItem key={id}>
            {name}
            <OrderListActions>
              {(price * options.weight.value + options.decor.value) * totalAmount} грн
              <DeleteBtn onClick={() => dispatch(deleteItem(id))}/>
            </OrderListActions>
          </OrderListItem>
        })}
      </ul>
    </OrderListWrapper>
  </OrderListSection>
};