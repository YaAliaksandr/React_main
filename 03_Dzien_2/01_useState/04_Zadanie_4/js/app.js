import React from "react";
import { createRoot } from "react-dom/client";
import UpperLower from "./UpperLower";


const App = () => {

	return (
		<UpperLower />
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
