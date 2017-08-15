"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6ec485c7b26028f76b0d7387f0426864"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e2772097.chunk.js","94a3cbb81b00300ef13a44bf42895e69"],["/static/js/1.0c460b74.chunk.js","7a7bafa7912df7c3ce0650f33f05fca5"],["/static/js/10.fc73da2d.chunk.js","7f68b42a6a6a44e8510f28403ea5226a"],["/static/js/11.11af492b.chunk.js","7b656c130150ff0aa7b6f733b5af2a84"],["/static/js/12.b19728f6.chunk.js","7694ac63bfa4a4663baf5420151704d0"],["/static/js/13.2362e51f.chunk.js","b72a481033f48eb9187178321cc1c786"],["/static/js/14.f86c3d6e.chunk.js","0e108366238f78b68fc30009e4d5c9e9"],["/static/js/15.9a4565d5.chunk.js","336daf10f3ab138786d1179a3f628c74"],["/static/js/16.47e25b04.chunk.js","b7f5dd141c32fa86354a04a136697292"],["/static/js/17.41a1d850.chunk.js","fb75e2aabc5edbaa34d19b3c5365f733"],["/static/js/18.63bff07f.chunk.js","adbc154eec8d9408837bc2e0ff7399db"],["/static/js/19.bb984afb.chunk.js","9ea144a2c7670818e4d3b290440a59bb"],["/static/js/2.898eda33.chunk.js","f6cc044b4574bcf6163ff9cb4175353e"],["/static/js/20.d8e9023d.chunk.js","aa6b7e9e93fb903f664af3c6983240e4"],["/static/js/21.55e67e01.chunk.js","c9ac9583267b99e95e41afce7b96fb49"],["/static/js/22.e58eceb8.chunk.js","690bc8a72f4c41a1f8648c292f65a634"],["/static/js/3.4bcf9c80.chunk.js","680383f70b8e56f27e9357220582e1b9"],["/static/js/4.d7396f54.chunk.js","aecc77084e2be4fe2162016aa7e906e0"],["/static/js/5.c35b54d1.chunk.js","8bd9f09e219e110fc399bb448025bfcb"],["/static/js/6.2d461e38.chunk.js","43cc2a57c533d1a817512fd8494dc86a"],["/static/js/7.6ea36802.chunk.js","6f5f53d4488f9cf52433838984475971"],["/static/js/8.3e17d426.chunk.js","62723dd4a2e7227bd42eb26f04bd15e6"],["/static/js/9.45b01237.chunk.js","b44468d90a74c3b54f0246afb558f79c"],["/static/js/main.04a1c3d3.js","0c8ad04575df282e9d0cb6bfb1fa293c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});