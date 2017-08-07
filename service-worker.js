"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9f9fca23a8a82d76c3c5332ba0f411ce"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.6480b54e.chunk.js","715de1eb4ba8ef60c384e32245c59958"],["/static/js/1.45f58299.chunk.js","637acdd727fb8096a1b924953691341b"],["/static/js/10.6f7cb298.chunk.js","a3e3a54043674c875a0950bdaa07acd5"],["/static/js/11.4d85e485.chunk.js","c3f220dce4aea14ec5fd9d1fccf68052"],["/static/js/12.d28b6c08.chunk.js","2ca6edee0ac2642b3bfd7eb656daca17"],["/static/js/13.f73caa03.chunk.js","21a010e6accbfd07646697aaba85f5ac"],["/static/js/14.39a638cc.chunk.js","d8e743847361408c43552711fcdba603"],["/static/js/15.5d35c0b7.chunk.js","290a5b33b7b512c74a24a05800f47153"],["/static/js/16.a323f82b.chunk.js","6c924814541ed596f3caab3f4fecd858"],["/static/js/17.c2c60e82.chunk.js","c4f3885ff4b6de276da25845e8f712ac"],["/static/js/18.b02a0e89.chunk.js","e637918f62d3b148aac1130049fd34a0"],["/static/js/19.b45fee72.chunk.js","17a8d0414d64871ce249cbcd3599bae3"],["/static/js/2.12e3f4ae.chunk.js","6369e620c94727afdd1ee5f887e7e06c"],["/static/js/20.6ac386e8.chunk.js","b4a4884d1692bc7c264c0b1c17468f74"],["/static/js/21.90b7e082.chunk.js","c4375bc18a494254f25b97c8c1e29c64"],["/static/js/22.5e3587f8.chunk.js","62ca81ade78a619508257bd92d16b5ae"],["/static/js/3.1f755fd3.chunk.js","cb06a450cb75966455e9df4399fc86af"],["/static/js/4.8d020a45.chunk.js","7b32c9413fbafac90e1e57a95f0c0a88"],["/static/js/5.0df4688f.chunk.js","c7d8f5d7d5aa3b590bf8303b4c028520"],["/static/js/6.b2c00717.chunk.js","2a02d6641ac37d3a16d94dd88f227fa8"],["/static/js/7.02f31bf6.chunk.js","b4f8b9adb789a4a60d3f1613a76b83e9"],["/static/js/8.d35d83ad.chunk.js","7d040abc42340615239cd6426bb5dab8"],["/static/js/9.80f739a8.chunk.js","550b048a46a352e2956376ab5c0d2001"],["/static/js/main.cb51b40f.js","a1b3fb3f402e1bb2a6c177e6e85a747a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});