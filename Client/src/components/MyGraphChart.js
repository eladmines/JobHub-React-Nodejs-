import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { useFetchGet } from '../hooks/useFetchGet';
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
import { SERVER } from '../constants/CompaniesLogo';

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

export function MyGraphChart() {
  const { data: plStats, loading, fetchData } = useFetchGet();
  const [pl, setPl] = useState([]);

  useEffect(() => {
    fetchData("stats/getPLStats");
  }, []);

  useEffect(() => {
    setPl(plStats);
  }, [plStats]);
  const colors = [
    'rgba(75, 192, 192, 1)', // Teal
    'rgba(255, 99, 132, 1)', // Red
    'rgba(255, 206, 86, 1)', // Yellow
    'rgba(54, 162, 235, 1)', // Blue
  ];
  if (pl.length === 0) {
    return;
  } 

  const datasets = pl.map((item, index) => ({
    label: item['pl'], // Accessing the 'pl' property for the label
    data: item['jobs_count'].slice(-6), // Getting the last six elements of jobs_count
    fill: false,
    backgroundColor: colors[index], // Using the color based on the index
    borderColor: colors[index], // Using the color based on the index
    tension: 0.4,
  }));

  // Chart data
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months (modify according to your data)
    datasets: datasets, // Use the dynamic datasets here
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
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
  return (
    <Card className="info-card sales-card">
      <Card.Header>
      <Card.Title className="text-start">
        
      Popularity of Programming Languages and Technologies <span>| Based on JobHub data </span>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Line data={data} options={options} height={400} />
      </Card.Body>
    </Card>
  );
}
