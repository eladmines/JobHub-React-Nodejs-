import React, { Fragment, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function NumbersInput({ value, onChange, name }) {
    const [error, setError] = useState('');

    const validateIsNumber = (value) => {
        if (value == null || value === '') {
            setError('');  // No error for empty input
            return true;   // Empty input considered valid
        } else if (!isNaN(value)) {
            setError('');  // No error if the input is a valid number
            return true;   // Valid number input
        } else {
            setError('Insert a Number');  // Error message if it's not a number
            return false;  // Invalid input
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        validateIsNumber(newValue); // Validation directly updates the error state
        onChange(event);  // Pass the event to the parent
      };
    return (
        <Fragment>
            <InputGroup hasValidation>
                <Form.Control
                    type="text"
                    name={name} // Use the passed name prop
                    placeholder="Experience"
                    value={value} // Bind the value to the input
                    onChange={handleChange} // Handle the change
                    isInvalid={!!error} // Show invalid state based on error
                />
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            </InputGroup>
        </Fragment>
    );
}
