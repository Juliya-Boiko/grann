import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Button = styled(motion.button)`
  position: absolute;
  top: 30px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.fill === 'primary' ? p.theme.colors.primary : p.theme.colors.accent};
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;

export const CloseBtn = ({ onClick, fill }) => {
  return (
    <Button
      fill={fill}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type='button'
      onClick={onClick}
    >
      <CloseIcon />
    </Button>
  );
};