import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { MenuContainer, MenuCloseBtn } from './Menu.styled';

export const Menu = ({ onClose }) => {
  return (
    <MenuContainer>
      <MenuCloseBtn type='button' onClick={onClose}><CloseIcon /></MenuCloseBtn>
      <nav>
        <AnchorLink href='#bestsellers' onClick={onClose}>Бестселлери</AnchorLink>
        <AnchorLink href='#delivery' onClick={onClose}>Доставка</AnchorLink>
        <AnchorLink href='#about' onClick={onClose}>Про мене</AnchorLink>
      </nav>
    </MenuContainer>
  );
}; 