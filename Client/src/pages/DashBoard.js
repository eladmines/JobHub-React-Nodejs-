import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { FaFileAlt, FaUsers, FaBookmark } from 'react-icons/fa';
import { CardIcon } from '../components/Card/CardIcon';
import { NewJobs } from '../components/NewJobs';
import {TrafficChart} from '../components/TrafficChart';
import 'react-datepicker/dist/react-datepicker.css';

import MySchedule from '../components/MySchedule';
export function DashBoard() {
  const topCards = [
    { title: "Active Apps", icon: <FaFileAlt />, className: "active-applications-card", count: 146 },
    { 
      title: "Test", 
      icon: <FaUsers />, 
      className: "next-meetup-card", 
      count:146
    },
    { title: "Saved Jobs", icon: <FaBookmark />, className: "savedjobs-card", count: 20 }
  ];

  const colsHeader = ["Date", "Company", "Role", "Status"];
  const dataTable = [
    { Date: "15.9.2024", Company: "Microsoft", Role: "Software Engineer", Status: "Active" },
    { Date: "16.9.2024", Company: "Google", Role: "Data Scientist", Status: "Pending" },
    { Date: "17.9.2024", Company: "Amazon", Role: "Product Manager", Status: "Inactive" },
    { Date: "18.9.2024", Company: "Facebook", Role: "UX Designer", Status: "Active" },
    { Date: "19.9.2024", Company: "Apple", Role: "Systems Analyst", Status: "Active" },
    { Date: "20.9.2024", Company: "Netflix", Role: "Software Developer", Status: "Pending" },
    { Date: "21.9.2024", Company: "IBM", Role: "Cloud Engineer", Status: "Inactive" },
    { Date: "22.9.2024", Company: "Intel", Role: "Hardware Engineer", Status: "Active" },
    { Date: "23.9.2024", Company: "Adobe", Role: "Creative Director", Status: "Pending" },
    { Date: "24.9.2024", Company: "Salesforce", Role: "Business Analyst", Status: "Active" }
  ];



  return (
    <main id="main" className="main">
      <Container>
        <h5 className="pagetitle">DashBoard</h5>
        <section className="section dashboard">
          <Row>
            <Col lg={8}>
              <Row>
                {topCards.map((item, index) => (
                  <Col key={index} xxl={4} md={6}>
                    <Card className={`info-card ${item.className}`}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <div className="d-flex align-items-center">
                          <CardIcon icon={item.icon} />
                            <div className="d-flex flex-column ms-3 align-items-center">
                              <h6 className="mb-0">{item.count}</h6>
                              <span className="text-success small pt-1 fw-bold">12% increase</span>
                            </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card className="info-card sales-card">
                <Card.Header>
                  <Card.Title>Your Last Applications <span>| Jobs interviews & Meetups</span></Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        {colsHeader.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataTable.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Date}</td>
                          <td>{row.Company}</td>
                          <td>{row.Role}</td>
                          <td>{row.Status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column */}
            <Col lg={4}>
              <MySchedule/>

              <Card className="card">
                <Card.Body>
                      <NewJobs/>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                      <TrafficChart/>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </section>
      </Container>
    </main>
  );
}

