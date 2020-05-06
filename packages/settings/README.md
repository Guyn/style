# Settings

Guyn comes with a some default settings. These settings are used all through the framework.

## Defaults

| \$variable            | Description                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `$base-prefix`        | The prefix is used as a prefix for all classes which Guyn will output. By default the prefix is empty and thus won't display.                 |
| `$base-grid-prefix`   | The grid-prefix is used as a prefix only grid classes. This so you can use Guyn in combination with other frameworks without class conflicts. |
| `$base-border-radius` | The border radius is applied to multiple other components, but you can also just use it as a variable all through your project.               |
| `$base-space`         | Every projects has a default spacing, this can be set with this variable and is also used in multiple components.                             |
| `$base-font-size`     | The body font-size is the most important set value in het project. This because all `rem` values will be depending on this value.             |
| `$base-font-path`     | The font-path is used when including the fonts. This can be overriden in settings. As described in [typography](/doc/typography)              |
| `$base-image-path`    | A variable set to use in your project.                                                                                                        |
| `$base-cubic-bezier`  | The default cubic bezier, which you can use in the transition, animations etc. Edit this to give your project it's own feel.                  |
| `$base-box-shadow`    | A default box shadow which is being applied on multiple components. Can be used as a variable or just set to none.                            |

Redefining the `$base-...` variables can be don in the \_tools/pre.scss In that case they can be used everywhere.
