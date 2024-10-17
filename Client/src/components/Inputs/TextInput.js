import React, { Fragment } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function TextInput({ name, placeholder, value, onChange }) {
  return (
    <Fragment>
      <InputGroup hasValidation>
        <Form.Control
          type="text"
          name={name}
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
        />
        <Form.Control.Feedback type="invalid"/>
      </InputGroup>
    </Fragment>
  );
}
