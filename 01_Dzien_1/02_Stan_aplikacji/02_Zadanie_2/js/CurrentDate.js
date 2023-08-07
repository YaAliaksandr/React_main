import React, { Component } from "react";

class CurrentDate extends Component {
	constructor() {
		super();
		this.state = {
			date: new Date(),
		}
	}

	getUpDateTime = () => {
		this.setState({ date: new Date() });
	}


	render() {
		return (<>

			<h1>{this.state.date.toLocaleTimeString()}----
				{this.state.date.getDate()}/
				{this.state.date.getMonth() + 1}/
				{this.state.date.getFullYear()}</h1>
			<button onClick={this.getUpDateTime}>Get DateTime</button>

		</>)
	}
}

export default CurrentDate;