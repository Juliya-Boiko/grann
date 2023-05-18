import { useEffect, useState } from "react";
import { ProductCalcContainer, ProductCalcActions, ProductCalcBtn, ProductCalcAmount } from "./ProductCals.styled";

export const ProductCalc = ({ price, amount, onClick }) => {
  const [total, setTotal] = useState(1);

  useEffect(() => {
    onClick(price * total);
  }, [total, price, onClick]);

  return (
    <ProductCalcContainer>
      <p>{price} грн/{amount}шт</p>
      <ProductCalcActions>
        <ProductCalcBtn type='button' disabled={total < 2} onClick={() => setTotal(prevState => prevState - 1)}>-</ProductCalcBtn>
        <ProductCalcAmount>{total}</ProductCalcAmount>
        <ProductCalcBtn type='button' onClick={() => setTotal(prevState => prevState + 1)}>+</ProductCalcBtn>
      </ProductCalcActions>
    </ProductCalcContainer>
  );
};