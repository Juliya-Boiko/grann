import styled from "styled-components";
import { ReactComponent as Arrow } from '../../assets/icons/arrow-long.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 27px;
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 22px;
  overflow: hidden;
  fill: ${p => p.theme.colors.primary};
  transform: ${p => p.reversed ? 'rotate(180deg)' : 'rotate(0deg)'};
  cursor: pointer;
  transition: ${p => p.theme.transition};
  svg {
    width:42px;
    height: 8px; 
    fill: inherit;
  }
  &:disabled {
    opacity: 0.4;
  }
  &:hover, &:focus {
    transform: ${p => p.reversed ? 'rotate(180deg) scale(1.04)' : 'rotate(0deg) scale(1.04)'};
  }
`;

export const SliderBtn = ({ onClick, reversed, disabled }) => {
  return (
    <Button
      type='button'
      onClick={onClick}
      disabled={disabled}
      reversed={reversed}
    >
      <Arrow />
    </Button>
  );
};