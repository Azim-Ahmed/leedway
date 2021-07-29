import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
