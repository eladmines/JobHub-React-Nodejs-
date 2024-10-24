import {React,useState,useEffect} from "react";
import Card from "react-bootstrap/esm/Card";
import { Container, Row, Col,Spinner  } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import '../components/Card/Card.css'
import { useFetchGet } from "../hooks/useFetchGet";
import { LoadingBar } from "../components/LoadingBar";
import {SearchBarInput} from '../components/Inputs/SearchBarInput';
import { FaCode } from 'react-icons/fa';
import { dateDifference } from "../utils/genericHelpers";
import { FaClock } from 'react-icons/fa'; 
import { CompaniesLogos, SERVER } from "../constants/CompaniesLogo";

export function SavedJobs() {

  const [inputSearchValue,setInputSearchValue] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { data: jobs, loading, error, fetchData } = useFetchGet();
  
  useEffect(() => {
    fetchData("jobs/getSavedJobs");
    setFilteredJobs(jobs)
  }, []);

  useEffect(() => {
    if (jobs && Array.isArray(jobs)) {
      const filtered = jobs.filter((job) => 
        job.job_title && job.job_title.toLowerCase().includes(inputSearchValue.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [jobs, inputSearchValue]);


  const handleDataFromChildren = (val ) => {
    setInputSearchValue(val);
   
  };
  function handleRemove(jobId) {
    
    setFilteredJobs((prevJobs) => prevJobs.filter((job) => job.job_id !== jobId.jobId));
    
  }
  return (
    
    <main id="main" className="main">
      <h1>{loading}</h1>
      <Container>
        <h5 className="pagetitle">Saved Jobs</h5>
        <Card>
        <SearchBarInput getSearchFormValue={handleDataFromChildren}/>
        </Card>
        {filteredJobs && filteredJobs.map((job, index) => (
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
                  <JobActionButtons id={job.job_id} saved={job.saved} applicated_date={job.applicated_date} handleRemove={handleRemove} endpoint="saved"/>
                </Col>
              </Row>
            </div>
          </Card>
        ))}
      </Container>
    </main>
  );
}
