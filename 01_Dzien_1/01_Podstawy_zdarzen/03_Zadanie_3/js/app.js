import React from "react";
import { createRoot } from "react-dom/client";
import HoverEvent from "./HoverEvent";


const App = () => {
	return (<>
		<HoverEvent />
	</>)
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
