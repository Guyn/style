<template>
	<nav class="packages" id="modules">
		<ul class="packages__list">
			<li class="packages__item">
				<a class="packages__link" href="/packages/animate/README">Animate</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/color/README">Color</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/custom/README">Custom</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/debug/README">Debug</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/default/README">Default</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/ease-gradient/README">
					Ease Gradient
				</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/forms/README">Forms</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/grid/README">Grid</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/math/README">Math</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/menu/README">Menu</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/output/README">Output</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/patterns/README">Patterns</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/reset/README">Reset</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/settings/README">Settings</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/style/README">Style</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/typography/README">
					Typography
				</a>
			</li>
			<li class="packages__item">
				<a class="packages__link" href="/packages/utilities/README">
					Utilities
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
.packages {
	background-color: black;
	color: white;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 2em;
	&__list {
		max-width: 960px;
		flex-wrap: wrap;
		margin: auto;
		display: flex;
		padding: 0;
		margin: 0;
	}
	&__item {
		width: 25%;
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
