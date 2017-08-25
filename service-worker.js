"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f794a93f5f7b70ed385c89a5fda743be"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.32f4e8bd.chunk.js","0fdf292c7ee0ca2cedf7107c510e47d3"],["/static/js/1.540080a4.chunk.js","eef8ca58e1b42439a11e162cb05f7862"],["/static/js/10.eb0a8be9.chunk.js","c7d415b7ed8e007e47aae241298c3dc9"],["/static/js/11.c299e49d.chunk.js","7bb18936bc53737ec79132616cf3c330"],["/static/js/12.18bfb32a.chunk.js","a8ef02ba84bd997ea16c33c0ed9489c2"],["/static/js/13.26ea068b.chunk.js","fc813b29203cbfbef8239e32286f4a94"],["/static/js/14.185bbc9e.chunk.js","54e4565b23f472d250ace28d44b437f6"],["/static/js/15.23b25ccc.chunk.js","fdd7291a6f94afb8b9c16b95a853452a"],["/static/js/16.22c2db40.chunk.js","583dd16dbea7c53dce0b4286aa072096"],["/static/js/17.5dd779f1.chunk.js","483e7b7c5df29e53e862e9ce31136f0c"],["/static/js/18.04cab598.chunk.js","d746b62df28bc201fcf1d3e05006da9c"],["/static/js/19.0ff5ab52.chunk.js","556733bb6e3e86649896c8f73bdd2ab5"],["/static/js/2.ece036c6.chunk.js","e2e307b072e373342024fee01fdca238"],["/static/js/20.67de2d22.chunk.js","09e8d1a93c5c7184364541859080de41"],["/static/js/21.9dd11b0d.chunk.js","8f733e266c5c0b37ff41360b24d3668c"],["/static/js/22.b5c3c5bf.chunk.js","a0780f545bf71712afe233eec3cd173d"],["/static/js/3.917e46c6.chunk.js","5c7f0572ed7f01c495c851af35d31015"],["/static/js/4.4490dcec.chunk.js","966584d69a392f20a8bd64408a25603d"],["/static/js/5.04570ce4.chunk.js","ec4ba3d4d3f2c95a3034dc43ee542c52"],["/static/js/6.82f79808.chunk.js","26d8815d4908af69d4c6f73f77969a82"],["/static/js/7.57e242d4.chunk.js","a3e7663162a7b014496e2cc07421eb7a"],["/static/js/8.0ad4ef13.chunk.js","77ac394e843fca64ceb51360ae7549d6"],["/static/js/9.e82185be.chunk.js","91e8a3ded574cb91179060a3a6114f8a"],["/static/js/main.39b43b5d.js","7b049ee5a8a184b43d99d715afab3bb7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});