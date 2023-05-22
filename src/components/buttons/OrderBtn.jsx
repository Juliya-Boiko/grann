import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 24px;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: 287px;
  }
`;

export const OrderBtn = ({ onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type='button'
      onClick={onClick}
    >
      Замовити
    </Button>
  );
};