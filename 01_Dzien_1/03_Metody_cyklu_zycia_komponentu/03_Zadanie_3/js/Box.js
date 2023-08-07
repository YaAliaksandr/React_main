import React, { Component } from 'react';

class Box extends Component {
	state = {
		color: "green",
	};

	componentDidMount() {
		this.interval = setInterval(this.toggleColor, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	toggleColor = () => {
		this.setState((prevState) => ({
			color: prevState.color === "green" ? "red" : "green",
		}));
	};

	render() {
		const boxStyle = {
			width: "200px",
			height: "200px",
			backgroundColor: this.state.color,
		};

		return <div style={boxStyle}></div>;
	}
}

export default Box;