import styled from "styled-components";
import bgiMobile from '../../assets/images/benefits/bgi-mobile.png';
import bgiDesktop from '../../assets/images/benefits/bgi-desktop.png';

export const BgiWrapper = styled.div`
  background-image: url(${bgiMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    background-image: url(${bgiDesktop});
  }
`;