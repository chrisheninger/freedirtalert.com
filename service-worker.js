"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6dd233e5df71a55b9edf38d7325d3072"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.7a64acd1.chunk.js","153cdcdf83a17fc6037c36078f235c29"],["/static/js/1.1f41b29c.chunk.js","0cd7fcc0e5989c86d6c53372b87dfe16"],["/static/js/10.518e1263.chunk.js","61f9c3cdb274698c07e70d122cb35485"],["/static/js/11.705708cb.chunk.js","840093fe4b9d74621c73e9561378a413"],["/static/js/12.2c09aafc.chunk.js","2ece2375be522a64a775e37f063576a4"],["/static/js/13.11bba205.chunk.js","4af74519dc74300121792fcf3c4d16c8"],["/static/js/14.71bc7a54.chunk.js","f3212a88be51dd5f5e19dc3fd3f73859"],["/static/js/15.a00520b7.chunk.js","99ad058b5ae06708f0a8db512afe2639"],["/static/js/16.608a241d.chunk.js","98a07b86165b2a9735da29dbf8a3ac8f"],["/static/js/17.a2692be9.chunk.js","77f8087958ed9f527ca032e1dd744d1f"],["/static/js/18.e8a6b390.chunk.js","5720b4d3de6369f200b791f03fba50ef"],["/static/js/19.ab7038af.chunk.js","7b9664b25b15e3848f74564c5086a64d"],["/static/js/2.e24afa9e.chunk.js","ef0f697438c24ab74addf26187421080"],["/static/js/20.858445f7.chunk.js","c60daa7aa48022f4167b1920ca8c6c8f"],["/static/js/21.4a7d86bc.chunk.js","e91927024929172d6e96068508dcbe6d"],["/static/js/22.aaab7f8b.chunk.js","0a3625ff2bc5f6c55020841e10b6162a"],["/static/js/3.65dcfc0d.chunk.js","bde87accb8b4b93c245362938a53997d"],["/static/js/4.fbf69f05.chunk.js","7aa4368e36b6f17d396d83b7f2668ae3"],["/static/js/5.840f8e5a.chunk.js","027fa245a66cfb49d792e0563c7e9e74"],["/static/js/6.b3904793.chunk.js","32a75b831a921459f1d65b2a9327213b"],["/static/js/7.8b2bc273.chunk.js","452041c125fbfb2f3ff99b6e7f7ce76e"],["/static/js/8.5280e1ad.chunk.js","f3ee50dd96c85345fad6f495ef15fd95"],["/static/js/9.d624e3e1.chunk.js","098acc742f78867018485373cd594836"],["/static/js/main.6af34212.js","62444cccda10ec10cf8e25b87175a46b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});