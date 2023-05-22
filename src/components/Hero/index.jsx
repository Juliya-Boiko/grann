import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TelegIcon } from '../../assets/icons/telegram.svg';
import { ReactComponent as FaceIcon } from '../../assets/icons/facebook.svg';
import { HeroSection, HeroTitleWrapper, HeroTitle, HeroContentImg, HeroSocList, HeroSocItem, HeroLink } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroTitleWrapper>
        <HeroTitle>grann</HeroTitle>
        <p>авторські десерти</p>
      </HeroTitleWrapper>
      <HeroContentImg />
      <HeroSocList>
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><TelegIcon /></HeroSocItem>
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><FaceIcon /></HeroSocItem>
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><InstaIcon /></HeroSocItem>
      </HeroSocList>
      <HeroLink to='/catalog/all'>До каталогу</HeroLink>
    </HeroSection>
  );
};