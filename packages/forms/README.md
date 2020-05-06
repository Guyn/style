# Forms

<div class="html-example">
<form>
	<h4>Basic information</h4>
	<div class="input-text">
		<input type="text">
		<label>Name</label>
	</div>
	<div class="input-text">
		<input type="email">
		<label>E-mail</label>
	</div>
	<div class="input-text">
		<input type="email">
		<label>E-mail</label>
	</div>		
	<h4>Do you like this?</h4>
	<div class="input-switch">
		<input type="checkbox" id="input-switch-test1">
		<label for="input-switch-test1">Yeah</label>
	</div>
	<h4>What grade would you give this form?</h4>
	<div class="input-range">
		<input type="range" min="0" max="50">
		<label>With min/max</label>
	</div>	
	<h4>Yes?</h4>
	<div class="input-checkbox">
		<input type="checkbox" id="input-check-test1">
		<label for="input-check-test1">Sure!</label>
	</div>
	<h4>More?</h4>
	<div class="input-radio">
		<input type="radio" name="radio1" id="input-radio-test1">
		<label for="input-radio-test1">Yes</label>
	</div>
	<div class="input-radio">
		<input type="radio" name="radio1" id="input-radio-test2">
		<label for="input-radio-test2">No</label>
	</div>
</form>
</div>

```html
<div class="html-example">
	<form>
		<h4>Basic information</h4>
		<div class="input-text">
			<input type="text" />
			<label>Name</label>
		</div>
		<div class="input-text">
			<input type="email" />
			<label>E-mail</label>
		</div>
		<div class="input-text">
			<input type="email" />
			<label>E-mail</label>
		</div>
		<h4>Do you like this?</h4>
		<div class="input-switch">
			<input type="checkbox" id="input-switch-test1" />
			<label for="input-switch-test1">Yeah</label>
		</div>
		<h4>What grade would you give this form?</h4>
		<div class="input-range">
			<input type="range" min="0" max="50" />
			<label>With min/max</label>
		</div>
		<h4>Yes?</h4>
		<div class="input-checkbox">
			<input type="checkbox" id="input-check-test1" />
			<label for="input-check-test1">Sure!</label>
		</div>
		<h4>More?</h4>
		<div class="input-radio">
			<input type="radio" name="radio1" id="input-radio-test1" />
			<label for="input-radio-test1">Yes</label>
		</div>
		<div class="input-radio">
			<input type="radio" name="radio1" id="input-radio-test2" />
			<label for="input-radio-test2">No</label>
		</div>
	</form>
</div>
```

## Checkbox & Radio

The Checkbox and radio inputs are quite similar, thats why you can style them in the same matter.

<div class="html-example">
<form>
	<div class="input-checkbox">
		<input type="checkbox" id="input-check-test1">
		<label for="input-check-test1">How much?</label>
	</div>
	<div class="input-radio">
		<input type="radio" name="radio1" id="input-radio-test1">
		<label for="input-radio-test1">Yes</label>
	</div>
	<div class="input-radio">
		<input type="radio" name="radio1" id="input-radio-test2">
		<label for="input-radio-test2">No</label>
	</div>
</form>
</div>

#### Code Example

```html
<div class="input-checkbox-element">
	<input id="my-checkbox" type="checkbox" />
	<label for="my-checkbox">Should this be checked?</label>
</div>
```

Make sure you have a wrapper and an input with directly after that the label.

```scss
.input-checkbox-element {
	@include input-checkbox();
}
```

#### Styling

| Element              | Property          | Sass Variable                      | Custom Property                       | Default value                                                                                       |
| -------------------- | ----------------- | ---------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Overall              |
|                      | box-shadow        | `$input-form-shadow`               | `--input-form-shadow`                 | `0 0 1rem 0 rgba(0, 0, 0, 0)`                                                                       |
|                      | :focus box-shadow | `$input-form-shadow-focus`         | `--input-form-shadow-focus`           | `0 0 1rem 0 rgba(0, 0, 0, 0.05)`                                                                    |
|                      | transition        | `$input-form-transition`           | `--input-form-transition`             | `.3s ease-in-out`                                                                                   |
| Label                |
|                      | border-radius     | `$input-form-label-border-radius`  | `--input-form-label-border-radius`    | `0px`                                                                                               |
|                      | color             | `$input-form-label-text-color`     | `--input-form-label-text-color`       | `currentColor`                                                                                      |
|                      | line-height       | `$input-form-label-line-height`    | `--input-form-label-border-radius`    | `0px`                                                                                               |
|                      | transition        | `$input-form-label-transition`     | `--input-form-label-transition`       | inherit `$input-form-transition`                                                                    |
|                      | padding           | `$input-form-label-padding`        | `--input-form-label-padding`          | `1rem`                                                                                              |
|                      | padding-left      | `$input-form-label-padding-left`   | `--input-form-label-padding-left`     | `calc(#{$input-form-body-width} + #{$input-form-label-padding} + #{$input-form-body-left})`         |
| Radio/Checkbox Body  |
|                      | top               | `$input-form-body-top`             | `--input-form-body-top`               | inherit `$input-form-label-padding`                                                                 |
|                      | left              | `$input-form-body-left`            | `--input-form-body-left`              | `#{$input-form-label-padding`                                                                       |
|                      | width             | `$input-form-body-width`           | `--input-form-body-width`             | `1rem`                                                                                              |
|                      | height            | `$input-form-body-height`          | `--input-form-body-height`            | `1rem`                                                                                              |
|                      | border            | `$input-form-body-border`          | `--input-form-body-border`            | `1px solid currentColor`                                                                            |
|                      | background        | `$input-form-body-background`      | `--input-form-body-background`        | `white`                                                                                             |
|                      | box-shadow        | `$input-form-body-shadow`          | `--input-form-body-shadow`            | inherit `$input-form-shadow`                                                                        |
|                      | transition        | `$input-form-body-transition`      | `--input-form-body-transition`        | inherit `$input-form-transition`                                                                    |
|                      | border-radius     | `$input-form-body-border-radius`   | `--input-form-body-border-radius`     | `2px`                                                                                               |
| Radio/Checkbox check |
|                      | border-radius     | `$input-form-check-border-radius`  | `--input-checkbox-body-border-radius` | inherit `$input-form-body-border-radius`                                                            |
|                      | top               | `$input-form-check-top`            | `--input-form-check-top`              | `calc(#{$input-form-label-padding} + ($input-form-body-height / 2 - $input-form-check-height / 2))` |
|                      | left              | `$input-form-check-left`           | `--input-form-check-left`             | `calc(#{$input-form-label-padding} + ($input-form-body-width / 2 - $input-form-check-width / 2))`   |
|                      | width             | `$input-form-check-width`          | `--input-form-check-width`            | `0.5rem`                                                                                            |
|                      | height            | `$input-form-check-height`         | `--input-form-check-height`           | `0.5rem`                                                                                            |
|                      | border            | `$input-form-check-border`         | `--input-form-check-border`           | `0`                                                                                                 |
|                      | background        | `$input-form-check-background`     | `--input-form-check-background`       | `currentcolor`                                                                                      |
|                      | transition        | `$input-form-check-transition`     | `--input-form-check-transition`       | inherit `$input-form-transition`                                                                    |
|                      | border-radius     | `$input-form-check-border-radius`  | `--input-form-check-border-radius`    | `0`                                                                                                 |
| Radio                |
|                      | border-radius     | `$input-radio-body-border-radius`  | `--input-radio-body-border-radius`    | `50%`                                                                                               |
|                      | border-radius     | `$input-radio-check-border-radius` | `--input-radio-check-border-radius`   | `50%`                                                                                               |

#### Mixins

There are several mixins to target different parts of an element.

| Mixin                        | Targets                                                                             | Argument                   |
| ---------------------------- | ----------------------------------------------------------------------------------- | -------------------------- |
| input-form-body              | Body element of the clickable input.                                                | \$type - checkbox or radio |
| input-form-body-checked      | Checked - Body element of the clickable input.                                      | \$type - checkbox or radio |
| input-form-check             | Check element of the clickable input.                                               | \$type - checkbox or radio |
| input-form-check-checked     | Checked - Check element of the clickable input.                                     | \$type - checkbox or radio |
| input-form-label             | Full label of the html, before and after are used for the input.                    | \$type - checkbox or radio |
| input-form-label-checked     | Checked - Full label of the html, before and after are used for the input.          | \$type - checkbox or radio |
| input-form-label-hover       | Hovered - Full label of the html, before and after are used for the input.          | \$type - checkbox or radio |
| input-form-label-focus       | Focused - Full label of the html, before and after are used for the input.          | \$type - checkbox or radio |
| input-form-input             | Input element of the html, this element will be hidden.                             | \$type - checkbox or radio |
| input-radio-body             | Body element of the clickable input.                                                |                            |
| input-radio-body-checked     | Checked - Body element of the clickable radio input.                                |                            |
| input-radio-check            | Check element of the clickable radio input.                                         |                            |
| input-radio-check-checked    | Checked - Check element of the clickable radio input.                               |                            |
| input-radio-label            | Full label of the html, before and after are used for the radio input.              |                            |
| input-radio-label-checked    | Checked - Full label of the html, before and after are used for the radio input.    |                            |
| input-radio-label-hover      | Hovered - Full label of the html, before and after are used for the radio input.    |                            |
| input-radio-label-focus      | Focused - Full label of the html, before and after are used for the radio input.    |                            |
| input-radio-input            | Radio Input element of the html, this element will be hidden.                       |                            |
| input-checkbox-body          | Body element of the clickable input.                                                |                            |
| input-checkbox-body-checked  | Checked - Body element of the clickable checkbox input.                             |                            |
| input-checkbox-check         | Check element of the clickable checkbox input.                                      |                            |
| input-checkbox-check-checked | Checked - Check element of the clickable checkbox input.                            |                            |
| input-checkbox-label         | Full label of the html, before and after are used for the checkbox input.           |                            |
| input-checkbox-label-checked | Checked - Full label of the html, before and after are used for the checkbox input. |                            |
| input-checkbox-label-hover   | Hovered - Full label of the html, before and after are used for the checkbox input. |                            |
| input-checkbox-label-focus   | Focused - Full label of the html, before and after are used for the checkbox input. |                            |
| input-checkbox-input         | Checkbox Input element of the html, this element will be hidden.                    |                            |

## Input Range

The range slider is a quite hard to style element. With the mixin this will be a lot easier and it will keep it all its normal behaviour.

<div class="html-example">
<form>
	<div class="input-range">
		<input type="range">
		<label>How much?</label>
	</div>
	<div class="input-range">
		<input type="range" min="0" max="50">
		<label>With min/max</label>
	</div>
</form>
</div>

### Mixins

#### input-range-container

Create all elements for a container of the range slider with its defaults.

```scss
.element {
	@include input-range-container();
}
```

#### input-range

Default include for range slider, all range sliders within element will be styled.

```html
<div class="input-range">
	<input type="range" min="0" max="100" id="my-range-slider" />
	<label for="my-range-slider">My range slider</label>
</div>
```

<div class="html-example">
	<div class="input-range">
		<input type="range" min="0" max="100" id="my-range-slider" />
		<label for="my-range-slider">My range slider</label>
	</div>
</div>

```scss
.element {
	@include input-range();
}
```

Or give a class or the range slider, in this way the mixins can be used anywhere but will only target the specific range slider with given class.

```scss
@include input-range(".my-range-slider");
```

#### input-range-input

Only targets the input of the range slider

```scss
.element {
	@include input-range();
}
```

#### input-range-input

Targets the label which comes after the Range slider

```scss
.element {
	@include input-range();
}
```

#### input-range-track

If there are any property which you want to set on the track only, you can use the `input-range-track` mixin.

```scss
@include input-range-track {
	opacity: 0.5;
	&:hover {
		background-color: red;
	}
}
```

#### input-range-thumb

If there are any property which you want to set on the track only, you can use the `input-range-thumb` mixin.

```scss
@include input-range-thumb {
	&:hover {
		transform: scale(1.2);
	}
}
```

### Styling the Range slider

There is some default styling which can easily be overwritten. This can be done using CSS custom properties or defining sass variables before you use the mixin.

| Element      | Property        | Sass Variable                      | Custom Property                     | Default value                        |
| ------------ | --------------- | ---------------------------------- | ----------------------------------- | ------------------------------------ |
| Range Slider |
|              | `width`         | `$input-range-width`               | `--input-range-width`               | `100%`                               |
|              | `height`        | `$input-range-height`              | `--input-range-height`              | `1rem`                               |
|              | `shadow`        | `$input-range-shadow`              | `--input-range-shadow`              | `1px 1px 3px rgba(black, 0.2) inset` |
|              | `border`        | `$input-range-border`              | `--input-range-border`              | `0`                                  |
|              | `border-radius` | `$input-range-border-radius`       | `--input-range-border-radius`       | `50%`                                |
|              | `background`    | `$input-range-background`          | `--input-range-background`          | `transparent`                        |
| Thumb        |
|              | `width`         | `$input-range-thumb-width`         | `--input-range-thumb-width`         | `1rem`                               |
|              | `height`        | `$input-range-thumb-height`        | `--input-range-thumb-height`        | `1rem`                               |
|              | `shadow`        | `$input-range-thumb-shadow`        | `--input-range-thumb-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-thumb-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-thumb-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-thumb-background`    | `--input-range-thumb-background`    | `blue`                               |
| Track        |
|              | `width`         | `$input-range-track-width`         | `--input-range-width`               | `auto`                               |
|              | `height`        | `$input-range-track-height`        | `--input-range-height`              | `0.5rem`                             |
|              | `shadow`        | `$input-range-track-shadow`        | `--input-range-track-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-track-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-track-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-track-background`    | `--input-range-thumb-background`    | `white`                              |
| Min Max      |
|              |                 | `$input-range-max-label-padding`   |                                     | `0.5em`                              |
|              |                 | `$input-range-max-label-left`      |                                     | `100%`                               |
|              |                 | `$input-range-max-label-top`       |                                     | `50%`                                |
|              |                 | `$input-range-max-label-transform` |                                     | `translateY(-50%)`                   |
|              |                 | `$input-range-min-label-padding`   |                                     | `0.5em`                              |
|              |                 | `$input-range-min-label-right`     |                                     | `100%`                               |
|              |                 | `$input-range-min-label-top`       |                                     | `50%`                                |
|              |                 | `$input-range-min-label-transform` |                                     | `translateY(-50%)`                   |
| Settings     |
|              |                 | `$input-range-container-reverse`   |                                     | `true`                               |
|              |                 | `$input-range-min-label`           |                                     | `true`                               |
|              |                 | `$input-range-max-label`           |                                     | `true`                               |

## Switch

Just a simple yes or no on a field can be done with a switch

<div class="html-example">
<form>
	<div class="input-switch">
		<input type="checkbox" id="input-switch-test1">
		<label for="input-switch-test1">Yeah</label>
	</div>
</form>
</div>

```html
<div class="input-switch">
	<input type="checkbox" id="input-switch-test1" />
	<label for="input-switch-test1">Yeah</label>
</div>
```

```scss
body {
	@include input-switch-container(".input-switch");
}
```

### Styling variables

| Element | Property | Sass Variable                       | Custom Property                   | Default value                                     |
| ------- | -------- | ----------------------------------- | --------------------------------- | ------------------------------------------------- |
| Label   |
|         |          | `$input-switch-label-padding`       | `--input-switch-label-padding`    | `1em`                                             |
| Body    |
|         |          | `$input-switch-body-width`          | `--input-switch-body-width`       | `1.5rem`                                          |
|         |          | `$input-switch-body-height`         | `--input-switch-body-height`      | `1rem`                                            |
|         |          | `$input-switch-body-border-radius`  | `--input-switch-body-height`      | `calc(#{$input-switch-body-height} / 2)`          |
|         |          | `$input-switch-body-background`     | `--input-switch-body-background`  | `white`                                           |
|         |          | `$input-switch-body-border`         | `--input-switch-body-border`      | `1px solid currentColor`                          |
|         |          | `$input-switch-check-width`         | `--input-switch-check-width`      | `.5rem`                                           |
| Check   |
|         |          | `$input-switch-check-height`        | `--input-switch-check-height`     | `.5rem`                                           |
|         |          | `$input-switch-check-border-radius` | `--input-switch-check-height`     | `calc(#{$input-switch-check-height} / 2)`         |
|         |          | `$input-switch-check-top`           | `--input-switch-check-top`        | `calc(50% - (#{$input-switch-check-height} / 2))` |
|         |          | `$input-switch-check-background`    | `--input-switch-check-background` | `black`                                           |
|         |          | `$input-switch-check-border`        | `--input-switch-check-border`     | `0`                                               |
|         |          | `$input-switch-check-shadow`        | `--input-switch-check-shadow`     | `0 0 0 2px black inset`                           |

## Input Text

Styling input fields can be a pain, but Henri's makes it a little easier without losing all control. The only thing necessary is just to keep up with a simple buildup.

<div class="html-example">
<form>
	<div class="input-text">
		<input type="text">
		<label>Name</label>
	</div>
	<div class="input-text">
		<input type="email">
		<label>E-mail</label>
	</div>
	<div class="input-text">
		<input type="email">
		<label>E-mail</label>
	</div>	
	<div class="input-switch">
		<input type="checkbox" id="input-switch-test1">
		<label for="input-switch-test1">Yeah</label>
	</div>
</form>
</div>

#### Simple Example

```html
<section class="my-section">
	...
	<div class="input-text">
		<input type="text" id="my-input" placeholder="John Doe" />
		<label>Name</label>
	</div>
	...
</section>
```

```scss
.my-section {
	@include input-text-container(".input-text");
}
```

<div class="html-example">
	<div class="input-text">
		<input type="text" id="my-input" placeholder="John Doe" />
		<label>Name</label> 
	</div>
</div>

You don't have to be "unlogically" turning the input and the label around, but in order to give your field some extra interaction, this is necessary. If you don't you will just loose that. Just make sure to "unreverse" the container with `$input-text-container-reverse: false;` before the include.

#### Types

By default the mixin gives you the following types for inputs; `email`, `tel`, `number`, `search`, `url`, `password`, `date`, `datetime-local`, `month`, `time` and `text`. This can be adjusted by passing just the type you want, or a list of types to any of the mixins.

```scss
.my-section{
	// Target only input[type="text"]
	@include input-text-container('.input-container', 'text');

	// Target both input[type="text"] and input[type="email"]
	@include input-text-container('.input-container', ('text','email'));

	// Target all
	@include input-text-container('.input-container'));
}
```

### Mixins

There is a whole set of mixins to style your elements.

| Mixin                        | Target                            | Description                                                      | Arguments          |
| ---------------------------- | --------------------------------- | ---------------------------------------------------------------- | ------------------ |
| input-text                   | `input`                           | Create all default styling on the input + label                  | `[$types]`         |
| input-text-container         | parent                            | Adds the input text automatically                                | `[$class, $types]` |
| input-text-label             | `input + label`                   | Targets just the lable                                           | `[$types]`         |
| input-text-focus             | `input:focus`                     | Targets a focussed input                                         | `[$types]`         |
| input-text-label-focus       | `input:focus + label`             | Targets the label when the input is focussed                     | `[$types]`         |
| input-text-placeholder       | `input:placeholder`               | Targets the placeholder of an input                              | `[$types]`         |
| input-text-placeholder-shown | `input:placeholder-shown`         | Targets the input when the placeholder is shown                  | `[$types]`         |
| input-text-label-filled      | `input:placeholder-shown + label` | Targets the label when the placeholder is shown (input is empty) | `[$types]`         |

### Styling Variables

| Element           | Property          | Sass Variable                           | Custom Property                        | Default value                 |
| ----------------- | ----------------- | --------------------------------------- | -------------------------------------- | ----------------------------- |
| Input             |
|                   | width             | `$input-text-input-width`               | `input-text-input-width`               | `100%`                        |
|                   | box-shadow        | `$input-text-input-shadow`              | `input-text-input-shadow`              | `0 0 1rem 0 rgba(0,0,0,0)`    |
|                   | focus: box-shadow | `$input-text-input-focus-shadow`        | `input-text-input-shadow`              | `0 0 1rem 0 rgba(0,0,0,0.25)` |
|                   | border            | `$input-text-input-border`              | `input-text-input-border`              | `1px solid currentColor`      |
|                   | background        | `$input-text-input-background`          | `input-text-input-background`          | `transparent`                 |
|                   | color             | `$input-text-input-color`               | `input-text-input-color`               | `currentColor`                |
|                   | font-size         | `$input-text-input-font-size`           | `input-text-input-font-size`           | `1em`                         |
|                   | font-family       | `$input-text-input-font-family`         | `input-text-input-font-family`         | `inherit`                     |
|                   | padding           | `$input-text-input-padding`             | `input-text-input-padding`             | `1em`                         |
|                   | opacity           | `$input-text-input-opacity`             | `input-text-input-opacity`             | `1`                           |
|                   | transition        | `$input-text-input-transition`          | `input-text-input-transition`          | `0.3s ease-in-out`            |
| Label             |
|                   | width             | `$input-text-label-width`               | `input-text-label-width`               | `100%`                        |
|                   | box-shadow        | `$input-text-label-shadow`              | `input-text-label-shadow`              | `0 0 1rem 0 rgba(0,0,0,0)`    |
|                   | border            | `$input-text-label-border`              | `input-text-label-border`              | `0`                           |
|                   | background        | `$input-text-label-background`          | `input-text-label-background`          | `transparent`                 |
|                   | color             | `$input-text-label-color`               | `input-text-label-color`               | `currentColor`                |
|                   | font-size         | `$input-text-label-font-size`           | `input-text-label-font-size`           | `1em`                         |
|                   | font-family       | `$input-text-label-font-family`         | `input-text-label-font-family`         | `inherit`                     |
|                   | padding           | `$input-text-label-padding`             | `input-text-label-padding`             | `1em`                         |
|                   | opacity           | `$input-text-label-opacity`             | `input-text-label-opacity`             | `0.75`                        |
|                   | transition        | `$input-text-label-transition`          | `input-text-label-transition`          | `0.3s ease-in-out`            |
|                   | focus: opacity    | `$input-text-label-focus-opacity`       | `input-text-label-focus-opacity`       | `1`                           |
|                   | filled: opacity   | `$input-text-label-filled-opacity`      | `input-text-label-filled-opacity`      | `1`                           |
| Input Placeholder |
|                   | focus: opacity    | `$input-text-placeholder-focus-opacity` | `input-text-placeholder-focus-opacity` | `0.5`                         |
| Container         |
|                   | position          | `$input-text-container-position`        | `input-text-container-position`        | `100%`                        |
|                   | width             | `$input-text-container-width`           | `input-text-container-width`           | `100%`                        |
|                   |                   | `$input-text-container-reverse`         |                                        | `true`                        |
|                   | margin            | `$input-text-container-margin`          | `input-text-container-margin`          | `1em`                         |
