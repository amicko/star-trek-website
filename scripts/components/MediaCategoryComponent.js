var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			testTran: 'testTranBoxStart',
			currentCard: 0,
			contBox: {},
			mediaMOV: [
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
		let newIndex;
		var movieMap = this.state.mediaMOV.map((movie, index) => {
			newIndex = index + 1
			return (
				<div className="movieBox" key={index}>
					<h3>{newIndex}. {movie.movieName}</h3>
					<h4>Movie Summary</h4>
					<p>{movie.movieSummary}</p>
					<h4>Reason I List It</h4>
					<p>{movie.movieReason}</p>
					<div id="btnContainer">
						<button id="prevBtn" onClick={(e) => {this.onPrev(e, currentCard)}}>Prev</button>
						<button id="nextBtn" onClick={(e) => {this.onNext(e, currentCard)}}>Next</button>
					</div>
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
					<div id="btnContainer">
						<button id="prevBtn" onClick={(e) => {this.onPrev(e, currentCard)}}>Prev</button>
						<button id="nextBtn" onClick={(e) => {this.onNext(e, currentCard)}}>Next</button>
					</div>
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
					<div id="btnContainer">
						<button id="prevBtn" onClick={(e) => {this.onPrev(e, currentCard)}}>Prev</button>
						<button id="nextBtn" onClick={(e) => {this.onNext(e, currentCard)}}>Next</button>
					</div>
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
					<div id="btnContainer">
						<button id="prevBtn" onClick={(e) => {this.onPrev(e, currentCard)}}>Prev</button>
						<button id="nextBtn" onClick={(e) => {this.onNext(e, currentCard)}}>Next</button>
					</div>
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
					<div id="btnContainer">
						<button id="prevBtn" onClick={(e) => {this.onPrev(e, currentCard)}}>Prev</button>
						<button id="nextBtn" onClick={(e) => {this.onNext(e, currentCard)}}>Next</button>
					</div>
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
		let currentCard = this.state.currentCard;


		// let goToBed = null;
		// let playTappedOut = null;

		// let rawr =  new Promise(function(resolve, reject) {
		// 	resolve(goToBed = true);
		// })

		// let sigh =  new Promise(function(resolve, reject) {
		// 	resolve(playTappedOut = true);
		// })

		// let bedtime = function() {
		// 	return new Promise(function(resolve, reject) {
		// 	resolve('Go to bed and', goToBed = true);
		// 	})
		// }

		// let gameTime = function(verdict) {
		// 	return new Promise(function(resolve, reject) {
		// 		resolve(verdict + ' play Tapped Out', playTappedOut = true)
		// 	})
		// }

		// console.log(goToBed);
		// console.log(playTappedOut);

		// bedtime().then(function(result) {
		// 	return gameTime(result);
		// }).then(function(result) {
		// 	console.log('Time to ' + result)
		// })


				// <div className={this.state.testTran}>Rawr</div>
				
		return (
			<div style={this.state.contBox} id="mediaCategoryContainer">
				{shownList[this.state.currentCard]}
				
			</div>
		)
	},
	onNext: function(e, currentCard) {
		this.setState({
			currentCard: currentCard + 1,
			contBox: {},
			// testTran: 'testTranBoxFinish'
		});
		// if(this.state.testTran === 'testTranBoxFinish') {
		// 	this.setState({
		// 		testTran: 'testTranBoxStart'
		// 	})
		// }
		if(this.props.mediaCategory === 'mov' && currentCard == (this.state.mediaMOV.length)-1) {
			this.setState({
				currentCard: 0
			})
		}
		else if(this.props.mediaCategory != 'mov' && currentCard === 9) {
			this.setState({
				currentCard: 0
			})
		}
	},
	onPrev: function(e, currentCard) {
		this.setState({
			currentCard: currentCard - 1,
			// testTran: 'testTranBoxStart'
		});
		// if(this.state.testTran === 'testTranBoxStart') {
		// 	this.setState({
		// 		testTran: 'testTranBoxFinish'
		// 	})
		// }
		if(this.props.mediaCategory === 'mov' && currentCard === 0) {
			this.setState({
				currentCard: 4
			})
		}
		else if(this.props.mediaCategory != 'mov' && currentCard === 0) {
			this.setState({
				currentCard: 9
			})
		}
	}
})