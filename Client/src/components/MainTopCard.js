import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardIcon } from './Card/CardIcon';

export function MainTopCard({ className, title, icon,count}) {
  return (
    <Card className={`info-card ${className}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex align-items-center">
          <CardIcon icon={icon} />
          <div className="d-flex flex-column ms-3 align-items-center">
            <h6 className="mb-0">{count}</h6>
            <span className="text-success small pt-1 fw-bold">12% increase</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
