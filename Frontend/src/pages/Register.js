import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { RegisterForm } from '../components/Register/RegisterForm';

export function Register() {
  return (
    <main id="main" className="main">
      <Container 
        className="d-flex" 
      >
        <Card className="mb-3">
          <Card.Body className="pt-4 pb-2">
            <div className="pt-4 pb-2 text-center">
              <Card.Title as="h5" className="fs-4">
              Create an Account
              </Card.Title>
              <Card.Text className="small text-muted">
              Enter your personal details to create account
              </Card.Text>
            </div>
            <RegisterForm />
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}

