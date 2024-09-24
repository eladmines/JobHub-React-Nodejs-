import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {CardIcon} from '../components/Card/CardIcon';
import {Table} from '../components/Table/Table';
import {Title} from '../components/Title';
import {NewsJobs} from '../components/NewJobs';
import {TrafficChart} from '../components/TrafficChart';

export function DashBoard() {
    const topCards = [
        { title: "Active Apps", icon: "bi bi-file-earmark-text", class: "active-applications-card" },
        { title: "Next Meetup", icon: "bi bi-people", class: "next-meetup-card" },
        { title: "Saved Jobs", icon: "bi bi-disc", class: "savedjobs-card" }
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
        {/* Page Title */}
        <Title className="pagetitle" title="DashBoard" size="h1" />

        <section className="section dashboard">
          <Row>
            {/* Left Column */}
            <Col lg={8}>
              <Row>
                {/* Top Cards */}
                {topCards.map((item, index) => (
                  <Col key={index} xxl={4} md={6}>
                    <Card className={`info-card ${item.class}`}>
                      <Card.Body>
                        <Title className="card-title" title={item.title} size="h5" />
                        <div className="d-flex align-items-center">
                          <CardIcon image={item.icon} />
                          <div className="ps-3">
                            <Title className="ps-3" title="146" size="h6" />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card className="info-card sales-card">
                <Card.Header>
                  <Title className="card-title" title="Your last applications" size="h5" />
                </Card.Header>
                <Card.Body>
                  <Table colsHeader={colsHeader} dataTable={dataTable} />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <NewsJobs />
              <Card className="card">
                <Card.Body>
                  <Title className="card-title" title="Companies" size="h5" />
                  <TrafficChart />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

    </main>
  );
}


