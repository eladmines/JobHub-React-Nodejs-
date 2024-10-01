import React from 'react';
import { Button } from 'react-bootstrap';

export function JobActionButtons() {
  return (
    <div>
      <Button className="w-100 btn btn-light mb-2">
        <i className="bi bi-save me-2"></i> Save Job
      </Button>
      <Button className="w-100 btn btn-light mb-2">
        <i className="bi bi-file-earmark-plus me-2"></i> Apply
      </Button>
      <Button className="w-100 btn btn-light mb-2">
        <i className="bi bi-eye me-2"></i> Tracking
      </Button>
      <Button className="w-100 btn btn-light mb-2">
        <i className="bi bi-exclamation-circle me-2"></i> Report
      </Button>
    </div>
  );
}
