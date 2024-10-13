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
          value={value} // Bind the value to the input
          onChange={onChange} // Handle the change
        />
        <Form.Control.Feedback type="invalid">
          {/* Optional feedback message */}
        </Form.Control.Feedback>
      </InputGroup>
    </Fragment>
  );
}
