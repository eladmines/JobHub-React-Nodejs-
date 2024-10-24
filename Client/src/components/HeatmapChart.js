import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { getMonth } from '../utils/genericHelpers';
import Card from "react-bootstrap/esm/Card";
import { useFetchGet } from '../hooks/useFetchGet';
import { LoadingBar } from "./LoadingBar";
import { SERVER } from '../constants/CompaniesLogo';

export function HeatmapChart() {
  const { data: applications, loading, error, fetchData } = useFetchGet();
  const [appsMonth, setAppsMonth] = useState([]);
  const currentMonthNum = new Date().getMonth();
  const daysInMonth = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  
  const monthsOfYear = [
    getMonth(currentMonthNum),
    getMonth(currentMonthNum + 1),
    getMonth(currentMonthNum + 2),
  ];
  
  useEffect(() => {
    const fetchApplications = async () => {
      if(localStorage.getItem('skills')){
        await fetchData("applications/getApplicationsByMonth/");
      }
      else{
        await fetchData("stats/newJobsPerDayStats");
        
      }
    };

    fetchApplications();
    setAppsMonth(applications)
  }, []);

  useEffect(() => {
      setAppsMonth(applications); 
      console.log("applications",applications)
  }, [applications]);
  

  const options = {
    chart: {
      type: 'heatmap',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 1, color: '#e3e3e3', name: 'Low' },
            { from: 2, to: 30, color: '#32CD32', name: 'Medium' },
            { from: 31, to: 60, color: '#006400', name: 'High' },
          ],
        },
      },
    },
    grid: {
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
    },
    xaxis: {
      categories: daysInMonth,
    },
    yaxis: {
      labels: {
        offsetX: -10,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => (val === null ? 'X' : ''),
      style: { fontSize: '14px', colors: ['#ff0000'] },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => (val !== null ? `${val} applications` : 'Invalid date'),
      },
    },
  };

  if (loading) {
    return;
  }

  return (
    <Card className="card">
      <Card.Header>
        <Card.Title>Job Scraping Heatmap <span>| New opporunities every day </span></Card.Title>
      </Card.Header>
      <Card.Body>
        <Chart options={options} series={applications} type="heatmap" height={140} />
      </Card.Body>
    </Card>
  );
}
