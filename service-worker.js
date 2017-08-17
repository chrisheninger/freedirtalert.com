"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","08b45bcf3e5c7eee4438561ffe55bc55"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.bc99ca51.chunk.js","9fea9bc3c4e6c00fc8c690b23977e5f7"],["/static/js/1.fbb72188.chunk.js","e5aac2615b913af488cc1b5209187bc3"],["/static/js/10.05ac7fbb.chunk.js","dc2398ad84a2be658b2f72569cb01584"],["/static/js/11.51759bde.chunk.js","85720363cd0afb0d235e9cc503c5daf1"],["/static/js/12.4d864069.chunk.js","ae35a0d4d013cf5c6950573cd5e88eca"],["/static/js/13.50ffad17.chunk.js","cdc4a6382827cf35b198c59d785f24c9"],["/static/js/14.760c23c0.chunk.js","246d9b1f1764d7fd3e816fdce7d17904"],["/static/js/15.7a6d9e4e.chunk.js","a60f0246d5027a7624188aa0399d661c"],["/static/js/16.e718e7a3.chunk.js","e42e153736345e4d73b59a130448158d"],["/static/js/17.026e1712.chunk.js","8a129497ef23ca047a10b4b1e8bf9935"],["/static/js/18.07d1fa06.chunk.js","c965a26ef6e7c3fed2ca78dcbf40fb52"],["/static/js/19.dd54ba47.chunk.js","dfaf6eb2b3e9fe1719008bdbc06b6764"],["/static/js/2.b588394d.chunk.js","d106b9b14fd8709097b1f57c4011ac12"],["/static/js/20.1cf8bb0b.chunk.js","6fe4ff472bb410d5697cbe7ef3354403"],["/static/js/21.8560f986.chunk.js","24b3e77778b8e1f4ef61452c451a556d"],["/static/js/22.9d9ab1ae.chunk.js","7db2dae8769c5ce67d09d029e2127f5f"],["/static/js/3.19b253db.chunk.js","eb619ebff8247ddd92922be8bfbc4290"],["/static/js/4.bf045c14.chunk.js","1d28d73e1c41f4924b7f41f52981a9e3"],["/static/js/5.202ae8b0.chunk.js","95620694a51505f1462e5873ca6f7cde"],["/static/js/6.de05fb54.chunk.js","19cc4e7f853199a59eec8c7ae4724078"],["/static/js/7.288f3a8b.chunk.js","5415ab8f6ce82866ed653fa33336b932"],["/static/js/8.933906ec.chunk.js","4b82f37b84bd34a010f35350739f6e50"],["/static/js/9.05f63d06.chunk.js","1ce1634f6148767e461e1e78b47f4333"],["/static/js/main.cd52db99.js","915ae1fd09f6eca5525dac6fcf37da03"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});