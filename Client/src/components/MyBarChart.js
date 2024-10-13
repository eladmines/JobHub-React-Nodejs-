import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Container } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Applications',
      data: [2, 3, 10, 4, 9, 3],
      backgroundColor: 'rgba(173, 216, 230, 0.6)',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Important for filling the card
};

export const MyBarChart = () => (

<Card className="card">
                <Card.Header>
                  <Card.Title>Your Last Applications <span>| Jobs interviews & Meetups</span></Card.Title>
                </Card.Header>
                <Card.Body>
                <Bar data={data} options={options} />
                </Card.Body>
              </Card>
  
);




