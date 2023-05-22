import { useState } from "react";
import { faq } from "../../data/faqs";
import { motion } from "framer-motion";
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
            <FaqLabel
              animate={current === id ? "open" : "closed"}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrent(id)}
              current={id === current}
            >
              <FaqQuestion>{question}</FaqQuestion>
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <Arrow />
              </motion.div>
            </FaqLabel>
            {id === current ? <FaqAnswer>{answer}</FaqAnswer> : null}
          </li>
        })}
      </ul>
    </FaqSection>
  );
};