"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e673bc09464cf309785edad72d9a6c33"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.15922e77.chunk.js","2b18ce4f0c7dc4c6701bbaf6fe4e5635"],["/static/js/1.50a1aa78.chunk.js","8f0921c0d249cbfc054e4fa6d68440dc"],["/static/js/10.e9c93c51.chunk.js","025498da3a9a90aa408c5c763e2e6c4a"],["/static/js/11.eb7e4ef7.chunk.js","f07874d68dffbde1a7321a933beff21b"],["/static/js/12.1773c841.chunk.js","2937fee9378902a4e92fdbac11e63fd2"],["/static/js/13.a7bee8cd.chunk.js","8b1de40b3e1588b1e5892f787c4a41a2"],["/static/js/14.cf28bdfb.chunk.js","816e70e16d0a450cd82a4b6b5ad69471"],["/static/js/15.2d677666.chunk.js","bc41a400ee38cd0e1f338c2a648384b4"],["/static/js/16.5fd63276.chunk.js","a9df51cf58a240bc546a78b540aec00c"],["/static/js/17.f1458c69.chunk.js","d43a420079f38a8f7650315faec301f9"],["/static/js/18.5ea40835.chunk.js","6d5380d6e48d91fe69063340237fb506"],["/static/js/19.9348e02e.chunk.js","f070710132b62d19773c6842ea981aaf"],["/static/js/2.c89c1af7.chunk.js","b0dd32be63d44ca405c6f25ee9518b1d"],["/static/js/20.75bd24c0.chunk.js","43419e449b75a80ebc5810efa2b01e71"],["/static/js/21.5151e314.chunk.js","42004a230b72b7d259d1cb7d98b585b5"],["/static/js/22.0dddeb3e.chunk.js","12759646727c40b9ea8e512fbb5aea6a"],["/static/js/3.03cc6627.chunk.js","93ad22e16310f19dfe7c5c0b9d35a695"],["/static/js/4.2d930c3f.chunk.js","acbe123417b5c77dddd2c848c3c89055"],["/static/js/5.7ed3f1dc.chunk.js","ad3c8f0d8e28f0e4a856844b6122a687"],["/static/js/6.6e3fa25e.chunk.js","7d75c5e45911ab8d455baed159d9623e"],["/static/js/7.a94c8a2c.chunk.js","660cd479db70635e49adfc3c8a4de034"],["/static/js/8.5d9d0ff0.chunk.js","28ece0ce09bf86ad7660d11b964e30a2"],["/static/js/9.3f1f64c3.chunk.js","ce6881d288f183366b3d02b74ec51a7b"],["/static/js/main.7c792b0a.js","3e0a57d685f55544ad4e3443cb555b26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});