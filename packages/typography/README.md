# Typography

## Defining fonts

Include or define up to 4 fonts.

| Font | Variable          |
| ---- | ----------------- |
| 1st  | \$font-primary    |
| 2nd  | \$font-secondary  |
| 3rd  | \$font-tertiary   |
| 4th  | \$font-quaternary |

## Settings

| Property         | Default value                   | Example                           | Type    |
| ---------------- | ------------------------------- | --------------------------------- | ------- |
| `font-family`\*  | `null`                          | `"Graphik", sans-serif`           | string  |
| `load`           | `false`                         | `true`                            | boolean |
| `weights`        | `()`                            | `('light': 200, 'Regular': 400 )` | map     |
| `weight-classes` | `false`                         | `true`                            | boolean |
| `path`           | `"/fonts"`                      | `"/assets/fonts"`                 | string  |
| `files`          | `"woff2", "woff", "ttf", "eot"` |                                   | list    |
| `use`            | `()`                            | `('h1','.title','blockquote')`    | list    |
| `types`          | `('normal')`                    | `('normal','italic')`             | list    |

\* is required

## Example

```scss
$font-primary: (
	font-family: (
		Graphik,
		sans-serif,
	),
	load: true,
	weights: (
		"Light": 100,
		"Regular": 400,
		"Medium": 500,
		"Bold": 600,
		"Black": 800,
	),
	weight-classes: false,
	path: "/fonts",
	files: (
		"woff2",
		"woff",
		"ttf",
		"eot",
	),
	use: (
		"h1",
		"h3",
		"h4",
		"span.text",
		"#section",
	),
	types: (
		"normal",
		"italic",
	),
);
```

::: tip

- Font weights need to be set in order to load fonts.
- Font weight names must be identical to actual file names.
- The first entry in font-family will be loaded when loaded is true.
- The space in a font-family name will be removed for the file name. `Helvetica Neue` will be `HelveticaNeue`
- Font includes uses the following syntax: `fontFamily-fontWeightName.ttf`
- When font-type `"italic"` is added, the file name should be `fontFamily-fontWeightNameItalic.ttf`
- There is an issue with font-family names with spaces. Avoid these for now.
  :::

## Weights

### classes

Henri's can automatically generate classes based on the given font-weights. Enable the `weight-classes` and henris will give you classes like `.font-light{ font-weight: 100; }`

### function

You can also use the `font-weight()` function.

```scss
.element {
	font-weight: font-weight(Light);
}
```

Will give you the Light weight from any of the included font-sets. When there are double font-weights over multiple font-sets. The font-weight hierarchy is: `primary > secondary > tertiary > quaternary`. So primary will overrule.

If you want to use a font-weight, which is overruled by an earlier set. You can use the second argument.

```scss
.element {
	font-weight: font-weight(Light, $font-tertiary);
}
```

## Using fonts

### Weights

### classes

Henri's can automatically generate classes based on the given font-weights. Enable the `weight-classes` and henris will give you classes like `.font-light{ font-weight: 100; }`

### function

You can also use the `font-weight()` function.

```scss
.element {
	font-weight: font-weight(Light);
}
```

Will give you the Light weight from any of the included font-sets. When there are double font-weights over multiple font-sets. The font-weight hierarchy is: `primary > secondary > tertiary > quaternary`. So primary will overrule.

If you want to use a font-weight, which is overruled by an earlier set. You can use the second argument.

```scss
.element {
	font-weight: font-weight(Light, $font-tertiary);
}
```

## Loading fonts

Henri's has a special way of embedding fonts. Fonts includes can be setup by defining a map containing all the necessary information. When this variable is set, Henri's will automatically load the fonts and set all necessary use cases from this config.

### Defining fonts

There are 4 fonts to be set this way. Defining any of the variables below the config will load the font.

| Font | Variable           |
| ---- | ------------------ |
| 1st  | `$font-primary`    |
| 2nd  | `$font-secondary`  |
| 3rd  | `$font-tertiary`   |
| 4th  | `$font-quaternary` |

### Settings

| Property         | Default value                   | Example                           | Type    |
| ---------------- | ------------------------------- | --------------------------------- | ------- |
| `font-family`\*  | `null`                          | `"Graphik", sans-serif`           | string  |
| `load`           | `false`                         | `true`                            | boolean |
| `weights`        | `()`                            | `('light': 200, 'Regular': 400 )` | map     |
| `weight-classes` | `false`                         | `true`                            | boolean |
| `path`           | `"/fonts"`                      | `"/assets/fonts"`                 | string  |
| `files`          | `"woff2", "woff", "ttf", "eot"` |                                   | list    |
| `use`            | `()`                            | `('h1','.title','blockquote')`    | list    |
| `types`          | `('normal')`                    | `('normal','italic')`             | list    |
| `display`        | `swap`                          | `swap`                            | string  |

\* is required

## Example

The below example is how you structure a config file. When this variable is set before the include of Henri's. Henri's will pick this up and load the font. The below example will load the Graphik font, in all the given weights,for all the given files. Won't create classes for the weights but will automatically add the font-family already to all elements given in Use.

```scss
$font-primary: (
	font-family: (
		Graphik,
		sans-serif,
	),
	load: true,
	weights: (
		"Light": 100,
		"Regular": 400,
		"Medium": 500,
		"Bold": 600,
		"Black": 800,
	),
	weight-classes: false,
	path: "/fonts",
	files: (
		"woff2",
		"woff",
		"ttf",
		"eot",
	),
	use: (
		"h1",
		"h3",
		"h4",
		"span.text",
		"#section",
	),
	types: (
		"normal",
		"italic",
	),
	display: "swap",
);
```

::: tip

- Font weights need to be set in order to load fonts.
- Font weight names must be identical to actual file names.
- The first entry in font-family will be loaded when loaded is true.
- The space in a font-family name will be removed for the file name. `Helvetica Neue` will be `HelveticaNeue`
- Font includes uses the following syntax: `fontFamily-fontWeightName.ttf`
- When font-type `"italic"` is added, the file name should be `fontFamily-fontWeightNameItalic.ttf`
- There is an issue with font-family names with spaces. Avoid these for now.
  :::

## Other mixins

### font-use

Use a given font on multiple places at once.

| Arguments | Example                  | Type               |
| --------- | ------------------------ | ------------------ |
| `$use`    | `h2` or `("h1","h3")`    | `string` or `list` |
| `$family` | `"Inter UI, sans-serif"` | `string`           |

```scss
@include font-use("h2", "Inter UI, sans-serif");

// output:

h2 {
	font-family: "Inter UI", sans-serif;
}
```

or with a list given;

```scss
@include font-use(("h2", "h3", "h4"), "Inter UI, sans-serif");

// output:

h2,
h3,
h4 {
	font-family: "Inter UI", sans-serif;
}
```

### font-include

Include a single font.

| Arguments  | Default                          | Description                                   | Type                  |
| ---------- | -------------------------------- | --------------------------------------------- | --------------------- |
| `$name`    | null                             | Name of the font                              | `string`              |
| `$file`    | null                             | Filename                                      | `string`              |
| `$weight`  | normal                           | Weight to be set                              | `string` or `number`  |
| `$type`    | normal                           | Normal or Italic                              | `string`              |
| `$files`   | `( "eot", "woff", "svg", "ttf")` | File types to be used                         | `string` or `list`    |
| `$path`    | `$base-font-path`                | The path to the files                         | `string`              |
| `$display` | `swap`                           | font-display property. Can be set to false.   | `string` or `boolean` |
| `$italic`  | 'Italic'                         | String to be used when including Italic fonts | `string`              |

#### Example

Arguments must be given with their variables. In this case some can be left out and get replaced by their respective defaults. Also any order can be given.

```scss
@include font-include(
	$name: "Inter UI",
	$file: "Inter-Regular",
	$weight: 400,
	$type: normal,
	$files: (
		"woff2",
		"woff",
	),
	$path: "assets/fonts/",
	$display: "swap"
);
```

::: tip

- When giving the $type "italic", the string given by $italic, will automatically added to the file name.
  :::

### font-list

Include a set of multiple font weights single font.

| Arguments  | Default                          | Description                                   | Type                  |
| ---------- | -------------------------------- | --------------------------------------------- | --------------------- |
| `$name`    | null                             | Name of the font                              | `string`              |
| `$file`    | null                             | Filename                                      | `string`              |
| `$weights` | `(400)`                          | Weights to be set                             | `string` or `number`  |
| `$type`    | normal                           | Normal or Italic                              | `string`              |
| `$files`   | `( "eot", "woff", "svg", "ttf")` | File types to be used                         | `string` or `list`    |
| `$path`    | `$base-font-path`                | The path to the files                         | `string`              |
| `$display` | `swap`                           | font-display property. Can be set to false.   | `string` or `boolean` |
| `$italic`  | 'Italic'                         | String to be used when including Italic fonts | `string`              |

#### Example

Arguments must be given with their variables. In this case some can be left out and get replaced by their respective defaults. Also any order can be given.

```scss
@include font-list(
	$name: "Inter UI",
	$file: "Inter-Regular",
	$weight: (
		"Light": 100,
		"Regular": 400,
		"Medium": 500,
		"Bold": 600,
	),
	$type: normal,
	$files: (
		"woff2",
		"woff",
	),
	$path: "assets/fonts/",
	$display: "swap"
);
```
