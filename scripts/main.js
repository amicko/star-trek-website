var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var nav = document.getElementById('nav');
var main = document.getElementById('main');

var HomeComponent = require('./components/HomeComponent.js');
var NavComponent = require('./components/NavComponent.js');
var MediaComponent = require('./components/MediaComponent.js');
var MediaCategoryComponent = require('./components/MediaCategoryComponent.js');

var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'#' : 'home',
		'media' : 'media',
		'media/:mediaCategory' : 'mediaCategory'
	},
	home: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<HomeComponent router={this}/>, main)
	},
	media: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<MediaComponent router={this}/>, main)
	},
	mediaCategory: function(mediaCategory) {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<MediaCategoryComponent mediaCategory={mediaCategory} router={this}/>, main)
	}
});

var r = new Router();
Backbone.history.start();