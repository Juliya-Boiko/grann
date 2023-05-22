import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { BasketBtn } from "components/buttons/BasketBtn";
import { MenuBtn } from "components/buttons/MenuBtn";
import { HeaderContainer, HeaderNav, HeaderLogo, HeaderActions } from "./Header.styled";
import { HashLink } from 'react-router-hash-link';

export const Header = ({ onShowModal, onShowMenu }) => {
  const { items } = useSelector(state => state.orders);

  return (
    <HeaderContainer>
      <HeaderNav>
        <HashLink to="/#bestsellers" smooth>Бестселлери</HashLink>
        <Link to='/catalog/all'>Каталог</Link>
      </HeaderNav>

      <HeaderLogo to='/'>
        <picture>
          <source
            srcSet={`${require('../../assets/images/logo/header/logo.webp')} 1x, ${require('../../assets/images/logo/header/logo@2x.webp')} 2x,`}
            type="image/webp" />
          <img
            src={require('../../assets/images/logo/header/logo.png')} alt="Logo"
            srcSet={`${require('../../assets/images/logo/header/logo@2x.png')} 2x`} />
        </picture>
      </HeaderLogo>

      <HeaderActions>
        <MenuBtn onClick={onShowMenu} />
        <HashLink to="/#delivery" smooth >Доставка</HashLink>
        <HashLink to="/#about" smooth >Про мене</HashLink>
        <BasketBtn length={items.length} onClick={onShowModal}/>
      </HeaderActions>
    </HeaderContainer>
  );
};