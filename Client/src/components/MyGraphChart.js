import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for the line chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
  datasets: [
    {
      label: 'JavaScript',
      data: [30, 45, 28, 50, 70, 60],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light blue line
      borderColor: 'rgba(75, 192, 192, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
    {
      label: 'Python',
      data: [20, 35, 15, 40, 50, 55],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red line
      borderColor: 'rgba(255, 99, 132, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
    {
      label: 'Java',
      data: [10, 25, 30, 20, 40, 35],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue line
      borderColor: 'rgba(54, 162, 235, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
    {
      label: 'React',
      data: [15, 30, 25, 35, 45, 50],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow line
      borderColor: 'rgba(255, 206, 86, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
    {
      label: 'Node.js',
      data: [5, 15, 20, 25, 30, 40],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(153, 102, 255, 0.6)', // Purple line
      borderColor: 'rgba(153, 102, 255, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
    {
      label: 'C++',
      data: [8, 12, 15, 20, 22, 30],
      fill: false, // No fill under the line
      backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange line
      borderColor: 'rgba(255, 159, 64, 1)', // Border color of the line
      tension: 0.4, // Curve tension (smoothness)
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Important to make it responsive within the card
  plugins: {
    legend: {
      display: true,
      position: 'top', // Position of the legend
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Count',
      },
    },
  },
};

export const MyGraphChart = () => (
  <Card className="info-card sales-card">
    <Card.Header>
      <Card.Title>Monthly Tech Stats <span>| Analyzing Job Scraping Data</span></Card.Title>
    </Card.Header>
    <Card.Body>
      <Line data={data} options={options} height={400} />
    </Card.Body>
  </Card>
);
