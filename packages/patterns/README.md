# Patterns

Patterns can be handy for decorational use, thats why it doesn't come by default but you can enable them.

<div class="patterns">
	<div class="pattern-1 pattern-checkered"></div>
	<div class="pattern-2 pattern-cubes"></div>
	<div class="pattern-3 pattern-dots"></div>
	<div class="pattern-4 pattern-houndstooth"></div>
	<div class="pattern-4 pattern-lines"></div>
	<div class="pattern-4 pattern-zigzag"></div>
</div>

Define the colors and settings with css custom properties.

```css
/* Sizing */
--pattern-size: 0.75rem;
--pattern-spacing: 0.2rem;

/* Color */
--pattern-color-primary: #1eb3e0;
--pattern-color-secondary: #460537;
```

<style lang="scss">
.patterns{
	display: grid;   
	grid-template-columns: 50% 50%;
	--pattern-color-primary: #1eb3e0;
	--pattern-color-secondary: #460537;
}
.pattern-1{
	--pattern-size: .75rem;
	--pattern-spacing: .2rem;
}

div[class^="pattern-"] {
	width: 100%; height: 0; padding-bottom: 100%; 
}
</style>
