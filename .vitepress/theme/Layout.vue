<template>
	<h1 id="logo"><a href="/docs/get-started">Guyn</a></h1>
	<Navigation />
	<Content class="content" /><!-- make sure to include markdown outlet -->
	<Packages />
</template>

<script>
import Navigation from "./Navigation.vue";
import Packages from "./Packages.vue";
export default {
	components: {
		Navigation,
		Packages,
	},
};
</script>
<style lang="scss">
@import "./style/app.scss";
#logo {
	position: fixed;
	top: 1em;
	left: 1em;
	background-color: black;
	font-size: 1em;
	text-transform: lowercase;
	color: white;
	padding: 1em;
	a {
		color: currentColor;
	}
}
</style>
