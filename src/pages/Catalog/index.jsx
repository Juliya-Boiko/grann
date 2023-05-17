import { products } from "data/products";
import { useState } from "react";
import { Scrumbs } from "components/Scrumbs";
import { Filters } from "components/Filters";
import { Products } from "components/Products";
import { PageTitle } from "styles/common/PageTitle.styled";

const Catalog = () => {
  const [filter, setFilter] = useState('');

  const filteredItems = () => {
    return products.filter(product => product.type.includes(filter));
  };

  return (
    <>
      <Scrumbs />
      <PageTitle>Каталог</PageTitle>
      <Filters filter={filter} onClick={(id) => setFilter(id)} />
      <Products items={filteredItems()} />
    </>
  );
};

export default Catalog;