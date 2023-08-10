import React from "react";
import { createRoot } from "react-dom/client";
import { BookInfo } from "./BookInfo";


const App = () => {
	return (
		<>
			<BookInfo isbn="0747532699" />
			<BookInfo isbn="0747532679" />
			<BookInfo isbn="0747522699" />
		</>
	);
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
