import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ expenses, profits }) => {  //Displays expenses vs. profits.
  const data = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: expenses.map((exp, index) => ({ x: exp, y: profits[index] })),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { x: { beginAtZero: true }, y: { beginAtZero: true } },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;
