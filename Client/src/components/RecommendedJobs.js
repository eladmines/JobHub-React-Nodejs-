import React, { useState, useEffect } from 'react';
import { useFetchGet } from '../hooks/useFetchGet';
import { Card } from 'react-bootstrap';
import { RecommendedJob } from './RecomendedJobs/RecomndedJob';
import { getRandomNumberInRange } from '../utils/genericHelpers';
import { FaSync } from 'react-icons/fa';
import './RecomendedJobs/PostItems.css';

export function RecommendedJobs() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const { data: jobs, fetchData } = useFetchGet();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:5000/jobs/");
    const storedSkills = localStorage.getItem('skills') ? localStorage.getItem('skills').split(",") : [];
    setSkills(storedSkills);
  }, []);

  useEffect(() => {
    if (jobs) {
      var filtered = jobs;
        if(skills.length != 0){
          filtered = jobs.filter((job) => {
            const skillsMatch =Array.isArray(job.job_qualifications) &&
              skills.some(skill => job.job_qualifications.includes(skill));
            return skillsMatch;
          });
        }
      setFilteredJobs(filtered);
    }
    setRefresh(false);
  }, [jobs, skills, refresh]);

function getFourRandomIndices(){
    const randomIndices = new Set();
    while (randomIndices.size < 4 && randomIndices.size < filteredJobs.length) {
      randomIndices.add(getRandomNumberInRange(0, filteredJobs.length - 1));
    }
    return randomIndices;
}

const randomIndices = getFourRandomIndices();

  return (
    <Card className="info-card sales-card">
      <Card.Header>
        <Card.Title className="text-start">
          Recommended Jobs <span>| Today</span>
          <FaSync
            className="refresh-icon"
            style={{ cursor: 'pointer', float: 'right' }}
            onClick={() => setRefresh(true)}
          />
        </Card.Title>
      </Card.Header>
      <div className="news d-flex flex-column">
        {Array.from(randomIndices).map(index => (
          <RecommendedJob
            key={filteredJobs[index].id}
            job={filteredJobs[index]}
          />
        ))}
      </div>
    </Card>
  );
}
