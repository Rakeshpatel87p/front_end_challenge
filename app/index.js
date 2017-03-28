// const React = require('react');
// const ReactDOM = require('react-dom');
// const routes = require('./config/routes');
// const css = require('./styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './config/routes';
require('./styles/main.scss');

ReactDOM.render(Routes, document.getElementById('main'))