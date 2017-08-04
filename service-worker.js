"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","174b03d9f499643dcf96f2098cdb1f79"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.45182fd4.chunk.js","4db045455f236fc7d014a1695a6adfea"],["/static/js/1.244f3c79.chunk.js","718dded7fd7cc25654f668b254ebef4f"],["/static/js/10.540f98e8.chunk.js","936ec99f535ceef0f9db0e47d451ff8e"],["/static/js/11.83f82141.chunk.js","f390707f746998abdcd1709797b67475"],["/static/js/12.a8d9b531.chunk.js","2ec4a2474e8ceb4d934fc4e95d978a13"],["/static/js/13.ddbfb4f6.chunk.js","1efee5b176b32cbc5d37344cb4e474ae"],["/static/js/14.dcc5c91c.chunk.js","1fa2a99ef79ed082d4d364723c97bfe2"],["/static/js/15.1ddc34ff.chunk.js","c1c826ca97e694138cfe1b6be95c8cb4"],["/static/js/16.29859f77.chunk.js","a605d4fbdd23fe72f85ab3c2fa70712c"],["/static/js/17.3dbde312.chunk.js","a7ec2da675ba45668a12832f0a827ccc"],["/static/js/18.4efa1ecd.chunk.js","77d93f95277ccd66240d16121099ea26"],["/static/js/19.5d0e1a75.chunk.js","b7aaf8f7bdcc46fdd41d1f83f7f16561"],["/static/js/2.d13228d2.chunk.js","5434370333b88601611db7ef59812fe5"],["/static/js/20.9528b6e1.chunk.js","5f1c13d10391f0f990cd750031cfc1cb"],["/static/js/21.9828670e.chunk.js","ded0ed8573a24ca3a19728a4cf1c4828"],["/static/js/22.4ca636a5.chunk.js","05594a2cc37cd02bec27f78a05ed73f4"],["/static/js/3.f4384f9d.chunk.js","e60a821eb180b16979fb21039e61601a"],["/static/js/4.f3153368.chunk.js","81a1ccfa454375fe08f6bfbeae7fe0b8"],["/static/js/5.0d13eb18.chunk.js","02fec554b489e025c09978ea2769006f"],["/static/js/6.b1ddf606.chunk.js","a7210324fb008711cb473711c5f8b1ee"],["/static/js/7.61a4de04.chunk.js","a63341285751f1292832c815c07d6ffe"],["/static/js/8.2abe0cea.chunk.js","14264babcd7ef5868306e7658bffee3c"],["/static/js/9.cb7a1d53.chunk.js","df2f92cb96c3e12926fb2d4bf2ae7117"],["/static/js/main.aea4f730.js","0fff76ae9a06864cedd16e5d4cf78580"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});