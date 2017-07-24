"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e6c270c776072323b6061eabd3806793"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3597f552.chunk.js","77877aa37fac407f1e02cac56d5eaddb"],["/static/js/1.8ac4fee0.chunk.js","aa478d3c286e578d7e52cab6e100df66"],["/static/js/10.66b3e300.chunk.js","70a05d22214a839b498d72467b9fc60e"],["/static/js/11.8ef6f314.chunk.js","5d84ffb6935d7c2c6cdd6f4e143f37da"],["/static/js/12.2c3b5bd5.chunk.js","694914f9debf829354b885baf2563b52"],["/static/js/13.4f04dbc0.chunk.js","0b10ff3707f4cb9ad8ef307d7b613a2d"],["/static/js/14.34015944.chunk.js","f68dc15fc86266f8acbda5a21f901537"],["/static/js/15.1abcc996.chunk.js","6e9d371b924fb1458149f79eb087db24"],["/static/js/16.412898db.chunk.js","4e4bb798952fdffc6b588047fa382dcc"],["/static/js/17.592b8104.chunk.js","67d415570a87782a0df2d9fec2dd9391"],["/static/js/18.26b22c36.chunk.js","ef9533452523affd469e8dbd23dbce2b"],["/static/js/19.b008c8f5.chunk.js","44e05f86dd641231cf22139b3c54851d"],["/static/js/2.82083443.chunk.js","2b3fe771426942cf20461dff285bc591"],["/static/js/20.bf9de030.chunk.js","225d59f676d0f880cbe8672b02ad1be7"],["/static/js/21.dc46ad2d.chunk.js","9089a08c1b955c2804315ca7ccf0fe9f"],["/static/js/22.d839d938.chunk.js","35ec585ab9613918bffde84e537c2868"],["/static/js/3.af46471b.chunk.js","b6c056c4456e29a392d13b53ae232c39"],["/static/js/4.74fd3838.chunk.js","5d94ec6e4944a1d9dc9acb24aa8eb8ea"],["/static/js/5.22d85e91.chunk.js","0bca8a8f25ba50e2d6ae789bcb809c90"],["/static/js/6.4146179c.chunk.js","5ab61df336bdc297032f6a434c516c46"],["/static/js/7.48233d00.chunk.js","2d400786c16b3741a53f9e26156f2a71"],["/static/js/8.e58d8630.chunk.js","f9ae5f5e7194c6af4267efac5495565e"],["/static/js/9.52c3f8b2.chunk.js","add16380012d054ce58126b9f6ab10dc"],["/static/js/main.c309fbb0.js","26a29d27371f211033772fbfc093fa17"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});