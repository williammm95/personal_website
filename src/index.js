import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.css';
import { App } from './components/App/App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
