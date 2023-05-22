import { Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { CloseBtn } from "components/buttons/CloseBtn";
import { BrandImage } from "components/BrandImage";
import { MenuContainer, MenuNav } from './Menu.styled';

const imageSize = { mobile: '182px', desktop: '0px' };

export const Menu = ({ onClose }) => {
  return (
    <MenuContainer>
      <CloseBtn onClick={onClose} fill='secondary'/>
      <MenuNav>
        <HashLink to="/#bestsellers" smooth onClick={onClose}>Бестселлери</HashLink>
        <Link to='/catalog/all' onClick={onClose}>Каталог</Link>
        <HashLink to="/#delivery" smooth onClick={onClose}>Доставка</HashLink>
        <HashLink to="/#about" smooth onClick={onClose}>Про мене</HashLink>
      </MenuNav>
      <BrandImage width={imageSize} light />
    </MenuContainer>
  );
}; 