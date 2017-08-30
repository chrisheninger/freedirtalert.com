"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","42e1a61ebeed9815e69e7a30116fe73e"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.30200d80.chunk.js","d787157b80a2875789c34ce46f4672be"],["/static/js/1.c2cfade1.chunk.js","dcf479b9fd183032cab3e356b0cf6986"],["/static/js/10.4b1be5e5.chunk.js","58f5fa30160afde5c315da62b3ca2842"],["/static/js/11.f8420c77.chunk.js","6443e418e9ac3fc5c8ad67e0f098a3e2"],["/static/js/12.ae1312b1.chunk.js","b1c1fb9f04ea35acebf34f72d02e38f5"],["/static/js/13.926460d8.chunk.js","94bb69598dc50d33a47bc57f8e87fb4d"],["/static/js/14.5225983d.chunk.js","6d5eb639d89b27518fa53c6921f0671e"],["/static/js/15.7db5e74d.chunk.js","e58dbbf1987c7ec9e915309cd9d4d272"],["/static/js/16.29c184bd.chunk.js","cd8cd46c834c5535a69e2ca952ca6fba"],["/static/js/17.3411a33e.chunk.js","4b79b317c9892eb0e7aa178fa1d59a98"],["/static/js/18.4aa34cc8.chunk.js","a8f803086b6ec4b4a31ae7a20c19df3a"],["/static/js/19.ae7fc4f1.chunk.js","b135d2c453a2225319b96414a5ae337c"],["/static/js/2.bf92d341.chunk.js","39861889b868575eaa275c4713eb2d64"],["/static/js/20.602fb58d.chunk.js","4404623701ecbbba0ec0f43819cd587f"],["/static/js/21.50028ae0.chunk.js","8fba4bf8049e262a90da2d114a80df5c"],["/static/js/22.0eec32fc.chunk.js","23511d2a60eda0b64cfcd228922dc8fb"],["/static/js/3.88fa3dde.chunk.js","a2cdb99b4cd6d73de53ab73cbe8e2d9f"],["/static/js/4.a1a6b472.chunk.js","4f783e22acd826e8981f25aa32ad771c"],["/static/js/5.37eef5aa.chunk.js","b0b6597f9908788c6e4f4af58604e7bb"],["/static/js/6.3564e22a.chunk.js","0aa14a2998ccefd4955cd783995958fc"],["/static/js/7.7d1b377f.chunk.js","5b1907d1fe0a6e167228577ae26b4803"],["/static/js/8.0d69329d.chunk.js","aafcaa6de79221614696e5b5425ad83c"],["/static/js/9.71993499.chunk.js","e57ef7a5d79c6865fc6a70cc2d4c1af5"],["/static/js/main.e0bb7e32.js","46536ff46a31a9ecd4a2cb878345e5a2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});