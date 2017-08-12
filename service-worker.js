"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ea2eeb99e5a3e0afc0f6923cadebcaed"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.ae7b3839.chunk.js","a6251473af67149db9c3b8ffec0994f6"],["/static/js/1.24d36d2d.chunk.js","646167ae8d85aafbfc61e151d97c0afd"],["/static/js/10.11244854.chunk.js","3afb48e97fb5db89b49019e859435e9e"],["/static/js/11.6cf6f1d1.chunk.js","fc0ff92f26c15cf352437311719c2f6c"],["/static/js/12.52e00ece.chunk.js","488fd506118a4c553adbfe50dd6dceba"],["/static/js/13.fce3c67a.chunk.js","ef8d114f51d004bf07dc347795720dff"],["/static/js/14.8574e192.chunk.js","448b5170dd2463540ed2906701b375b5"],["/static/js/15.4dd12fba.chunk.js","0c79b13ec19861353e4fc5dc6bc280c2"],["/static/js/16.58b62056.chunk.js","de5a0216f8a7659b682c237681dcdc2c"],["/static/js/17.b2e02a4f.chunk.js","e1b93a2d2b0070a0a439d14e8a94bf13"],["/static/js/18.ef04e8eb.chunk.js","f9f93c9c0f2f27da5267d64c9048d4eb"],["/static/js/19.0663b472.chunk.js","28bcc9e25889f0b9d617a166c2da5201"],["/static/js/2.d46d6c44.chunk.js","250003d26e6f14aefc5ddce77d5b83ff"],["/static/js/20.9b6b2bb5.chunk.js","95dc18831e7dcfbd65e06e7377c6961e"],["/static/js/21.f0412f05.chunk.js","ad92b3c5b41ccbd3b623af722d6f749b"],["/static/js/22.35c84545.chunk.js","8a9c6d08b0130153945201a7e57abb0f"],["/static/js/3.2421b040.chunk.js","d5fddd2caf80f90cb2e0436ea15bf97f"],["/static/js/4.c60e9802.chunk.js","cd71f429ee36ca2a19f2316fa9bdfa98"],["/static/js/5.03f982c5.chunk.js","5874acfe200734fbc5a6f54f61b6e59d"],["/static/js/6.0079f75d.chunk.js","3f6ed2a182af1704a37d89b6c1a7662d"],["/static/js/7.317be729.chunk.js","f76a38633510c12151c04e6c28a483a8"],["/static/js/8.32692be6.chunk.js","c4e41a3e1f23c1664da129f451f40af3"],["/static/js/9.94b37a38.chunk.js","7285096e46b1794c0d906b3cdc7d0b14"],["/static/js/main.c35e519d.js","ef7e42e41934b8526b72f61a87dcff3c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});