import { useSelector } from 'react-redux';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  ModalContainer, ModalWrapper, ModalOrders, ModalItem, ModalInfo,
  ModalText, ModalCloseBtn,
  ModalSummary, ModalTotal, ModalLink
} from "./Modal.styled";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Modal = ({ onClose }) => {
  const { items } = useSelector(state => state.orders);

  const totalOrder = items.reduce((acc, { price, options }) => {
    return acc + (price * options.weight.value + options.decor.value);
  }, 0)
  // const total = items.reduce((acc, { customOptions, baseOptions, price, totalAmount }) => {
  //   if (customOptions) {
  //     return acc + customOptions.price * totalAmount;
  //   }
  //   if (baseOptions) {
  //     return acc + baseOptions.weight * price * totalAmount
  //   }
  //   return acc + price * totalAmount;
  // }, 0);

  console.log(totalOrder);

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalText>Ваше замовлення:</ModalText>
        <ModalCloseBtn type='button' onClick={onClose}><CloseIcon /></ModalCloseBtn>
      </ModalWrapper>

      <ModalOrders>
        {items.map(({ id, name, options, imgUrl }) => {
          return <ModalItem key={id}>
            <LazyLoadImage src={require(`../../assets/images/products/${imgUrl}.png`)}
              srcSet={`${require(`../../assets/images/products/${imgUrl}@2x.png`)} 2x`}
              width="100%" height="auto"
              alt={name} effect="blur"
            />
            <ModalInfo>
              <ModalText margin='10px'>{name}</ModalText>
              {options.type ? <p>Вид: {options.type}</p> : null}
              <p>Декор: {options.decor.title}</p>
              <p>Вага: {options.weight.title}</p>
            </ModalInfo>
          </ModalItem>
        })}
      </ModalOrders>

      <ModalSummary>
        <ModalText margin='30px'>Ваше замовлення:</ModalText>
        <ModalTotal>
          <span>Загальна сума:</span>
          <span>{totalOrder} грн</span>
        </ModalTotal>
        <ModalLink to="/order" onClick={onClose}>Оформити</ModalLink>
      </ModalSummary>
    </ModalContainer>
  );
};