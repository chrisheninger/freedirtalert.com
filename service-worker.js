"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","658abf8f6e678600cc017c250b6eb405"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f4f468ad.chunk.js","5d5125fb8b03febe6cae548c53da4b6e"],["/static/js/1.f5abea9f.chunk.js","075b78b9a7b06932664d4a73bd7d303c"],["/static/js/10.76496a96.chunk.js","2cbb9ca7aa490ac0f2b185ef5e3f6bee"],["/static/js/11.21dc52b0.chunk.js","622ff87099f7ccf3782b7f9723151014"],["/static/js/12.70f5591e.chunk.js","6cb9b88068d3fcf672b4649a0fe8d14e"],["/static/js/13.b6995970.chunk.js","d7f5dfba73b6a19238a6bc17554432ab"],["/static/js/14.04439b25.chunk.js","cbced4ea6b5e2b0f26fa86d0e688da35"],["/static/js/15.c445e11e.chunk.js","0c9315b3d5c44ecdc0d9b259cec3203f"],["/static/js/16.32e006b7.chunk.js","269d7cd29c0a1909526ef9338b0ef1cf"],["/static/js/17.6eab07f2.chunk.js","44ddca77c0de455d7c085837ca6ad953"],["/static/js/18.34dbc727.chunk.js","0feea08523c8c897ee14ee829cba1f0f"],["/static/js/19.2e5e66bf.chunk.js","05c255b670e91b132776b32590b16883"],["/static/js/2.feb5f4c8.chunk.js","ee677e74b350bde0cc1a28b517b55107"],["/static/js/20.a057723f.chunk.js","dd898fd180375611b0499cc41a17312e"],["/static/js/21.e651155f.chunk.js","89fb4ae06611db84b5ccfef3c95ef642"],["/static/js/22.b3485090.chunk.js","1f445411e5905e6ac7054000db94860b"],["/static/js/3.212c9424.chunk.js","ec17e8e9b06f105288d618b0e1f0c39a"],["/static/js/4.11b1291b.chunk.js","a22cb040d8e9a95996acc632ecdfc7fc"],["/static/js/5.800a4148.chunk.js","59a45b73b71687a2039141c7a3fe730a"],["/static/js/6.6219f9bc.chunk.js","a2883a0a9f9ad1da0d0e6cab15f0ad9b"],["/static/js/7.29f97946.chunk.js","1d91eac0f2b724d680a4e59560216bbc"],["/static/js/8.4784f587.chunk.js","4a41a4c98e8b2825142f2424d8265e6c"],["/static/js/9.82761e19.chunk.js","45147adf038a6a7b5bd1e69de7e13383"],["/static/js/main.0d21eee9.js","a0dccbd207c20233ea41f0cf6c1b4971"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});