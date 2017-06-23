# dojo-webpack-plugin-sample

[Sample application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html) demonstrating the use of [dojo-webpack-plugin](https://github.com/OpenNTF/dojo-webpack-plugin) with [webpack](https://webpack.github.io/).

To build the app, you need to provide the location of the root directory where you have the Dojo source projects installed.  The directory structure should look like this:

```
<dojoRoot>
  +-- dijit
  +-- dojo
  +-- dojox
  +-- util
```
Note: on Windows, be sure to use upper-case for the drive letter and exact case for directory names in order to avoid the infamous [equal name when case is ignored](https://github.com/webpack/webpack/issues/2362) warnings.

To build the sample, run the following commands in the project root folder

```
npm install
node_modules/.bin/webpack --config webpack.config.js --dojoRoot <dojoRoot>
```

The built files will be located in `./release`.  You can launch the app by loading `./test.html` in a browser.
