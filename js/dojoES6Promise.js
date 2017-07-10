/*
 * (C) Copyright IBM Corp. 2017 All Rights Reserved.
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

/*
 * A thin wrapper that implements ES6 promises using Dojo Deferred.  Much smaller than a polyfill if the
 * Dojo modules are already being used and support for ES6 Promises needs to be provided for non-Dojo code
 * (e.g. Webpack 2.x bootstrap code)
 */
 define([
  "dojo/Deferred",
  "dojo/promise/all",
  "dojo/promise/first",
  "dojo/_base/declare"
], function(Deferred, all, first, declare) {
  function wrap(dojoPromise) {
    var executor = function(resolve, reject) {
      dojoPromise.then(resolve).otherwise(reject);
    };
    executor._dojoPromise = dojoPromise;
    return new Promise(executor);
  }
  var result = declare([], {
    constructor: function(executor) {
      if (!executor._dojoPromise) {
        // Create a new dojo/Deferred
        var dfd = new Deferred();
        this.promise = dfd.promise;
        try {
          executor(dfd.resolve, dfd.reject);
        } catch (err) {
          dfd.reject(err);
        }
      } else {
        // We're just wrapping an existing dojo promise
        this.promise = executor._dojoPromise;
      }
    },
    catch: function(onRejected) {
      return wrap(this.promise.then(function(){}, onRejected));
    },
    then: function(onFullfilled, onRejected) {
      return wrap(this.promise.then(onFullfilled, onRejected));
    }
  });
  result.all = function(iterable) {
    return wrap(all(iterable));
  };
  result.race = function(iterable) {
    return wrap(first(iterable));
  };
  result.reject = function(reason) {
    return wrap((new Deferred()).reject(reason));
  };
  result.resolve = function(value) {
    return wrap((new Deferred()).resolve(value));
  }
  if (!window.Promise) {
    window.Promise = result;
  };
  return result;
});
