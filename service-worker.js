"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c8ab9ad6d68578d9e8aae09cdce15430"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b440a61d.chunk.js","3eb1f030324582110360ae2884be03e7"],["/static/js/1.e8224b06.chunk.js","4c8ccc7cc9702d078c2e0699a3a25ae4"],["/static/js/10.f966ecd0.chunk.js","91e9d9f1be164191fe65ad10337a8a17"],["/static/js/11.08632cdc.chunk.js","36af6e71ab245dcdbe06defc244ceb57"],["/static/js/12.6459715e.chunk.js","8ec7037fc726aee1f59983218a2c33d9"],["/static/js/13.5adb8124.chunk.js","a790fb916cea4c576856696c40e64340"],["/static/js/14.d5ccb6b6.chunk.js","3a72c08538b5904e2886f0f5bc4f14d3"],["/static/js/15.d8fb378a.chunk.js","325cd1efdf61da928b7fd4dcbc204b94"],["/static/js/16.4c1a5800.chunk.js","9027580c1251588efdf47d24b64b8075"],["/static/js/17.4fac27cb.chunk.js","c24d14dbe23ded18be4da8647bf63fbe"],["/static/js/18.498248b8.chunk.js","d0de4df9c0bd2bc31a183f5de498ea68"],["/static/js/19.4e8dfa08.chunk.js","936aee1e2ff145da5dc82195aa3653c7"],["/static/js/2.39ed48c9.chunk.js","6c818ac6f97a29ad5a36980f3d37c8ce"],["/static/js/20.2654d491.chunk.js","c174070e8956db8542f441d3c334eeca"],["/static/js/21.9ae2b58c.chunk.js","289fbc00d0401e87f997e8a6311a5316"],["/static/js/22.03ce75aa.chunk.js","3c77f08d323cbb37cce49c13811b8984"],["/static/js/3.10ed8648.chunk.js","1b4c93e675072cd01f5978d39872bae8"],["/static/js/4.b797cc81.chunk.js","c7a1db3514e499b5872e2bdbaea555b1"],["/static/js/5.abfe3d2a.chunk.js","671120184f5c8b4be48f2072d08ec07a"],["/static/js/6.b7485c2a.chunk.js","cc5ae0c11212a827ef1849c86ee8c171"],["/static/js/7.01ec2cff.chunk.js","5834760e003d48a9fb48385a0605d32f"],["/static/js/8.00e197eb.chunk.js","6d7faddef001cf1e536e2cd06e1fb83b"],["/static/js/9.c5d207c9.chunk.js","c475c10aa0651be04c0a9d97aa1e864a"],["/static/js/main.4760d129.js","e9907402870d0fdc2b0cd39c2e3536ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});