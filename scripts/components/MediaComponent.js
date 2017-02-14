const React = require('react');

module.exports = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		currentChoice: null
	// 	};
	// },
	render: function() {
		// let currentChoice = null;
		// if(!this.state.currentChoice) {
		// 	currentChoice = 'Media Page'
		// }
		// else {
		// 	currentChoice = this.state.currentChoice
		// }
		return (
			<div className="mediaContainer">
				<div className="mediaIntro">
					<h2>Media</h2>
					<p>Welcome to the media page! On this page you will find my recommended top picks from the many Star Trek movies and Star Trek TV series. These pages are designed to guide you through some of Star Trek's very best media options without requiring too much understanding of the Star Trek universe.
					</p>
				</div>
				<a id="mediaMovieIcon" href="#/media/mov"></a>
				<div id="tvBigContainer">
					<div className="tvSmallContainer">
						<a id="mediaOriginalSeriesIcon" href="#/media/tos"></a>
						<a id="mediaTNGSeriesIcon" href="#/media/tng"></a>
					</div>
					<div className="tvSmallContainer">
						<a id="mediaDS9SeriesIcon" href="#/media/ds9"></a>
						<a id="mediaVoyagerSeriesIcon" href="#/media/voy"></a>
					</div>
				</div>
			</div>
		)
	}
})