"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","bb8de6b59c6e98845ba722f17ea7177c"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.5a20d4ca.chunk.js","7040504daedba04a61af58eed291a8a2"],["/static/js/1.bd6bc285.chunk.js","a9895f60dffb0e5a1706212dd802db3d"],["/static/js/10.2bae9c4a.chunk.js","480d2adbcfcbb742d2eea4d441fbba9d"],["/static/js/11.d6d71d30.chunk.js","87dd96cdd0cacd4cd2ea854169c24e91"],["/static/js/12.22267ce9.chunk.js","b773f301b1f9d0cc7a48464f8f80cd67"],["/static/js/13.e4a7fbe8.chunk.js","357935bef421e150b287bfa176f81cd8"],["/static/js/14.cebd75db.chunk.js","e64941cee6baad21b26e43274609d599"],["/static/js/15.aaa770e0.chunk.js","dcf1354d850881d3f0be83bb115c2ef1"],["/static/js/16.0a8df101.chunk.js","8f0471bb62bb967798a53f510dfba685"],["/static/js/17.8cc80915.chunk.js","ed13771ddae3fd77f759a5ac714cbe62"],["/static/js/18.561e4c8e.chunk.js","fefa4d7c1a1223d4d3141ca980e00731"],["/static/js/19.304f68b2.chunk.js","abac33182bcc0946545d0c34c3b01caa"],["/static/js/2.258647ce.chunk.js","f13dc02b20ac6a421a63add0c85ebf38"],["/static/js/20.4c15e1fc.chunk.js","396a3749ee646afeaa299f0a22d2b3cb"],["/static/js/21.a1f402d8.chunk.js","9cb6573d098a707d2abdf8f2a3f441a9"],["/static/js/22.7a99db79.chunk.js","58e2c2f7ea21fe663acc281509411a46"],["/static/js/3.bf275f72.chunk.js","045fdda22cc6e5dfb9b8eab9bd13c9e2"],["/static/js/4.71239af2.chunk.js","3c62a9490b7139103f5cadbf3dcbf7e1"],["/static/js/5.9d0dc15a.chunk.js","4b6ed14fd4373a53e0b6cd41133e515d"],["/static/js/6.ee2b1b70.chunk.js","183eff918891b5a903e35c28c61aae38"],["/static/js/7.f3d5598d.chunk.js","7b7042d3bee67a4b71b079dad51559fc"],["/static/js/8.7b6550b3.chunk.js","e6881f7fa568e13909467613295ec643"],["/static/js/9.61dfe84d.chunk.js","5013910bdc3471605682489b829fc1e7"],["/static/js/main.8d956fa1.js","7dd7c5573170183b62ce3e465fdb2822"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});