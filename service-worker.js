"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dd33a7bfd4afc2592f1e024e920361e1"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.fd65c6ca.chunk.js","ce3e73ac12f046c1fc8288df41335712"],["/static/js/1.6ba6ea54.chunk.js","0a0a13b937a293de9081597fe86e5bee"],["/static/js/10.9cdbc280.chunk.js","d262be6f19959a06042818ee63305aff"],["/static/js/11.e2c6f174.chunk.js","120e0625ea6782168821ab3a8456622c"],["/static/js/12.a3132862.chunk.js","04c241af4d7d27c0188ae956ce63e047"],["/static/js/13.b7e619a5.chunk.js","16afd11bac2c36a1b26b40cf4c62824d"],["/static/js/14.d6d11fc1.chunk.js","ca812fba8539fcb5449cd368e00adf7b"],["/static/js/15.dbb5d69a.chunk.js","e605c51ffcddf96f26593af2532301f3"],["/static/js/16.8414b66d.chunk.js","5714db8cd836698a86b60d5262c251d2"],["/static/js/17.79b45600.chunk.js","7ad1c2e2745cfa7394f6fdbdd5ae3ab6"],["/static/js/18.778ec60a.chunk.js","4247f3e1c6b0ee9155e0b99a67f1eae2"],["/static/js/19.128ff3e4.chunk.js","f9bf5beca296ffae8c39b6c7722ee9e1"],["/static/js/2.884cec85.chunk.js","b27a4bf802ea033e2a5d776cb1e709cf"],["/static/js/20.d6e1d17e.chunk.js","efc86176c478ce3c0d1c55663df19198"],["/static/js/21.bc632bcf.chunk.js","ff8116b8c8108112c964cb6a7cde35f0"],["/static/js/22.d92b49db.chunk.js","64fd690dbe9daec35e5fbf60bf7285e0"],["/static/js/3.519738cf.chunk.js","a6acdc39b872e9aedc65bb7f4b17ec49"],["/static/js/4.9e57c34e.chunk.js","8f1df66c01858c26cbe8753a238e6a0d"],["/static/js/5.3099a046.chunk.js","cce6e0ade00548ab87a1630cd79f53e4"],["/static/js/6.5c4fc5d9.chunk.js","d353afe3a5ad27e882366bfec8f3775b"],["/static/js/7.feda4abc.chunk.js","0fcc34d32aa7c1253aa9740affa444a2"],["/static/js/8.bccb0dfc.chunk.js","181e7c57109191c4e6084d1442138c79"],["/static/js/9.7b37fee5.chunk.js","1ef8285916b9887a7fdcd747e40797f2"],["/static/js/main.623c0013.js","2767d1adce6ce063f3f9f6e28795922f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});