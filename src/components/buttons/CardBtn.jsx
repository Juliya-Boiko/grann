import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  svg {
    min-width: 25px;
    height: 25px;
    fill: inherit;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CardBtn = ({ onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type='button'
      onClick={onClick}
    >
      <BasketIcon />
    </Button>
  );
};