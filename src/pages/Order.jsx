import { Scrumbs } from "components/Scrumbs";
import { PageTitle } from "styles/common/PageTitle.styled";
import { OrderList } from "components/OrderList";
import { OrderForm } from "components/OrderForm";

const Order = () => {
  return (
    <>
      <Scrumbs />
      <PageTitle>Оформлення замовлення</PageTitle>
      <OrderList />
      <OrderForm />
    </>
  );
};

export default Order;