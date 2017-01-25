var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			mediaMovies: [
				{
					movieName: 'Movie One',
					movieSummary: 'Words words words words',
					movieReason: 'More words words words'
				},
				{
					movieName: 'Movie Two',
					movieSummary: 'Words words words words',
					movieReason: 'More words words words'
				},
				{
					movieName: 'Movie Three',
					movieSummary: 'Words words words words',
					movieReason: 'More words words words'
				},
				{
					movieName: 'Movie Four',
					movieSummary: 'Words words words words',
					movieReason: 'More words words words'
				},
				{
					movieName: 'Movie Five',
					movieSummary: 'Words words words words',
					movieReason: 'More words words words'
				}
			],
			mediaTOS: [
				{
					episodeName: 'Episode One',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Two',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Three',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Four',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Five',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Six',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Seven',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Eight',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Nine',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Ten',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				}
			],
			mediaTNG: [
				{
					episodeName: 'Episode One',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Two',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Three',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Four',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Five',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Six',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Seven',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Eight',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Nine',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Ten',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				}
			],
			mediaDS9: [
				{
					episodeName: 'Episode One',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Two',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Three',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Four',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Five',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Six',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Seven',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Eight',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Nine',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Ten',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				}
			],
			mediaVOY: [
				{
					episodeName: 'Episode One',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Two',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Three',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Four',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Five',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Six',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Seven',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Eight',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Nine',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				},
				{
					episodeName: 'Episode Ten',
					episodeSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.',
					episodeReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra massa diam, et ornare orci mollis at. Pellentesque ligula tortor, blandit et metus ut, bibendum pulvinar libero. Ut condimentum dapibus magna ut varius. Quisque mollis tempor quam sit amet cursus. Fusce eget malesuada lacus, non semper neque. Cras porttitor et velit non pharetra. Ut malesuada tincidunt pretium. Fusce lorem purus, faucibus id turpis a, aliquam ornare metus.'
				}
			]
		};
	},
	render: function() {
		// let mediaCat = 'media' + this.props.mediaCategory.toUpperCase();
		// console.log(typeof mediaCat);
		// console.log(typeof this.props.mediaCategory);
		let newIndex;
		// let test = this.state.mediaCat.map((episode, index)) => {
		// 	newIndex = index + 1
		// 	return (
		// 		<div className="episodeBox" key={index}>
		// 			<h3>{newIndex}. {episode.episodeName}</h3>
		// 			<h4>Episode Summary</h4>
		// 			<p>{episode.episodeSummary}</p>
		// 			<h4>Reason I List It</h4>
		// 			<p>{episode.episodeReason}</p>
		// 		</div>
		// 	)
		// }
		var movieMap = this.state.mediaMovies.map((movie, index) => {
			newIndex = index + 1
			return (
				<div className="movieBox" key={index}>
					<h3>{newIndex}. {movie.movieName}</h3>
					<h4>Movie Summary</h4>
					<p>{movie.movieSummary}</p>
					<h4>Reason I List It</h4>
					<p>{movie.movieReason}</p>
				</div>
			)
		})

		var TOSMap = this.state.mediaTOS.map((episode, index) => {
			newIndex = index + 1
			return (
				<div className="episodeBox" key={index}>
					<h3>{newIndex}. {episode.episodeName}</h3>
					<h4>Episode Summary</h4>
					<p>{episode.episodeSummary}</p>
					<h4>Reason I List It</h4>
					<p>{episode.episodeReason}</p>
				</div>
			)
		})

		var TNGMap = this.state.mediaTNG.map((episode, index) => {
			newIndex = index + 1
			return (
				<div className="episodeBox" key={index}>
					<h3>{newIndex}. {episode.episodeName}</h3>
					<h4>Episode Summary</h4>
					<p>{episode.episodeSummary}</p>
					<h4>Reason I List It</h4>
					<p>{episode.episodeReason}</p>
				</div>
			)
		})

		var DS9Map = this.state.mediaDS9.map((episode, index) => {
			newIndex = index + 1
			return (
				<div className="episodeBox" key={index}>
					<h3>{newIndex}. {episode.episodeName}</h3>
					<h4>Episode Summary</h4>
					<p>{episode.episodeSummary}</p>
					<h4>Reason I List It</h4>
					<p>{episode.episodeReason}</p>
				</div>
			)
		})
		var VOYMap = this.state.mediaVOY.map((episode, index) => {
			newIndex = index + 1
			return (
				<div className="episodeBox" key={index}>
					<h3>{newIndex}. {episode.episodeName}</h3>
					<h4>Episode Summary</h4>
					<p>{episode.episodeSummary}</p>
					<h4>Reason I List It</h4>
					<p>{episode.episodeReason}</p>
				</div>
			)
		})

		var shownList = []
		if(this.props.mediaCategory == 'mov') {
			shownList = movieMap
		}
		else if(this.props.mediaCategory == 'tos') {
			shownList = TOSMap
		}
		else if(this.props.mediaCategory == 'tng') {
			shownList = TNGMap
		}
		else if(this.props.mediaCategory == 'ds9') {
			shownList = DS9Map
		}
		else if(this.props.mediaCategory == 'voy') {
			shownList = VOYMap
		}
		return (
			<div className="mediaCategoryContainer">
				{shownList}
			</div>
		)
	}
})