import React, { Component } from "react";


class HelloWorld extends Component {
	state = {
		text: 'Hello, World!'
	}

	componentDidMount() {
		console.log('didMount')
		this.timer = setTimeout(() => {
			this.setState({
				text: 'Hi, Everyone!'
			})
		}, 1000)
	}

	componentWillUnmount() {
		console.log('WillUnmount')
		clearTimeout(this.timer);
	}

	render() {
		if (!this.state.modalOpen) {
			return null;
		}

		return <h2>{this.props.heading}</h2>;
	}
}
export default Modal;