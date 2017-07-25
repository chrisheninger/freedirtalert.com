"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f9df776513a6ec3826a848534bde4535"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.14a34b45.chunk.js","d03f9958d30bb3837960e49a6e02485c"],["/static/js/1.1c5990cd.chunk.js","46bfbdfccb231fb5905f0491ca8ad166"],["/static/js/10.336a202b.chunk.js","7bdf73d25e128acdfba04ebe32d0aaea"],["/static/js/11.f9891ed8.chunk.js","a127c0801b9e574dca02fc043af5bc10"],["/static/js/12.41a636dc.chunk.js","5af0edf574b6cdda3dd9a5e657cf7499"],["/static/js/13.2eaebccb.chunk.js","da933fafb4c5ffd5f47d68b2f75f3552"],["/static/js/14.5206b6b1.chunk.js","61acc91367c51afc5bdf0e76b17a4821"],["/static/js/15.1eb849ae.chunk.js","521e1fb168749143a1ed8931879f20ed"],["/static/js/16.3d4147a9.chunk.js","1e5077bc859425a73dae084d880a7788"],["/static/js/17.f64ba85e.chunk.js","e9a954bb9ead1030501d9147535b567f"],["/static/js/18.7e5eb480.chunk.js","e7fdd0739f6ec69f73fe024e0ae4b006"],["/static/js/19.947d5cae.chunk.js","5f8bb24a02b64d15ad57d12316aa8513"],["/static/js/2.5c8ce353.chunk.js","d1bd7ad6b10e15527b263583b04c6931"],["/static/js/20.0cd64394.chunk.js","af1172d3d268be7ab76d645dd1d1303b"],["/static/js/21.5e994eae.chunk.js","7311a5a76c499b7e433ea804e3938d7b"],["/static/js/22.49ce9bdd.chunk.js","7333f9e70e05c446f3721a8eb5538f36"],["/static/js/3.c62b227d.chunk.js","9091c2731ea23abd90676d3943b039ab"],["/static/js/4.2a5df466.chunk.js","a9065036929e9d8ec129b4a5a317e58a"],["/static/js/5.1813be54.chunk.js","9f1e5421dfb6b5d671dc5848693432fd"],["/static/js/6.238bcd89.chunk.js","2ae0d46b411262a408db71ee453d6175"],["/static/js/7.36bbc4c3.chunk.js","5fe627b2e8c6a4a04eecad20b5080df4"],["/static/js/8.ac745215.chunk.js","706f3e75f9303953786608057ea74952"],["/static/js/9.8a1a205a.chunk.js","c9163d0348a10b9a4a32ba92ee9cb835"],["/static/js/main.a043d7b7.js","987f73aedc2bcb979505692c4816787b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});