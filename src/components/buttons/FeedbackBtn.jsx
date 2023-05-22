import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  width: 100%;
  height: 67px;
  text-transform: uppercase;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export const FeedbackBtn = ({ disabled }) => {
  return (
    <Button
      type='submit'
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Надіслати
    </Button>
  );
};