# Animate

## Easing

Henri's comes with a some default great easing.

### The function

To include an Henri easing use `ease($ease-name)`

Example :

```css
.mySelector {
	transition: opacity 1s ease(easeInQuad);
}
```

Will generate :

```css
.mySelector {
	transition: opactity 1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
```

### Default easing

| Ease name      | Value                       |
| -------------- | --------------------------- |
| linear         | `0.25, 0.25, 0.75, 0.75`    |
| ease           | `0.25, 0.10, 0.25, 1`       |
| ease-in        | `0.42, 0, 1, 1`             |
| ease-out       | `0, 0, 0.58, 1`             |
| ease-in-out    | `0.42, 0, 0.58, 1`          |
| easeInQuad     | `0.55, 0.085, 0.68, 0.53`   |
| easeInCubic    | `0.55, 0.055, 0.675, 0.19`  |
| easeInQuart    | `0.895, 0.03, 0.685, 0.22`  |
| easeInQuint    | `0.755, 0.05, 0.855, 0.06`  |
| easeInSine     | `0.47, 0, 0.745, 0.715`     |
| easeInExpo     | `0.95, 0.05, 0.795, 0.035`  |
| easeInCirc     | `0.60, 0.04, 0.98, 0.335`   |
| easeInBack     | `0.60, -0.28, 0.735, 0.045` |
| easeOutQuad    | `0.25, 0.46, 0.45, 0.94`    |
| easeOutCubic   | `0.215, 0.61, 0.355, 1`     |
| easeOutQuart   | `0.165, 0.84, 0.44, 1`      |
| easeOutQuint   | `0.23, 1, 0.32, 1`          |
| easeOutSine    | `0.39, 0.575, 0.565, 1`     |
| easeOutExpo    | `0.19, 1, 0.22, 1`          |
| easeOutCirc    | `0.075, 0.82, 0.165, 1`     |
| easeOutBack    | `0.175, 0.885, 0.32, 1.275` |
| easeInOutQuad  | `0.455, 0.03, 0.515, 0.955` |
| easeInOutCubic | `0.645, 0.045, 0.355, 1`    |
| easeInOutQuart | `0.77, 0, 0.175, 1`         |
| easeInOutQuint | `0.86, 0, 0.07, 1`          |
| easeInOutSine  | `0.445, 0.05, 0.55, 0.95`   |
| easeInOutExpo  | `1, 0, 0, 1`                |
| easeInOutCirc  | `0.785, 0.135, 0.15, 0.86`  |
| easeInOutBack  | `0.68, -0.55, 0.265, 1.55`  |

### Add custom easing

To overwrite the default easing set and add your own :

```scss
// define custom easing
$custom-easing: (
	"ease-header": "1, 1, 1, 1",
	"ease-footer": "1, 0, 0, 1",
);
// add them to the default easing set
$ease: add-custom-easing($custom-easing);
```

## Transitions

### Simple transition

A simple mixin for single property transition

```scss
@include transition($prop, $timing, $ease, $delay);
```

| variables | type            | Description                                                |
| --------- | --------------- | ---------------------------------------------------------- |
| `$prop`   | `String`        | Property to which transition should be applied             |
| `$timing` | `Number|String` | Transition duration. Number is used as **ms**              |
| `$ease`   | `String`        | Timing function                                            |
| `$delay`  | `Number|String` | Transition delay duration. Number is interpreted as **ms** |

::: tip
`@henris/utils/index` has to be imported before using the mixin.
:::

Example :

```scss
// with duration number
.element {
	@include transition("opacity", 500, linear, 0);
}
// with string duration
.element {
	@include transition("opacity", 0.5s, linear, 0s);
}
```

Will generate:

```scss
// with duration number
.element {
	transition: opacity 500ms 0s cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
// with string duration
.element {
	transition: opacity 500ms 0s cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
```

### Multiple transition proprieties

Henris comes with a mixin to easily define a bunch of transitions on the same element. The `transition-group` mixin will also generate the `will-change` property.

```scss
// list definition
$transitions: (
	($prop, $timing, $delay, $ease),
	($prop, $timing, $delay, $ease),
	...
);
@include transition-group($transitions);
```

Each row of the transition list as to be defined by these 4 arguments in the order listed.

| variables | type            | Description                                            |
| --------- | --------------- | ------------------------------------------------------ |
| `$prop`   | `String`        | Property to which transition should be applied         |
| `$timing` | `Number|String` | Transition duration. Number is used as ms              |
| `$delay`  | `Number|String` | Transition delay duration. Number is interpreted as ms |
| `$ease`   | `String`        | Timing function                                        |

Example :

```scss
$transitions: (
	("opacity", 500, 0, linear),
	("transform", 700, 0, ease),
	("color", 500, 0, easeInQuad)
);
.element {
	@include transition-group($transitions);
}
```

Will generate:

```css
.element {
	transition: opacity 500ms 0ms cubic-bezier(0.25, 0.25, 0.75, 0.75), transform
			700ms 0ms cubic-bezier(0.25, 0.1, 0.25, 1),
		color 500ms 0ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
	will-change: opacity, transform, color;
}
```
