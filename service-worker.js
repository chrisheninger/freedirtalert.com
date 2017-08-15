"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9d5c825add3004eeb83f56542ed2592b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.47788f2e.chunk.js","85a92854ea200facadc0a19e50893f02"],["/static/js/1.2d1933ec.chunk.js","1a88e648dc0d84b7160a25257d565723"],["/static/js/10.dbc39672.chunk.js","45a6726c6d19508291d146e74206f14f"],["/static/js/11.415d5d71.chunk.js","c221e8a86758075de4edd624c925b4c2"],["/static/js/12.9e772b97.chunk.js","7d97e243d79f44690e387493e21f9257"],["/static/js/13.138f250f.chunk.js","99c0a84deddb6b31d7827f3d6135c1c0"],["/static/js/14.89a1aa25.chunk.js","a709fd9f1b1aa3cc46abf8a4a98013ad"],["/static/js/15.2fc4a206.chunk.js","29e441a02229e915775fb8a93211e93a"],["/static/js/16.53c9f1e1.chunk.js","34f3ce366c52bf3552994a51da1c17a4"],["/static/js/17.8aa17c99.chunk.js","146846f93c2bbf97727f4004c08385f4"],["/static/js/18.b6120a0c.chunk.js","53573d94d351323c80be9bb396f85d1b"],["/static/js/19.b15fb2d6.chunk.js","bf6041be4380d0d09f52a91d43754378"],["/static/js/2.c72146d3.chunk.js","081f2e7ac6d7221e67cdb10d99b2fc63"],["/static/js/20.8bf6b838.chunk.js","b228df54eda4cc828c635b28a6265dec"],["/static/js/21.e07af608.chunk.js","fce05c2c47b82703f845ffd2c7cc2b54"],["/static/js/22.b858cbb1.chunk.js","3b43f713407cfff4c44520a00833b050"],["/static/js/3.afe2fb83.chunk.js","7372b05f08f95038afa9e7cac2b86569"],["/static/js/4.bff2435d.chunk.js","483ec5a4f3171eb22b452ef883226d4d"],["/static/js/5.5041b1ef.chunk.js","b3ac73ed882a509e782701fc725151a6"],["/static/js/6.ee6848a0.chunk.js","7380f4f9d146c8ca4e80259c5f3bdf73"],["/static/js/7.49c98c0e.chunk.js","6424a3d7c93a3833a5e48f7b9fd1c86e"],["/static/js/8.483e4340.chunk.js","2b40dd836223c8ddfe93b08bef64c5fe"],["/static/js/9.f17c5a55.chunk.js","5882b1fd8289043da12a2d1a04acc2db"],["/static/js/main.4cd00583.js","68bd9e8fed3bc54b5aaf36f4e11d106b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});