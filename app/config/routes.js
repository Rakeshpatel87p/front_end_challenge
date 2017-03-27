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
