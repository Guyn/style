# Output

Guyn offers the option to choose your outputs, by default it outputs **no css at all**.

## Default settings

To get the [default settings](#default-settings) add the following code to your main scss file.

```scss
@import "~henris/custom-output";
$output: set-output(css, true);

@import "~henris";
```

## All settings

If you want to use all Guyn settings you can add the following code to your main scss file:

```scss
@import "~henris/custom-output";
$output: set-output(full, true);

@import "~henris";
```

## Customize settings

You can use the same syntax to only add certain settings to your project, you can also add to the default settings by first adding `$output: set-output(css,true);`.

```scss
@import "~henris/custom-output";
$output: set-output(button, true);

@import "~henris";
```

::: tip
NB: You need to add the output settings to your css file **above** the Guyn import.
:::

## Default settings

Main settings are displayed as <b class="text--purple">bold and purple</b> and can switch the sub settings on or off at once.  
F.e. if you want to use `button-default` you need to first set `button` to true.

See [installation](/installation) for more information.

| name                            | default value                                |
| ------------------------------- | -------------------------------------------- |
| css                             | <span class="icon icon--close"></span> false |
| full                            | <span class="icon icon--close"></span> false |
| debug                           | <span class="icon icon--check"></span> true  |
| debug-image-alt                 | <span class="icon icon--check"></span> true  |
| debug-input-type                | <span class="icon icon--check"></span> true  |
| debug-target-blank              | <span class="icon icon--check"></span> true  |
| debug-summary-first             | <span class="icon icon--check"></span> true  |
| debug-legend-first              | <span class="icon icon--check"></span> true  |
| debug-abbr-title                | <span class="icon icon--check"></span> true  |
| debug-javascript-link           | <span class="icon icon--check"></span> true  |
| debug-detail-list-children      | <span class="icon icon--check"></span> true  |
| debug-figcaption                | <span class="icon icon--check"></span> true  |
| debug-div                       | <span class="icon icon--check"></span> true  |
| debug-list                      | <span class="icon icon--check"></span> true  |
| debug-bad-compute               | <span class="icon icon--check"></span> true  |
| background-colors               | <span class="icon icon--check"></span> true  |
| text-colors                     | <span class="icon icon--check"></span> true  |
| custom-properties               | <span class="icon icon--check"></span> true  |
| ease-classes                    | <span class="icon icon--close"></span> false |
| button                          | <span class="icon icon--close"></span> false |
| button-default                  | <span class="icon icon--check"></span> true  |
| button-colors                   | <span class="icon icon--check"></span> true  |
| button-sizes                    | <span class="icon icon--check"></span> true  |
| button-rounded                  | <span class="icon icon--check"></span> true  |
| button-round                    | <span class="icon icon--check"></span> true  |
| button-icons                    | <span class="icon icon--check"></span> true  |
| button-text-transform           | <span class="icon icon--check"></span> true  |
| button-rotated                  | <span class="icon icon--check"></span> true  |
| button-border                   | <span class="icon icon--check"></span> true  |
| custom-properties-media-queries | <span class="icon icon--close"></span> false |
| custom-properties-color         | <span class="icon icon--close"></span> false |
| grid                            | <span class="icon icon--check"></span> true  |
| grid-only                       | <span class="icon icon--close"></span> false |
| grid-helpers                    | <span class="icon icon--close"></span> false |
| grid-hide-show-classes          | <span class="icon icon--check"></span> true  |
| grid-only-classes               | <span class="icon icon--close"></span> false |
| grid-counted-columns            | <span class="icon icon--check"></span> true  |
| grid-column                     | <span class="icon icon--check"></span> true  |
| grid-parts                      | <span class="icon icon--check"></span> true  |
| grid-offset                     | <span class="icon icon--close"></span> false |
| grid-push                       | <span class="icon icon--close"></span> false |
| grid-pull                       | <span class="icon icon--close"></span> false |
| grid-non-breaking-column        | <span class="icon icon--close"></span> false |
| grid-columns                    | <span class="icon icon--check"></span> true  |
| grid-cssgrid                    | <span class="icon icon--close"></span> false |
| grid-row-breakpoints            | <span class="icon icon--check"></span> true  |
| grid-mq-custom-properties       | <span class="icon icon--close"></span> false |
| grid-no-mq-classes              | <span class="icon icon--close"></span> false |
| grid-mq-small                   | <span class="icon icon--check"></span> true  |
| grid-mq-medium                  | <span class="icon icon--check"></span> true  |
| grid-mq-large                   | <span class="icon icon--check"></span> true  |
| grid-mq-xlarge                  | <span class="icon icon--check"></span> true  |
| grid-mq-xxlarge                 | <span class="icon icon--close"></span> false |
| components                      | <span class="icon icon--check"></span> true  |
| blockquote                      | <span class="icon icon--close"></span> false |
| button-group                    | <span class="icon icon--close"></span> false |
| card                            | <span class="icon icon--close"></span> false |
| code                            | <span class="icon icon--close"></span> false |
| code-prism                      | <span class="icon icon--close"></span> false |
| color                           | <span class="icon icon--check"></span> true  |
| color-background-colors         | <span class="icon icon--check"></span> true  |
| color-text-colors               | <span class="icon icon--check"></span> true  |
| content                         | <span class="icon icon--check"></span> true  |
| content-link-filetypes          | <span class="icon icon--close"></span> false |
| content-p-notices               | <span class="icon icon--close"></span> false |
| content-list                    | <span class="icon icon--check"></span> true  |
| content-line-height             | <span class="icon icon--check"></span> true  |
| content-row-example             | <span class="icon icon--close"></span> false |
| content-hr                      | <span class="icon icon--check"></span> true  |
| content-default-link            | <span class="icon icon--check"></span> true  |
| content-detail-list             | <span class="icon icon--close"></span> false |
| data-label                      | <span class="icon icon--close"></span> false |
| detail-list                     | <span class="icon icon--close"></span> false |
| ease                            | <span class="icon icon--check"></span> true  |
| form                            | <span class="icon icon--close"></span> false |
| form-fieldset                   | <span class="icon icon--check"></span> true  |
| form-form                       | <span class="icon icon--check"></span> true  |
| form-button                     | <span class="icon icon--check"></span> true  |
| form-input-text                 | <span class="icon icon--check"></span> true  |
| form-check-color                | <span class="icon icon--close"></span> false |
| form-check-icon                 | <span class="icon icon--close"></span> false |
| form-check-text                 | <span class="icon icon--close"></span> false |
| form-checkbox                   | <span class="icon icon--check"></span> true  |
| form-hidden                     | <span class="icon icon--check"></span> true  |
| form-radio                      | <span class="icon icon--check"></span> true  |
| form-range                      | <span class="icon icon--check"></span> true  |
| form-switch                     | <span class="icon icon--check"></span> true  |
| form-input                      | <span class="icon icon--check"></span> true  |
| form-input-colored              | <span class="icon icon--close"></span> false |
| form-textarea                   | <span class="icon icon--check"></span> true  |
| form-select                     | <span class="icon icon--check"></span> true  |
| form-label                      | <span class="icon icon--check"></span> true  |
| form-field                      | <span class="icon icon--check"></span> true  |
| helpers                         | <span class="icon icon--check"></span> true  |
| reset                           | <span class="icon icon--check"></span> true  |
| reset-meyerweb                  | <span class="icon icon--check"></span> true  |
| reset-extra                     | <span class="icon icon--check"></span> true  |
| horizontal-rule                 | <span class="icon icon--check"></span> true  |
| icon                            | <span class="icon icon--check"></span> true  |
| icons-specific                  | <span class="icon icon--close"></span> false |
| print                           | <span class="icon icon--check"></span> true  |
| navigation                      | <span class="icon icon--close"></span> false |
| section                         | <span class="icon icon--check"></span> true  |
| showmore                        | <span class="icon icon--close"></span> false |
| spacing                         | <span class="icon icon--check"></span> true  |
| table                           | <span class="icon icon--close"></span> false |
| typography                      | <span class="icon icon--check"></span> true  |
| typography-base                 | <span class="icon icon--check"></span> true  |
| typography-headings             | <span class="icon icon--check"></span> true  |
| typography-margins              | <span class="icon icon--check"></span> true  |
| typography-usage                | <span class="icon icon--check"></span> true  |
| typography-weight-classes       | <span class="icon icon--close"></span> false |
| pattern                         | <span class="icon icon--close"></span> false |
| pattern-checkered               | <span class="icon icon--check"></span> true  |
| pattern-cubes                   | <span class="icon icon--check"></span> true  |
| pattern-dots                    | <span class="icon icon--check"></span> true  |
| pattern-houndstooth             | <span class="icon icon--check"></span> true  |
| pattern-lines                   | <span class="icon icon--check"></span> true  |
| pattern-zigzag                  | <span class="icon icon--check"></span> true  |
