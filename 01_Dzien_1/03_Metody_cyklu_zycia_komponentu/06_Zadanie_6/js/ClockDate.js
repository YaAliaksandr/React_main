import React, { Component } from 'react';
class ClockDate extends Component {
	render() {
		const dateString = this.props.date.toLocaleDateString();
		return <h1>{dateString}</h1>;
	}
}
export default ClockDate;