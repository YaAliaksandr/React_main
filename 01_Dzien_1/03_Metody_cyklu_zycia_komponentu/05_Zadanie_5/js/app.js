import React from "react";
import { createRoot } from "react-dom/client";
import StrobeLight from "./StrobeLight";
const App = () => {
	return (
		<div>
			<h1>Test StrobeLight</h1>
			<StrobeLight color="blue" frequency={500} />
			<StrobeLight color="red" frequency={1000} />
			<StrobeLight color="green" frequency={750} />
		</div>
	);
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
