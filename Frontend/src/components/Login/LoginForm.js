import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../inputs/UsernameInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { useState,useEffect } from 'react';



export function LoginForm(){
  const [validForm, setValidForm] = useState({'username':false,'password':false});
  function handleDataFromChildren(key, isValid){
    const newValidForm = {
      ...validForm,
      [key]: isValid,
    };
    setValidForm(newValidForm);
  }

function disableLoginButton(){
  if(validForm['username'] && validForm['password']){
    return false;
  }
  else{
    return true;
  }
}

  return (
    <Form className="needs-validation" noValidate>
      <Row className="g-3">
        <Col xs={12}>
          <UsernameInput checkValidInputs={handleDataFromChildren}/>
        </Col>

        <Col xs={12}>
          <PasswordInput checkValidInputs={handleDataFromChildren}/>
        </Col>

        <Col xs={12}>
  <Button className="btn btn-primary w-100" disabled={disableLoginButton()}>
    Login
  </Button>
</Col>

        <Col xs={12}>
          <p className="small mb-0">
            Don't have an account?{' '}
            <a href="pages-register.html">Create an account</a>
          </p>
        </Col>
      </Row>
    </Form>
  );
};
