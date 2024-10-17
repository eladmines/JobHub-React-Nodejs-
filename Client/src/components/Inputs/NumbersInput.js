import React, { Fragment, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export function NumbersInput({ value, onChange, name }) {
    const [error, setError] = useState('');

    const validateIsNumber = (value) => {
        if (value == null || value === '') {
            setError('');
            return true; 
        } else if (!isNaN(value)) {
            setError('');  
            return true;
        } else {
            setError('Insert a Number');  
            return false;
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        validateIsNumber(newValue); 
        onChange(event); 
      };
    return (
        <Fragment>
            <InputGroup hasValidation>
                <Form.Control
                    type="text"
                    name={name} 
                    placeholder="Experience"
                    value={value}
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
