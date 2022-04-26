import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let name = {
  firstname:'shivkanya',
  lastname:'gurjar',
  address:'kherkheda',
  contact:'7803842785'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App {...name} />
  </React.StrictMode>
);


