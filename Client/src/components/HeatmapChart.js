import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

export function HeatmapChart() {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => `${i + 1}`); // Days 1-31
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May']; // Display these months on y-axis

  // Define which days are valid for each month (e.g., Feb only has 28 days)
  const daysInEachMonth = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
  };

  // Generate series data with 'null' for invalid dates (non-existent dates will be marked with 'X')
  const [series, setSeries] = useState(
    monthsOfYear.map((month) => ({
      name: month,
      data: Array.from({ length: daysInMonth.length }, (_, i) =>
        i + 1 > daysInEachMonth[month] ? null : Math.floor(Math.random() * 0) // Mark invalid dates with 'null'
      ),
    }))
  );

  const [options, setOptions] = useState({
    chart: {
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              color: '#98FB98', // Light Green (Low)
              name: 'Low',
            },
            {
              from: 11,
              to: 30,
              color: '#32CD32', // Medium Green
              name: 'Medium',
            },
            {
              from: 31,
              to: 60,
              color: '#006400', // Dark Green (High)
              name: 'High',
            },
          ],
        },
      },
    },
    xaxis: {
      categories: daysInMonth, // Display days of the month on x-axis
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return monthsOfYear[val]; // Display months as row labels
        },
        offsetX: -10, // Move the month labels closer to the chart
      },
    },
    
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // If the value is 'null', display an 'X'
        return val === null ? 'X' : '';
      },
      style: {
        fontSize: '14px',
        colors: ['#ff0000'], // Red for the 'X' marker
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val !== null ? `${val} applications` : 'Invalid date'; // Show 'Invalid date' for null values
        },
      },
    },
  });

  return (
    <Card className="card">
      <Card.Header>
        <Card.Title>Your Applications <span>| Jobs Interviews & Meetups</span></Card.Title>
      </Card.Header>
      <Card.Body>
        <Chart options={options} series={series} type="heatmap" height={350} />
      </Card.Body>
    </Card>
  );
}
