"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a43af8265147a5b4b21d8e0e6afd171b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.9b55443b.chunk.js","4ed1ad4f05fe51d3b67a71eeba42c9e4"],["/static/js/1.c2bf87bd.chunk.js","9a69d95fc5397949960b29bf6bba8b46"],["/static/js/10.03a3aec0.chunk.js","b916982dea47a68baa7cceeef9c25927"],["/static/js/11.67297b53.chunk.js","6baa12698f94890d589705d606e2f885"],["/static/js/12.c55e5446.chunk.js","f54b04d5ece4e69c5f05c53e788c8764"],["/static/js/13.c3d994f1.chunk.js","8e0206e00f2e90746f435b763d894177"],["/static/js/14.b88df196.chunk.js","92f6cfbe8bfe83881f8476bb5155c25e"],["/static/js/15.73cda1f9.chunk.js","5be0ebca8d2c723e5aa856ec6ef11864"],["/static/js/16.3c9cd918.chunk.js","a731ffa46de38be08acff8d7067c706e"],["/static/js/17.622016b8.chunk.js","6e3495df44a6fc5e1f9491e8e1ebd374"],["/static/js/18.2bfda43f.chunk.js","702314a1aa80c6b25a2312c679b4ed4e"],["/static/js/19.a5bc5898.chunk.js","4bbd39448b01700ae14c81b1b5731f95"],["/static/js/2.9d8a9b31.chunk.js","0e51a29e19cc8d6080b4edd0626687d5"],["/static/js/20.15190604.chunk.js","691d05178d49c5d7f7e1ba708c5fe21d"],["/static/js/21.ae23033f.chunk.js","588af2f80c9a63304b42cac7e88424d6"],["/static/js/22.88b8fe04.chunk.js","0900b0bba2f4c126e6b960205ba1ed5d"],["/static/js/3.d3794341.chunk.js","5d01bd63a7f58200740ba3b426a1a4c2"],["/static/js/4.2e9bd4b7.chunk.js","a69ea1626772ca21c500abff25270761"],["/static/js/5.9584250c.chunk.js","8e25cb10d23bf65f14cbad00d7313a20"],["/static/js/6.362cb607.chunk.js","ef2b5b5682823f5e0febd60049a66b93"],["/static/js/7.17be1e85.chunk.js","1bff38148da2018b3a91cd1d4dd8d43c"],["/static/js/8.22c8066f.chunk.js","53fe6823ce7390f24d3c939f063ada6c"],["/static/js/9.99db918f.chunk.js","135deefa44354366d61eeef213cbde6a"],["/static/js/main.577833e4.js","f25b5e1366289ee910d13d6b8a97bf66"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});