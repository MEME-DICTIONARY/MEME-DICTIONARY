import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
