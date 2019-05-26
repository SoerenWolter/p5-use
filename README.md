# p5.js  + TypeScript + Webpack starter
------------------------------

This is by far no sophisticated starter or whatever. The goal is to get the simplest possible setup to get you started with Webpack 4 and TypeScript an p5.js. You can then start from here and add further stuff you need, such as SASS compilation, add framework specific stuff etc.

## Features

- [x] Webpack 4
- [x] TypeScript 3 compilation
- [x] Webpack Development Server

## How to use

Just clone it and get going.

```
$ git clone --depth=1 https://github.com/SoerenWolter/p5-use.git <your-project-name>

# change directory to your project
cd  <your-project-name>

# Maybe remove the `.git` directory and start with a fresh one.

# install all dependencies.
$ npm ci

# Start developing and serve your app:
npm start

# Build your app without minification: 
npm run build

# Build your app with minification: 
npm run build:prod

```