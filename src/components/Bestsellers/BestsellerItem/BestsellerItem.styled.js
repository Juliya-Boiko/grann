import { Link } from "react-router-dom";
import styled from "styled-components";

export const BestsellerItemCard = styled.div`
  margin: 0 0 40px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: calc((100% - 90px) / 3);
    margin: 0 15px;
    font-size: 18px;
  }
`;

export const BestsellerItemWrapper = styled.div`
  position: relative;
  margin: 0 0 20px 0;
`;

export const BestsellerItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(112, 90, 102, 0.2), rgba(112, 90, 102, 0.2));
`;

export const BestsellerItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 276px;
  height: 67px;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
`;

export const BestsellerItemDescr = styled.div`
  display: flex;
  justify-content: space-between;
  fill: ${p => p.theme.colors.primary};

  svg {
    width: 25px;
    height: 25px;
    fill: inherit;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const BestsellerItemName = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop})  {
    font-size: 24px;
  }
`;