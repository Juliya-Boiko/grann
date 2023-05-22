import { products } from "data/products";
import { useEffect, useState } from "react";
import { SectionTitle } from "styles/common/SectionTitle.styled";
import { ProductCard } from "components/ProductCard";
import { NavDots } from "./NavDots";
import { ReactComponent as Arrow } from '../../assets/icons/arrow-long.svg';
import { BestsellersSection, BestsellersWrapper, BestsellersActions, BestsellersNavBtn, BestsellersLink } from "./Bestsellers.styled";

export const Bestsellers = () => {
  const [amountOfSlides, setAmountOfSlides] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);

  const amountOfSlidesHandler = (width) => {
    width <= 1439 ? setAmountOfSlides(2) : setAmountOfSlides(3);
  };

  const croppedItems = () => {
    return items.slice(currentSlide*amountOfSlides, (currentSlide + 1)*amountOfSlides);
  };

  useEffect(() => {
    const sorted = products.sort((a, b) => b.amountOfOrders - a.amountOfOrders);
    setItems(sorted);
    amountOfSlidesHandler(window.innerWidth);
  }, [items]);

  return (
    <BestsellersSection >
      <SectionTitle id="bestsellers">Бестселлери</SectionTitle>

      <BestsellersWrapper >
        {items ? croppedItems().map((item) => {
          return <ProductCard key={item.id} item={item} />
        }) : null }
      </BestsellersWrapper>

      <BestsellersActions>
        <BestsellersNavBtn type='button' onClick={() => setCurrentSlide(prevState => prevState - 1)} disabled={currentSlide === 0}><Arrow /></BestsellersNavBtn>
        <NavDots items={items} current={currentSlide} amountOfSlides={amountOfSlides} onClick={(id) => setCurrentSlide(id)} />
        <BestsellersNavBtn type='button' onClick={() => setCurrentSlide(prevState => prevState + 1)} disabled={currentSlide === Math.ceil(items.length / amountOfSlides) - 1} reversed><Arrow /></BestsellersNavBtn>
      </BestsellersActions>

      <BestsellersLink to='/catalog/all'>Переглянути весь асортимент</BestsellersLink>
    </BestsellersSection>
  );
};