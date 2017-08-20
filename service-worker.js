"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6f2993b383c13621d868b09aa6c3794f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3c830a8c.chunk.js","cc43d4aa98d37db8dbd91ec5c88ad97e"],["/static/js/1.0d080d44.chunk.js","530d32064127896e48a03b1ae3fb31f7"],["/static/js/10.75d089e3.chunk.js","a75aa323bf0800c0365dcb3f6c833f82"],["/static/js/11.d9c857a9.chunk.js","2244b2f464c44e972ae1097b7909c13d"],["/static/js/12.d0147c8b.chunk.js","f67c8b99a8f9c12905c4333ca8fafedc"],["/static/js/13.478689bf.chunk.js","6d0ce29f54b10994e700bd4bc36b587a"],["/static/js/14.7fd4ce49.chunk.js","e431d33b98ccb9f319deb9ed0fb2a873"],["/static/js/15.a9b52c13.chunk.js","1f18d2e755f46e1bd90986f0724f3f21"],["/static/js/16.2fac9912.chunk.js","80fe926488a9a6e56fd1087514fc6935"],["/static/js/17.d2375356.chunk.js","e44b761216faccde12fedb9254e2fd5e"],["/static/js/18.bed33ca4.chunk.js","d55baaace17a2069de57c42ce4f99ea5"],["/static/js/19.ab6a71c6.chunk.js","5354983c60b9d78619c739c8410af994"],["/static/js/2.1d13c4f3.chunk.js","4d5d29358f3c88ba6c6a750aeb1bbcf7"],["/static/js/20.54cede2b.chunk.js","b6e10cb3519a66e9bc94a8e3b9814dcb"],["/static/js/21.2454a003.chunk.js","fc9b16e3febd1e8ef767613c22b06a69"],["/static/js/22.bb6ad0ce.chunk.js","028a17a4aa06354a203b86e29c3c13d5"],["/static/js/3.67e72979.chunk.js","a34d6c78cdf01484bb4e2887a14deff2"],["/static/js/4.f5342275.chunk.js","5d2bafa1a48c7ce73ddb047c8feb063a"],["/static/js/5.9caa2169.chunk.js","68f850251956d511d80deec191af8b92"],["/static/js/6.447db79d.chunk.js","a1dd8b3a5d6d78726de05d16aa138815"],["/static/js/7.6fdc7521.chunk.js","b078d6d6bdd43cf361e07a8c3b552a45"],["/static/js/8.aa994ec3.chunk.js","a6957dcf3088eac4d45b7401b5eed01f"],["/static/js/9.4058c55d.chunk.js","b2e5bbc3b1799616af24ea0d1aa90840"],["/static/js/main.f8b66da6.js","684888f1c7cd9e82b6a1a0e4432799eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});