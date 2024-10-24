import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import '../components/Card/Card.css';
import { useFetchGet } from "../hooks/useFetchGet";
import { LoadingBar } from "../components/LoadingBar";
import { SearchBarInput } from '../components/Inputs/SearchBarInput';
import { FaCode, FaClock } from 'react-icons/fa'; 
import { ToggleButtonExample } from '../components/Buttons/ToggleButton';
import { dateDifference } from "../utils/genericHelpers";
import { CompaniesLogos } from "../constants/CompaniesLogo";
import { useLocation } from 'react-router-dom';

export function Jobs() {
  const location = useLocation();
  const [inputSearchValue, setInputSearchValue] = useState(location.state?.searchValue || '');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const { data: jobs, loading, fetchData } = useFetchGet();

  useEffect(() => {
    fetchData("jobs/");
    setFilteredJobs(jobs);
  }, []);

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills') ? localStorage.getItem('skills').split(",") : [];
    setSkills(storedSkills);
  }, []);

  useEffect(() => {
    if (jobs && Array.isArray(jobs)) {
      const filtered = jobs.filter((job) => {
        const titleMatch = job.job_title?.toLowerCase().includes(inputSearchValue.toLowerCase());
        const qualificationsMatch = job.job_qualifications?.some(qualification =>
          qualification.toLowerCase().includes(inputSearchValue.toLowerCase())
        );
        const companyMatch = job.job_company?.toLowerCase().includes(inputSearchValue.toLowerCase());
        const skillsMatch = skills.length > 0 && job.job_qualifications?.some(skill => skills.includes(skill));

        return skills.length === 0 ? (titleMatch || qualificationsMatch || companyMatch) : 
               (titleMatch || qualificationsMatch || companyMatch) && skillsMatch;
      });
      setFilteredJobs(filtered);
    }
  }, [jobs, inputSearchValue, skills]);

  function handleDataToggleBar(data) {
    if (data === 0) {
      setSkills([]);
    } else {
      const storedSkills = localStorage.getItem('skills')?.split(",") || [];
      setSkills(storedSkills);
    }
  }

  const handleDataFromChildren = (val) => setInputSearchValue(val);

  if (loading) {
    return (
      <main id="main" className="main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Container className="text-center">
          <LoadingBar title="Loading Jobs..." />
        </Container>
      </main>
    );
  }

  return (
    <main id="main" className="main">
      <Container>
        <h5 className="pagetitle">Jobs</h5>
        <Card>
          <SearchBarInput value={inputSearchValue} getSearchFormValue={handleDataFromChildren} />
        </Card>
        <ToggleButtonExample sendDataToParent={handleDataToggleBar} />
        {filteredJobs.map((job, index) => (
          <Card key={index} className="card-hover">
            <div id={job.job_id}>
              <Row className="g-0">
                <Col xs={6} sm={4} md={3} lg={1} className="d-flex align-items-center justify-content-center">
                  <Image
                    src={CompaniesLogos[job.job_company]}
                    alt={job.job_company || "Company Logo"}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col lg={9}>
                  <Card.Body>
                    <Card.Link href={job.job_link} target="_blank">
                      <h5 className="card-title">
                        {job.job_title}
                        <span> | {job.job_company}, posted {dateDifference(job.job_date)} days ago</span><br />
                        <span>{job.job_location}</span>
                      </h5>
                    </Card.Link>
                    <h5 style={{ color: 'green', fontStyle: 'italic', fontSize: '0.8em' }}>
                      <FaClock style={{ marginRight: '4px', color: 'grey' }} />
                      {job.job_qualifications[job.job_qualifications.length - 1]}
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
                  <JobActionButtons id={job.job_id} saved={job.saved} applicated_date={job.applicated_date} />
                </Col>
              </Row>
            </div>
          </Card>
        ))}
      </Container>
    </main>
  );
}
