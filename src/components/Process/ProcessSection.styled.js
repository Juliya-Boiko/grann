import styled from "styled-components";

export const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 120px 100px;
  }
`;

export const ProcessImages = styled.div`
  position: relative;
  width: 170px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 20px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 180px;
    height: 210px;
  }
`;

export const ProcessWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProcessText = styled.p`
  margin: 0 0 30px 0;
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 660px;
    margin: 0 0 80px 0;
    font-size: 24px;
  }
`;