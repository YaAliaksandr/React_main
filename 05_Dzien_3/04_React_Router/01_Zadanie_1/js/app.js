// import React from "react";
// import { createRoot } from "react-dom/client";
// import { HashRouter, Outlet, Routes, Route, NavLink } from "react-router-dom";
// import Home from "./Home";
// import Blog from "./Blog";
// import Pricing from "./Pricing";


// const Layout = () => {
// 	return <>
// 		<header>
// 			<nav style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
// 				<h1>
// 					LOGO
// 				</h1>
// 				<ul style={{ display: 'flex', listStyle: 'none', gap: 20 }}>
// 					<li>
// 						<NavLink
// 							style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}
// 							to="/">Home</NavLink>
// 					</li>
// 					<li>
// 						<NavLink
// 							style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}
// 							to="/blog">Blog</NavLink>
// 					</li>
// 					<li>
// 						<NavLink
// 							style={({ isActive }) => isActive ? { fontWeight: 'bold' } : undefined}
// 							to="/pricing">Cennik</NavLink>
// 					</li>
// 				</ul>
// 			</nav>
// 		</header>
// 		<main style={{ border: '2px solid #ddd', padding: '10px' }}>
// 			<Outlet />
// 		</main>
// 		<footer style={{ textAlign: 'center', padding: '20px' }}>
// 			<span>&copy; 2023 MojaNazwa.pl</span>
// 		</footer>
// 	</>
// }


// const App = () => {
// 	return (
// 		<HashRouter>
// 			<Routes>
// 				<Route path="/" element={<Layout />}>
// 					<Route index element={<Home />} />
// 					<Route path="blog" element={<Blog />} />
// 					<Route path="pricing" element={<Pricing />} />
// 					<Route path="contact" element={<Pricing />} />
// 				</Route>
// 			</Routes>
// 		</HashRouter>
// 	)
// }

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);
import React from "react";
import { createRoot } from "react-dom/client";
import { Link, HashRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Pricing from "./Pricing";


const Layout = () => {
	return <>
		<nav>
			<h1>
				Aplikacja React z React Router
			</h1>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/pricing">Cennik</Link>
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
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="pricing" element={<Pricing />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);