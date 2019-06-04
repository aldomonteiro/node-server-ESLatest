# Example Node Server w/ Babel

### Getting Started

First we'll install `@babel/cli`, `@babel/core`, `@babel/node` and `@babel/preset-env`.

```shell
$ npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
```

Then we'll create a `.babelrc` file for configuring babel.

```shell
$ touch .babelrc
```

This will host any options we might want to configure `babel` with.

```json
{
  "presets": ["@babel/preset-env"]
}
```

`preset-env` will compile ES2015+ down to ES5 just like using all the presets together and thus is more future proof.

Then create our main file in `src/index.js`.

```shell
$ mkdir src
$ touch src/index.js
```
In order to run your ES7 code, you will need to use `babel-node` in your start script:

So, we'll add our first script, `start`, in `package.json`.

```diff
  "scripts": {
+ "start": "babel-node src/index.js",
  }
```

Now let's run our code:

```shell
$ npm run start
```

### Watching file changes with `nodemon`

We can improve our `npm start` script with `nodemon`.

```shell
$ npm install --save-dev nodemon
```

Then we can update our `npm start` script.

```diff
  "scripts": {
-   "start": "babel-node src/index.js"
+   "start": "nodemon --exec babel-node src/index.js"
  }
```

Then we'll restart our server.

```shell
$ npm run start
```

You should now be able to make changes to `index.js` and our server should be
restarted automatically by `nodemon`.

### Getting ready for production use

Due performance issues, it's not recommended to use babel in production, so, you will transpile your code before use it in production. So, let's add `build` script to `package.json`:


```diff
  "scripts": {
+  "build": "babel -d ./dist -s ./src",
   "start": "nodemon --exec babel-node src/index.js"
  }
```

Next let's add a new task: `npm run serve`, to use our transpiled code:

```diff
  "scripts": {
  "build": "babel -d ./dist -s ./src",
  "start": "nodemon --exec babel-node src/index.js"
+ "serve": "node dist/index.js",   
  }
```

Now we can use `npm run build` for precompiling our assets, and `npm run serve`
for starting our server in production.

```shell
$ npm run build
$ npm run serve
```

This means we can quickly restart our server without waiting for `babel` to
recompile our files.

Oh, let's not forget to add `dist` to our `.gitignore` file:

```shell
$ touch .gitignore
```

```
dist
```

This will make sure we don't accidentally commit our built files to git.

That's it!