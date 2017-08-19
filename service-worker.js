"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3004b708dd51e37a340d90cf1122f45b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.07206056.chunk.js","6477c2abbfe58f6a26071009c4546e0d"],["/static/js/1.eefe1f12.chunk.js","4a37b683c55990913e398652ac95f363"],["/static/js/10.22faac15.chunk.js","d1c56003cd342ea27bbab54b45bf5d45"],["/static/js/11.c27bf03b.chunk.js","3e17e86c38e620fa4eee49654ef331e7"],["/static/js/12.a27e3682.chunk.js","14d72940d876b38c0f4e9b75563c5468"],["/static/js/13.b17c911a.chunk.js","6413f4686bc512eaef276b40187a7a27"],["/static/js/14.7b30530b.chunk.js","7ec2e3bb0e47f2e55beca5ed7fa53267"],["/static/js/15.f40183eb.chunk.js","f9ba5a4b53af292519948eb56e67d515"],["/static/js/16.6f4f6cd1.chunk.js","cc7a330ea7a2c161c704ae597c22b3c1"],["/static/js/17.e172296b.chunk.js","f07303025ee2d8458871aa20d22e0b83"],["/static/js/18.f366de42.chunk.js","8559f5b045796c9220d0298f35c97f9a"],["/static/js/19.90912c86.chunk.js","97dd0db7b47928a658bea434f7884b47"],["/static/js/2.927afd12.chunk.js","69ed5d36ec0faa58696713f9129e3917"],["/static/js/20.33dcafbf.chunk.js","3a5fe29563abba6c1a6618bc2d31b282"],["/static/js/21.29a56609.chunk.js","e9efae588ac50be0ede335c4b643bc6f"],["/static/js/22.7bad755f.chunk.js","74d76556be59aa47d2112e94c7f0c390"],["/static/js/3.af5b6092.chunk.js","817f9bf1c5d2897cb30d794dba9c3295"],["/static/js/4.defb7373.chunk.js","f35421af8ce648031eaf53daa2a7e018"],["/static/js/5.03de40b0.chunk.js","1d3e61003b3276d0e3c24aa0e6ca634b"],["/static/js/6.9b8f9d31.chunk.js","423be2b39b72d07f6f3a508403064876"],["/static/js/7.81d9bef0.chunk.js","91a39cf600ede8e513a03c3ff6015a21"],["/static/js/8.45e74525.chunk.js","e48320c5f1adfb9cdf6e6b44472b035d"],["/static/js/9.70f47b2d.chunk.js","eff6c47d2822a54a61568cfc7ce1ff76"],["/static/js/main.1761682d.js","15c70dfe2e68976d56b7d8c6f47d8b65"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});