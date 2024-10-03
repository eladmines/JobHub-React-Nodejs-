import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {useState} from 'react'

export function UsernameInput({checkValidInputs}) {
  const [error, setError] = useState('');
  
  const validateUsername = (value) => {
    if (!value) {
      setError('Username is required');
      return false;
    } else if (!value.includes('@')) {
      setError('Username must include "@"');
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const handleChange = (event) => {
    const res = validateUsername(event.target.value);
    checkValidInputs('username',[event.target.value,res]);
  };

  return (
    <>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          onChange={handleChange}
          isInvalid={error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </InputGroup>
    </>
  );
}
