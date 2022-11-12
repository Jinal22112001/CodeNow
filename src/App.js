import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import logo from "./logo.png";

function App() {
	return (
		<BrowserRouter>
			<div className="Main_Entry">
				<img src={logo} alt="CodeNow" />
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutMe />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
