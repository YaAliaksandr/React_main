import React, { Component } from 'react';
import ClockTime from './ClockTime';
import ClockDate from './ClockDate';


class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date(),
		});
	}
	render() {
		return (
			<div>
				<ClockDate date={this.state.date} />
				<ClockTime date={this.state.date} />
			</div>
		);
	}
}
export default Clock;