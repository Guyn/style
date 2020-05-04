# Characters

## add-length

Get a string and add extra spaces to make the string longer.
Usefull in debugging and making all strings the same length.

| Argument | Description             |
| -------- | ----------------------- |
| string   | The input string        |
| length   | New total string length |

example:

```scss
@debug "| #{add-length(" ",20)} |";
@debug "| #{add-length('Guyn',20)} |";
@debug "| #{add-length('The Sass Toolbelt's',20)} |";

/*
|                     |
| Guyn                |
| The Sass Toolbelt   |
|                     |
*/
```

## add-zeros

Add extra zeros to a number. When you want to create classes with 01, 003 or something equivalent

| Argument | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| number   | The input number                                                               |
| total    | Total characters the new number will get. It will automatically add the zeros. |

example:

```scss
add-zeros(1,3);

// 001

```

## add-character

Create a string with given character times a given amount of times

| Argument | Description                             |
| -------- | --------------------------------------- |
| string   | The input string                        |
| length   | Amount time the string will be repeated |

example:

```scss
@debug '| #{add-character('-',20)} |';
@debug '| #{add-length('',20)} |';
@debug '| #{add-length('Guyn',20)} |';
@debug '| #{add-length('The Sass Toolbelt\'s,20)} |';
@debug '| #{add-character('-',20)} |';

/*
| -------------------- |
|                      |
| Guyn               |
| The Sass Toolbelt    |
|                      |
| -------------------- |
*/
```

## safe-characters

Convert special characters in strings to their simple equivalent to filter with characters.

| Argument | Description      |
| -------- | ---------------- |
| string   | The input string |

example:

```scss
$string: safe-characters("The quïck brown föx jumps over thé lazy døg");

// 'The quick brown fox jumps over the lazy dog'
```

## character-set

Function which returns a list of characters of a certain type

| Argument   | Description                              |
| ---------- | ---------------------------------------- |
| characters | Type of characters you want to get back. |

| Option | Value                                                |
| ------ | ---------------------------------------------------- |
| a-z    | abcdefghijklmnopqrstuvwxyz                           |
| A-Z    | ABCDEFGHIJKLMNOPQRSTUVWXYZ                           |
| a-Z    | abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ |
| 0-9    | 01234556789                                          |

## allowed-characters

Filters out all characters which arent allowed.

```scss
$string: allowed-characters(
	"The quïck brown föx jumps over thé lazy døg",
	character-set("a-z")
);

// hequckbrownfxjumpsoverthlazydg

// Filters out spaces and special characters, because those are not in a-z list.
```

## nth-character

Get the character on a certain index of the string.

| Argument | Description       |
| -------- | ----------------- |
| str      | Input string      |
| nth      | Index to be found |

```scss
$string: nth-character("Helvetica", 3);

// l
```

## first-character

Get the first character of a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: first-character("Helvetica");

// H
```

## last-character

Get the last character of a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: last-character("Helvetica");

// a
```

## remove-character

Remove a certain character by index from a string.

| Argument | Description         |
| -------- | ------------------- |
| str      | Input string        |
| index    | Index to be removed |

```scss
$string: remove-character("Helvetica", 3);

// Hevetica
```

## remove-first-character

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: remove-first-character("Helvetica");

// elvetica
```

## remove-last-character

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: remove-last-character("Helvetica");

// Helvetic
```

## if-else

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| if       | Input string |
| else     | Input string |

### example

```scss
$value1: false;
$value2: 'test2'


$string: if-else($value1,$value2);

// output: 'test2'
```

```scss
$value1: 'test1';
$value2: 'test2'


$string: if-else($value1,$value2);

// output: 'test1'
```

```scss
$value1: true;
$value2: 'test2'


$string: if-else($value1,$value2);

// output: true
```

## fs-join

Join multiple strings into a correct Path

| Argument | Description            |
| -------- | ---------------------- |
| strings  | Input multiple strings |

### example

```scss
$path: fs-join("first/part", "of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("first/part", "/of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("first/part/", "of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("/first/part", "of/thepath");
// output: '/first/part/of/thepath'

$path: fs-join("/first/part/", "/of/thepath");
// output: '/first/part/of/thepath'

$path: fs-join("/first/part", "of/thepath", "and/some", "more");
// output: '/first/part/of/thepath/and/some/more'
```

# is

## is-number

- todo

## is-time

- todo

## is-duration

- todo

## is-frequency

- todo

## is-integer

- todo

## is-relative-length

- todo

## is-absolute-path

- todo

## is-percentage

- todo

## is-length

- todo

## is-resolution

- todo

## is-position

- todo

# Maps

## map-collect

Combines maps

```scss
$fruits: (
	orange: "Orange",
	green: "Cucumber",
	yellow: "Lemon",
);
$morefruits: (
	brown: "Kiwi",
	purple: "Grape",
);

$allfruits: map-collec($fruits, $morefruits);

// ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon', brown: 'Kiwi', purple: 'Grape')
```

## map-set

Adds a new value to a map

```scss
$fruits: (
	orange: "Orange",
	green: "Cucumber",
	yellow: "Lemon",
);

$newfruits: map-set($fruits, "brown", "kiwi");
// ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon', brown: 'Kiwi')
```

## to-map

Converts a list to a map

# Size

## rem

Give a value in pixels, and it will return a value in rem.

```scss
$size: rem(14);

// 0.875rem

$size: rem(16 20 14);

// 1rem 1.25rem 0.875rem
```

## rem-calc

Calculates the pixels to rem value.

# Strings

## str-split

Split a string by a given string into a list.

```scss
$string: "Henri Matisse, was a French painter from Nice";

$list: str-split($string, ",");

// returns ('Henri Matisse', 'was a French painter from Nice');
```

## str-splice (alias for str-split)

Split a string by a given string into a list.

## str-replace

Replace a certain string by another string in a string.

```scss
$string: "Henri Matisse, was a French painter from Nice";
$list: str-replace($string, "Nice", "Paris");

// 'Henri Matisse, was a French painter from Paris';
```

```scss
$string: "Henri Matisse, was a French painter from Nice";
$needles: ("Henri", "Nice");
$replacers: ("Henk", "Paris");

$list: str-replace($string, $needles, $replacers);

// 'Henk Matisse, was a French painter from Paris';
```

## str-replace-func

The actual replacing function used in str-replace, only accepts strings.

```scss
$string: "Henri Matisse, was a French painter from Nice";
$list: str-replace($string, "Nice", "Paris");

// 'Henri Matisse, was a French painter from Paris';
```

## to-str

Convert a value to a string.

## str-contains

Check if the given string contains another string

## dasherize

Convert a string which can be used as slug

## underscore

Convert a string and remove special characters. Replace spaces with underscores.

## letter-uppercase

Uppercase one letter in a string, by default the first one.

```scss
$var: letter-uppercase("some string", 2);

// result: 'sOme string'
```

## letter-lowercase

Lowercase one letter in a string, by default the first one.

```scss
$var: letter-lowercase("SOME STRING", 2);

// result: 'SoME STRING'
```

## PascalCase

convert any string to PascalCase

```scss
$var: PascalCase("some string");

// result: 'SomeString'
```

## camelCase

convert any string to camelCase

```scss
$var: camelCase("some string");

// result: 'someString'
```

## trim

Trim spaces

```scss
$var: trim("  some string");

// result: 'some string'
```

Removes spaces in the beginning of a string.

# Unit

## strip-unit

```scss
$var: strip-unit(2px);
// result: 2
```

Strips the unit from a number

## to-rem

```scss
font-size: to-rem(2px);
```

Converts pixels to rem. When its already rem, it will return the same value, when its pixels it will convert
the pixels to a rem value.
