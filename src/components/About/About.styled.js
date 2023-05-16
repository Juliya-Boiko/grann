import styled from "styled-components";


export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 100px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px 120px 100px;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 500px;
  }
`;

export const AboutContent = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 500px;
  }
`;

export const AboutName = styled.p`
  margin: 0 0 10px 0;
  text-align: center;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const AboutPosition = styled.p`
  margin: 0 0 30px 0;
  text-align: center;
  font-size: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const AboutText = styled.p`
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

