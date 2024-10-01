import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../Inputs/UsernameInput';
import { PasswordInput } from '../Inputs/PasswordInput';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [validForm, setValidForm] = useState({ username: false, password: false });
  const navigate = useNavigate();
  const handleDataFromChildren = (key, isValid) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: isValid,
    }));
  };


  const disableLoginButton = () => {
    return !(validForm['username'][0] && validForm['password'][0]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = validForm['username'][0];
    const password = validForm['password'][0];
    console.log("username",username , "password", password)
    if(username == "mineselad@gmail.com" && password=="123456"){
      navigate('/')
    }
    
  };

  return (
    <Form className="needs-validation" noValidate onSubmit={handleLogin}>
      <Row className="g-3">
        <Col xs={12}>
          <UsernameInput checkValidInputs={handleDataFromChildren} />
        </Col>

        <Col xs={12}>
          <PasswordInput checkValidInputs={handleDataFromChildren} />
        </Col>

        <Col xs={12}>
          <Button
            type="submit"
            className="btn btn-primary w-100"
            disabled={disableLoginButton()}
          >
            Login
          </Button>
        </Col>

        <Col xs={12}>
          <p className="small mb-0">
            Don't have an account?
            <a href="/Register"> Create an account</a>
          </p>
        </Col>
      </Row>
    </Form>
  );
}
