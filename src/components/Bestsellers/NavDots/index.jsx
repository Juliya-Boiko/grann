import { useEffect, useState } from "react";
import { NavDotsWrapper, NavDotsItem } from "./NavDots.styled";

export const NavDots = ({ items, current, amountOfSlides, onClick }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const dotsAmount = Math.ceil(items.length / amountOfSlides);
    const dotsArr = [];
    for (let index = 0; index < dotsAmount; index++) {
      dotsArr.push(index);
    }
    setDots(dotsArr);
  }, [items.length, amountOfSlides]);

  return (
    <NavDotsWrapper>
      {dots.map((item) => {
        return <NavDotsItem
          key={item}
          accent={current === item}
          onClick={() => onClick(item)}
        />
      })}
    </NavDotsWrapper>
  );
};