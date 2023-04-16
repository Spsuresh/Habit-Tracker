import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'app';
import { AppProviders } from 'context';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto/300.css';
import 'fontsource-roboto/400.css';
import 'fontsource-roboto/500.css';
import 'fontsource-roboto/700.css';

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);



reportWebVitals();
