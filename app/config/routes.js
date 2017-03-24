import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ShowCard from './components/ShowCard';

const Routes = {
	<Router history={browserHistory}>
		<Route path="/" component={ShowCard}>
			<Route path="/shows" />
		</Route>
	</Router>	
};

export default Routes