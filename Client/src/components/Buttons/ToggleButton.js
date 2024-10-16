import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { NotLoggedInModal } from '../NotLoggedInModal';

export function ToggleButtonExample({ sendDataToParent }) {
  const [radioValue, setRadioValue] = useState(() => {
    const isLoggedIn = localStorage.getItem("skills") !== null;
    return isLoggedIn ? '1' : '0';
  });
  const [showModal, setShowModal] = useState(false)
  const radios = [
    { name: 'Show All Jobs', value: '0' },
    { name: 'Filter jobs by my skills', value: '1' },
  ];

  const handleCloseModel = () =>{
    setShowModal(false);
    setRadioValue('0')
  }

  function handleClick(data) {
    if(!localStorage.getItem('skills')){
      setShowModal(true);
    }
    else{
      sendDataToParent(data);
    }
  }

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
              setRadioValue(e.currentTarget.value);
              handleClick(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
        <NotLoggedInModal show={showModal} handleClose={handleCloseModel}/>
      </ButtonGroup>
      
    </>
  );
}

