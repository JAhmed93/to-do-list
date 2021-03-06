import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: 'todo-0', name: 'Eat', checked: 'True' },
  { id: 'todo-1', name: 'Sleep', checked: 'False' },
  { id: 'todo-2', name: 'Repeat', checked: 'False' },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
