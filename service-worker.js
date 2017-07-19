"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","834d7dec1136743127294d4e73847d52"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.384fb5e3.chunk.js","cc38ccc426f79968f2aa5b418356ed47"],["/static/js/1.505df0ce.chunk.js","af7f3801ad04deed1f0dedb5b47422e1"],["/static/js/10.2a52d05d.chunk.js","db979e60ef997a9d7a5eb9baf06e9f8a"],["/static/js/11.5cd7e741.chunk.js","21e73bb648c2563276315011b9e15648"],["/static/js/12.50554bc2.chunk.js","aeff9dea7317f662f90797b0dd7f6e9b"],["/static/js/13.2e2384d0.chunk.js","7328757b32ba23c6ae7172902955af57"],["/static/js/14.99124b8e.chunk.js","8d3a36741fae37d11fd03106f06c9cb3"],["/static/js/15.b94acfa5.chunk.js","120e228e75816c985c9b67a521e2d79a"],["/static/js/16.200ac32f.chunk.js","52ce13ba4753f20f23f9aa68b5228eb9"],["/static/js/17.5b75a5d3.chunk.js","edc5cac4d98ad78782b883440cec10e4"],["/static/js/18.82aa93ca.chunk.js","b1f83bab8809ed07d4caef4754a31e4c"],["/static/js/19.7db611c6.chunk.js","c713174f43f3065124bbc2ccf77847d1"],["/static/js/2.5df8ed4a.chunk.js","9e8498fc7f6e582b46bd7e7798c7e5f3"],["/static/js/20.5c834795.chunk.js","257a9a4028012fc810b6b3b5ca1bb0d7"],["/static/js/21.c5dace7c.chunk.js","0a780e9c7eaf22a05e5850313a75316e"],["/static/js/22.a02fcb00.chunk.js","dea17c69cee06b38e9870403e655d051"],["/static/js/3.faf5e3eb.chunk.js","93a1d574fe1d3fcf431b43b3e814e05a"],["/static/js/4.219edf34.chunk.js","a846d2ad888dac7fdc973df28cb10866"],["/static/js/5.0d728286.chunk.js","7a51f24d3e89d99af11954dd5d0d18c3"],["/static/js/6.bb1adf3f.chunk.js","0e03b5c7c467df460575034fd08de645"],["/static/js/7.fb5e213c.chunk.js","a3357fd3eb2915f86903d0dcacc8a7ac"],["/static/js/8.49c322bf.chunk.js","ed5dcb540293d64c9ab18c96fefa474e"],["/static/js/9.4ee6ff1c.chunk.js","154c879f8952e3d73be1d08d075c696b"],["/static/js/main.7b2e6957.js","1194e49a373c0c4e182e8a875ab0df2d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});