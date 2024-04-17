// DataVisualization.js
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Line } from 'react-chartjs-2';

const DataVisualization = () => {
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  // Process data for visualization
  const processData = () => {
    const timestamps = data.map(d => new Date(d.timestamp).toLocaleTimeString());
    const samples = data.map(d => d.sample);

    return {
      labels: timestamps,
      datasets: [
        {
          label: 'Samples',
          data: samples,
          backgroundColor: samples.map(sample => {
            if (sample === 0) return 'yellow';
            if (sample === 1) return 'green';
            return 'red';
          }),
        },
      ],
    };
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      <Line data={processData()} />
    </div>
  );
};

export default DataVisualization;
