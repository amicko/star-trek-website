var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loreTechnology: 'This will be the Lore Technology Category Page',
			loreAffiliation: 'This will be the Lore Affiliation Category Page',
			loreStarship: 'This will be the Lore Starship Category Page',
			loreLocation: 'This will be the Lore Location Category Page'
		};
	},
	render: function() {
		let newIndex;
		// var technologyMap = this.state.loreTechnology.map((technology, index) => {
		// 	newIndex = index + 1
		// 	return (
		// 		<div className="technologyBox" key={index}>
		// 			<h2>{newIndex}. {technology.test}</h2>
		// 		</div>
		// 	)
		// })

		// var affiliationMap = this.state.loreAffiliation.map((affiliation, index) => {
		// 	newIndex = index + 1
		// 	return (
		// 		<div className="affiliationBox" key={index}>
		// 			<h2>{newIndex}. {affiliation.test}</h2>
		// 		</div>
		// 	)
		// })

		// var starshipMap = this.state.loreStarship.map((starship, index) => {
		// 	newIndex = index + 1
		// 	return (
		// 		<div className="starshipBox" key={index}>
		// 			<h2>{newIndex}. {starship.test}</h2>
		// 		</div>
		// 	)
		// })

		// var locationMap = this.state.loreLocation.map((location, index) => {
		// 	newIndex = index + 1
		// 	return (
		// 		<div className="locationBox" key={index}>
		// 			<h2>{newIndex}. {location.test}</h2>
		// 		</div>
		// 	)
		// })

		var shownList = []
		if(this.props.loreCategory == 'technology') {
			shownList = this.state.loreTechnology
		}
		else if(this.props.loreCategory == 'affiliation') {
			shownList = this.state.loreAffiliation
		}
		else if(this.props.loreCategory == 'starship') {
			shownList = this.state.loreStarship
		}
		else if(this.props.loreCategory == 'location') {
			shownList = this.state.loreLocation
		}

		return (
			<div id="loreCategoryContainer">
				{shownList}
			</div>
		)
	}
})