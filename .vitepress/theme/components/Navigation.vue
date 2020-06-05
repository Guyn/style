<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li class="navigation__item">
				<a class="navigation__link" href="/docs/get-started">Get Started</a>
			</li>
			<li class="navigation__item">
				<a class="navigation__link" href="/docs/installation">Installation</a>
			</li>
			<li class="navigation__item">
				<a class="navigation__link" href="/#modules">Modules</a>
			</li>
		</ul>
	</nav>
</template>

<script>
// import { getRoutes } from "../plugins/getRoutes";
export default {
	async beforeCreate() {
		console.log("log", process);
		// console.log("haaai");
		// const routes = await getRoutes("docs");
		// console.log(routes);
	},
};
</script>

<style lang="scss">
.navigation {
	width: auto;
	position: fixed;
	top: 1em;
	right: 1rem;
	&__list {
		display: flex;
		padding: 0;
		margin: 0;
	}
	&__item {
		padding: 0em;
	}
	&__link {
		display: block;
		color: currentColor;
		text-decoration: none;
		padding: 1em;
	}
}
</style>
