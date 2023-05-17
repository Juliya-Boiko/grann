import { useState } from "react";
import { faq } from "../../data/faqs";
import { SectionTitle } from "styles/common/SectionTitle.styled";
import { FaqSection, FaqLabel, FaqQuestion, FaqAnswer } from "./Faq.styled";
import { ReactComponent as Arrow } from '../../assets/icons/arrow-short.svg';

export const Faq = () => {
  const [current, setCurrent] = useState(0);

  return (
    <FaqSection>
      <SectionTitle>Популярні запитання</SectionTitle>
      <ul>
        {faq.map(({ id, question, answer }) => {
          return <li key={id}>
            <FaqLabel onClick={() => setCurrent(id)} current={id === current} >
              <FaqQuestion>{question}</FaqQuestion>
              <Arrow />
            </FaqLabel>
            {id === current ? <FaqAnswer>{answer}</FaqAnswer> : null}
          </li>
        })}
      </ul>
    </FaqSection>
  );
};