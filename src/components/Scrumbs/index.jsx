import { Link, useParams } from "react-router-dom";
import { ScrumbsSection } from "./Scrumbs.styled";
import { products } from "data/products";

export const Scrumbs = () => {
  const params = useParams();

  const getProductName = id => products.find(product => product.id === id).name;

  return (
    <ScrumbsSection>
      <Link to='/'>Головна</Link>{' '}
      <Link to='/catalog/all'>/ Каталог</Link>
      {params.id ? ` / ${getProductName(params.id)}` : null}
    </ScrumbsSection>
  );
};