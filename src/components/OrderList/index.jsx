import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "redux/ordersSlice";
import {
  OrderListSection, OrderListWrapper, OrderListSubtitle,
  OrderListItem, OrderListActions, OrderListBtn
} from "./OrderList.styled";
import { ReactComponent as DeleteIcon } from '../../assets/icons/close.svg';

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
             <OrderListBtn type="button" onClick={() => dispatch(deleteItem(id))}><DeleteIcon /></OrderListBtn>
            </OrderListActions>
          </OrderListItem>
        })}
      </ul>
    </OrderListWrapper>
  </OrderListSection>
};