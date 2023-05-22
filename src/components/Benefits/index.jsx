import { SectionTitle } from "styles/common/SectionTitle.styled";
import { BrandImage } from "components/BrandImage";
import { BenefitsSection, BenefitsWrapper, BenefitsList, BenefitsItem, BenefitsSubtitle } from "./Benefits.styled";

const imageSize = {
  mobile: '100%',
  desktop: '600px'
};

export const Benefits = () => {
  return (
    <BenefitsSection>
      <SectionTitle>Чому саме Grann?</SectionTitle>
      <BenefitsWrapper>
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
        <BrandImage width={imageSize} />
      </BenefitsWrapper>
    </BenefitsSection>
  );
};