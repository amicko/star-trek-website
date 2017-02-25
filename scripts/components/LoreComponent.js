const React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div id="loreContainer">
				<h2>Welcome!</h2>
				<p>This is the future home of the lore page! You will find all the information a new-comer to Star Trek will need to learn about the various aspects of Star Trek. From the Galor-Class cruisers of the fascist-state Cardassians to the politically manipulative planetary history of the Romulan capitol of Romulus, you will find it all in one of the following categories.
				</p>
				<div className="loreBlock">
					<a href="#/lore/technology"><img src="./images/technology/techCollage.jpg" /></a>
					<a href="#/lore/affiliation"><img src="./images/affiliations/logoCollage.jpg" /></a>
				</div>
				<div className="loreBlock">
					<a href="#/lore/starship"><img src="./images/starships/shipCollage.jpg" /></a>
					<a href="#/lore/location"><img src="./images/locations/LocCollage.jpg" /></a>
				</div>
			</div>
		)
	}
})