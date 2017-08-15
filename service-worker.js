"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ab9d7b2eee132585e64bd9175de6242f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.cd8a5aaa.chunk.js","e0f7861166168794557e43ee4845c0c8"],["/static/js/1.e2db3395.chunk.js","ec994b8a0f30334338ff4c1dfa6b0ec7"],["/static/js/10.664b9b55.chunk.js","a0a3f90ced856432781a306d2e56311c"],["/static/js/11.736550df.chunk.js","aa737143dce5feada488dc2bb4ef28ef"],["/static/js/12.4a90e52a.chunk.js","51d74bdcbd66381cbfcb272cd61bf4a9"],["/static/js/13.1161e0a1.chunk.js","a072b7ccdc2a1d3b44aab8615609c941"],["/static/js/14.89c75588.chunk.js","3ddbeeb60bef4249d271eb430cd9504f"],["/static/js/15.e0a64fb7.chunk.js","6b1b4e21b5eaf242d4d91b6869b485ec"],["/static/js/16.11bb46f6.chunk.js","ff56988d9ebe62f72705abfb103ccdb0"],["/static/js/17.4a7da4d1.chunk.js","44395d23107edd54133df7eff6895f6b"],["/static/js/18.0bd67c7c.chunk.js","5cfec98ad2a1faa387a99c1ea378e4a0"],["/static/js/19.7a008cb8.chunk.js","8cf83a8ded6aac0e85bbdba119ecd6dd"],["/static/js/2.5e48247f.chunk.js","148597eafc64de4ccd9655e239de9fca"],["/static/js/20.f25a97e8.chunk.js","131e8112cf0ff3a1cc67ce96c4872720"],["/static/js/21.f821c38c.chunk.js","0df50ad8ad4cf4b6f3f2abd046ac7e94"],["/static/js/22.f261ee61.chunk.js","91bdd3f0b2800095b922e1806e802234"],["/static/js/3.552c634d.chunk.js","5d4a38f7492b1f2958031df4d58d69ba"],["/static/js/4.9c3bf00b.chunk.js","ca010f201077d8f5c42594f46db8659a"],["/static/js/5.3af8c3fd.chunk.js","b32f58ddfcec12594fe9f98d1c58bd91"],["/static/js/6.d5ce3a07.chunk.js","72ca4457b7c6aead5e2a73f593602cda"],["/static/js/7.6bccfe11.chunk.js","0fa2268b46bcf527533d1d89e06ccceb"],["/static/js/8.78116c5c.chunk.js","9cdc510153ef44b88d903649b97ce2f9"],["/static/js/9.e07dac98.chunk.js","e5f113c6d4c11795a35bdb1a13f9a72e"],["/static/js/main.315b9246.js","a3f430892013fb8264a2f6766b076125"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});