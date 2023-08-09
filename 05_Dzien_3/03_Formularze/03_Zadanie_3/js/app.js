import React from "react";
import { createRoot } from "react-dom/client";
import { SelectOrType } from "./SelectOrType";

const App = () => {


	return (<>
		<SelectOrType items={["BMW", "Jaguar", "Porsche"]} />

	</>)

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);