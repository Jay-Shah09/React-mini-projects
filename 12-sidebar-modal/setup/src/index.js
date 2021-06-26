import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HelloPeople } from './context';
ReactDOM.render(
  <React.StrictMode>
    <HelloPeople>
      <App />
    </HelloPeople>
  </React.StrictMode>,
  document.getElementById('root')
);
