import { SectionTitle } from "styles/common/SectionTitle.styled";
import {
  BenefitsWrapper, BenefitsContent, BenefitsList, BenefitsItem, BenefitsSubtitle,
  BenefitsImages, BenefitTitleWrapper, DeliveryList, DeliveryItem,
  DeliverySubtitle
} from "./Benefits.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as PackIcon } from '../../assets/icons/package.svg';
import { ReactComponent as BikeIcon } from '../../assets/icons/bike.svg';
import { ReactComponent as CashIcon } from '../../assets/icons/cash.svg';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <section>
        <SectionTitle>Чому саме Grann?</SectionTitle>

        <BenefitsContent>
          <BenefitsList>
            <BenefitsItem>
              <BenefitsSubtitle>ВСІ ІНГРЕДІЄНТИ СВІЖІ ТА ЯКІСНІ!</BenefitsSubtitle>
              <p>Я замовляю продукти тільки у тих постачальників, які мають сертифікати якості.</p>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitsSubtitle>МОЖЛИВІСТЬ ЗАМОВИТИ ДЕСЕРТ ЗГІДНО ВАШИХ ПОБАЖАННЬ</BenefitsSubtitle>
              <p>Якщо з якихось причин ви не вживаєте окремі продукти десерту, є можливість зробити замовлення згідно ваших побажаннь.</p>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitsSubtitle>ЗРУЧНА ВАГА ТОРТУ</BenefitsSubtitle>
              <p>Не обов'язково чекати на свято, щоб замовити смачненьке. Наша кондитерська робить мініторти і десерти.</p>
              <p>Мінімальна вага замовлення: Наполеон і медовик - від 0,5 кг. Мусові торти - від 0,8 кг.</p>
            </BenefitsItem>
          </BenefitsList>

          <BenefitsImages>
            <BenefitTitleWrapper>
              <LazyLoadImage src={require(`../../assets/images/benefits/title.png`)}
                srcSet={`${require(`../../assets/images/benefits/title@2x.png`)} 2x`}
                width={227} height='auto'
                alt='From Grann with love' effect="blur"
              />
            </BenefitTitleWrapper>
            <LazyLoadImage src={require(`../../assets/images/benefits/cake.png`)}
              srcSet={`${require(`../../assets/images/benefits/cake@2x.png`)} 2x`}
              width='100%' height='auto'
              alt='From Grann with love' effect="blur"
            />
          </BenefitsImages>
        </BenefitsContent>
      </section>
      
      <section>
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
      </section>
    </BenefitsWrapper>
  );
};