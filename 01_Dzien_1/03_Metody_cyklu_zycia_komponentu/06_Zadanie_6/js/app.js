import React, { Component } from 'react';
import { createRoot } from 'react-dom';
import Clock from './Clock';
class App extends Component {
	render() {
		return (
			<div>
				<Clock />
			</div>
		);
	}
}
export default App;
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
