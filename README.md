# webpack_reactjs_starterkit

This is a starter Kit for Webpack, react.js based web project.


It configs webpack, webpack-dev-server, multi-bundle.
And its release pack supports long term cache.


When you start a new project, just download the project, config webpack.config.base.js, and code under app.
This project try to do other things for you, helps you focus on your app itself.

We assume you use rxjs and something else too, you can simply remove that too.

# Dependency

* webpack
* webpack-dev-server

This means you shall run,
```bash
$npm install webpack webpack-dev-server -g
```

# How to start

```bash
$ npm run build
```

It will build the starter kit
After build, you can check ./build

```bash
$ npm run dev
```
After run this, you can test your web app on browser, and your change code will hot update on the web.

```bash
http://localhost:8000/starterKit
```
If you want to release your web on server, just like tomcat, run

```bash
$npm run deploy
or
$npm run deploy.debug 
```
The first one will minimize the pack.
The second one will minimize the pack, and you will see what's in it.

To config the web pack, modify the file ./webpack.config.base

Your js code is in app.

Have fun!

# Thanks to
I learned a lot from [blade254353074](https://github.com/blade254353074), 
There are many things from his project [webpack2-long-term-cache](https://github.com/blade254353074/webpack2-long-term-cache)

If you have any suggestions, feel free to leave a message.

