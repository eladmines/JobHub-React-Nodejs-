import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import { useFetchGet } from "../hooks/useFetchGet";
import { LoadingBar } from "../components/LoadingBar";
import { CompaniesLogos } from "../constants/CompaniesLogo";
import '../components/Card/Card.css';

export function Applications() {
  const { data: savedjobs, loading, error, fetchData } = useFetchGet("http://localhost:5000/applications/getApplications");

  useEffect(() => {
    fetchData("http://localhost:5000/applications/getApplications");
  }, []);

  if (loading) {
    return <LoadingBar title="Jobs" />;
  }

  if (error) {
    return <p>Error fetching jobs: {error.message}</p>;
  }

  const qualifications = [
    "A Bachelors or Master’s degree in Computer Science or equivalent field",
    "4+ years of industry software development experience",
    "2+ years of experience designing, implementing, and operating distributed systems",
    "Experience in Golang is desirable, .NET, C#, C++, Java",
    "Experience with large-scale distributed systems and microservices",
    "Kubernetes, GoLang expertise is highly desirable",
  ];


  return (
    <main id="main" className="main">
      <Container>
        <h5 className="pagetitle">My Applications</h5>
        {savedjobs &&
          savedjobs.map((job, index) => (
            <a href={job.job_link} key={index}>
              <Card key={index} className="card-hover">
                <Row className="g-0">
                  <Col lg={1} className="d-flex align-items-center justify-content-center">
                    <Image
                      src={CompaniesLogos[job.job_company] || "path/to/default/image.png"}
                      alt={job.job_company || "Company Logo"}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                  <Col lg={9}>
                    <Card.Body>
                      <h5 className="card-title">
                        {job.job_title}
                        <span> | {job.job_company}</span>
                        <br />
                        <span>{job.job_location}</span>
                      </h5>
                      <ul>
                        {qualifications.map((qualification, index) => (
                          <li key={index}>{qualification}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Col>
                  <Col lg={2} className="d-flex flex-column align-items-center justify-content-center">
                    <JobActionButtons
                      id={job.job_id}
                      saved={job.saved}
                      applicated_date={job.applicated_date}
                    />
                  </Col>
                </Row>
              </Card>
            </a>
          ))}
      </Container>
    </main>
  );
}
