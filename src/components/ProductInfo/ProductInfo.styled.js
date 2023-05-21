import styled from "styled-components";

export const ProductInfoSection = styled.section`
  padding: 40px 10px 60px 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 60px 100px;
  }
`;

export const ProductInfoContainer = styled.div`
  padding: 0 0 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ProductInfoImage = styled.div`
  margin: 0 0 30px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 500px;
    margin: 0 30px 0 0;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-grow: 1;
    align-items: flex-start;
  }
`;

export const ProductInfoName = styled.h1`
  margin: 0 0 30px 0;
  font-size: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 60px 0;
    font-size: 42px;
  }
`;

export const ProductInfoTags = styled.div`
  margin: 0 0 30px 0;
  font-size: 18px;
`;

export const ProductInfoSelects = styled.div`
  margin: 0 0 40px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
     display: flex;
     flex-wrap: wrap;
     margin: 0 0 60px 0;
  }
`;

export const ProductInfoOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductInfoPrice = styled.p`
  margin: 0 0 20px 0;
  font-size: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 42px;
    margin: 0;
  }
`;

export const ProductInfoBtn = styled.button`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: 287px;
  }
`;