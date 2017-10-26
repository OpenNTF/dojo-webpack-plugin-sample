# dojo-webpack-plugin-sample

[Sample application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html) demonstrating the use of [dojo-webpack-plugin](https://github.com/OpenNTF/dojo-webpack-plugin) with [webpack](https://webpack.github.io/).  The sample can be run as a webpack application (the default) or as an [unpacked application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html?nopack=1) that uses the Dojo loader by specifying the ?nopack=1 query arg in the URL.  It demonstrates how to construct a [Dojo loader config](https://github.com/OpenNTF/dojo-webpack-plugin-sample/blob/master/js/loaderConfig.js) that can be used in both weback and non-webpack versions of a Dojo application.  You may want to support non-webpack versions during the development phase of your application in order to avoid build overhead during development.

```
npm install
npm run build
```

The built files will be located in `./release`.  You can launch the app by loading `./test.html` in a browser.  Note that loading the app from the file system works only for the packed application.  The non-packed version of the app (?nopack=1) loads Dojo from a CDN, so cross-origin restrictions in browsers require that you load the non-packed app from an http server.  Alternatively, you could modify test.html and js/loaderConfig.js to use the locally installed Dojo for the unpacked application as well.

[@GordonSmith](https://github.com/GordonSmith) provides a fork of the sample app with some variations in [here](https://github.com/OpenNTF/dojo-webpack-plugin-sample/issues/40).
