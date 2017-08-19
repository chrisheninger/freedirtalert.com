"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6eb0f8f67465c61c259df98cd3c0c1b8"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b03a415c.chunk.js","bf6af661a8a67f5c77a822be920d544d"],["/static/js/1.84373c90.chunk.js","36058e0eb31a994f66eb9f326c973c08"],["/static/js/10.55a02342.chunk.js","2cdb2fa9ca84ea321a93811667b48a03"],["/static/js/11.4ed85309.chunk.js","345d89ea66fd4192d3e9c83b157ba2d9"],["/static/js/12.b34fee56.chunk.js","4be32a6ce0c4a57512a7ceb761dcb51b"],["/static/js/13.5c6488f2.chunk.js","fe97950383a130c98ffeb72e15416454"],["/static/js/14.02789e8c.chunk.js","7623abe7280192548c2e43c1cc3b2434"],["/static/js/15.a90fa9e2.chunk.js","05eae51bf30ef0dc94c26ec625ab4bd3"],["/static/js/16.022b2697.chunk.js","8a972f8ce2e723b7ec87698c35ec3ae3"],["/static/js/17.ac71fc3b.chunk.js","687f7f7cca6042ffec477aab02e89a28"],["/static/js/18.6f0fc6ad.chunk.js","97ee5983fc131bdd60efe3740133249f"],["/static/js/19.17f20080.chunk.js","5386ccd45c48b00765b106a9bc3a11c5"],["/static/js/2.5a9a1171.chunk.js","99352d448d4bc47fdd3e3dc041c4a996"],["/static/js/20.c35116ae.chunk.js","28f9debd5d7d4f8e6be7e109d4406b40"],["/static/js/21.e3ccb231.chunk.js","f5625e0a47c57c3c567828a6ee0b8eec"],["/static/js/22.f3da9009.chunk.js","cd1594cff9a2998c96d4befa4938a987"],["/static/js/3.cea7a03f.chunk.js","e926e760fa62dafb4541cccfcffc9eaf"],["/static/js/4.a4026bf8.chunk.js","2aee9116ddc3b57f795c43662a82d551"],["/static/js/5.12bee9d6.chunk.js","7cc001e199e2efdbbb0ade244ee0e20e"],["/static/js/6.4f4c02d9.chunk.js","93967608dff1f194734de2c830e3f332"],["/static/js/7.7030f21c.chunk.js","ded5b25a072620e3b05bae5dfc4a6852"],["/static/js/8.efacf776.chunk.js","0a44f279ef1ecdf90085c16336e5f151"],["/static/js/9.ec0e64ed.chunk.js","a449ec7bac93a8d25573777a62ddefe0"],["/static/js/main.b8614c76.js","8726668e1574e6f698460adb633ad791"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});