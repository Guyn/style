# Menu

## the mixin

```scss
.nav__trigger {
	span {
		@include menu();
	}
}
```

| Argument            | Default | Description                |
| ------------------- | ------- | -------------------------- |
| width               | 1.5rem  | Width of the burger itself |
| height              | rem(2)  | Height of one line         |
| gutter              | rem(5)  | Gutter between the lines   |
| color               | white   | Color of the lines         |
| round               | 0       | Roundness of the lines     |
| transition-duration | 0.3s    | Transition duration        |

::: tip
Make sure to give your parent element some styling
:::

The burger will be absolutely positioned in his parent, so if you the parent doesnt have a position, you have to go look for your burger.

```css
.nav__trigger {
	position: relative;
	width: 3rem;
	height: 3rem;
	background-color: #ff0099;
	...;
}
```

## Helper mixins

### menu-close

With the close mixin, you can easily make your burger in to an X. Add this mixin to your class somehwere based on another class. For instance if the parent gets a modifier active like `.nav__trigger--active`:

```scss
.nav__trigger {
	span {
		@include menu();
	}
	&--active {
		span {
			@include menu-close();
		}
	}
}
```

### menu-body

Target the "body" of the lines. With this mixin you can add extra styling to the lines.

```scss
.nav__trigger {
	span {
		@include menu();
		@include menu-body {
			background-image: linear-gradient(to bottom, blue, green);
		}
	}
}
```

### menu-body-first, menu-body-middle, menu-body-right

Target the first, middle or right "body" of the lines. With this mixin you can add extra styling to a specific line.

```scss
.nav__trigger {
	span {
		@include menu();
		@include menu-body-first {
			background-image: linear-gradient(to bottom, blue, green);
		}
	}
}
```

### menu-body-close

Target the body of the lines, when the lines are closed.

```scss
.nav__trigger {
	span {
		@include menu();
		@include menu-body-close {
			background-image: linear-gradient(to bottom, blue, green);
		}
	}
	&--active {
		span {
			@include menu-close();
		}
	}
}
```
