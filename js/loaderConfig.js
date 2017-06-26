/*
 * (C) Copyright IBM Corp. 2012, 2016 All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var isNode = typeof process == "object" && process.versions && process.versions.node && process.versions.v8;
if (isNode) {
	// Read dojoRoot from command line args
	var path = require("path");
	var dojoRoot;
	// find --dojoRoot command line argument
	process.argv.some(function(arg, i) {
		if (arg === "--dojoRoot") {
			return dojoRoot = process.argv[i+1];
		}
	});
	if (!dojoRoot) {
		throw new Error("Dojo root not specified.  Use the --dojoRoot command line argument to specify the location of the Dojo folders.");
	}
}

dojoConfig = {
	baseUrl: ".",
	packages: [
		{
			name: 'dojo',
			location: dojoRoot ? path.resolve(dojoRoot, "./dojo") : '//ajax.googleapis.com/ajax/libs/dojo/1.10.2/dojo',
			lib: '.'
		},
		{
			name: 'dijit',
			location: dojoRoot ? path.resolve(dojoRoot, "./dijit") : '//ajax.googleapis.com/ajax/libs/dojo/1.10.2/dijit',
			lib: '.'
		},
		{
			name: 'dojox',
			location: dojoRoot ? path.resolve(dojoRoot, "./dojox") : '//ajax.googleapis.com/ajax/libs/dojo/1.10.2/dojox',
			lib: '.'
		}
	],

	paths: {
		js: "js",
		theme: "theme",
		lesspp: "//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min",
		css: "//chuckdumont.github.io/dojo-css-plugin/1.0.0/css"
	},

	blankGif: "./blank.gif",

	deps: ["js/bootstrap"],

	async: true,

	fixupUrl: function(url) {
		// Load the uncompressed versions of dojo/dijit/dojox javascript files when using dojo loader
		// When using webpack build, the dojo loader is not used for loading javascript files so this
		// property has no effect.
		if (/\/(dojo|dijit|dojox)\/.*\.js$/.test(url)) {
		  url += ".uncompressed.js";
	  }
		return url;
	}

};

// For Webpack, export the config
typeof module !== 'undefined' && module && (module.exports = dojoConfig);
