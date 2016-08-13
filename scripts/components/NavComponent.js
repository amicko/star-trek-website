var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="NavContainer">
				<img src="images/STAR TREK.png"/>
				<h1>Star Trek Website</h1>
				<ul id="navList">
					<li><a href="">Home</a></li>
					<li><a href="">Media</a></li>
					<li><a href="">Lore</a></li>
					<li><a href="">Games</a></li>
				</ul>
			</div>
		)
	}
})