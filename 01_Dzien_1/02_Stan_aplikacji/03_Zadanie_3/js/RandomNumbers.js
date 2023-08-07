import React, { Component } from "react";

class RandomNumbers extends Component {
	state = {
		numbers: [],
	}

	wylosujLiczbe = () => {
		const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);

		this.setState((prevState) => {
			return {
				numbers: [...prevState.numbers, randomNumber],
			}
		})
	}

	render() {
		return (
			<>
				<button onClick={this.wylosujLiczbe}>Wylosuj liczbę</button>

				<ul>
					{this.state.numbers.map((el, index) => <li key={index}>{el}</li>)}
				</ul>
			</>
		)
	}
}

export default RandomNumbers