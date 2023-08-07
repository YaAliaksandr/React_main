import React, { Component } from "react";

class StrobeLight extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: 'white'
		}
	}

	componentDidMount() {
		this.myTimer = setInterval(() => {
			if (this.state.color === 'white') {
				this.setState({
					color: this.props.color
				})
			} else {
				this.setState({
					color: 'white'
				})
			}
		}, this.props.frequency)
	}

	componentWillUnmount() {
		clearInterval(this.myTimer);
	}

	render() {
		return (
			<div style={{ width: '500px', height: '50px', backgroundColor: this.state.color }}>

			</div>
		)
	}
}