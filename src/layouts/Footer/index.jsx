import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TelegIcon } from '../../assets/icons/telegram.svg';
import { ReactComponent as WhatsIcon } from '../../assets/icons/facebook.svg';
import {
  FooterContainer, FooterLogo, FooterContacts, FooterAddress, FooterLink,
  FooterSocList, FooterSocItem, FooterInfo
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo to='/'>
        <picture>
          <source
            srcSet={`${require('../../assets/images/logo/footer/logo.webp')} 1x, ${require('../../assets/images/logo/footer/logo@2x.webp')} 2x,`}
            type="image/webp" />
          <img
            src={require('../../assets/images/logo/footer/logo.png')} alt="Logo"
            srcSet={`${require('../../assets/images/logo/footer/logo@2x.png')} 2x`} />
        </picture>
      </FooterLogo>

      <FooterContacts>
        <FooterAddress>с. Хотів, вул. Партизанська 1А</FooterAddress>
        <FooterLink href="mailto:kostromaganna@gmail.com">Email: kostromaganna@gmail.com</FooterLink>
        <FooterLink href="tel:++380999876240">Tel: +38(099) 987 62 40</FooterLink>
      </FooterContacts>
      
      <div>
        <FooterSocList>
          <FooterSocItem><InstaIcon /></FooterSocItem>
          <FooterSocItem><TelegIcon /></FooterSocItem>
          <FooterSocItem><WhatsIcon /></FooterSocItem>
        </FooterSocList>
        <FooterInfo>Політика конфіденційності</FooterInfo>
        <FooterInfo>Договір оферти</FooterInfo>
      </div>
      
    </FooterContainer>
  );
};