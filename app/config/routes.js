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

// const 
// 	React = require('react'),
// 	ReactRouter = require('react-router'),
// 	Router = ReactRouter.Router,
// 	Route = ReactRouter.Route,
// 	IndexRoute = ReactRouter.IndexRoute,
// 	hashHistory = ReactRouter.hashHistory,
//  	ShowCard = require('../components/ShowCard');

import React from 'react';
import {Router, Route, IndexHistory, hashHistory} from 'react-router'
import ShowCard from '../components/Showcard';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={ShowCard} >
			<Route path="/home" component={ShowCard}/>
		</Route>
	</Router>
)

export default routes;

// module.exports = routes