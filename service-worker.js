"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d8e71adb0a99a45492af630219d651f9"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.a236a3d8.chunk.js","7cbf1625373c4a7673d42f53e5f91c6e"],["/static/js/1.9d80cca0.chunk.js","357a8272303aa11ef0aed2a92175301c"],["/static/js/10.0b9722c5.chunk.js","4f9a80b709a82f0bc05c4b40a2fbd7fd"],["/static/js/11.b54c9b82.chunk.js","09af6ff96f0e9f10861de96a5bbc9632"],["/static/js/12.4cc246cd.chunk.js","3e93cb6c82383ab5b1b252e15bd5edd8"],["/static/js/13.6d7d44e9.chunk.js","1ffbedc6bbd223c4aef1eb640837c351"],["/static/js/14.b8298e81.chunk.js","41265142d7da942b0f021e7f3a7fa34e"],["/static/js/15.d5f36d5d.chunk.js","a0b5f1631120e11fc5e283876c3dbc28"],["/static/js/16.9d0a7c0a.chunk.js","8b84ceebe3d6b750b0059a4c59366393"],["/static/js/17.3fc24a82.chunk.js","9fd238f350a3d49b4fab342177ff2060"],["/static/js/18.14239bac.chunk.js","0c81375e6250943ff7d2a02b9f41f5d8"],["/static/js/19.425ff5aa.chunk.js","f14ab406b63be6de6211de628606a4fe"],["/static/js/2.16d26f09.chunk.js","6a0fd88d74463066733119e787d910cd"],["/static/js/20.0141c511.chunk.js","00ce440f33977253998ca3768bb180bf"],["/static/js/21.1d073d6c.chunk.js","997ad7a4e291796bbf9cf2c08ceae9c3"],["/static/js/22.57ce49b3.chunk.js","90a28efc6e8e18b9b18f53311e0f9418"],["/static/js/3.94f78c7a.chunk.js","aad12601e7932e146ee47bacd371f617"],["/static/js/4.500e8027.chunk.js","fb06f6385a93c0dff0790eeb77bc39ec"],["/static/js/5.e89d0f83.chunk.js","8aa454444a00441babc67779a68c7a07"],["/static/js/6.eedc44f7.chunk.js","707644f83fe4eca722ccb6bf133adb37"],["/static/js/7.fced4d0b.chunk.js","4746d60bb970df4161c8405c43ec630d"],["/static/js/8.fdb16d13.chunk.js","64d1f9ab4203d6471cad411a2dec43a3"],["/static/js/9.0a6969d7.chunk.js","1f028982d7ea0d619acebaf34ec05073"],["/static/js/main.87855315.js","a39c77a97b3e58ae30c963954b4a339d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});