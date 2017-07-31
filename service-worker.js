"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","11782f626cb211671aeb21c9d6472a1b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b93cdaac.chunk.js","9c6313984a355a48b9dc5d5ea0d75ca8"],["/static/js/1.14ab16a6.chunk.js","61c91d8f9399eab80d8405d4a0da4c73"],["/static/js/10.2f351d8c.chunk.js","8b47397f98b86a3da855a1b2688002e7"],["/static/js/11.5a118135.chunk.js","cc9d58e95226c4abd4d7ac3a42985b77"],["/static/js/12.d2d5453d.chunk.js","4d94106f2c2ad50a39deb211594d28fd"],["/static/js/13.187fdde8.chunk.js","8439d0b75e607bd6fbb637d050fe14a8"],["/static/js/14.f9d17274.chunk.js","c38829b59883940f34bfdfb282338f95"],["/static/js/15.bd04180d.chunk.js","078bfb7b0b7274325f0d433316f31890"],["/static/js/16.0b2fca04.chunk.js","86c77e93dc59a5fec4cd32382288cf12"],["/static/js/17.19e7b2ac.chunk.js","24da7a58bc797dd1c3b6cd28ac1867d5"],["/static/js/18.c7dfda20.chunk.js","d2805b6cf181291612fcc2f98390c6d4"],["/static/js/19.0be6090a.chunk.js","1f66dc3a44be420d56bd2f3c65c17dfb"],["/static/js/2.03b1b7cc.chunk.js","1e9918f2f5c1ba8afcc1cb7305705122"],["/static/js/20.fddd4040.chunk.js","0764f9a95e48a8640c684d11f7f3829d"],["/static/js/21.4456bd77.chunk.js","908a4f156695aca76102ae6172e83e83"],["/static/js/22.d41e48b9.chunk.js","bbcf5996ad7e697cc1d4007a1107abef"],["/static/js/3.67a5af24.chunk.js","9744d60ce7934785ec1588526a8ab4f7"],["/static/js/4.f1d3e09b.chunk.js","924dd41d740f39e798f457addee638c1"],["/static/js/5.f414e50d.chunk.js","ce23a3d50063412a923254e518978ac5"],["/static/js/6.ba57f55a.chunk.js","6d27b87494e666fc4a69b61d9385fc2e"],["/static/js/7.1fffbe2c.chunk.js","5c86bc43043dc363802ac00d80453df4"],["/static/js/8.2ff1e449.chunk.js","40c4de200e44b899f9b7c08f36873609"],["/static/js/9.5cc679b9.chunk.js","203e7ca53282b7b93ee930d9a585d969"],["/static/js/main.4aad58fa.js","a500e0f2b3323051a40faa41507f6ecc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});