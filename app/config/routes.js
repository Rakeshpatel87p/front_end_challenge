import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import TopViceHeader from '../components/TopViceHeader';
// import Header from '../components/Header';
// import ShowCard from '../components/Showcard';
const TopViceHeader = require('../components/TopViceHeader');
const Header = require('../components/Header');
const ShowCard = require('../components/Showcard')


const routes = (
	<Router history={browserHistory}>
		<Route path={'/'} component={TopViceHeader}>
			<Route path={'/shows'} component={Header, ShowCard} />
		</Route>
	</Router>
)

export default routes;
