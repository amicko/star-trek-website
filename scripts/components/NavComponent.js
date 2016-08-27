var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="NavContainer">
				<img src="images/STAR TREK.png"/>
				<h1>Memory Aaron</h1>
				<h2>A Begginer Trekkie's Guide</h2>
				<ul id="navList">
					<li><a href="#">Home</a><hr/></li>
					<li><a href="#/media">Media</a><hr/></li>
					<li><a href="#">Lore</a><hr/></li>
					<li><a href="#">Games</a><hr/></li>
				</ul>
			</div>
		)
	}
})