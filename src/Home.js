import "./Home.css";
import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";
import MainContainer from "./MainContainer/MainContainer.js";
import { tmp_css, tmp_html } from "./MainContainer/temp-code";
import PopUp from "./pop-up/popUp";
import { useAlert } from "react-alert";

function Home() {
	const alert = useAlert();

	const code = localStorage.getItem("CodeNow")
		? JSON.parse(localStorage.getItem("CodeNow"))
		: undefined;

	const option = localStorage.getItem("CodeNow_opt")
		? JSON.parse(localStorage.getItem("CodeNow_opt"))
		: undefined;

	const [html, setHTML] = useState(code ? code.html : tmp_html);
	const [css, setCSS] = useState(code ? code.css : tmp_css);
	const [js, setJS] = useState(code ? code.js : "");
	const [trigger, setTrigger] = useState(false);

	const [theme, setTheme] = useState(option ? option.theme : "xcode");
	const [font, setFont] = useState(option ? option.font : 14);
	const [lineWrap, setLineWrap] = useState(option ? option.wrap : true);

	const handleChangeTheme = (e) => {
		setTheme(e.target.value);
	};
	const handleChangeFont = (e) => {
		setFont(e.target.value);
	};

	const handleChangeLineWrap = (e) => {
		setLineWrap(e.target.value);
	};

	const save_to_local = () => {
		const tmp = {
			html: html,
			css: css,
			js: js,
		};

		localStorage.setItem("CodeNow", JSON.stringify(tmp));
		alert.success("Code Saved Successfully");
		setTrigger(false);
	};

	const save_option_local = () => {
		const tmp = {
			theme: theme,
			font: font,
			wrap: lineWrap,
		};

		localStorage.setItem("CodeNow_opt", JSON.stringify(tmp));
		alert.success("Options Saved Successfully");
		setTrigger(false);
	};

	return (
		<div>
			<Navbar trigger={trigger} setTrigger={setTrigger}></Navbar>
			<PopUp trigger={trigger} setTrigger={setTrigger}>
				<div className="popup_cnt">
					<h2>Editor Options</h2>
					<div>
						<label>Change theme:</label>
						<select value={theme} onChange={handleChangeTheme}>
							<option value="xcode">Xcode</option>
							<option value="monokai">Monokai</option>
							<option value="github">Github</option>
							<option value="solarized_dark">
								Solarized Dark
							</option>
							<option value="solarized_light">
								Solarized Light
							</option>
							<option value="terminal">Terminal</option>
							<option value="tomorrow">Tomorrow</option>
						</select>
					</div>
					<div>
						<label>Font size:</label>
						<select value={font} onChange={handleChangeFont}>
							<option value={14}>14</option>
							<option value={16}>16</option>
							<option value={18}>18</option>
							<option value={20}>20</option>
							<option value={24}>24</option>
							<option value={28}>28</option>
							<option value={32}>32</option>
							<option value={40}>40</option>
						</select>
					</div>
					<div>
						<label>Wrap line :</label>
						<select
							value={lineWrap}
							onChange={handleChangeLineWrap}
						>
							<option value={true}>True</option>
							<option value={false}>False</option>
						</select>
					</div>
					<div>
						<button onClick={save_to_local}>Save Code</button>
						<button onClick={save_option_local}>
							Save Options
						</button>
					</div>
				</div>
			</PopUp>
			<MainContainer
				html={html}
				setHTML={setHTML}
				css={css}
				setCSS={setCSS}
				js={js}
				setJS={setJS}
				theme={theme}
				font={font}
				lineWrap={lineWrap}
			></MainContainer>
		</div>
	);
}

export default Home;
