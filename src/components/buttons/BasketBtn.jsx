import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';

const Button = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 30px;
    height: 30px;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: inherit;
  }
  &::after {
    content: '';
    display: ${p => p.accent === "true" ? 'block' : 'none'};
    width: 10px;
    height: 10px;
    background-color: lightgreen;
    position: absolute;
    z-index: 2;
    top: -4px;
    right: -5px;
    border-radius: ${p => p.theme.borderRadius};
    overflow: hidden;
  }
`;

export const BasketBtn = ({ length, onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type='button'
      accent={length >= 1 ? "true" : "false"}
      onClick={onClick}
    >
      <BasketIcon />
    </Button>
  );
};