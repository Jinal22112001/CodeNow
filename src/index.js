import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
	timeout: 1500,
	positions: positions.TOP_RIGHT,
	transitions: transitions.FADE,
};

root.render(
	<React.StrictMode>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</React.StrictMode>
);
