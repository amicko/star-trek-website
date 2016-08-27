var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentChoice: null
		};
	},
	render: function() {
		return (
			<div className="mediaContainer">
				Media Page
			</div>
		)
	}
})