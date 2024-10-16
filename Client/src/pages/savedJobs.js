import {React,useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col,Spinner  } from "react-bootstrap";
import { JobActionButtons } from "../components/JobActionButtons";
import { Image } from "../components/Image";
import '../components/Card/Card.css'
import { useFetchGet } from "../hooks/useFetchGet";
import { LoadingBar } from "../components/LoadingBar";
import {SearchBarInput} from '../components/Inputs/SearchBarInput';
export function SavedJobs() {

  const [inputSearchValue,setInputSearchValue] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { data: jobs, loading, error, fetchData } = useFetchGet();

  useEffect(() => {
    fetchData("http://localhost:5000/jobs/getSavedJobs");
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

  const companies_images = {
    "Intel": "https://seeklogo.com/images/I/intel-new-2020-logo-21ED2748DD-seeklogo.com.png",
    "Amazon": "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    "KLA": "https://cdn.brandfetch.io/idFmniVrcu/w/400/h/400/theme/dark/icon.jpeg?k=id64Mup7ac&t=1727233697514?t=1727233697514"
  };

  const handleDataFromChildren = (val ) => {
    setInputSearchValue(val);
   
  };
  return (
    
    <main id="main" className="main">
      <h1>{loading}</h1>
      <Container>
        <h5 className="pagetitle">Saved Jobs</h5>
        <Card>
        <SearchBarInput getSearchFormValue={handleDataFromChildren}/>
        </Card>
        {filteredJobs && filteredJobs.map((job, index) => (
          <a href={job.job_link} key={index}><Card key={index} className="card-hover"> {/* Add card-hover class here */}
            <Row className="g-0">
              <Col lg={1} className="d-flex align-items-center justify-content-center">
                <Image
                  src={companies_images[job.job_company] || "path/to/default/image.png"} // Add fallback image if necessary
                  alt={job.job_company || "Company Logo"}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col lg={9}>
                <Card.Body>
                  <h5 className="card-title">
                    {job.job_title}
                    <span> | {job.job_company}</span><br />
                    <span>{job.job_location}</span>
                  </h5>
                  {/*<ul>
                    {qualifications.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>*/}
                </Card.Body>
              </Col>
              <Col lg={2} className="d-flex flex-column align-items-center justify-content-center">
              <JobActionButtons id={job.job_id} saved={job.saved} applicated_date={job.applicated_date}/>
              </Col>
            </Row>
          </Card></a>
        ))}
      </Container>
    </main>
  );
}
