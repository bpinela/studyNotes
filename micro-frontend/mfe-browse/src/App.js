import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


// import { Container } from './styles';

const defaultHistory = createBrowserHistory();

export default function App(...props) {
  return (
    <Router history={props.history || defaultHistory}>
      <div>
        <h1>Browse page</h1>
        <span>Under development</span>
      </div>
    </Router>
  );
}
