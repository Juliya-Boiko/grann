import { SectionTitle } from "styles/common/SectionTitle.styled";
import { DeliverySection, DeliveryList, DeliveryItem, DeliverySubtitle } from "./Delivery.styled";
import { ReactComponent as PackIcon } from '../../assets/icons/package.svg';
import { ReactComponent as BikeIcon } from '../../assets/icons/bike.svg';
import { ReactComponent as CashIcon } from '../../assets/icons/cash.svg';

export const Delivery = () => {
  return (
    <DeliverySection id="delivery">
      <SectionTitle>Доставка і оплата</SectionTitle>
      <DeliveryList>
        <DeliveryItem>
          <PackIcon />
          <DeliverySubtitle>Самовивіз</DeliverySubtitle>
          <p>Самовивіз з Печерського р-ну, м. Київ</p>
        </DeliveryItem>
        <DeliveryItem>
          <BikeIcon />
          <DeliverySubtitle>Доставка</DeliverySubtitle>
          <p>Доставка на таксі (за тарифами служби таксі)</p>
        </DeliveryItem>
        <DeliveryItem>
          <CashIcon />
          <DeliverySubtitle>Передплата</DeliverySubtitle>
          <p>Передплата на картку в розмірі 50% від суми замовлення</p>
        </DeliveryItem>
      </DeliveryList>
    </DeliverySection>
  );
};