import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => { 
    const chartInstance = new Chart(chartRef.current, {
      type,
      data,
      options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
