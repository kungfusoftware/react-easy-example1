import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CONTRIBUTORS = require('./data/contributors');
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;

const Contributors = createClass({
	displayName: 'Contributors',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			multi: false,
			value: {},
		};
	},
	onChange (value) {
		console.log("contributer: ",value);
		this.setState({
			value: value,
		});
	},

	getContributors (input, callback) {
		console.log(CONTRIBUTORS[0]);
		this.setState({value: CONTRIBUTORS[0]});
		input = input.toLowerCase();
		var options = CONTRIBUTORS.filter(i => {
			return i.github.substr(0, input.length) === input;
		});

		var data = {
			options: options.slice(0, MAX_CONTRIBUTORS),
			complete: options.length <= MAX_CONTRIBUTORS,
		};
		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
	},
	gotoContributor (value, event) {
		window.open('https://github.com/' + value.github);
	},
	render () {
		return (
			<div className="section">
				<Select.Async multi={false} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoContributor} valueKey="github" labelKey="name" 
                loadOptions={this.getContributors} />
			
				<div className="hint">This example implements custom label and value properties, async options and opens the github profiles in a new window when values are clicked</div>
			</div>
		);
	}
});

module.exports = Contributors;
