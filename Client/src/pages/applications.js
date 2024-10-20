import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/esm/Card";
import { Container, Row, Col } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import { useFetchGet } from "../hooks/useFetchGet";
import { LoadingBar } from "../components/LoadingBar";
import { CompaniesLogos } from "../constants/CompaniesLogo";
import '../components/Card/Card.css';
import { dateDifference } from "../utils/genericHelpers";
import { FaClock,FaCode } from 'react-icons/fa'; 
export function Applications() {
  const { data: savedjobs, loading, error, fetchData } = useFetchGet("applications/getApplications");
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Fetch the jobs data
  useEffect(() => {
    fetchData("applications/getApplications");
  }, []);

  // Update appliedJobs state when savedjobs are fetched
  useEffect(() => {
    if (savedjobs) {
      setAppliedJobs(savedjobs);
    }
  }, [savedjobs]);

  // Handle remove function
  function handleRemove(jobId) {
    setAppliedJobs((prevJobs) => prevJobs.filter((job) => job.job_id !== jobId.jobId));
    
  }

  // Display loading state
  if (loading) {
    return <LoadingBar title="Jobs" />;
  }

  // Handle error state
  if (error) {
    return <p>Error fetching jobs: {error.message}</p>;
  }


  // Render the jobs
  return (
    <main id="main" className="main">
      <Container>
        <h5 className="pagetitle">My Applications</h5>
        {appliedJobs && appliedJobs.map((job, index) => (
          <Card key={index} className="card-hover">
            <div id={job.job_id}>
              <Row className="g-0">
                <Col lg={1} className="d-flex align-items-center justify-content-center">
                  <Image
                    src={CompaniesLogos[job.job_company]}
                    alt={job.job_company || "Company Logo"}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col lg={9}>
                  <Card.Body>
                  <Card.Link href={job.job_link} target="_blank"> <h5 className="card-title">
                      {job.job_title}
                      <span> | {job.job_company} , posted  {dateDifference(job.job_date)} days ago</span><br />
                      <span>{job.job_location}</span>
                    </h5></Card.Link>
                   <h5 style={{ color: 'green', fontStyle: 'italic', fontSize: '0.8em' }}>
                   <FaClock style={{ marginRight: '4px',color: 'grey' }} />{job.job_qualifications[job.job_qualifications.length - 1]}
</h5>
                    {job.job_qualifications.slice(0, 4).map((qualification, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <FaCode style={{ marginRight: '8px' }} />
                            {qualification}
                        </li>
                    ))}
                   
                  </Card.Body>
                </Col>
                <Col lg={2} className="d-flex flex-column align-items-center justify-content-center">
                  <JobActionButtons id={job.job_id} saved={job.saved} applicated_date={job.applicated_date} handleRemove={handleRemove} endpoint="application"/>
                </Col>
              </Row>
            </div>
          </Card>
        ))}
      </Container>
    </main>
  );
}
