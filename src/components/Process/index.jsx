import { PageTitle } from "styles/common/PageTitle.styled";
import {
  ProcessSection, ProcessImages, ProcessWrapper,
  ProcessLink, ProcessText, ProcessActions
} from "./ProcessSection.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Process = () => {

  return (
    <ProcessSection>
      <ProcessImages>
        <ProcessWrapper>
          <LazyLoadImage src={require(`../../assets/images/benefits/title.png`)}
            srcSet={`${require(`../../assets/images/benefits/title@2x.png`)} 2x`}
            width='100%' height='auto'
            alt='From Grann with love' effect="blur"
          />
        </ProcessWrapper>
        <LazyLoadImage src={require(`../../assets/images/benefits/cake.png`)}
          srcSet={`${require(`../../assets/images/benefits/cake@2x.png`)} 2x`}
          width='100%' height='auto'
          alt='From Grann with love' effect="blur"
        />
      </ProcessImages>
      <PageTitle>Дякую за замовлення!</PageTitle>
      <ProcessText>Ваше замовлення прийняте в обробку та незабаром вам зателефонує менеджер для уточнення деталей</ProcessText>
      <ProcessActions>
        <ProcessLink to='/'>На головну</ProcessLink>
        <ProcessLink to='/catalog/all' primary>продовжити покупки</ProcessLink>
      </ProcessActions>
      
    </ProcessSection>
  );
};