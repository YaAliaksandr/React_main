import React from "react";
import { createRoot } from "react-dom/client";
import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";


const App = () => {
	return (
		<>
			<ShowUserClass name="Bartek" surname="Giepard" />
			<ShowUserFunc name="Marcin" surname="Nowak" />
		</>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
