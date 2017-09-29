/**
 * Created by Tia on 4/2/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App initialData = {window.initialData} />,
  document.getElementById('root')
);
