import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { NewJobs } from '../components/NewJobs';
import { TrafficChart } from '../components/TrafficChart';
import 'react-datepicker/dist/react-datepicker.css';
import MySchedule from '../components/MySchedule';
import { MainTopCard } from '../components/MainTopCard';
import { useFetchGet } from '../hooks/useFetchGet';
import { FaFileAlt, FaUsers, FaBookmark } from 'react-icons/fa';
import { LoadingBar } from "../components/LoadingBar";
import { MyGraphChart } from "../components/MyGraphChart"
import { FloatingIcon } from '../components/FloatingIcon';
import { MyBarChart } from '../components/MyBarChart';
import { HeatmapChart } from '../components/HeatmapChart';
export function DashBoard() {
  const { data: userData, loading, error, fetchData } = useFetchGet('http://localhost:5000/');

  useEffect(() => {
    fetchData("http://localhost:5000/main");
  }, []);

  if (loading) {
    return <LoadingBar title="Data" />;
  }

  const colsHeader = ["Date", "Company", "Role", "Status"];
  const dataTable = [
    { Date: "15.9.2024", Company: "Microsoft", Role: "Software Engineer", Status: "Active" },
    { Date: "16.9.2024", Company: "Google", Role: "Data Scientist", Status: "Pending" },
    { Date: "17.9.2024", Company: "Amazon", Role: "Product Manager", Status: "Inactive" },
  ];

  return (
    <>
      <main id="main" className="main">
        <Container>
          <h5 className="pagetitle">DashBoard</h5>
          <section className="section dashboard">
            <Row>
              <Col lg={8}>
                <Row>
                  <Col xxl={4} md={6}>
                    <MainTopCard
                      className="active-applications-card"
                      title="Active Apps"
                      icon={<FaFileAlt />}
                      count={userData ? userData.applicationCount : 0}
                    />
                  </Col>
                  <Col xxl={4} md={6}>
                    <MainTopCard
                      className="next-meetup-card"
                      title="Test"
                      icon={<FaUsers />}
                      count="0"
                    />
                  </Col>
                  <Col xxl={4} md={6}>
                    <MainTopCard
                      className="savedjobs-card"
                      title="Saved Jobs"
                      icon={<FaBookmark />}
                      count={userData ? userData.savedJobsCount : 0}
                    />
                  </Col>
                </Row>
                <HeatmapChart/>
                <MyBarChart />
                <MyGraphChart />
               
              </Col>

              {/* Right Column */}
              <Col lg={4}>
                <MySchedule />
                <Card className="card">
                  <Card.Body>
                    <NewJobs />
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Title>
                    Companies stats <span>| Analyzing Job Scraping Data </span>
                  </Card.Title>
                  <Card.Body>
                    <TrafficChart />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
        
        <FloatingIcon />
      </main>
    </>
  );
}
