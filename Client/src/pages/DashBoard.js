import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RecommendedJobs } from '../components/RecommendedJobs';
import { TrafficChart } from '../components/TrafficChart';
import { MainTopCard } from '../components/MainTopCard';
import { useFetchGet } from '../hooks/useFetchGet';
import { FaFileAlt, FaStar, FaBookmark } from 'react-icons/fa';
import { LoadingBar } from '../components/LoadingBar';
import { MyGraphChart } from '../components/MyGraphChart';
import { FloatingIcon } from '../components/FloatingIcon';
import { HeatmapChart } from '../components/HeatmapChart';
import 'react-datepicker/dist/react-datepicker.css';

export function DashBoard() {
  const { data: userData, loading, error, fetchData } = useFetchGet();

  useEffect(() => {
    fetchData("main");
  }, []);

  if (loading) {
    return <LoadingBar title="Data" />;
  }
  
  return (
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
                    title="Jobs You Might Like"
                    icon={<FaStar />}
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
              <MyGraphChart />
              <HeatmapChart />
              {/* <MyBarChart /> */}
            </Col>
            {/* Right Column */}
            <Col lg={4}>
                  <RecommendedJobs />
                  <Card>
                  <TrafficChart />
                  </Card>
                  
            </Col>
          </Row>
        </section>
      </Container>
      <FloatingIcon />
    </main>
  );
}
