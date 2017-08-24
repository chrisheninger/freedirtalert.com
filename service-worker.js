"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","13d58b37202561b5404ba50b72538e09"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.586bf3c5.chunk.js","df3b2b4454f038280aee4eb031aa2f53"],["/static/js/1.37451c18.chunk.js","33e0b3f71cfdbd5673533d1f7fb4c2f7"],["/static/js/10.01bb991c.chunk.js","2fd6d59d68e1a7e091cf6abb603065b2"],["/static/js/11.758c5188.chunk.js","c0ad3fa44d898534b0744971a9499d80"],["/static/js/12.15562a9d.chunk.js","0c31562ded9d48b2ea5ba7124ece2e45"],["/static/js/13.608c00bd.chunk.js","9abee179e8578636ea9f9c1eb4351c2f"],["/static/js/14.111f3e87.chunk.js","917bc29c286df4b5d3eebdc252a62e22"],["/static/js/15.237ec729.chunk.js","922ca01b225f01986af831ba1a9bbb18"],["/static/js/16.c64318b1.chunk.js","e48d6bbe6f806e198182596aaf823daa"],["/static/js/17.761baadc.chunk.js","a4436cb8092859aea8ddfb0c13a0db96"],["/static/js/18.3fe43a8f.chunk.js","03d230f70d313659a1f37a55e9d2c754"],["/static/js/19.315329fa.chunk.js","d687f72c665fb757dc91eeea3e842f5e"],["/static/js/2.d1471798.chunk.js","92348ea10e1b259b37f9278c0fa9108e"],["/static/js/20.ffe4856c.chunk.js","ff8ba8e54faffa5e87a726cee12c9530"],["/static/js/21.eda73f78.chunk.js","166a5120bdc44c9919dcb2e6a38d0e68"],["/static/js/22.b9636ab2.chunk.js","ae57569c56c8229ad87f2ed850b67e37"],["/static/js/3.fe16bf71.chunk.js","cb6c9ef782206ce21c19c8207690bf3f"],["/static/js/4.4d59f73d.chunk.js","3924138400421e13afee27561a773dc6"],["/static/js/5.2ec81841.chunk.js","154c28640e5a0aa2adc6a5fd394d9a83"],["/static/js/6.043b5900.chunk.js","48767b7589c302295a2074d22b479168"],["/static/js/7.8ad3442a.chunk.js","72a38a864e01d8952f1dd99ecb14ad51"],["/static/js/8.962468f7.chunk.js","c64d53b9342e126396a956c3229be5b1"],["/static/js/9.969e988b.chunk.js","021440878c8fac1aaac7eb6eedac47cf"],["/static/js/main.30b66bbe.js","80e90579af0c0473dfa7e21147dabdd1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});