const React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentImage: 0,
			mediaCollage: [
				{
					image: './images/ST-Original Series/tosCarousel.jpg',
					url: '#/media/tos'
				},
				{
					image: './images/ST-Next Generation/tngCarousel.jpg',
					url: '#/media/tng'
				},
				{
					image: './images/ST-Deep Space Nine/ds9Carousel.jpg',
					url: '#/media/ds9'
				},
				{
					image: './images/ST-Voyager/voyCarousel.jpg',
					url: '#/media/voy'
				}
			],
			loreCollage: [
				{
					image: './images/technology/TechCollage.jpg',
					url: '#/lore/technology'
				},
				{
					image: './images/affiliations/LogoCollage.jpg',
					url: '#/lore/affiliation'
				},
				{
					image: './images/starships/ShipCollage.jpg',
					url: '#/lore/starship'
				},
				{
					image: './images/locations/LocCollage.jpg',
					url: '#/lore/location'
				}
			]
		};
	},
	componentDidMount: function() {
		let that = this;
		let loreInterval = setInterval(loreInt, 5000);

		function loreInt() {
			let oldImage = that.state.currentImage;
			if(window.location.href != 'http://localhost:8000/#') {
				clearInterval(loreInterval);
			}
			else if(that.state.currentImage === 3) {
				that.setState({
					currentImage: 0
				});
			}
			else {
				that.setState({
					currentImage: oldImage + 1
				});
			}
		};

	},
	render: function() {
		let loreCollageMap = this.state.loreCollage.map((collage, index) => {
			return (
				<div className="loreCollageCarousel" key={index}>
					<img src={collage.image}/>
				</div>
			)
		});

		let mediaCollageMap = this.state.mediaCollage.map((collage, index) => {
			return (
				<div className="loreCollageCarousel" key={index}>
					<img src={collage.image}/>
				</div>
			)
		});

		let currentCard = this.state.currentImage;

		return (
			<div className="homeContainer">
				<section id="homeIntroduction">
					<p>
						<span className="quotes">"</span>To me, Star Trek is the goal post that humanity can set for itself. Within it, we see a humanity without greed or poverty. We see a future full of hope and technological marvels. We see a future where people of all denominations may find solace and encouragement for a better tomorrow.  A Utopia worth aspiring to.<span className="quotes">"</span>
					</p>
				</section>
				<div id="carouselContainer">
					<section id="homeMediaAdvert">
						<h3>Media</h3>
						<a href={this.state.mediaCollage[this.state.currentImage].url}>
							{mediaCollageMap[currentCard]}
						</a>
						<p>The Media area provides viewing tips for newcomers to the Star Trek universe.
						</p>
					</section>
					<section id="homeLoreAdvert">
						<h3>Lore</h3>
						<a href={this.state.loreCollage[this.state.currentImage].url}>
							{loreCollageMap[currentCard]}
						</a>
						<p>The Lore area provides basic information about the various things within the Star Trek universe.
						</p>
					</section>
				</div>
				<div id="informationContainer">
					<section id="homeFranchiseHistory">
						<h2>Franchise History</h2>
						<p>
							Star Trek, as a franchise, has a long-lived and prosperous history. It is full of interesting information, as well as incredible stories of changed lives and new horizons for countless individuals. I won't get too in-depth into it all, as this is an opportunity for the new-comer to get an idea of what made Star Trek the franchise that has come to mean so much to so many people across the globe. However, if you are interested in learning more, please follow <a href="https://en.wikipedia.org/wiki/Star_Trek#History_and_production">this link to Star Trek's wiki page</a>.
						</p>
					</section>
					<section id="homePersonalHistory">
						<h2>Personal History</h2>
						<p>
							My own personal experience with Star Trek started when I was just a little kid. My grandfather introduced me to the Original Series of Star Trek and guided me through each successive series. His bedroom was a treasure trove of Star Trek memorabilia, and it was always so exciting to explore his walls and bookshelves which were all covered with everything from autographed images, to models, to action figurines and prop replicas.
						</p>
						<p>
							Star Trek is actually what initially got me interested in programming. My early online excursions introduced me to the world of chatting, and I found an incredible sci-fi chatroom community by the name of Outpost Ten Forward. Among many of the sites mechanics and features included the ability to access basic programming abilities in the chat itself. I loved that site and wanted to help contribute to it's further success, which is what led me to my early education in programming.
						</p>
					</section>
				</div>
				<footer id="homeFooter">
					<p>
						This site was created by Aaron Micko. Star Trek and all it's related subsidiaries are registered trademarks of Paramount Pictures Inc. This site is for non-commercial purposes only. Any misuse of copyright materials is purely accidental.
					</p>
					<ul>
						<li>Footer Stuff</li>
						<vr/>
						<li>Footer Stuff</li>
						<li>Footer Stuff</li>
					</ul>
				</footer>
			</div>
		)
	}
})