import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Label } from '../Label'; // Assuming Label is a custom component
import {useState} from 'react'

  

export function UsernameInput() {
  const [error, setError] = useState('');

  const validateUsername = (value) => {
    if (!value) {
      setError('Username is required');
    } else if (!value.includes('@')) {
      setError('Username must include "@"');
    } else {
      setError('');
    }
  };

  const handleChange = (event) => {
    validateUsername(event.target.value);
  };

  return (
    <>
      <Label value="Username">Username</Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          name="username"
          id="yourUsername"
          required
          aria-describedby="inputGroupPrepend"
          placeholder="Enter your username"
          onChange={handleChange}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
          {error || 'Please enter your username.'}
        </Form.Control.Feedback>
      </InputGroup>
    </>
  );
}
