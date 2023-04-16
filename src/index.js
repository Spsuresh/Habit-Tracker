import * as React from 'react';
import { render } from 'react-dom';
import App from '../app';
import AppProviders  from '../context';
import reportWebVitals from './reportWebVitals';
import '../node_modules/@fontsource/roboto/300.css';
import '../node_modules/@fontsource/roboto/400.css';
import '../node_modules/@fontsource/roboto/500.css'
import '../node_modules/@fontsource/roboto/700.css';

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);



reportWebVitals();
