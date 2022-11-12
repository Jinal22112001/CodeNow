import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "./MainContainer.css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/javascript";

const MainContainer = (props) => {
	const { html, setHTML, css, setCSS, js, setJS, theme, font, lineWrap } =
		props;

	const [mode, setMode] = useState("html");
	const [code, setCode] = useState(html);
	const [FullView, setFullView] = useState(false);
	const [srcDoc, setSRCdoc] = useState("");

	function onChange(newValue) {
		if (mode === "html") {
			setHTML(newValue);
		} else if (mode === "css") {
			setCSS(newValue);
		} else {
			setJS(newValue);
		}
		setCode(newValue);
	}

	function btn_html() {
		if (mode === "html") {
			setHTML(code);
		} else if (mode === "css") {
			setCSS(code);
		} else {
			setJS(code);
		}
		setMode("html");
		setCode(html);
	}

	function btn_css() {
		if (mode === "html") {
			setHTML(code);
		} else if (mode === "css") {
			setCSS(code);
		} else {
			setJS(code);
		}
		setMode("css");
		setCode(css);
	}

	function btn_js() {
		if (mode === "html") {
			setHTML(code);
		} else if (mode === "css") {
			setCSS(code);
		} else {
			setJS(code);
		}
		setMode("javascript");
		setCode(js);
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSRCdoc(
				`
	<html>
	<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./styles.css">
  <title>Document</title>
</head>
		<body>${html}</body>
		<style>${css}</style>
		<script>${js}</script>
	</html>
	`
			);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [html, css, js, code, font, theme]);
	return (
		<div>
			<div className="nv2">
				<div className={FullView ? "hide_editor" : "nv2_1"}>
					<button
						className={mode === "html" ? "selected_btn" : ""}
						onClick={btn_html}
					>
						HTML
					</button>
					<button
						className={mode === "css" ? "selected_btn" : ""}
						onClick={btn_css}
					>
						CSS
					</button>
					<button
						className={mode === "javascript" ? "selected_btn" : ""}
						onClick={btn_js}
					>
						JAVASCRIPT
					</button>
				</div>
				<div className="nv2_2">
					<button onClick={() => setFullView(!FullView)}>
						Output
					</button>
				</div>
			</div>

			<div className="main_container">
				<div className="mc_text_editor">
					<AceEditor
						mode={mode}
						theme={theme}
						value={code}
						fontSize={parseInt(font)}
						onChange={onChange}
						name="UNIQUE_ID_OF_DIV"
						className={FullView ? "hide_editor" : "jinal"}
						wrapEnabled={JSON.parse(lineWrap)}
						editorProps={{ $blockScrolling: true }}
						setOptions={{
							enableBasicAutocompletion: true,
							enableLiveAutocompletion: true,
							enableSnippets: true,
							showLineNumbers: true,
							tabSize: 2,
						}}
					/>
				</div>
				<div className={FullView ? "fullview_main_div2" : "main_div2"}>
					<iframe
						srcDoc={srcDoc}
						title="output"
						sandbox="allow-scripts"
						frameBorder="0"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
