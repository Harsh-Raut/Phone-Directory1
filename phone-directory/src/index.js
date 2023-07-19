import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';


ReactDOM.render(<PhoneDirectory />, document.getElementById('root'))
registerServiceWorker();