import { Link } from "react-router-dom";
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';
import {
  HeaderContainer, HeaderNav, HeaderLogo, HeaderActions,
  HeaderMenuBtn, HeaderBasketBtn
} from "./Header.styled";
import { useSelector } from "react-redux";

export const Header = () => {
  const { items } = useSelector(state => state.orders);

  const filledBasket = () => {
    return items.length >= 1 ? true : false;
  };

  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to="/">Бестселлери</Link>
        <Link to='/catalog'>Каталог</Link>
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
        <HeaderMenuBtn type='button'><BurgerIcon /></HeaderMenuBtn>
        <Link to="/">Доставка</Link>
        <Link to="/">Про мене</Link>
        <HeaderBasketBtn type='button' accent={filledBasket()}><BasketIcon /></HeaderBasketBtn>
      </HeaderActions>
    </HeaderContainer>
  );
};