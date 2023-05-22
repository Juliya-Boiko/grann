import { CloseBtn } from "components/buttons/CloseBtn";
import { BrandImage } from "components/BrandImage";
import { MenuContainer, MenuNav, MenuHash, MenuLink } from './Menu.styled';

const imageSize = { mobile: '182px', desktop: '0px' };

export const Menu = ({ onClose }) => {
  return (
    <MenuContainer>
      <CloseBtn onClick={onClose} fill='secondary'/>
      <MenuNav>
        <MenuHash whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} to="/#bestsellers" smooth onClick={onClose}>Бестселлери</MenuHash>
        <MenuLink whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} to='/catalog/all' onClick={onClose}>Каталог</MenuLink>
        <MenuHash whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} to="/#delivery" smooth onClick={onClose}>Доставка</MenuHash>
        <MenuHash whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} to="/#about" smooth onClick={onClose}>Про мене</MenuHash>
      </MenuNav>
      <BrandImage width={imageSize} light />
    </MenuContainer>
  );
}; 