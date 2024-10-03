import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

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
    
    <div
      id="trafficChart"
      ref={chartRef}
      style={{ minHeight: '400px' }}
      className="echart"
    ></div>
    
  );
}
