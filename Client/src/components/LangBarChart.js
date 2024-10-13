import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
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

// Sample data for the bar chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'C#',
      data: [2, 3, 10, 4, 9, 3],
      backgroundColor: 'rgba(173, 216, 230, 0.6)', // Light blue
    },
    {
      label: 'Interviews',
      data: [1, 2, 3, 1, 4, 2],
      backgroundColor: 'rgba(255, 165, 0, 0.6)', // Orange
    },
    {
      label: 'Meetups',
      data: [0, 1, 2, 1, 1, 1],
      backgroundColor: 'rgba(60, 179, 113, 0.6)', // Medium sea green
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Important for filling the card
};

export const LangBarChart = () => (
  <Card className="info-card sales-card">
    <Card.Header>
      <Card.Title>Your Last Applications <span>| Jobs Interviews & Meetups</span></Card.Title>
    </Card.Header>
    <Card.Body>
      <Bar data={data} options={options} />
    </Card.Body>
  </Card>
);
