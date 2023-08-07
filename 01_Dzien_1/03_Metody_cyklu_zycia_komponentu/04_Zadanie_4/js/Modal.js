import React, { Component } from "react";

class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false
		}
	}

	componentDidMount() {
		this.myTimer = setTimeout(() => {
			this.setState({
				modalOpen: true
			})
		}, 2000)
	}

	componentWillUnmount() {
		clearTimeout(this.myTimer);
	}

	render() {
		const { modalOpen } = this.state;

		return (
			<>
				{modalOpen ? <h2>{this.props.heading}</h2> : null}
			</>
		)
	}
}
export default Modal;