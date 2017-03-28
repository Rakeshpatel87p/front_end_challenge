// const React = require('react');
// const ReactDOM = require('react-dom');
// const routes = require('./config/routes');
// const css = require('./styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './config/routes';
require('./styles/main.scss');

ReactDOM.render(App, document.getElementById('main'))