import React from "react";
import { createRoot } from "react-dom/client";
import MagicBox from "./MagicBox";


const App = () => {
	return (<>
		<MagicBox />
	</>)
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
