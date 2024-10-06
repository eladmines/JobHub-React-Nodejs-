import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
export function LoadingBar({title}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100); 
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

    return (
        <main id="main" className="main">
          <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row>
              <Col className="text-center">
                <a href="/" className="logo d-flex align-items-center justify-content-center mb-3">
                  <span className="d-none d-lg-block" style={{ fontSize: '2.5rem' }}>JobHub</span>
                </a>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <ProgressBar now={progress} label={`${progress}%`} />
                  <p className="ms-2">Loading {title}...</p>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
  );
}
