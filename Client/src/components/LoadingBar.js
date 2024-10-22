import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export function LoadingBar({ title }) {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <a href="/" className="logo mb-3">
        <span className="d-none d-lg-block" style={{ fontSize: '2.5rem' }}>JobHub</span>
      </a>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <ProgressBar now={progress} label={`${progress}%`} />
        <p className="ms-2">{title}</p>
      </div>
    </div>
  );
}
