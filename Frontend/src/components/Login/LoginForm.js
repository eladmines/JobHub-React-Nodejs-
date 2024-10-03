import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../Inputs/UsernameInput';
import { PasswordInput } from '../Inputs/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth/auth';
import {Modal} from '../Modal'
export function LoginForm() {
  const [validForm, setValidForm] = useState({ username: false, password: false });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleLogin = async (e) =>{
    e.preventDefault();
    const loginDetails = {
      username: validForm['username'][0],
      password: validForm['password'][0]
    }
    var res = await auth(loginDetails);
    if(res.success){
      navigate('/')
    }
    else{
      setErrorMessage('Login failed. Please check your credentials.');
    }
    
  };

  return (
    <>
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
      {errorMessage}
    </>
  );
  
}
