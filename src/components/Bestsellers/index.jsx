import { products } from "data/products";
import { useEffect, useState } from "react";
import { SectionTitle } from "styles/common/SectionTitle.styled";
import { ProductCard } from "components/ProductCard";
import { NavDots } from "./NavDots";
import { SliderBtn } from "components/buttons/SliderBtn";
import { BestsellersSection, BestsellersWrapper, BestsellersActions, BestsellersLink } from "./Bestsellers.styled";

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
      <SectionTitle
        id="bestsellers"
        initial="hidden" whileInView="visible"
        transition={{ delay: 0.2, duration: 1 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
      >
        Бестселлери
      </SectionTitle>

      <BestsellersWrapper >
        {items ? croppedItems().map((item, idx) => {
          return <ProductCard key={item.id} item={item} delay={idx} />
        }) : null }
      </BestsellersWrapper>

      <BestsellersActions>
        <SliderBtn onClick={() => setCurrentSlide(prevState => prevState - 1)} disabled={currentSlide === 0} />
        <NavDots items={items} current={currentSlide} amountOfSlides={amountOfSlides} onClick={(id) => setCurrentSlide(id)} />
        <SliderBtn onClick={() => setCurrentSlide(prevState => prevState + 1)} disabled={currentSlide === Math.ceil(items.length / amountOfSlides) - 1} reversed/>
      </BestsellersActions>

      <BestsellersLink
        to='/catalog/all'
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Переглянути весь асортимент
      </BestsellersLink>
    </BestsellersSection>
  );
};