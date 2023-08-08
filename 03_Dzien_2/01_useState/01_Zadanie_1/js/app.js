import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";


const App = () => {
	return (<>
		<Counter />
	</>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
