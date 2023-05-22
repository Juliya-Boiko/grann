import { SectionTitle } from "styles/common/SectionTitle.styled";
import { DeliverySection, DeliveryList, DeliveryItem, DeliverySubtitle } from "./Delivery.styled";
import { ReactComponent as PackIcon } from '../../assets/icons/package.svg';
import { ReactComponent as BikeIcon } from '../../assets/icons/bike.svg';
import { ReactComponent as CashIcon } from '../../assets/icons/cash.svg';

export const Delivery = () => {
  return (
    <DeliverySection id="delivery">
      <SectionTitle
        initial="hidden" whileInView="visible"
        transition={{ delay: 0.2, duration: 1 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
      >
        Доставка і оплата
      </SectionTitle>
      <DeliveryList>
        <DeliveryItem
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.2, duration: 1 }}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        >
          <PackIcon />
          <DeliverySubtitle>Самовивіз</DeliverySubtitle>
          <p>Самовивіз з Печерського р-ну, м. Київ</p>
        </DeliveryItem>
        <DeliveryItem
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.4, duration: 1 }}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        >
          <BikeIcon />
          <DeliverySubtitle>Доставка</DeliverySubtitle>
          <p>Доставка на таксі (за тарифами служби таксі)</p>
        </DeliveryItem>
        <DeliveryItem
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.6, duration: 1 }}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        >
          <CashIcon />
          <DeliverySubtitle>Передплата</DeliverySubtitle>
          <p>Передплата на картку в розмірі 50% від суми замовлення</p>
        </DeliveryItem>
      </DeliveryList>
    </DeliverySection>
  );
};