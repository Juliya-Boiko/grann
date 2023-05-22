import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 37px;
  margin: 0 20px 0 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;

export const MenuBtn = ({ onClick }) => {
  return (
    <Button
      type='button'
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <BurgerIcon />
    </Button>
  );
};