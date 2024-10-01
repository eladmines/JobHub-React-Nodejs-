import React, { Fragment, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function TextInput({name,placeholder,handleChildren}) {
  const handleChange = (event) => {
    handleChildren(name,[event.target.value]);
};

  return (
    <Fragment>
      <InputGroup hasValidation>
        <Form.Control
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
        </Form.Control.Feedback>
      </InputGroup>
    </Fragment>
  );
}
