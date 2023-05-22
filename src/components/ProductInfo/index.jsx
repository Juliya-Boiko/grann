import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/ordersSlice';
import { options } from 'data/options';
import { toast } from 'react-toastify';
import { Select } from 'components/Select';
import { ProductTabs } from 'components/ProductTabs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProductInfoSection, ProductInfoContainer, ProductInfoImage, ProductInfoWrapper, 
  ProductInfoName, ProductInfoTags, ProductInfoSelects, ProductInfoOrder, 
  ProductInfoPrice, ProductInfoBtn } from './ProductInfo.styled';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProductInfo = ({ item }) => {
  const [customOptions, setCustomOptions] = useState({ type: '', decor: {title: '', value: 0 }, weight: {title: '', value: 1} });
  const dispatch = useDispatch();
  const { type, name, tags, price, imgUrl, info } = item;

  const totalPrice = () => {
    if (type === 'pies') {
      if (customOptions.weight.value) {
        return customOptions.weight.value * price + customOptions.decor.value;
      }
      return 0;
    } else {
      return price;
    } 
  };

  const orderHandler = () => {
    const newOrder = {
      ...item,
      options: { ...customOptions },
      totalAmount: 1
    };
    dispatch(addItem(newOrder));
    toast.success('Додано в кошик');
  };

  return (
    <ProductInfoSection>
      <ProductInfoContainer>
        <ProductInfoImage>
          <LazyLoadImage src={require(`../../assets/images/products/${imgUrl}.png`)}
            srcSet={`${require(`../../assets/images/products/${imgUrl}@2x.png`)} 2x`}
            width="100%" height="auto"
            alt={name} effect="blur"
          />
        </ProductInfoImage>
        
        <ProductInfoWrapper>
          <ProductInfoName>{name}</ProductInfoName>
          <ProductInfoTags>
            {tags.map((tag, idx) => {
              return <p key={idx}> - {tag}</p>
            })}
          </ProductInfoTags>

          {type === 'pies'
            ? <ProductInfoSelects>
              <Select data={options.types} select={customOptions.type} onSelect={(data) => setCustomOptions(prevState => { return {...prevState, type: data} })} />
              <Select data={options.decor} select={customOptions.decor.title} onSelect={(data) => setCustomOptions(prevState => { return {...prevState, decor: { title: data.title, value: data.value }} })} />
              <Select data={options.weights} select={customOptions.weight.title} onSelect={(data) => setCustomOptions(prevState => { return {...prevState, weight: { title: data.title, value: data.value }} })}/>
            </ProductInfoSelects>
            : null
          }
          
          <ProductInfoOrder>
            <ProductInfoPrice>{totalPrice()} грн</ProductInfoPrice>
            <ProductInfoBtn
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type='button'
              onClick={orderHandler}
            >
              Замовити
            </ProductInfoBtn>
          </ProductInfoOrder>
          
        </ProductInfoWrapper>
      </ProductInfoContainer>
      
      <ProductTabs data={info} />
    </ProductInfoSection>
  );
};