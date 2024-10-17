import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CustomDropdown.css'

export function CustomDropdown() {
  const handleDropdownSelect = (eventKey) => {
    console.log(`Selected: ${eventKey}`);
  };

  return (
    <div className="custom-dropdown-container">
      <DropdownButton
        title="Filter Options"
        onSelect={handleDropdownSelect}
        variant="primary"
        id="custom-dropdown"
        className="custom-dropdown-button"
      >
        <Dropdown.Item eventKey="option1">Option 1</Dropdown.Item>
        <Dropdown.Item eventKey="option2">Option 2</Dropdown.Item>
        <Dropdown.Item eventKey="option3">Option 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdown;
