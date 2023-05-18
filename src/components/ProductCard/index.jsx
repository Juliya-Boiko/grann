import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Overlay } from 'styles/common/Overlay.styled';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';

import {
  ProductCardWrapper, ProductCardLink,
  ProductCardInfo, ProductCardName
} from './ProducCard.styled';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProductCard = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { id, name, price, weight, amount, imgUrl } = item;

  return (
    <div>
      <ProductCardWrapper>
        <LazyLoadImage src={require(`../../assets/images/products/${imgUrl}.png`)}
          srcSet={`${require(`../../assets/images/products/${imgUrl}@2x.png`)} 2x`}
          width="100%" height="auto"
          alt={name} effect="blur"
          onClick={() => setShowOverlay(true)}
        />
        {showOverlay
          ? <Overlay onClick={() => setShowOverlay(false)}>
            <ProductCardLink to={`/catalog/${id}`}>Детальніше</ProductCardLink>
          </Overlay>
          : null
        }
      </ProductCardWrapper>

      <ProductCardInfo>
        <div>
          <ProductCardName>{name}</ProductCardName>
          <p>{price}грн/{ weight ? `${weight}кг` : `${amount}шт`} </p>
        </div>
        <BasketIcon />
      </ProductCardInfo>
    </div>
  );
};