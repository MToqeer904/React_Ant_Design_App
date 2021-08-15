import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import table from './SearchData/table';
import chart from './Charts/Charts';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Switch>
        <Route path={'/data'} exact component={chart} />
        <Route path={'/table'} exact component={table} />
        <Route path={'/'} exact component={chart} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
