"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4644662162e5737961c5d5611058600e"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e07f05f5.chunk.js","f5886870625452c990c71c18606909e7"],["/static/js/1.1f233a5b.chunk.js","f01cee3502ba01868dd4211edcc024d4"],["/static/js/10.8e4185af.chunk.js","4f1030dbf4693e32ce0458ca547a3b69"],["/static/js/11.640c37ac.chunk.js","486b7606e507ef4b05a27e023487c419"],["/static/js/12.9f356043.chunk.js","d4a88122b1a26f8db8ecedf046f1a7af"],["/static/js/13.b06746f4.chunk.js","d17cd29a4d86ccb7f43d574019c92272"],["/static/js/14.80b3d0a8.chunk.js","0fbef319296a50f4b8961f8dc5aaaf21"],["/static/js/15.b91209c7.chunk.js","38944dafa57e7ae7f55f839dd0117eb4"],["/static/js/16.d40c5d6a.chunk.js","bb0f74998e57df31ee47e18eb447385c"],["/static/js/17.0d106ce4.chunk.js","1489019ad745c7415eea245f86feb5f3"],["/static/js/18.fe376ab0.chunk.js","f701fb6be51bdb942b290c2b39c56faa"],["/static/js/19.af7b9bbe.chunk.js","dbbd30e1b01e95f8b4a15a3b6fc9f585"],["/static/js/2.7c3dee2e.chunk.js","2cbf7c7bf8c9b36077ecbb2fd6107f55"],["/static/js/20.6b63660f.chunk.js","59d5861dafba325f93891a1dbfa0581e"],["/static/js/21.a193bb1b.chunk.js","3bc6ad4aa09ad9651d0e215848cec4ea"],["/static/js/22.2fbdd1a1.chunk.js","7977a642a163656870e2d143759681c7"],["/static/js/3.018fafaa.chunk.js","a6f9f31947fd76bad92e171dcf863091"],["/static/js/4.9d71ffd0.chunk.js","3e764f97e452a6af923ffb4e1faad550"],["/static/js/5.e795ade0.chunk.js","f6139aeefb4b0aaf063f3240acc07022"],["/static/js/6.531b8f2e.chunk.js","9a9c620e24afac1dd70b6729140cdbae"],["/static/js/7.cf3045d2.chunk.js","73785e343be87b12d8b8b67057e635b9"],["/static/js/8.1845288a.chunk.js","2f7dec06e8aa64a979dd9aef064a5bba"],["/static/js/9.3d115734.chunk.js","b284bc7540030b398100b3dafb040334"],["/static/js/main.fbfeb205.js","87c69afcaeae1fffeceb52ec55b4e42e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});