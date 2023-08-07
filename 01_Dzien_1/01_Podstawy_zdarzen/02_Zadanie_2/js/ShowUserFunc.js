import React, { Component } from "react";

class ShowUserClass extends Component {
	buttonClick = () => {
		console.log(this.props.name)
		console.log(this.props.surname)
	}
	render() {
		return <>
			<button onClick={this.buttonClick}>Dane użytkownika</button>
		</>
	}
}

export default ShowUserClass;