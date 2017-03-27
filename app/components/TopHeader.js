import React from 'react';
import ReactDOM from 'react-dom';

const TopHeader = React.createClass({
	render(){
		return (
			<div>
				<img src="../images/vice_header_logo.png" />
			</div>
		)
	}
})

ReactDOM.render(<TopHeader />, document.getElementById('topHeader'))