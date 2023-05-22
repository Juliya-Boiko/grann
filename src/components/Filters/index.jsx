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
          return <SwiperSlide key={id} style={{ width: 'auto' }}>
            <FiltersBtn
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              accent={filter === id ? "true" : "false"}
              type='button'
              onClick={() => onClick(id)}
            >
              {title}
            </FiltersBtn>
          </SwiperSlide> 
        })}
      </Swiper>
    </FiltersSection>
  );
};