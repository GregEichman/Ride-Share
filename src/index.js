import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rides from './rides.json';

ReactDOM.render(<App rides={rides}/>, document.getElementById('root'));