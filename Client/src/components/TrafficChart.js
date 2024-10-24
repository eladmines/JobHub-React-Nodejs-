import React, { useEffect, useRef,useState } from 'react';
import { useFetchGet } from '../hooks/useFetchGet';
import * as echarts from 'echarts';
import {Card} from 'react-bootstrap';
import { SERVER } from '../constants/CompaniesLogo';
export function TrafficChart() {
const chartRef = useRef(null);

useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    chartInstance.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Nvidia' },
            { value: 735, name: 'Microsoft' },
            { value: 580, name: 'Apple' },
            { value: 484, name: 'Google' },
            { value: 300, name: 'Meta' },
          ],
        },
      ],
    });

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <>
      <Card.Header>
    <Card.Title>
      Companies stats <span>| Analyzing Job Scraping Data</span>
    </Card.Title>
    </Card.Header>

    <div
      id="trafficChart"
      ref={chartRef}
      style={{ minHeight: '400px' }}
      className="echart"
    ></div>
    </>
 
   
    
  );
}
