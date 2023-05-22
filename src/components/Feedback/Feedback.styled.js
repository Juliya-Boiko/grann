import { Form } from 'formik';
import styled from "styled-components";
import { motion } from 'framer-motion';
import bgi1xPngMobile from '../../assets/images/feedback/mobile/bgi.png';
import bgi1xWebpMobile from '../../assets/images/feedback/mobile/bgi.webp';
import bgi2xPngMobile from '../../assets/images/feedback/mobile/bgi@2x.png';
import bgi2xWebpMobile from '../../assets/images/feedback/mobile/bgi@2x.webp';
import bgi1xPngDesktop from '../../assets/images/feedback/desktop/bgi.png';
import bgi2xPngDesktop from '../../assets/images/feedback/desktop/bgi@2x.png';
import bgi1xWebpDesktop from '../../assets/images/feedback/desktop/bgi.webp';
import bgi2xWebpDesktop from '../../assets/images/feedback/desktop/bgi@2x.webp';

export const FeedbackSection = styled.section`
  padding: 80px 10px 40px 10px;
  color: ${p => p.theme.colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi1xPngMobile});
  @supports (background-image: url(${bgi1xWebpMobile})) {
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi1xWebpMobile});
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi2xPngMobile});
      @supports (background-image: url(${bgi2xWebpMobile})) {
        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi2xWebpMobile});
      }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 50px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi1xPngDesktop});
    @supports (background-image: url(${bgi1xWebpDesktop})) {
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi1xWebpDesktop});
    }
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi2xPngDesktop});
      @supports (background-image: url(${bgi2xWebpDesktop})) {
        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 9.29%, rgba(0, 0, 0, 0) 97.8%), url(${bgi2xWebpDesktop});
      }
    }
  }
`;

export const FeedbackWrapper = styled.div`
  margin: 0 0 40px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 500px;
    margin: 0;
    font-size: 18px;
  }
`;

export const FeedbackTitle = styled(motion.h2)`
  margin: 0 0 20px 0;
  text-align: center;
  font-family: 'Jeff';
  font-size: 30px;
  transform: rotate(-4.77deg);
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 30px 0;
    font-size: 54px;
  }
`;

export const FeedbackForm = styled(Form)`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 500px;
  }
`;

export const FeedbackTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  margin: 0 0 30px 0;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  background-color: ${p => p.theme.colors.secondary};
  resize: none;
`;