import React, { Component } from "react";
class TextTyper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			xxx: this.props.text,
			counter: 1
		}
	}

	addLetter = () => {
		if (this.state.counter < this.state.xxx.length) {
			this.setState((prevState) => {
				return {
					counter: prevState.counter + 1
				}
			})
		}
	}

	removeLetter = () => {
		if (this.state.counter > 1) {
			this.setState((prevState) => {
				return {
					counter: prevState.counter - 1
				}
			})
		}
	}

	render() {
		return <>
			<h1>{this.state.xxx.substring(0, this.state.counter)} </h1>
			<button onClick={this.removeLetter}> - </button>
			<button onClick={this.addLetter}> + </button>
		</>

	}
}

export default TextTyper