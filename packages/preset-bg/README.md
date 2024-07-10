<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Preset-BG</h1>
  <p align="center">UI Background.</p>
</p>


This presset is a customizable collection of gradient, grid, radial background by [bg.ibelick.com](https://bg.ibelick.com/)


### Credit

- [Ibelick](https://twitter.com/Ibelick) for creating [bg.ibelick.com](https://bg.ibelick.com/)

## Usage

### Installation 

```bash
npm i -D @unifydev/preset-bg
```
Note that PresetUI is a dev dependency

### Config

In you `uno.config.(js|ts)` :
```js
...
// import the packages
import {presetBg} from '@unifydev/preset-bg'

export default defineConfig({
  // ...config
  presets: [
    //other presets
    presetBg()
  ],
});

```


### Use it

Now you can use :

Grid
```html
<div class="relative size-screen">
  <span aria-hidden="true" class="absolute size-full ui-grid-dotted ui-grid-dotted-bg-size-xl ui-grid-dotted-bg-gray950 text-blue"></span>
</div>
```


## Contributing

If you're interested in contributing to Unify-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀
- [Discord Community](https://discord.gg/6VN6zTPZAy)