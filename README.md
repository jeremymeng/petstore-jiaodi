# petstore

## Build client sdk

Under `/client` folder, run `npm install && npm run build`. Start server `npm run server` for test.

## Using Webpack

First, you need to install webpack globally: `npm install -g webpack webpack-cli`

#### Webpack with JavaScript

Under `/webpack/js` folder, run `npm install`

Now invoke webpack on the command-line: `webpack --mode=development`

#### Webpack with TypeScript

Under `/webpack/ts` folder, run `npm install`

Now invoke webpack on the command-line: `webpack --mode=development`

## Using Rollup

First, you need to install rollup globally: `npm install -g rollup`

#### Rollup with JavaScript

Under `/Rollup/js` folder, run `npm install`

Now invoke rollup on the command-line: `rollup --config`

#### Rollup with TypeScript

Under `/Rollup/ts` folder, run `npm install`

Now invoke rollup on the command-line: `rollup --config`

## Using Parcel

First, you need to install parcel globally: `npm install -g parcel-bundler`

#### Parcel with JavaScript

Under `/parcel/js` folder, run `npm install`

Now invoke rollup on the command-line: `parcel index.html`

If you wish to bundle your page without using the local development server, you can do this by passing the `build` command:

```bash
parcel build index.html
```

> Note: this project for js run `parcel index.html` error:

```bash
🚨  D:\petstore\parcel\js\index.js: Unexpected token: punc (.)
    at Z.get (D:\nvm\v18.19.0\node_modules\parcel-bundler\node_modules\terser\dist\bundle.min.js:1:525)
    at Object.errorToJson (D:\nvm\v18.19.0\node_modules\parcel-bundler\node_modules\@parcel\utils\src\errorUtils.js:9:20)
    at Pipeline.process (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\Pipeline.js:29:26)
    at async Object.run (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\worker.js:15:12)
    at async Bundler.loadAsset (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\Bundler.js:577:19)
    at async D:\nvm\v18.19.0\node_modules\parcel-bundler\src\Bundler.js:610:13
    at async Promise.all (index 0)
    at async Bundler.loadAsset (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\Bundler.js:599:21)
    at async Bundler.processAsset (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\Bundler.js:557:5)
    at async PromiseQueue._runJob (D:\nvm\v18.19.0\node_modules\parcel-bundler\src\utils\PromiseQueue.js:48:7)
```

#### Parcel with TypeScript

Under `/parcel/ts` folder, run `npm install`

Now invoke rollup on the command-line: `parcel index.html`

If you wish to bundle your page without using the local development server, you can do this by passing the `build` command:

```bash
parcel build index.html
```
