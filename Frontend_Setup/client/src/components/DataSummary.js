// DataSummary.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataSummary = () => {
  const [summary, setSummary] = useState({
    count1: 0,
    count0: 0,
    continuous1: [],
    continuous0: [],
  });

  // Fetch data from API
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data/summary');
        setSummary(response.data);
      } catch (error) {
        console.error('Failed to fetch data summary', error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div>
      <h2>Data Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of 1s</td>
            <td>{summary.count1}</td>
          </tr>
          <tr>
            <td>Number of 0s</td>
            <td>{summary.count0}</td>
          </tr>
          <tr>
            <td>Continuous 1s</td>
            <td>{summary.continuous1.join(', ')}</td>
          </tr>
          <tr>
            <td>Continuous 0s</td>
            <td>{summary.continuous0.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataSummary;
