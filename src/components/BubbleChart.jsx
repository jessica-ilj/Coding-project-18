import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ sales, expenses, profits }) => {   //Displays sales, profits, and expenses.
  const data = {
    datasets: [
      {
        label: 'Sales, Expenses & Profits',
        data: sales.map((sale, index) => ({
          x: expenses[index],
          y: profits[index],
          r: sale / 20, 
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { x: { beginAtZero: true }, y: { beginAtZero: true } },
  };

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;
