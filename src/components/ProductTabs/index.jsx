import { useState } from "react";
import { ProductTabsContainer, ProductTabsWrapper, ProductTabsItem, ProductTabsDescr } from "./ProductTabs.styled";


export const ProductTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabsLabels = data.map(item => item.title);

  return (
    <ProductTabsContainer>
      <ProductTabsWrapper>
        {tabsLabels.map((item, idx) => {
          return <ProductTabsItem accent={currentTab === idx} key={idx} onClick={() => setCurrentTab(idx)}>{item}</ProductTabsItem>
        })}
      </ProductTabsWrapper>
      <ProductTabsDescr>
        {data[currentTab].text}
      </ProductTabsDescr>
    </ProductTabsContainer>
  );
};