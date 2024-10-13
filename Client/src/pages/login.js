import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { LoginForm } from '../components/Login/LoginForm';
export function Login() {
  
  return (
    <main id="main" className="main">
      <Container 
        className="d-flex" 
       
      >
        <Card className="mb-3">
          <Card.Body className="pt-4 pb-2">
            <div className="pt-4 pb-2 text-center">
              <Card.Title as="h5" className="fs-4">
                Login to Your Account
              </Card.Title>
              <Card.Text className="small text-muted">
                Enter your username & password to login
              </Card.Text>
            </div>
            <LoginForm />
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}
