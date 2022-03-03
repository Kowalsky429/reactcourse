import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/fonts.css';
import Root from 'views/Root';
import { worker } from 'mocks/browser';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
