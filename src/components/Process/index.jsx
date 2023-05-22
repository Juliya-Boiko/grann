import { PageTitle } from "styles/common/PageTitle.styled";
import { BrandImage } from "components/BrandImage";
import { GroupLinks } from "components/GroupLinks";
import { ProcessSection, ProcessText } from "./ProcessSection.styled";

const imageSize = {
  mobile: '170px',
  desktop: '190px'
};

export const Process = () => {
  return (
    <ProcessSection>
      <BrandImage width={imageSize} />
      <PageTitle>Дякую за замовлення!</PageTitle>
      <ProcessText>Ваше замовлення прийняте в обробку та незабаром вам зателефонує менеджер для уточнення деталей</ProcessText>
      <GroupLinks />
    </ProcessSection>
  );
};