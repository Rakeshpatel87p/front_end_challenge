import React from 'react';
import ReactDOM from 'react-dom';

const TopViceHeader = React.createClass({
	render(){
		return (
			<div>
				<img src="../images/vice_header_logo.png" />
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(<TopViceHeader />, document.getElementById('topHeader'))

export default TopViceHeader;

