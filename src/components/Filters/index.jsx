import { offers } from "data/offers";
import { FiltersSection, FiltersBtn } from "./Filters.styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Filters = ({ filter, onClick }) => {

  return (
    <FiltersSection>
      <Swiper
        slidesPerView={"auto"}
          spaceBetween={30}
      >
        {offers.map(({ id, title }) => {
        return <SwiperSlide key={id} style={{ width: 'auto' }}><FiltersBtn accent={filter === id} type='button'  onClick={() => onClick(id)}>{title}</FiltersBtn></SwiperSlide> 
        })}
      </Swiper>
    </FiltersSection>
  );
};