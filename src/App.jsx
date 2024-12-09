import React, { useState, useEffect } from 'react';
import './App.css'; // Import the stylesheet
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json') 
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>
          Loading data, please wait...
        </p>
      </div>
    );
  }
  

  return (
    <div className="app">
      <header className="header">
        <h1>Financial Dashboard</h1>
        <p>Visualize your business performance with interactive charts</p>
      </header>

      <div className="chart-grid">
        <div className="chart-card">
          <h2>Sales (Bar Chart)</h2>
          <BarChart labels={chartData.months} sales={chartData.sales} />
        </div>

        <div className="chart-card">
          <h2>Profits (Line Chart)</h2>
          <LineChart labels={chartData.months} profits={chartData.profits} />
        </div>

        <div className="chart-card">
          <h2>Expenses vs Profits (Scatter Chart)</h2>
          <ScatterChart
            expenses={chartData.expenses}
            profits={chartData.profits}
          />
        </div>

        <div className="chart-card">
          <h2>Sales vs Expenses vs Profits (Bubble Chart)</h2>
          <BubbleChart
            sales={chartData.sales}
            expenses={chartData.expenses}
            profits={chartData.profits}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
