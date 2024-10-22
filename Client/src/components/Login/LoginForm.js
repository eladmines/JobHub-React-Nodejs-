import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../Inputs/UsernameInput';
import { PasswordInput } from '../Inputs/PasswordInput';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { signIn } from '../../actions/signIn';
import { useFetchPost } from '../../hooks/useFetchPost';

export function LoginForm() {
  const { data: res, loading, error, fetchData } = useFetchPost();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validForm, setValidForm] = useState({
    username: ['', false],
    password: ['', false],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleDataFromChildren = (key, isValid) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: isValid,
    }));
  };

  const disableLoginButton = () => {
    return !(validForm['username'][1] && validForm['password'][1]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginDetails = {
      username: validForm['username'][0],
      password: validForm['password'][0],
    };
    await fetchData('auth', loginDetails);
  };

  useEffect(() => {
    if (res && res.success) {
      dispatch(signIn());
      localStorage.setItem('isLogged', true);
      localStorage.setItem('skills', res.user['skills']);
      localStorage.setItem('role', res.user['role']);
      localStorage.setItem('firstname', res.user['firstname']);
      localStorage.setItem('lastname', res.user['lastname']);
      navigate('/');
    } else if (res && !res.success) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  }, [res, dispatch, navigate]);

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

      {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
    </>
  );
}
