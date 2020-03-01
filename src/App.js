import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';
import {Root} from './layout/Root';

function App() {
  return (
    <Router history={history}>
      <Root>
        <Routes/>
      </Root>
    </Router>
  );
}

export default App;
