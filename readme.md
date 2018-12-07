# Bridging the Gap Between CSS and JavaScript

This repo demonstrates techniques from my two-part series Bridging the Gap Between CSS
and JavaScript:

  1. [Part One: CSS-in-JS][part1]
  2. [Part Two: CSS Modules, PostCSS and the Future of CSS][part2]

To keep the series shorter, I left out some non-essential, but useful tips:

## Bonus tips

### Unified browser support

PostCSS and Babel plugins can read [browserslist][] configuration, so if you add
a `browserslist` field to your `package.json` containing something like:

```json
"browserslist": [
  "last 2 versions",
  "not dead"
]
```

…then plugins will take that into account when compiling syntax and applying polyfills. 🦔

### Testing

While CSS-in-JS libraries offer integration with Jest snapshots, this also means that you’ll often have to update your snapshots simply because you’re refining your styles. If your tests are often failing because of non-breaking changes, it means that your tests are too fragile.

What you really want to know is whether the correct class name was applied, and you can do that by mocking CSS Modules using [identity-obj-proxy][].

A test example is included in this project.

### Detecting typos in CSS Modules

An initial downside is that, unlike with CSS-in-JS, typos won’t cause an error. However, if you’re using a static type-checker like Flow, you can automatically generate types for CSS Modules using tools like [css-modules-flow-types][].

[part1]: https://css-tricks.com/bridging-the-gap-between-css-and-javascript-css-in-js/
[part2]: https://css-tricks.com/bridging-the-gap-between-css-and-javascript-css-modules-postcss-and-the-future-of-css/
[browserslist]: https://github.com/browserslist/browserslist
[identity-obj-proxy]: https://github.com/keyanzhang/identity-obj-proxy
[css-modules-flow-types]: https://github.com/skovhus/css-modules-flow-types
