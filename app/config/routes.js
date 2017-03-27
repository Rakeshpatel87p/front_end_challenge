import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import ShowCard from '../components/Showcard';


const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={TopHeader, Header, ShowCard}>
		</Route>
	</Router>
)

export default routes;
