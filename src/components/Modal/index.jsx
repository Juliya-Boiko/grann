import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { CloseBtn } from 'components/buttons/CloseBtn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ModalContainer, ModalOrders, ModalItem, ModalInfo, ModalText, 
  ModalWrapper, ModalContent, ModalSummary, ModalTotal, ModalOrderBtn } from "./Modal.styled";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Modal = ({ onClose }) => {
  const { items } = useSelector(state => state.orders);
  const navigate = useNavigate();

  const totalOrder = items.reduce((acc, { price, options }) => {
    return acc + (price * options.weight.value + options.decor.value);
  }, 0);

  const orderHandler = () => {
    if (items.length) {
      navigate('/order');
      onClose();
    } else {
      toast.warn('Кошик порожній!')
    }
  };

  return (
    <ModalContainer>
      <CloseBtn onClick={onClose} fill='primary'/>
      <ModalWrapper>
        <ModalText>Ваше замовлення:</ModalText>
      </ModalWrapper>

      <ModalContent>
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
          <ModalOrderBtn
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type='button'
            onClick=
            {orderHandler}
          >
            Оформити
          </ModalOrderBtn>
        </ModalSummary>
      </ModalContent>
      
    </ModalContainer>
  );
};