import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function ListInput({ handleChildren, options,name }) {
  const handleChange = (event) => {
    handleChildren(name,[event.target.value]);
};

  return (
    <InputGroup hasValidation>
      <Form.Control as="select" name={name} id={name} onChange={handleChange}>
        <option value="">Select your Role</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </InputGroup>
  );
}
