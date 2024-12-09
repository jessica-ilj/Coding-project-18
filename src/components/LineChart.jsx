import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ labels, profits }) => { //Displays monthly profits.
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Profits',
        data: profits,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;
