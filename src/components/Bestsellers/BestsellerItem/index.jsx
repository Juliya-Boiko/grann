import { useState } from 'react';
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket.svg';
import {
  BestsellerItemCard, BestsellerItemWrapper,
  BestsellerItemLink, BestsellerItemDescr, BestsellerItemName
} from "./BestsellerItem.styled";
import { Overlay } from 'styles/common/Overlay.styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const BestsellerItem = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { id, name, price, weight, amount, imgUrl } = item;
  
  return (
    <BestsellerItemCard>
      <BestsellerItemWrapper>
        <LazyLoadImage src={require(`../../../assets/images/products/${imgUrl}.png`)}
          srcSet={`${require(`../../../assets/images/products/${imgUrl}@2x.png`)} 2x`}
          width="100%" height="auto"
          alt={name} effect="blur"
          onClick={() => setShowOverlay(true)}
        />
        {showOverlay
          ? <Overlay onClick={() => setShowOverlay(false)}>
            <BestsellerItemLink to='/catalog'>Детальніше</BestsellerItemLink>
          </Overlay>
          : null
        }
      </BestsellerItemWrapper>
      
      <BestsellerItemDescr>
        <div>
          <BestsellerItemName>{name}</BestsellerItemName>
          <p>{price}грн/{ weight ? `${weight}кг` : `${amount}шт`} </p>
        </div>
        <BasketIcon />
      </BestsellerItemDescr>
    </BestsellerItemCard>
  );
};