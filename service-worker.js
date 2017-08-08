"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b98cb68fc2ef38dce094ed3cdc87f13b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e937bd7c.chunk.js","223a1e6b8d02162f3b71b15c4b58617c"],["/static/js/1.1e03b115.chunk.js","b60a935ad9897cc2e97d1d9518cde3ee"],["/static/js/10.00b9ac8f.chunk.js","15352bafdef14d9745e4ace499747a51"],["/static/js/11.9f4bcac2.chunk.js","396538d309c27e5e398dc703668bb7d6"],["/static/js/12.e85b21c1.chunk.js","c29ee192f31138ac3cee12a97da09b68"],["/static/js/13.9978ebcb.chunk.js","e6d23652175a8868c6b67f4938919376"],["/static/js/14.2d860b06.chunk.js","b80cdc08d9ac42d522aa09083c86435d"],["/static/js/15.2788430e.chunk.js","a8834b11b924382511b0732b74a3d055"],["/static/js/16.81f69753.chunk.js","832b7e4058eb644daeb2459df0a5e201"],["/static/js/17.73946760.chunk.js","d0b4a6c43c557904e60ee5c654a23f38"],["/static/js/18.5c482e57.chunk.js","d3d37f3046f1352ce4b355c67d6e8064"],["/static/js/19.1bdb6a0b.chunk.js","4cfdaabf8998d28e4d88c95bee460cca"],["/static/js/2.468373b3.chunk.js","0caaf388c442dbc535c4b5c33b054a99"],["/static/js/20.17bce9f7.chunk.js","5d0125c78b058ff7473b54d7a23bc11b"],["/static/js/21.1c1637e9.chunk.js","3b3e2e3aecef9a64e9fc7b48fa556595"],["/static/js/22.394a6187.chunk.js","08ca331cc81df27cdc14d2a783ffa269"],["/static/js/3.58d325fd.chunk.js","bf2c11023e286b18d1eb88504c6b1ea1"],["/static/js/4.5d976d13.chunk.js","f8c6a94fdc3a816b44565ca3a0a16627"],["/static/js/5.f98864d0.chunk.js","86efb1a61932d11ab4d24b0155f27125"],["/static/js/6.b0ed89b9.chunk.js","94449f543754428d2da588d1fc557639"],["/static/js/7.a0d07cca.chunk.js","1f9cea62b00d519df7b0c4e01dc334d0"],["/static/js/8.0c435a59.chunk.js","266f22940353c91e3dc03f2b6ceb1bfa"],["/static/js/9.5459973c.chunk.js","2982a55e5d7f4b48255c6878372afbb3"],["/static/js/main.1208a742.js","c01036a2c38f25cee69fdda5fb7169e1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});