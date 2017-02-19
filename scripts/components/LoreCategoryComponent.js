var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loreTechnology: [
				{
					name: 'Transporters',
					image: './images/technology/transporter.jpg',
					description: 'The transporter is a device which instantaneously teleports or beams an organic or inorganic thing from one point to another by deconstructing the item on a molecular level and reassembling it at the destination. Transporters allow civilizations to transport supplies and people across great distances without ever having to manually ferry those things directly.',
					link: 'http://memory-alpha.wikia.com/wiki/Transporter'
				},
				{
					name: 'Warp Drive',
					image: './images/technology/warp-core.jpg',
					description: 'Nearly all starships in the Star Trek universe use some kind of warp-driven engine. It is the warp drive design that allows civilizations to go faster than the speed of light. They do this by generating a warp field that creates a bubble around the starship that allows them to essentially break the laws of physics by going faster than the speed of light.',
					link: 'http://memory-alpha.wikia.com/wiki/Warp_drive'
				},
				{
					name: 'Replicators',
					image: './images/technology/replicator.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Tricorder',
					image: './images/technology/tricorder.jpeg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Hyporspray',
					image: './images/technology/hypospray.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Holodeck',
					image: './images/technology/holodeck.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Phasers',
					image: './images/technology/phaser.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				}
			],
			loreAffiliation: [
				{
					name: 'United Federation of Planets',
					image: './images/affiliations/federation-logo2.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Klingon Empire',
					image: './images/affiliations/klingon-logo1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Romulan Star Empire',
					image: './images/affiliations/romulan-logo1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Cardassian Union',
					image: './images/affiliations/cardassian-logo2.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Ferengi Alliance',
					image: './images/affiliations/ferengi-logo1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Bajoran Provisional Government',
					image: './images/affiliations/bajoran-logo2.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'The Dominion',
					image: './images/affiliations/dominion_logo1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Borg Collective',
					image: './images/affiliations/borg-logo3.ico',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				}
			],
			loreStarship: [
				{
					name: 'Federation: Galaxy-Class',
					image: './images/starships/federation-galaxy.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Federation: Excelsior-Class',
					image: './images/starships/federation-excelsior.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Federation: Intrepid-Class',
					image: './images/starships/federation-intrepid.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Federation: Defiant-Class',
					image: './images/starships/federation-defiant.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Klingon: Bird of Prey',
					image: './images/starships/klingon-bird-of-prey.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Klingon: Vorcha Attack Cruiser',
					image: './images/starships/klingon-vorcha.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Romulan: Warbird',
					image: './images/starships/romulan-dderidex.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Cardassian: Galor',
					image: './images/starships/cardassian-galor.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Dominion: Attack Ship',
					image: './images/starships/dominion-attack-ship.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Dominion: Warship',
					image: './images/starships/dominion-warship.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Borg: Cube',
					image: './images/starships/borg-cube.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				}
			],
			loreLocation: [
				{
					name: 'Earth',
					image: './images/locations/earth.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Qonos',
					image: './images/locations/qonos.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Romulus',
					image: './images/locations/romulus.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Cardassia',
					image: './images/locations/cardassia.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Bajor',
					image: './images/locations/bajor.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Deep Space Nine',
					image: './images/locations/deep-space-9.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				},
				{
					name: 'Risa',
					image: './images/locations/risa.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat vel leo sollicitudin tempus vel vel dui. Aliquam id purus sit amet libero laoreet porttitor. Maecenas sit amet pulvinar velit, sit amet efficitur quam. Nunc tempus laoreet vulputate. Vestibulum nibh est, laoreet eget dignissim eu, pretium id felis. Donec mattis orci ante, a vestibulum arcu eleifend eu. Integer tempus nibh et enim tempus sollicitudin.'
				}
			]
		};
	},
	componentDidMount: function() {
		// window.location.reload(false);
	},
	render: function() {
		let newIndex;
		var technologyMap = this.state.loreTechnology.map((technology, index) => {
			newIndex = index + 1
			return (
				<div className="technologyBox" key={index}>
					<h3>{newIndex}. {technology.name}</h3>
					<img src={technology.image}/>
					<p>{technology.description}</p>
					<br/>
					<p>More information can be learned <a href={technology.link} target="_blank">here</a>.</p>
				</div>
			)
		})

		var affiliationMap = this.state.loreAffiliation.map((affiliation, index) => {
			newIndex = index + 1
			return (
				<div className="affiliationBox" key={index}>
					<h3>{newIndex}. {affiliation.name}</h3>
					<img src={affiliation.image}/>
					<p>{affiliation.description}</p>
				</div>
			)
		})

		var starshipMap = this.state.loreStarship.map((starship, index) => {
			newIndex = index + 1
			return (
				<div className="starshipBox" key={index}>
					<h3>{newIndex}. {starship.name}</h3>
					<img src={starship.image}/>
					<p>{starship.description}</p>
				</div>
			)
		})

		var locationMap = this.state.loreLocation.map((location, index) => {
			newIndex = index + 1
			return (
				<div className="locationBox" key={index}>
					<h3>{newIndex}. {location.name}</h3>
					<img src={location.image}/>
					<p>{location.description}</p>
				</div>
			)
		})

		var shownList = []
		if(this.props.loreCategory == 'technology') {
			shownList = technologyMap
		}
		else if(this.props.loreCategory == 'affiliation') {
			shownList = affiliationMap
		}
		else if(this.props.loreCategory == 'starship') {
			shownList = starshipMap
		}
		else if(this.props.loreCategory == 'location') {
			shownList = locationMap
		}

		return (
			<div id="loreCategoryContainer">
				{shownList}
			</div>
		)
	}
})