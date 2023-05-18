import { useParams } from 'react-router-dom';
import { products } from 'data/products';
import { Scrumbs } from 'components/Scrumbs';
import { ProductInfo } from 'components/ProductInfo';

const Product = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  

  return (
    <>
      <Scrumbs />
      <ProductInfo item={product} />
    </>
    
  );
};

export default Product;