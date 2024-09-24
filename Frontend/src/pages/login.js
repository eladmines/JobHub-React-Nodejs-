import React from 'react';
import { Card, Container } from 'react-bootstrap';
import {LoginForm} from '../components/Login/LoginForm';
import {Title} from '../components/Title';


export function Login() {
  return (
    <main id="main" className="main">
      <Container>
        <Card className="mb-3">
          <Card.Body className="pt-4 pb-2">
            <div className="pt-4 pb-2 text-center">
              <Title className="card-title pb-0 fs-4" title="Login to Your Account" size="h5" />
              <Title className="small" title="Enter your username & password to login" />
            </div>
            <LoginForm />
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}


