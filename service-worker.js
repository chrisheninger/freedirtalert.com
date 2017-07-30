"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0fb249dcbe4d2c1d9ea408dc763151a9"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.a00d76b0.chunk.js","2d90e71a9f965fcc0b547e6550d292b6"],["/static/js/1.8c54689d.chunk.js","9135b05c7218b1fc4c00d30302733c30"],["/static/js/10.0ddc2847.chunk.js","c2f902a9aab2bc4761c083c1ea1c5b17"],["/static/js/11.b4f99156.chunk.js","98bbb3128b11ff2aabaa7df061493b0e"],["/static/js/12.dfd62fd9.chunk.js","485340329e1a0bda25208fa8c8998a38"],["/static/js/13.77f02807.chunk.js","7cf02c2d1ebf10ef3fab710e3fd8a28e"],["/static/js/14.bd99e99c.chunk.js","eac7058e7f4b58687b7859f4962dc54d"],["/static/js/15.52c3d387.chunk.js","c6f81eec597cc017b3fd5f497431b6e3"],["/static/js/16.9baf2543.chunk.js","a31430caffcbfa40871127bc9e3a86b4"],["/static/js/17.43b4668e.chunk.js","0e0473b509b040ee8b9a04bdb2c96c77"],["/static/js/18.7287c454.chunk.js","023a707f172b5614b7e397bf65e35c75"],["/static/js/19.1aa86a87.chunk.js","b52ac0d921a1e763b4a38130b0fdc563"],["/static/js/2.7f264b2a.chunk.js","d0a5968b28e9f79f068662e8ac6a6e5c"],["/static/js/20.14e7746a.chunk.js","7dfa8b5adbfa6d584d484feaffc1a761"],["/static/js/21.a595b9d6.chunk.js","26f938e5aa5ed5b790d84d4993cab80a"],["/static/js/22.761f1823.chunk.js","f5bad7c6dea417853ae20693469a0f79"],["/static/js/3.3506c04f.chunk.js","873abefaa9d5b241105f314c831ba2b3"],["/static/js/4.43353faa.chunk.js","bb975ba26e7bf607078d55284e10216a"],["/static/js/5.69026424.chunk.js","3244932e67995bdd12ed9778119462be"],["/static/js/6.9f83d1d0.chunk.js","7bbd7b51dfb8feda5b4434edb632aff2"],["/static/js/7.5d78d00f.chunk.js","e967a3bb69638b51deb356fb17421ffe"],["/static/js/8.5528cdc5.chunk.js","bb3aeb9149ba7e0905fa9ee16186253c"],["/static/js/9.c285d3b4.chunk.js","b34e62c2eb1319901c52fe6cad7dc235"],["/static/js/main.13ffc09b.js","fb7b8991e43ced7cfb9d3e3b03b376c5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});