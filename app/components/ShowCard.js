import React from 'react';
import ReactDOM from 'react-dom';

const ShowTitle = React.createClass({
	render(){
		return <h1>{this.props.showTitle}</h1>
	}
});

const EpisodeNumbers = React.createClass({
	render(){
		return <h1>{this.props.episodeNumbers}</h1>
	}
});

const ShowImage = React.createClass({
	render(){
		return <img src={this.props.showImage} />
	}
});

const ShowCard = React.createClass({
	render(){
		return (
			<div>
				<ShowTitle showTitle = "Jungle Judice"/>
				<EpisodeNumbers episodeNumbers= "Samarai"/>
				<h1>Hey There, Cutie</h1>
			</div>

		)
	}
});

export default ShowCard;