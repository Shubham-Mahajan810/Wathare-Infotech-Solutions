// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import DataVisualization from './components/DataVisualization';
import DataSummary from './components/DataSummary';

const App = () => {  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/visualization" component={DataVisualization} />
          <Route path="/summary" component={DataSummary} />
          <Route path="/" exact>
            <h2>Welcome to the Data Visualization App</h2>
            <p>Use the navigation to view data visualization and summary.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
