"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5f6aba5c7efaf8891648cb07d1b43196"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.253fade3.chunk.js","c264d44295a71d6ca494758a0fd1ebdf"],["/static/js/1.873eb9d9.chunk.js","a2773a10bf15079818a6fab1c1f0c103"],["/static/js/10.03891de8.chunk.js","8f980836eefc79c6e5701648bf148c78"],["/static/js/11.fdc6dd32.chunk.js","76338fbba94c204a8c3e6977d9b141df"],["/static/js/12.9614b5e8.chunk.js","dfc01d3fc204c62cb35a04435a426d90"],["/static/js/13.60bc4a1b.chunk.js","5fbe665f766b17e7f90d781bb5128052"],["/static/js/14.e040dd13.chunk.js","c7236108271f2b2e040f63d1ce94d341"],["/static/js/15.9f7b9010.chunk.js","f281062daeec2155e3c59378c4eb8e30"],["/static/js/16.b70e3b27.chunk.js","6ef48d58f7ffcc11c2a0a3e71862b9ac"],["/static/js/17.fb7f7838.chunk.js","3aaa62c8df4715069d511315693e46c7"],["/static/js/18.a437e8dc.chunk.js","7f8a6a8e988c7e585e3fbb8969c64765"],["/static/js/19.4e203fec.chunk.js","0420909bcf31a5f1ce43bca506bc8d8f"],["/static/js/2.ec581ec7.chunk.js","eabb87795e06a8eaa41fcc4e0c72bb17"],["/static/js/20.3f857370.chunk.js","27a339ce20c28266fa5de613744ee05b"],["/static/js/21.61d2fcb0.chunk.js","64fae2ca1ba7e844c9ef7a70c59797e4"],["/static/js/22.b8a71a28.chunk.js","c8fa6960b2bd6c704e2f246cac0b16c4"],["/static/js/3.5e170169.chunk.js","37767c0fa472093c66c9d82ee48d48c5"],["/static/js/4.17f16994.chunk.js","46152ca342655aa42077b2ecfb797d31"],["/static/js/5.dc833216.chunk.js","3aa29ab9c606947e187813bb8a860ca2"],["/static/js/6.2d536b1f.chunk.js","9af5059933a1709e17ab00dbd4b51a8f"],["/static/js/7.0416c4a7.chunk.js","135d27e3fbff180f0cc909da122db3d5"],["/static/js/8.c056e3c6.chunk.js","70b69f11e08d84df16787cce44a4ad27"],["/static/js/9.22a30127.chunk.js","1883c42af70e4adb14a9603fe97e8794"],["/static/js/main.4e0cc7d8.js","6721689143749e649ed582243c962fcd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});