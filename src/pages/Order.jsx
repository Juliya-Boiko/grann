import { Scrumbs } from "components/Scrumbs";
import { PageTitle } from "styles/common/PageTitle.styled";
import { OrderList } from "components/OrderList";
import { OrderForm } from "components/OrderForm";
import { OrderContent } from "components/OrderList/OrderList.styled";
import { OrderEmpty } from "components/OrderEmpty";
import { useSelector } from "react-redux";

const Order = () => {
  const { items } = useSelector(state => state.orders);

  return (
    <>
      <Scrumbs />
      <PageTitle>Оформлення замовлення</PageTitle>
      {items.length
        ? <OrderContent>
        <OrderList />
        <OrderForm />
        </OrderContent>
        : <OrderEmpty />
      }
    </>
  );
};

export default Order;