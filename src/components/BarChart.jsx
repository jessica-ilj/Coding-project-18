import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ labels, sales }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Sales',
        data: sales,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
  };

  return <ChartComponent type="bar" data={data} options={options} />;
};

export default BarChart;
