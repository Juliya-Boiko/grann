import { ProductsSection } from "./Products.styled";
import { ProductCard } from "components/ProductCard";

export const Products = ({ items }) => {

  return (
    <ProductsSection>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item}/>
      })}
    </ProductsSection>
  );
}