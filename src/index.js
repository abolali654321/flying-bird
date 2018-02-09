import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@telusdigital/tds/dist/tds.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
