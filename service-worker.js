"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0f5a60bf559a7fc70b80c951ec8bb666"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.ec5d0ef8.chunk.js","a45cb2fa66dbe6856afd4b4439966b51"],["/static/js/1.dcf1d52f.chunk.js","44e373c855d5ac96d325337c1845419d"],["/static/js/10.3a1a15ed.chunk.js","fc8dd3634567a6d5f021f63f609b164d"],["/static/js/11.e6d30bb1.chunk.js","a0d30b6216efea91795d22b13ca78f9e"],["/static/js/12.f53e1130.chunk.js","79318f41944c5a6e5fb2998a20f91b0d"],["/static/js/13.bb6528f4.chunk.js","254b489a8325cb44f8cf84150781753f"],["/static/js/14.7169e48d.chunk.js","543895016e0dbe74ac7b49032904da6c"],["/static/js/15.8022f07b.chunk.js","1568791407b34ebeb76f830a539791d2"],["/static/js/16.d5699c13.chunk.js","9ec526ee0823503a00df8489eabc3e9f"],["/static/js/17.df9d06ec.chunk.js","3e6c6ff8b32113d5198a945b38c311cb"],["/static/js/18.b0aaa97e.chunk.js","20bbf2cc90dec710894a43b90f4d4ae0"],["/static/js/19.5e6c51e0.chunk.js","dba633fc55aec5579fb4b0850f67a5d6"],["/static/js/2.d7643182.chunk.js","35ea542f8d3f2d389a6ae3ebacf8e84f"],["/static/js/20.844aa67b.chunk.js","a17625de48ed09dbfb57361b285e0b37"],["/static/js/21.b8cc5d3b.chunk.js","cb6e2678c0aa384a1fceacecb4395671"],["/static/js/22.4a5afa37.chunk.js","a39debf7055a8a652335267540db7c37"],["/static/js/3.206fb7c9.chunk.js","4076e1b5f006faf82c6c183a4f7260f5"],["/static/js/4.20b1bfd4.chunk.js","feb8865a0ad258157c6e31742b461011"],["/static/js/5.ba5162b3.chunk.js","dbef9b859618eaed33475afb50987528"],["/static/js/6.f46cba44.chunk.js","07390fe67143720159074175efd57efc"],["/static/js/7.1750fa7e.chunk.js","d1d808d2020ead66ea529b170aef4be9"],["/static/js/8.323c01f9.chunk.js","af437e926acd97c44654d9a303966454"],["/static/js/9.372d541a.chunk.js","3cd7d6ce1ccc8b17fdc099ee9558287c"],["/static/js/main.cb53ea73.js","b7440a102fd34fa6c53b685a12caa747"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});