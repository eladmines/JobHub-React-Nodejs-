import { useState, Fragment } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function UsernameInput({ value,checkValidInputs }) {
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
    checkValidInputs("username",[event.target.value,res])
    console.log([event.target.value,res])
   
    
  };

  return (
    <Fragment>
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
    </Fragment>
  );
}
