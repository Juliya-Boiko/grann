import { useDispatch } from 'react-redux';
import { addItem } from 'redux/ordersSlice';
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Overlay } from 'styles/common/Overlay.styled';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';
import {
  ProductCardWrapper, ProductCardLink,
  ProductCardInfo, ProductCardName, ProductCardBtn
} from './ProducCard.styled';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, options, price, amountInBox, imgUrl } = item;

  const addHandler = (item) => {
    const newItem = { ...item, totalAmount: 1 };
    dispatch(addItem(newItem));
    toast.success('Додано в кошик');
  };

  return (
    <div>
      <ProductCardWrapper>
        <LazyLoadImage src={require(`../../assets/images/products/${imgUrl}.png`)}
          srcSet={`${require(`../../assets/images/products/${imgUrl}@2x.png`)} 2x`}
          width="100%" height="auto"
          alt={name} effect="blur"
        />
        <Overlay>
          <ProductCardLink to={`/product/${id}`}>Детальніше</ProductCardLink>
        </Overlay>
      </ProductCardWrapper>

      <ProductCardInfo>
        <div>
          <ProductCardName>{name}</ProductCardName>
          <p>{options ? `${options.weight.value * price} грн/шт` : `${price} грн/${amountInBox}шт`}</p>
        </div>
        <ProductCardBtn type='button' onClick={() => addHandler(item)}><BasketIcon /></ProductCardBtn>
      </ProductCardInfo>
    </div>
  );
};