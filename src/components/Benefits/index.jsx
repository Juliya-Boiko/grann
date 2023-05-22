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
      <SectionTitle
        initial="hidden" whileInView="visible"
        transition={{ delay: 0.2, duration: 1 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
      >
        Чому саме Grann?
      </SectionTitle>
      <BenefitsWrapper>
        <BenefitsList>
          <BenefitsItem
            initial="hidden" whileInView="visible"
            transition={{ delay: 0.2, duration: 1 }}
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
          >
            <BenefitsSubtitle>ВСІ ІНГРЕДІЄНТИ СВІЖІ ТА ЯКІСНІ!</BenefitsSubtitle>
            <p>Я замовляю продукти тільки у тих постачальників, які мають сертифікати якості.</p>
          </BenefitsItem>
          <BenefitsItem
          initial="hidden" whileInView="visible"
            transition={{ delay: 0.4, duration: 1 }}
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
          >
            <BenefitsSubtitle>МОЖЛИВІСТЬ ЗАМОВИТИ ДЕСЕРТ ЗГІДНО ВАШИХ ПОБАЖАННЬ</BenefitsSubtitle>
            <p>Якщо з якихось причин ви не вживаєте окремі продукти десерту, є можливість зробити замовлення згідно ваших побажаннь.</p>
          </BenefitsItem>
          <BenefitsItem
            initial="hidden" whileInView="visible"
            transition={{ delay: 0.6, duration: 1 }}
            variants={{ hidden: { opacity: 0, x: -0 }, visible: { opacity: 1, x: 0 } }}
          >
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