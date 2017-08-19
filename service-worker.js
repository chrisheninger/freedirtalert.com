"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","293698cbcf02200ed55d0ee8c38bb36e"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.601e37d2.chunk.js","b21067a43dbcb348b2a37cfc29433525"],["/static/js/1.bb2cf566.chunk.js","37b5b2f857d426f97fa01641048482cf"],["/static/js/10.3bcda2f3.chunk.js","36c5b806a4e5b97d870165d5f593cd52"],["/static/js/11.8fbd5385.chunk.js","af3c401cd02a7c4fe26f0a981f952f23"],["/static/js/12.fa29c18d.chunk.js","0d166b5d1b5f3a4536ca0677806f1ef5"],["/static/js/13.20db7852.chunk.js","6e6f4e333fb669b6817ffdac072ca37e"],["/static/js/14.c32941b8.chunk.js","fc6f9e7c9715548b6f565a685ad10ed8"],["/static/js/15.b426371e.chunk.js","fd808d5bd2492cf847e8518bc8239b79"],["/static/js/16.0921a8e7.chunk.js","46723dd78ed3516cb101c4d407de431b"],["/static/js/17.add333f3.chunk.js","6cfd13ae7eb5547719a7f2935e0d48c6"],["/static/js/18.9d930e06.chunk.js","1589eefe54d7a6e106c75a8d72874da6"],["/static/js/19.8d39c0d9.chunk.js","6b1a20c516888187ef7536c47afa8bac"],["/static/js/2.f8a1fac2.chunk.js","7fd91cc2e2f00cdf4947dc1bcf1d11d4"],["/static/js/20.a393950d.chunk.js","80eb031235c33b093b979d4fba9c6fff"],["/static/js/21.71efbb3f.chunk.js","3088c7bbdbc8b74e3b748c670a48c2bd"],["/static/js/22.589cf663.chunk.js","ae038ffddb46aebb6653be5853c880e7"],["/static/js/3.a5072ad9.chunk.js","d4244e1e55b88bf83ef22af851976519"],["/static/js/4.d0c217af.chunk.js","e94015fa452b3668526d23d6232fd01a"],["/static/js/5.aa6210f3.chunk.js","3a5d4a833b1b7b5391f0696b2e3eec07"],["/static/js/6.cd998b06.chunk.js","903e07d961d750481c75f64123213890"],["/static/js/7.59f80e84.chunk.js","eb1420108cc1421c0185ce0b1a1beab3"],["/static/js/8.4a9957fc.chunk.js","ef3a7912c20ea53d67f6870b9528430c"],["/static/js/9.82ef9a39.chunk.js","768ae00806eaa53dc328ad0b0c0adad6"],["/static/js/main.a0962904.js","8e05ee7b41b6fc83a3fc7f3a6ceba2f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});