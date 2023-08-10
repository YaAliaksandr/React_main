import React from "react";
import { createRoot } from "react-dom/client";
import { Link, HashRouter, Outlet, Routes, Route } from "react-router-dom";
import CheckAge from "./CheckAge";
import { HelloYou } from "./HelloYou";



const Layout = () => {
	return <>
		<nav>
			<h1>
				Aplikacja React z React Router
			</h1>

			<ul>

				<li>
					<Link to="/checkage/37">CheckAge</Link>
				</li>
				<li>
					<Link to="/hello/Alex">Name</Link>
				</li>
			</ul>
		</nav>
		<Outlet />
	</>
}

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* <Route index element={<Layout />} /> */}
					<Route path='checkage/:age' element={<CheckAge />} />
					<Route path='hello/:name' element={<HelloYou />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
