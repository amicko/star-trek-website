var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

console.log('Rawr!');

var nav = document.getElementById('nav');
var main = document.getElementById('main');

var HomeComponent = require('./components/HomeComponent.js');
var NavComponent = require('./components/NavComponent.js');

var Router = Backbone.Router.extend({
	routes: {
		'' : 'home'
	},
	home: function() {
		ReactDOM.render(<NavComponent router={this}/>, nav)
		ReactDOM.render(<HomeComponent router={this}/>, main)
	}
});

var r = new Router();
Backbone.history.start();