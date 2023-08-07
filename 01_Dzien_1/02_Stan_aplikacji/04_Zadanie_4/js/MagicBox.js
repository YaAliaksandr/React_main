import React, { Component } from "react";


class MagicBox extends Component {
	state = {
		color: '#000',
	}

	generateNewColor = () => {
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

		this.setState({
			color: randomColor
		})
	}
	render() {
		return <div
			style={{ width: '200px', height: '200px', backgroundColor: this.state.color }}
			onMouseEnter={this.generateNewColor}
		></div>
	}
}


export default MagicBox