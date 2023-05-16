import styled from "styled-components";
import bgiMobile from '../../assets/images/benefits/bgi-mobile.png';
import bgiDesktop from '../../assets/images/benefits/bgi-desktop.png';

export const BenefitsWrapper = styled.div`
  padding: 30px 0 110px 0;
  text-align: center;
  line-height: 1.25;
  background-image: url(${bgiMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px 160px 100px;
    background-image: url(${bgiDesktop});
  }
`;

export const BenefitsContent = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0 0 120px 0;
  }
`;

export const BenefitsList = styled.ul`
  margin: 0 0 160px 0;
  padding: 0 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 500px;
    margin: 0;
    padding: 0;
  }
`;

export const BenefitsItem = styled.li`
  &:not(:last-child) {
    margin: 0 0 40px 0;
  }
`;

export const BenefitsSubtitle = styled.p`
  margin: 0 0 20px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const BenefitsImages = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 100px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 605px;
    margin: 0;
  }
`;

export const BenefitTitleWrapper = styled.div`
  position: absolute;
  top: -73px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DeliveryItem = styled.li`
  max-width: 290px;
  padding: 40px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #DDD5C6;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
    &:not(:last-child) {
      margin: 0 60px 0 0;
      border: none;
    }
  }
  svg {
    margin: 0 0 30px 0;
  }
`;

export const DeliverySubtitle = styled.p`
  text-transform: uppercase;
  margin: 0 0 10px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;