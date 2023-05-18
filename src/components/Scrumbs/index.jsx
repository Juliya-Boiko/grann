import { Link, useLocation, useParams } from "react-router-dom";
import { ScrumbsSection } from "./Scrumbs.styled";
import { products } from "data/products";

export const Scrumbs = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const scrumbs = pathname.split('/');

  const setRoute = (name) => {
    if (name === 'catalog') {
      return 'Каталог'
    }
  };

  const getProductName = id => products.find(product => product.id === id).name;

  return (
    <ScrumbsSection>
      <Link to='/'>Головна</Link>{' / '}
      <Link to='/catalog'>{setRoute(scrumbs[1])}</Link> 
      {params.id ? ` / ${getProductName(params.id)}` : null}
    </ScrumbsSection>
  );
};