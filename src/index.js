import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App.js';
import App from '../src/components/App.js';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
