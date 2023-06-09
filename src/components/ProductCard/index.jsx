import { useDispatch } from 'react-redux';
import { addItem } from 'redux/ordersSlice';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Overlay } from 'styles/common/Overlay.styled';
import { CardBtn } from 'components/buttons/CardBtn';
import { ProductCardWrapper, ProductCardLink, ProductCardInfo, ProductCardName } from './ProducCard.styled';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProductCard = ({ item, delay }) => {
  const dispatch = useDispatch();
  const { id, name, options, price, amountInBox, imgUrl } = item;

  const addHandler = (item) => {
    const newItem = { ...item, totalAmount: 1 };
    dispatch(addItem(newItem));
    toast.success('Додано в кошик');
  };

  return (
    <motion.div
      initial="hidden" whileInView="visible"
      transition={{ delay: delay / 10, duration: 1 }}
      variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
    >
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
        <CardBtn onClick={() => addHandler(item)}/>
      </ProductCardInfo>
    </motion.div>
  );
};