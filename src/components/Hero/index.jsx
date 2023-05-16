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
      
      <HeroContentImg></HeroContentImg>

      <HeroSocList>
        <HeroSocItem><TelegIcon /></HeroSocItem>
        <HeroSocItem><FaceIcon /></HeroSocItem>
        <HeroSocItem><InstaIcon /></HeroSocItem>
      </HeroSocList>

      <HeroLink to='/catalog'>До каталогу</HeroLink>
    </HeroSection>
  );
};