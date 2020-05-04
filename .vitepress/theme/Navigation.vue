<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li class="navigation__item">
				<a class="navigation__link" href="/docs/get-started">Get Started</a>
			</li>
			<li class="navigation__item">
				<a class="navigation__link" href="/docs/installation">Installation</a>
			</li>
		</ul>
	</nav>
</template>

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
