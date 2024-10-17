import React from 'react';
import { Card } from 'react-bootstrap';
import {FaMapMarkerAlt } from 'react-icons/fa';
import './PostItems.css';

const companies_images = {
  "Intel": "https://seeklogo.com/images/I/intel-new-2020-logo-21ED2748DD-seeklogo.com.png",
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
  "KLA": "https://cdn.brandfetch.io/idFmniVrcu/w/400/h/400/theme/dark/icon.jpeg?k=id64Mup7ac&t=1727233697514",
  "paloalto": "https://cdn.worldvectorlogo.com/logos/palo-alto-networks-1.svg",
  "Nvidia": "https://companieslogo.com/img/orig/NVDA-220e1e03.png?t=1722952498",
   "Meta": "https://medialabgroup.co.uk/wp-content/uploads/2023/11/Meta.png"
};

export function RecommendedJob({ job }) {
  console.log("job",job)
  return (
  
    
      <>
      <Card.Title >
      <Card.Img
  variant="top"
  src={companies_images[job.job_company]}
  alt={`${job.job_company} Logo`} // Use dynamic alt text for better accessibility
  style={{
    maxWidth: '50px',  // Set a smaller max width for the image
    height: 'auto',     // Maintain aspect ratio
    marginRight: '10px' // Optional: adds space to the right of the image
  }}
/>
        <span><a href={job.job_link} className=" text-dark">{job.job_title}</a></span>
        <Card.Text className="">
        <span style={{ color: 'lightcoral' }}>
  <FaMapMarkerAlt />
  {job.job_location}
</span>
      </Card.Text>
      </Card.Title>
     

  </>
  );
}
