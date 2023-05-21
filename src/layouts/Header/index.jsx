import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';
import {
  HeaderContainer, HeaderNav, HeaderLogo, HeaderActions,
  HeaderMenuBtn, HeaderBasketBtn
} from "./Header.styled";
import { HashLink } from 'react-router-hash-link';

export const Header = ({ onShowModal, onShowMenu }) => {
  const { items } = useSelector(state => state.orders);

  const filledBasket = () => {
    return items.length >= 1 ? true : false;
  };

  return (
    <HeaderContainer>
      <HeaderNav>
        <HashLink to="/#bestsellers" smooth >Бестселлери</HashLink>
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
        <HeaderMenuBtn type='button' onClick={onShowMenu}><BurgerIcon /></HeaderMenuBtn>
        <HashLink to="/#delivery" smooth >Доставка</HashLink>
        <HashLink to="/#about" smooth >Про мене</HashLink>
        <HeaderBasketBtn type='button' accent={filledBasket()} onClick={onShowModal}><BasketIcon /></HeaderBasketBtn>
      </HeaderActions>
    </HeaderContainer>
  );
};