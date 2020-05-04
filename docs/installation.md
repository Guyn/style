# Installation

```bash
npm install guyn-style

// yarn
yarn add guyn-style
```

# Usage

There are 3 different ways of installing Guyn Style. The most impact with by using the [generator](#install-all-files) to download all files and have the full setup.

You can also use Guyn Style the ["minimal way"](#minimal). In this way Guyn Style doesn't have any output but you have access to all variables, functions and mixins.

Then there are many custom ways. You can install the [full package yourself](#the-full-custom-way) or any [Guyn Style package separate](#custom-partial).

### Install all files

Copy the following script, change your destination folder and run it in your terminal. The script will automatically download all files and set them up in your directory.

```bash
(curl -s0 https://raw.githubusercontent.com/guyn/style/master/src/install/setup.sh) | bash -s [DESTINATION_FOLDER]
```

### Minimal

Add the following to your stylesheet and you will directly have access to all functions, mixins and variables.

```scss
@import "guyn-style";
```

### The Full Custom way

- todo

### Custom partial

Every package of Guyn Style is separately installable. Do you only want to use the color functions, or the math functions? You install only that package like `npm install @guyn/math` and `@import '@guyn/math';` in your stylesheet.
