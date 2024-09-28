import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../inputs/UsernameInput';
import { PasswordInput } from '../inputs/PasswordInput';
import {Input} from '../inputs/Input';
import {createUser} from '../../services/User/createUser';

export function RegisterForm() {
  const [validForm, setValidForm] = useState({ username: false, password: false });

  const handleDataFromChildren = (key, isValid) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: isValid,
    }));
  };


  const disableLoginButton = () => {
    return !(validForm['username'] && validForm['password']);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = validForm.username;
    const password = validForm.password;

    if (username && password) {
      try {
        const userData = { username:username[0], password:password[0] };
        await createUser(userData); // Pass the state to the service
       
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <Form className="needs-validation" noValidate onSubmit={handleRegister}>
      <Row className="g-3">
        <Col xs={12}>
          <UsernameInput checkValidInputs={handleDataFromChildren} />
        </Col>
        <Col xs={12}>
          <PasswordInput checkValidInputs={handleDataFromChildren} />
        </Col>
        <Col xs={12}>
          <Input name="Role" placeholder="Role" />
        </Col>
        <Col xs={12}>
        <Input name="Company" placeholder="Company" />
        </Col>
        <Col xs={12}>
          <Button
            type="submit"
            className="btn btn-primary w-100"
            disabled={disableLoginButton()}
          >
            Sign-up
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
