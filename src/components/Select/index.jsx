import { useState } from 'react';
import { options } from 'data/options';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-short.svg';
import { SelectContainer, SelectLabel, SelectOptions, SelectText } from './Select.styled';

export const Select = ({ data, select, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { label, options: selectOptions } = data;

  const selectHandler = (data) => {
    label === options.types.label ? onSelect(data.title) : onSelect(data)
  }

  return (
    <SelectContainer>
      <SelectLabel onClick={() => setShowOptions(true)}>{select ? select : label}<Arrow /></SelectLabel>
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