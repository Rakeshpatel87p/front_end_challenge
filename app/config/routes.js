// import React from 'react';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import ShowCard from './components/ShowCard';

// const routes = {
// 	<Router history={browserHistory}>
// 		<Route path="/" component={ShowCard}>
// 			<Route path="/shows" />
// 		</Route>
// 	</Router>	
// };

// export default routes

const 
	React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	browserHistory = ReactRouter.browserHistory,
	ShowCard = require('./components/ShowCard');


const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={ShowCard} >
			<Route path="/home" />
		</Route>
	</Router>
)

module.exports = routes