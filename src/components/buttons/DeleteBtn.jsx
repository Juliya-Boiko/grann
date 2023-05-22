import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as DeleteIcon } from '../../assets/icons/close.svg';

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  margin: 0 0 0 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${p => p.theme.colors.primary};
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: inherit;
  }
`;

export const DeleteBtn = ({ onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type="button"
      onClick={onClick}
    >
      <DeleteIcon />
    </Button>
  );
};