import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './PostItems.css';
import { CompaniesLogos } from '../../constants/CompaniesLogo';
export function RecommendedJob({ job }) {
  return (
    
    <Card style={{ marginBottom: '5px' }}> {/* Adjust the margin */}
      <CardBody>
        <Card.Title>
          <Card.Img
            variant="top"
            src={CompaniesLogos[job.job_company]}
            alt={`${job.job_company} Logo`}
            style={{
              maxWidth: '50px',
              height: 'auto',
              marginRight: '10px'
            }}
          />
          <span>
            <a href={job.job_link} className="text-dark">
              {job.job_title}
            </a>
          </span>
        </Card.Title>
  
        <div style={{ fontSize: '12px' }}>
  <div>
    <FaMapMarkerAlt /> {job.job_location}
  </div>
  <div>
    <FaClock style={{ marginRight: '4px', color: 'grey', fontSize: '12px' }} />
    {job.job_qualifications[job.job_qualifications.length - 1]}
  </div>
</div>


      
      </CardBody>
    </Card>

  
  );
}
