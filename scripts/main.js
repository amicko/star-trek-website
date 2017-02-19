const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');
const $ = require('jquery');

const nav = document.getElementById('nav');
const main = document.getElementById('main');

const HomeComponent = require('./components/HomeComponent.js');
const NavComponent = require('./components/NavComponent.js');
const MediaComponent = require('./components/MediaComponent.js');
const MediaCategoryComponent = require('./components/MediaCategoryComponent.js');
const LoreComponent = require('./components/LoreComponent.js');
const LoreCategoryComponent = require('./components/LoreCategoryComponent.js');

const Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'#' : 'home',
		'media' : 'media',
		'media/:mediaCategory' : 'mediaCategory',
		'lore' : 'lore',
		'lore/:loreCategory' : 'loreCategory'
	},
	home: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<HomeComponent home="home" router={this}/>, main)
	},
	media: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<MediaComponent router={this}/>, main)
	},
	mediaCategory: function(mediaCategory) {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<MediaCategoryComponent mediaCategory={mediaCategory} router={this}/>, main)
	},
	lore: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<LoreComponent router={this}/>, main)
	},
	loreCategory: function(loreCategory) {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<LoreCategoryComponent loreCategory={loreCategory} router={this}/>, main)
	}
});

const r = new Router();
Backbone.history.start();