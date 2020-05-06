# Color

## The philosophy

Guyn comes with two [predefined colorsets](#default-colorsets); `default` and `social`. All colors are easy to change, extend, or overwrite with another colorset. Normally colors are defined as variables in SCSS, we decided that a color function is much more powerful.

## The function

The basic function to show a color is `color(Red)`, but in Guyn it's also possible to use it to define the opacity or use another colorset.

```scss
// Standard function:
background-color: color(Red); // outputs: background-color: #eb0f33;

// Using the opacity property:
background-color: color(
	Red,
	0.5
); // outputs: background-color: rgba(235, 15, 51, 0.5);

// Using a different colorset:
background-color: color(
	Red,
	1,
	"vibrant"
); // outputs: background-color: #fe5165;
```

## Add your own

Add your own colorset by passing a map. Colors should not have the same name as existing [html color names](https://www.w3schools.com/colors/colors_names.asp), you can only use them if you capitalize them.

```scss
// To create a new colorset and overwrite the default at the same time:
$default-color-set: (
	"Black": #111111,
	"White": #f7f7f7,
	"myBlue": #181160,
	"fireRed": #ed1f35,
);
// NB The new default colorset has to at least contain Black and White.

// Choose a unique variable name to create a new colorset:
$custom-colors: (
	"Black": #111111,
	"White": #f7f7f7,
	"myBlue": #181160,
	"fireRed": #ed1f35,
);
```

## Overwrite

To overwrite the default colorset and add your own:

```scss
$default-color-set: "vibrant";
```

::: tip
Include this before the import of `@import '~henris'`
:::

## SCSS color function

The colors from the colorsets are all usable in the standard [SCSS color functions](http://sass-lang.com/documentation/Sass/Script/Functions.html):

```scss
// syntax:
color: darken(colorName, $amount);

// example
color: darken(fireRed, 10%);
```

## Default color variables

| Variable                               | Default value      | Use                                                   |
| -------------------------------------- | ------------------ | ----------------------------------------------------- |
| `$color-dark`                          | `color(Black)`     | Mainly used for text colors and backgrounds           |
| `$color-light`                         | `color(White)`     | Mainly used for text colors and backgrounds           |
| `$color-primary`/ `$primary-color`     | `color(Purple)`    | The main color in your project, f.e. your brand color |
| `$color-secondary`/ `$secondary-color` | `color(Blue)`      | The complementary color in your project               |
| `$color-tertiary`/ `$tertiary-color`   | `color(Pink)`      | An extra complementary color in your project          |
| `$color-link`                          | `color(Blue)`      | Links                                                 |
| `$color-info`                          | `color(Turquoise)` | Information blocks or texts                           |
| `$color-success`                       | `color(Green)`     | Success messages                                      |
| `$color-warning`                       | `color(Orange)`    | Warning messages                                      |
| `$color-danger`                        | `color(Red)`       | Danger / error messages                               |

### Default colorsets

```scss
$color-default: (
	"Black": #101010,
	"Dark": #303030,
	"White": #ffffff,
	"Offwhite": #f7f7f7,
	"Gray": #7f7f7f,
	"Green": #10c565,
	"Blue": #1eb3e0,
	"Red": #eb0f33,
	"Brown": #aa834f,
	"Yellow": #f5c505,
	"Orange": #f6790b,
	"Pink": #ca1387,
	"Purple": #7329b1,
	"Turquoise": #3feac3,
) !default; //

$color-social: (
	"dribbble": #ea4c89,
	"facebook": #3b5998,
	"flickr": #ff0084,
	"foursquare": #0072b1,
	"git": #0f0d0e,
	"googleplus": #dd4b39,
	"twitter": #00aced,
	"linkedin": #007bb6,
	"instagram": #517fa4,
	"pinterest": #cb2027,
	"skype": #12a5f4,
	"snapchat": #fffc00,
	"soundcloud": #ff7700,
	"spotify": #2ebd59,
	"tumblr": #32506d,
	"vimeo": #aad450,
	"vine": #00bf8f,
	"vkontakte": #45668e,
	"youtube": #bb0000,
	"wordpress": #21759b,
) !default; //
```

## Default colorset

These are the colors set by default in Guyn. All colors can be easily overwritten as you can read above.

## Contra

### The function

Contra returns the opposite color of a given value.

For instance, you create a list with colors. The background will get the colors of the list and
the text will get the color which suits best.

```scss
.element {
	@each $color-name, $color-value in $colors {
		&--#{to-lower-case($color-name)} {
			background-color: $color-value;
			color: contra($color-value);
		}
	}
}
```

| Argument    | Default | Description                                                              |
| ----------- | ------- | ------------------------------------------------------------------------ |
| `$value`    |         | The input color to be checked for lightness                              |
| `$opacity`  | `1`     | Returned opacity of the color                                            |
| `$colors`   | `null`  | A map with a alternate black and white color can be given                |
| `$contrast` | `57.5`  | Contrast used to determine whether black or white should be passed back. |

### \$colors

If you want to return an alternate black or white color (the black and white defined in the \$colors are default) you can pass a list with colors.

```scss
.element {
	@each $color-name, $color-value in $colors {
		&--#{to-lower-case($color-name)} {
			background-color: $color-value;
			color: contra($color-value, 1, ("red", "green"));
		}
	}
}
```
