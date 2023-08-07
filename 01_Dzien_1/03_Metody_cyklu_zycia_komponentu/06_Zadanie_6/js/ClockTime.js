import React, { Component } from 'react';

class ClockTime extends Component {
	render() {
		const timeString = this.props.date.toLocaleTimeString();
		return <h1>{timeString}</h1>;
	}
}
export default ClockTime;