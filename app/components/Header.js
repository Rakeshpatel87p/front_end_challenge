import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
	render(){
		return (
			<div>
				<h1>Shows</h1>
			</div>
		)
	}
})

ReactDOM.render(<Header />, document.getElementById('header'))

export default Header;