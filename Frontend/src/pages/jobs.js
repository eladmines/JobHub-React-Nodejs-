import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import { Button } from "../components/Button";

export function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/"); // Update with your server URL

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const result = await response.json();
        console.log("result", result);
        setJobs(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const qualifications = [
    "A Bachelors or Master’s degree in Computer Science or equivalent field",
    "4+ years of industry software development experience",
    "2+ years of experience designing, implementing, and operating distributed systems",
    "Experience in Golang is desirable, .NET, C#, C++, Java",
    "Experience with large scale distributed systems and microservices",
    "Kubernetes, GoLang expertise is highly desirable",
  ];

  return (
    <main id="main" className="main">
      <Container>
        <h5 className="pagetitle">Jobs</h5>
        <Card className="">
          <Row className="g-0">
            <Col lg={1} className="d-flex align-items-center justify-content-center">
              <Image
                src="https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg"
                alt="Microsoft"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col lg={9}>
              <Card.Body>
                <h5 className="card-title">
                  Microsoft
                  <span> | 02/04/2012</span><br />
                  <span>Tel-Aviv</span>
                </h5>
                <ul>
                  {qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
                <Card.Text></Card.Text>
              </Card.Body>
            </Col>
            <Col lg={2} className="d-flex flex-column align-items-center justify-content-center">
              <JobActionButtons/>
            </Col>
          </Row>
        </Card>
      </Container>
    </main>
  );
}
