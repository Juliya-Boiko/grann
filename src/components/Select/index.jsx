import { useState } from 'react';
import { options } from 'data/options';
import { motion } from "framer-motion";
import { ReactComponent as Arrow } from '../../assets/icons/arrow-short.svg';
import { SelectContainer, SelectLabel, SelectOptions, SelectText } from './Select.styled';

export const Select = ({ data, select, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { label, options: selectOptions } = data;

  const selectHandler = (data) => {
    label === options.types.label ? onSelect(data.title) : onSelect(data)
  };

  return (
    <SelectContainer>
      <SelectLabel
        initial={false}
        animate={showOptions ? "open" : "closed"}
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowOptions(prevState => !prevState)}
      >
        {select ? select : label}
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
      </SelectLabel>
      {showOptions
        ? <SelectOptions onClick={() => setShowOptions(false)}>
          {selectOptions.map((option) => {
            return <SelectText key={option.id} onClick={() => selectHandler(option)}>{option.title}</SelectText>
           })}
          </SelectOptions>
        : null
      }
    </SelectContainer>
  );
};