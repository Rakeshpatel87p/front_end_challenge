import React from 'react';
import ReactDOM from 'react-dom';

const TopViceHeader = React.createClass({
	render(){
		return (
			<div>
				<img src="../images/vice_header_logo.png" />
				<h1>Shows</h1>
			</div>
		)
	}
})

ReactDOM.render(<TopViceHeader />, document.getElementById('topHeader'))

export default TopViceHeader;
