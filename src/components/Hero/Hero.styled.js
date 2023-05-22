import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import bgi1xPngMobile from '../../assets/images/hero/mobile/bgi.png';
import bgi1xWebpMobile from '../../assets/images/hero/mobile/bgi.webp';
import bgi2xPngMobile from '../../assets/images/hero/mobile/bgi@2x.png';
import bgi2xWebpMobile from '../../assets/images/hero/mobile/bgi@2x.webp';
import bgi1xPngDesktop from '../../assets/images/hero/desktop/bgi.png';
import bgi2xPngDesktop from '../../assets/images/hero/desktop/bgi@2x.png';
import bgi1xWebpDesktop from '../../assets/images/hero/desktop/bgi.webp';
import bgi2xWebpDesktop from '../../assets/images/hero/desktop/bgi@2x.webp';

export const HeroSection = styled.section`
  position: relative;
  height: 570px;
  padding: 75px 0 0 0;
  font-size: 18px;
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    height: 760px;
    padding: 100px 0 0 0;
    font-size: 24px;
  }
`;

export const HeroTitleWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    position: absolute;
    top: 100px;
    right: 330px;
  }
`;

export const HeroTitle = styled.h1`
  text-transform: uppercase;
  font-family: 'Moniqa';
  font-size: 120px;
  line-height: 1;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 226px;
  }
`;

export const HeroContentImg = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 300px;
  height: 340px;
  margin: 20px 0 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgi1xPngMobile});
  @supports (background-image: url(${bgi1xWebpMobile})) {
    background-image: url(${bgi1xWebpMobile});
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(${bgi2xPngMobile});
      @supports (background-image: url(${bgi2xWebpMobile})) {
        background-image: url(${bgi2xWebpMobile});
      }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 830px;
    height: 520px;
    background-image: url(${bgi1xPngDesktop});
    @supports (background-image: url(${bgi1xWebpDesktop})) {
      background-image: url(${bgi1xWebpDesktop});
    }
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${bgi2xPngDesktop});
        @supports (background-image: url(${bgi2xWebpDesktop})) {
          background-image: url(${bgi2xWebpDesktop});
        }
    }
  }
`;

export const HeroSocList = styled.ul`
  position: absolute;
  top: 292px;
  right: 10px;
  z-index: 10;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    top: 553px;
    right: 100px;
  }
`;

export const HeroSocItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.primary};
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: inherit;
  }
`;

export const HeroLink = styled((Link))`
  position: absolute;
  left: 10px;
  bottom: -20px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  height: 67px;
  text-transform: uppercase;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.accent};
  transition: ${p => p.theme.transition};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 394px;
    bottom: 140px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 10px 40px 17px rgba(221,213,198,0.61);
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      transform: translateX(-50%) scale(1.04);
    }
  }
`;