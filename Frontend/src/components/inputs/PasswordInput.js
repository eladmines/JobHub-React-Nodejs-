import React, { Fragment, useState } from 'react';
import { Label } from '../Label';
import { InputGroup, Form } from 'react-bootstrap';

export function PasswordInput({checkValidInputs}) {
  const [error, setError] = useState('');

  const validatePassword = (value) => {
    if (!value) {
      setError('Password is required');
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const handleChange = (event) => {
    const res = validatePassword(event.target.value);
    checkValidInputs("password",[event.target.value,res])
  };

  return (
    <Fragment>
      <InputGroup hasValidation>
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          isInvalid={error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </InputGroup>
    </Fragment>
  );
}
