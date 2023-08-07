import React, { Component } from "react";

class LifeCyclesTester extends Component {
	constructor() {
		super();
		console.log('constructor')
	}

	componentDidMount() {
		console.log('komponent został zamontowany')
	}

	componentDidUpdate() {
		console.log('Propsy lub state uległy zmianie')
	}

	componentWillUnmount() {
		console.log('komponent odmontowany')
	}

	render() {
		console.log('renderowanie');

		return (
			<>Teścik</>
		)
	}
}

export default LifeCyclesTester