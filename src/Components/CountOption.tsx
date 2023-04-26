import React, { useState } from 'react';
import './CountOption.css';

const CountOption = () => {
  const [selectOption, setSelectOption] = useState('');
  const [count, setCount] = useState('');

  const countArray = [
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN',
  ];

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
    setCount(event.target.value);
  };

  return (
    <div>
      <select
        className='select_option'
        value={selectOption}
        onChange={handleOptionChange}
      >
        {countArray.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h2>{count}</h2>
    </div>
  );
};

export default CountOption;
