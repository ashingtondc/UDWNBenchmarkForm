import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Slang Term Similarity Graph Benchmark Survey</h1>
    <div style={{margin: "5px"}}>
      <p>
        Welcome! Thanks for offering to fill out this survey. 
        <br></br>
        This data is needed for my senior project to create a benchmark modeling what a real human would think.
        My project involves building a similarity graph consisting of slang terms and regular English terms.
        This graph will yield a value between 0 and 1 indicating how similar a slang term and a regular English term are. 
        <br></br>
        Thanks for helping me graduate!
      </p>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
