# dojo-webpack-plugin-sample

[Sample application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html) demonstrating the use of [dojo-webpack-plugin](https://github.com/OpenNTF/dojo-webpack-plugin) with [webpack](https://webpack.github.io/).  The sample can be run as a webpack application (the default) or as an [unpacked application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html?nopack=1) that uses the native Dojo loader by specifying the ?nopack=1 query arg in the URL.  It demonstrates how to construct a [Dojo loader config](https://github.com/OpenNTF/dojo-webpack-plugin-sample/blob/master/js/loaderConfig.js) that can be used in both weback and non-webpack versions of a Dojo application.  You may want to support non-webpack versions during the development phase of your application in order to avoid build overhead during development.

```
npm install
npm run [build|serve]
```

The `build` script builds the sample application, placing the deployable artifacts in the `release` directory. The `serve` script builds the sample application and uses [webpack-serve](https://www.npmjs.com/package/webpack-serve) to host the application locally at http://localhost:8080/test.html.  It automatically launches a browser to load and run the application.

[@GordonSmith](https://github.com/GordonSmith) provides a fork of the sample app with some variations in [here](https://github.com/OpenNTF/dojo-webpack-plugin-sample/issues/40).
