import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export function ToggleButtonExample({ sendDataToParent }) {
  const [radioValue, setRadioValue] = useState('0');
  
  const radios = [
    { name: 'Show All Jobs', value: '0' },
    { name: 'Filter jobs by my skills', value: '1' },
  ];

  // This function sends data to the parent when invoked
  function handleClick(data) {
    sendDataToParent(data);
  }

  // Component return statement
  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value); // Update radioValue
              handleClick(e.currentTarget.value); // Send "Hello" to parent component
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default ToggleButtonExample;
