<template>
	<h1 id="logo">
		<a href="/docs/get-started">Guyn</a
		><span class="version">{{ version }}</span>
	</h1>
	<Navigation />
	<Content class="content" /><!-- make sure to include markdown outlet -->
	<Packages />
</template>

<script>
import { Navigation, Packages } from "./components/index.js";
// import Package from "../package.json";
export default {
	data: () => ({
		version: "0.1.0",
	}),
	components: {
		Navigation,
		Packages,
	},
	mounted() {
		// console.log(Package);
	},
};
</script>
<style lang="scss">
@import "./style/app.scss";
#logo {
	position: fixed;
	top: 1em;
	left: 1em;
	background-color: blue;
	font-size: 1em;
	text-transform: lowercase;
	color: white;
	padding: 1em;
	a {
		font-weight: 600;
		text-decoration: none;
		color: currentColor;
	}
	span {
		position: absolute;
		left: calc(100% + 1em);
		color: black;
		opacity: 0.25;
	}
}
</style>
