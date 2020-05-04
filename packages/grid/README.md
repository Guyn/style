# Grid

## The philosophy

Making websites responsive shouldn't be such a tedious task, but it is. We try to make things easier, with our Guyn grid. We have a function and classes you can use.

An important thing to mention is that the designers at Matise design on a 24 column grid layout, it's important that designers and developers are on the same page.

## The function

Since our grid is based on 24 columns we divide the view-width of a page by 24 for our grid-function. This means `grid(24)` is equal to `100vw` and `grid(12)` is equal to `50vw`. It's also possible to add decimals to the grid value.

```scss
height: grid(24); // outputs: height: 100vw;

height: grid(1); // outputs: height: 4.1666666667vw;
```

## The classes

Our grid-classes make developing a responsive website even easier, they are based on percentages and not `vw`.

```html
<div class="column column-12">
	<!-- This div will be 50% of the width of its container element. -->
</div>
<!-- It is also possible to add screen sizes to the classes. -->
<div class="column medium-12 small-full">
	<!-- This div will be 50% of the width of its container element on screens that are medium or larger and 100% of the width on small screens. -->
</div>
```

::: warning
The element has to have a `.column` class.
:::

## Settings

| Variable             | Default value                                                                                                                                                                                                                                       | Description                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `$grid-columns`      | `24`                                                                                                                                                                                                                                                | Amount of columns                                                                   |
| `$grid-design-width` | `1920px`                                                                                                                                                                                                                                            | Base design width. Used for converting rem to grid size and min/max grid            |  | size |
| `$grid-row-width`    | `4096px`                                                                                                                                                                                                                                            | Maximum row width, will be set as max-width for rows.                               |
| `$grid-breakpoints`  | `small` : 750 <br>`medium` : 960<br> `large` : 1280<br> `xlarge` : 1920<br> `xxlarge` : 9999                                                                                                                                                        | Breakpoints used for the grid. All classes will be automatically generated based on | these names and sizes. Do not add classes, this can break many things, changing values is allowed. |
| `$grid-parts`        | 1/1 : `full`<br> 1/2 : `half`<br> 1/3 : `third`<br> 2/3 : `two-third`<br> 1/4 : `quarter`<br> 3/4 : `three-quarter`<br> 1/5 : `fifth`<br> 2/5 : `two-fifth`<br> 3/5 : `three-fifth`<br> 4/5 : `four-fifth`<br> 1/6 : `sixth`<br> 5/6 : `five-sixth` | Extra breakpoints automatically generates percentages. More can be added easily.    |

# Structure

Always make sure to keep the same structure. Changing this could give you some problems.

### Basic

A simple example with 3 columns in a row. The columns will be next to each other on a tablet and bigger, but fall under each other on a mobile device.

```html
<div class="row">
	<div class="column small-full medium-third">
		<div class="column small-full medium-third">
			<div class="column small-full medium-third"></div>
		</div>
	</div>
</div>
```

### Centered

You have two columns, which have both 1/3 width. These columns by default will be aligned on the left (start) of the row.

```html
<div class="row">
	<div class="column small-full medium-third">
		<div class="column small-full medium-third"></div>
	</div>
</div>
```

But you can easily center them with a `center` class on the row.

```html
<div class="row center">
	<div class="column small-full medium-third">
		<div class="column small-full medium-third"></div>
	</div>
</div>
```

### Long lists of columns

If you have a long list of columns and you don't want to add all classes on every column. You can also add these classes on the row. These will be applied automatically to all its first children. In that case the columns only will need a `column` class.

```html
<div class="row small-full medium-third">
	<div class="column">
		<div class="column">
			<div class="column">
				<div class="column">
					<div class="column">
						...
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

If you want to overrule the given styling on one specific column. You can just add the classes on the column itself.

```html
<div class="row small-full medium-third">
	<div class="column">
		<div class="column">
			<div class="column">
				<div class="column medium-two-third">
					<div class="column">
						...
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

# Grid Classes

### Named classes

There are several sizes which have names. These names can be used in the classes on different sizes.

| size         | value |
| ------------ | ----- |
| `..-full`    | 1/1   |
| `..-half`    | 1/2   |
| `..-third`   | 1/3   |
| `..-quarter` | 1/4   |
| `..-fifth`   | 1/5   |
| `..-sixth`   | 1/6   |

Also all extra parts are available..

| size               | value |
| ------------------ | ----- |
| `..-two-third`     | 2/3   |
| `..-three-quarter` | 3/4   |
| `..-four-fifth`    | 4/5   |
| `..-five-sixth`    | 5/6   |

```html
<div class="row">
	<div class="column small-full medium-half"></div>
</div>
```

### Numbered classes

```html
<div class="row">
	<div class="column small-24 medium-12"></div>
</div>
```

### Visibilty Helper classes

| Class                  | Description                           |
| ---------------------- | ------------------------------------- |
| `hide-for-small-only`  | Hides the element on small only       |
| `hide-for-medium-only` | Hides the element on medium only      |
| `hide-for-large-only`  | Hides the element on large only       |
| `hide-for-xlarge-only` | Hides the element on xlarge only      |
| `hide-for-medium-up`   | Hides the element on medium and above |
| `hide-for-large-up`    | Hides the element on large and above  |
| `hide-for-xlarge-up`   | Hides the element on xlarge and above |
| `hide-for-medium-down` | Hides the element on medium and below |
| `hide-for-large-down`  | Hides the element on large and above  |
| `hide-for-xlarge-down` | Hides the element on xlarge and above |

# Min & Max Grid

Font-sizes are a good example to use in grid sizes (vw), but they could also get too small or too big. Thats a problem which is easy solvable with media queries, but you don't want it to just jump to another font-size while resizing your screen. Thats where the `min-` and `max-` mixins come in.

### Examples

#### Basic Example

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```

```scss
h1 {
	font-size: grid(1);
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-1">The quick brown fox jumps over the lazy dog</h1>
<style>.test-1{ font-size: calc(100vw/24); }</style>
</div>

But you don't want the title to scale down all the way. You want it to stay at a minimum of `36px`.

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```

```scss
h1 {
	font-size: grid(1);
	@include min-(font-size, 1, 36px);
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-2">The quick brown fox jumps over the lazy dog</h1>
<style>
	.test-2{ font-size: calc(100vw/24); } 
	@media only screen and (max-width: 864px){ 
	 .test-2{	
		 	font-size: 64px; 
		}
	}
</style>
</div>

#### Advanced Example

Lets make it red at the same time as it jumps over to the set `36px`;

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```

```scss
h1 {
	padding: 1rem;
	font-size: grid(0.75);
	@include min-(font-size, 1, 36px) {
		background-color: #fe688e; // red
	}
	@include max-(font-size, 1, 96px) {
		background-color: #65ccfa; // blue
	}
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-3">The quick brown fox jumps over the lazy dog</h1>
<style>
	.test-3{ padding: 1rem; font-size: calc(100vw/24); } 
	@media only screen and (max-width: 864px){ 
	 .test-3{	
			 font-size: 64px; 
			 background-color: #FE688E;
		}
	}@media only screen and (min-width: 2304px){ 
	 .test-3{	
			 font-size: 96px; 
			 background-color: #65CCFA;
		}
	}
</style>
</div>

### The Mixin

| Mixin | Arguments                                      | Description                                                                                                                        |
| ----- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| min-  | [`$property` (optional), `$grid`, `$min-size`] | Calculate on which viewport width grid size will be equal to the min-size and create a media-query with a min width based on this. |
| max-  | [`$property` (optional), `$grid`, `$min-size`] | Calculate on which viewport width grid size will be equal to the min-size and create a media-query with a max width based on this. |

### Other usage

The element can be used with any property and also without any property. In some cases you just want to add another color on a specific point or set a different content on a breakpoint.

In that case you can use the mixins also without the property and just use the content.

```html
<h1></h1>
```

```scss
h1 {
	padding: 1rem;
	&::before {
		content: "This is the normal size";
	}
	@include min-(1, 36px) {
		background-color: #770d8d; // purple;
		&::before {
			content: "I am on a small screen now";
		}
	}
	@include max-(font-size, 1, 96px) {
		background-color: #b8d3a5; // green
		&::before {
			content: "Now your window is big";
		}
	}
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-4"></h1>
<style>
	.test-4{
		padding: 1rem;
	}
	.test-4::before{
		content: "This is the normal size";
	}
	@media only screen and (max-width: 864px){ 
	 .test-4{	
			background-color: #770D8D;
		} 
		.test-4::before{	
			content: "I am on a small screen now";
		}
	}@media only screen and (min-width: 2304px){ 
	 .test-4{
			background-color: #B8D3A5;
		}
	 .test-4::before{	
			content: "Now your window is big"; 
		}
	}
</style>
</div>

# Media Queries

Henri's provides a few set media queries which can be used.

| variable        | aka                                    | Description                                                  |
| --------------- | -------------------------------------- | ------------------------------------------------------------ |
| `$small-only`   | `max-width: 750px`                     | Mobile only - Targets small screens only                     |
| `$small-up`     | `min-width: 0px`                       | Minimum Mobile - Targets small screens and up                |
| `$medium-only`  | `min-width: 750px; max-width: 960px`   | Tablet (Portrait) only - Targets medium screens only         |
| `$medium-up`    | `min-width: 750px`                     | Tablet (Portrait) and up - Targets medium screens and up     |
| `$medium-down`  | `max-width: 960px`                     | Tablet (Portrait) and down - Targets medium screens and down |
| `$large-only`   | `min-width: 960px; max-width: 1280px`  | Tablet (Landscape) only - Targets large screens only         |
| `$large-up`     | `min-width: 960px`                     | Tablet (Landscape) and up - Targets large screens and up     |
| `$large-down`   | `max-width: 1280px`                    | Tablet (Landscape) and down - Targets large screens and down |
| `$xlarge-only`  | `min-width: 1280px; max-width: 1920px` | Targets xlarge screens only                                  |
| `$xlarge-up`    | `min-width: 1280px`                    | Targets xlarge screens and up                                |
| `$xlarge-down`  | `max-width: 1920px`                    | Targets xlarge screens and down                              |
| `$xxlarge-only` | `min-width: 1920px; max-width: 9999px` | \* Targets xlarge screens only                               |
| `$xxlarge-up`   | `min-width: 1920px`                    | \* Targets xlarge screens and up                             |
| `$xxlarge-down` | `max-width: 9999px`                    | \* Targets xlarge screens and down                           |

- xxlarge is not outputted by default. [Read more about output](/installation/output)

### Usage

You can use it as following;

```scss
.element {
	width: 500px;
	height: 400px;

	// For tablets
	@media #{$medium-only} {
		width: 100vw;
		height: 500px;
	}

	// For mobile screens
	@media #{$small-only} {
		width: 100vw;
		height: 100vw;
	}
}
```

In this case, the element will be by default 500 by 400 pixels. It will be set too 100vw by 500px on Portrait tablets and on mobile it will be square (100vw by 100vw).
