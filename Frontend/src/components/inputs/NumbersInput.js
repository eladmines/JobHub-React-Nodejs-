import React, { Fragment, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';


export function NumbersInput({checkValidInputs,name}) {
    const [error,setError] = useState('');
    const validateIsNumber = (value) =>{
        if (value == null || value === '') {
            setError('');  // No error for empty input
            return false;   // Consider empty input as valid
        } else if (!isNaN(value)) {
            setError('');  // No error if the input is a number
            return true;   // Valid number input
        } else {
            setError('Insert a Number');  // Error if it's not a number
            return false;  // Invalid input
        }
    }

    const handleChange = (event) => {
        const res = validateIsNumber(event.target.value);
        checkValidInputs('experience',[event.target.value,res]);
        
    };
        


    
    return (
        <Fragment>
        <InputGroup hasValidation>
            <Form.Control
            type="text"
            name="experience"
            placeholder="Experience"
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
