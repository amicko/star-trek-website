var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			mediaMovies: ['This', 'is', 'the', 'movies', 'page'],
			mediaTOS: ['This', 'is', 'the', 'TOS', 'page'],
			mediaTNG: ['This', 'is', 'the', 'TNG', 'page'],
			mediaDS9: ['This', 'is', 'the', 'DS9', 'page'],
			mediaVOY: ['This', 'is', 'the', 'VOY', 'page']
		};
	},
	render: function() {
		console.log(this.props.mediaCategory)
		var shownList = []
		if(this.props.mediaCategory == 'mov') {
			shownList = this.state.mediaMovies[0] + ' ' + this.state.mediaMovies[1] + ' ' + this.state.mediaMovies[2] + ' ' + this.state.mediaMovies[3] + ' ' + this.state.mediaMovies[4]
		}
		else if(this.props.mediaCategory == 'tos') {
			shownList = this.state.mediaTOS[0] + ' ' + this.state.mediaTOS[1] + ' ' + this.state.mediaTOS[2] + ' ' + this.state.mediaTOS[3] + ' ' + this.state.mediaTOS[4]
		}
		else if(this.props.mediaCategory == 'tng') {
			shownList = this.state.mediaTNG[0] + ' ' + this.state.mediaTNG[1] + ' ' + this.state.mediaTNG[2] + ' ' + this.state.mediaTNG[3] + ' ' + this.state.mediaTNG[4]
		}
		else if(this.props.mediaCategory == 'ds9') {
			shownList = this.state.mediaDS9[0] + ' ' + this.state.mediaDS9[1] + ' ' + this.state.mediaDS9[2] + ' ' + this.state.mediaDS9[3] + ' ' + this.state.mediaDS9[4]
		}
		else if(this.props.mediaCategory == 'voy') {
			shownList = this.state.mediaVOY[0] + ' ' + this.state.mediaVOY[1] + ' ' + this.state.mediaVOY[2] + ' ' + this.state.mediaVOY[3] + ' ' + this.state.mediaVOY[4]
		}
		return (
			<div className="mediaCategoryContainer">
				{shownList}
			</div>
		)
	}
})