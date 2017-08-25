"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0e2cb45be5e304d6fa5e0fba4a984173"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.59ccbaae.chunk.js","a97f69640b86ce8388a04e2587f823f8"],["/static/js/1.b9c02813.chunk.js","8be5b55a4625034e46e194aa9ccabfa4"],["/static/js/10.522261e6.chunk.js","3c6d887de5fba20f5b6d966b08f06621"],["/static/js/11.df25e827.chunk.js","ba8d50cea741dd0d63813e1441382e67"],["/static/js/12.a336b2cc.chunk.js","1f3fdab943e0a3c08a5c83fc7dcbf24a"],["/static/js/13.973b43c4.chunk.js","6ea10c2212e094389f5a1c7089c91123"],["/static/js/14.8b573d0f.chunk.js","b8bc56eb70b5bff78e63cd294b076674"],["/static/js/15.77af291a.chunk.js","7b8bdd070c7dea69f42466be1ddafe0d"],["/static/js/16.6d917b16.chunk.js","af44fb165d79ea2dea9c7dd432f9b865"],["/static/js/17.a1df612d.chunk.js","40ba4596a80bbe619ea036ac230ff5ce"],["/static/js/18.93e689a6.chunk.js","147ad8e1a5fe6cc02356354b9c6b1024"],["/static/js/19.e013f3bf.chunk.js","3395bf035d37f4fd58e148131efccc28"],["/static/js/2.a382d3c4.chunk.js","eb5e8f1aad54f16d38075b6d7982fc22"],["/static/js/20.d6ce066a.chunk.js","152c5da8a905e761f92e9f211269fbff"],["/static/js/21.2cb43713.chunk.js","eef361d1fda00dc0cc5b18244573a353"],["/static/js/22.00c1fbb0.chunk.js","d04d9ebe0ea669b362edddcc4df6ca65"],["/static/js/3.1c0e0395.chunk.js","e7845d1f23ae5f9065529ecbcabb8d15"],["/static/js/4.da457a4f.chunk.js","868c7cc3c5c26da0002c47be96942e93"],["/static/js/5.2f0afc50.chunk.js","fd3184019e80abf4678fa86afad6c6d1"],["/static/js/6.7a3379d7.chunk.js","573bc112f36e36bde5c8e14fd73db81a"],["/static/js/7.79560341.chunk.js","bd01cdb39d1748a766dfba19788d1969"],["/static/js/8.a05e844e.chunk.js","f33ef2afe18a4f26c77e90e63108dada"],["/static/js/9.910b5359.chunk.js","63561d5bbebf5e14f6b48d51bc2d25d4"],["/static/js/main.4b8b2195.js","a38effbacbde1361ab8cec6f39a0c990"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});