export const tmp_html = `
<div class="content">
   <div class="logo">
      <div class="logo__block">CN</div>
      <div class="logo__shadow"></div>
   </div>
   <div class="tagline">
      <div class="tagline__mask">
         <div class="tagline__main">HTML | CSS | JS</div>
         <div class="tagline__sub">CodeNow , for Frontend developers</div>
      </div>
   </div>
</div>
<footer class="attribution">Build by Jinal Patel</footer>
`;

export const tmp_css = `
:root {
	--clr-accent: #372948;
	--clr-bg: #FFECEF;
	--clr-bg-dark: #FFCACA;
	--anim-dur: 3s;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body {
	height: 100%;
}

body {
	display: grid;
	place-items: center;
	background: radial-gradient(var(--clr-bg) 20%, var(--clr-bg-dark));
}

.content {
	display: flex;
	justify-items: center;
	cursor: default;
	font-size: clamp(1rem, 6vmin, 4rem);
}

.logo {
	width: 4em;
	height: 4em;
	position: relative;
}

.logo__block {
	width: 100%;
	height: 100%;
	background: var(--clr-accent);
	display: grid;
	place-content: center;
	font-family: serif;
	font-size: 2.3em;
	font-weight: bold;
	color: var(--clr-bg);
	animation: spin var(--anim-dur) infinite ease-in-out alternate;
}

.logo__shadow {
	content: "";
	position: absolute;
	width: 100%;
	height: 15%;
	top: 150%;
	background: black;
	filter: blur(.6em);
}

.tagline {
	overflow: hidden;
	width: 0em;
	position: relative;
	animation: slide var(--anim-dur) infinite ease-in-out alternate;
}

.tagline__mask {
	position: absolute;
	right: 0;
	width: 11em;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: var(--clr-accent);
}

.tagline__main {
	font-size: 1.2em;
}

.tagline__sub {
	font-size: .7em;
}

@keyframes spin {
	25% {
		border-radius: 0;
		transform: rotate(0deg);
	}

	50% {
		border-radius: .2em;
	}

	75% {
		transform: rotate(-2turn);
		border-radius: 0;
	}

	100% {
		transform: rotate(-2turn);
	}
}

@keyframes slide {
	25% {
		width: 0em;
	}

	75% {
		width: 12em;
	}

	100% {
		width: 12em;
	}
}

.attribution {
	position: absolute;
	bottom: 10px;
	width: 100%;
	text-align: center;
	padding-bottom: .55em;
	font-size: 1.2rem;
	opacity: .7;
}

.attribution__link {
	color: #002E94;
	text-decoration: none;
}

.attribution__link:hover {
	filter: hue-rotate(200deg);
}
`;
