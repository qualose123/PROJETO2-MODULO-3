import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/Home.jsx"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


    /* Aki está importando a function exportada Home da pasta Home*/
