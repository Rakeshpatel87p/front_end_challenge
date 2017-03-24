import React from 'react';
import ReactDOM from 'react-dom';
import ShowInformation from '../shows';

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

var ShowCard = React.createClass({
    render: function() {
        var showComponents = ShowInformation.map(function(show) {
            return (
            		<div className={show.title} key={show.id}>
						<ShowTitle showTitle = {show.title}/>
						<EpisodeNumbers episodeNumbers= {show.episodes}/>
						<ShowImage showImage={show.product_image_url} />
					</div>
            	);
        });
        return <div>{showComponents}</div>;
    }
});

const ShowCard1 = React.createClass({
	render(){
		ShowInformation.map(function(show){
				console.log(show);
				return (
					<div>
						<ShowTitle showTitle = {show.title}/>
						<EpisodeNumbers episodeNumbers= {show.episodes}/>
						<ShowImage src={show.product_image_url} />
					</div>
					)
			})


	}
});

export default ShowCard;