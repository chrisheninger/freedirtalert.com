"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9151fe2b1755e5dd29d96f5cd99311f1"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3960fca9.chunk.js","8d7af6910ac3a82823c0554c989f3990"],["/static/js/1.13008be8.chunk.js","f2dfef42f114908c144c182f6891a2e9"],["/static/js/10.3e3750d3.chunk.js","52c22c6113063caf6be2976242de84cd"],["/static/js/11.26a27b7d.chunk.js","930d198df170c1a388286f7bb634b4a4"],["/static/js/12.769a1a1b.chunk.js","7198824428b5001eb49150c0e9d13fd7"],["/static/js/13.aa1b4a72.chunk.js","ebb663d24658ee59e988ffc1656a3ad0"],["/static/js/14.9cea1b2a.chunk.js","fe7447279dbd10f1335f0a1706eb30f9"],["/static/js/15.b124f5ca.chunk.js","6d87cf1147b564ed9ece59e252d33b1a"],["/static/js/16.5f463c8d.chunk.js","3f6ea24312d83eb80521e9c5080c4733"],["/static/js/17.de9f9254.chunk.js","eba69df9497d5277e50170558bd19245"],["/static/js/18.a0a20774.chunk.js","1bc14faecc230e3767a964dc764cbc0f"],["/static/js/19.51ce7f10.chunk.js","3c6182f80bb408be4fc7df5e55875191"],["/static/js/2.cd4ff631.chunk.js","a12c10271f2e912212de342729f9d8e8"],["/static/js/20.7012dabc.chunk.js","d60570b6a370044d9987fd1f3e88a041"],["/static/js/21.3d01fcdd.chunk.js","7ebf63212a29de68ef6f24a24d4a88cb"],["/static/js/22.29a98672.chunk.js","60e67db1a774e59612a78915aaed7e67"],["/static/js/3.2e5cad82.chunk.js","988c94ef0fea61e0c3c2af9efcea3f68"],["/static/js/4.e8fdc12f.chunk.js","f123ab1f5fd440047db6564ff42561e5"],["/static/js/5.edef668d.chunk.js","c28470523041adbb826b319bf34313a9"],["/static/js/6.4213152e.chunk.js","7e31e0996871e4b35222c0511201f923"],["/static/js/7.69f39fd6.chunk.js","d67392d06713ce963d562a6eeffc350d"],["/static/js/8.55c9bfc7.chunk.js","93992f459d2b2231b00a488dc8348a20"],["/static/js/9.b8a49c30.chunk.js","74b674b23f886cab43c472fa50c9509d"],["/static/js/main.e00762a6.js","f81bc30c0e6897dba55ea5bebb108b84"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});