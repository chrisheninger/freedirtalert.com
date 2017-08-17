"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","36bcdd5a4120a2909f2b17c1785a2e4b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.76d0fab9.chunk.js","01e6e40b3ca26eca6d33527e53868dac"],["/static/js/1.2c5fbcfc.chunk.js","e06d653d18e2136cf77d32e1a7438f2e"],["/static/js/10.b07371b2.chunk.js","84bfdbcdd5b80af5a7e9f687fcdbfb34"],["/static/js/11.e6c88ecb.chunk.js","f18f05fc98cdf5be8ea4c770908638f8"],["/static/js/12.42fec944.chunk.js","8cca99ccdc0730a96530bd50e8f72d63"],["/static/js/13.82b3de0a.chunk.js","ab3340b9e6323768871a8dd91255b12e"],["/static/js/14.abf48b59.chunk.js","7cf0aeae3825bc7a58ae3772450c2266"],["/static/js/15.0f76ec23.chunk.js","65c039f8b04b14deb4bb526ea08bad2a"],["/static/js/16.db88d708.chunk.js","ea48d10111e7f406bb0a1acdc8536e91"],["/static/js/17.d325261d.chunk.js","0096a6c80aea2f11ffc6432cb1ef5e8a"],["/static/js/18.eaacf4ac.chunk.js","2d50bfc567925b390d85f34d16241c0e"],["/static/js/19.42a7ac78.chunk.js","c78a28d96180ac85ce3c32acaee98c3c"],["/static/js/2.6f546fff.chunk.js","cd13ed102061f1caa17cde763cf23dd7"],["/static/js/20.ef844b76.chunk.js","648643461d1c17070fec3b1d99484d36"],["/static/js/21.e44971f2.chunk.js","b93fe5df08576a9f2667319e041d38c1"],["/static/js/22.1a645041.chunk.js","4a20ffa7ca2170e16dc6076d65f229e5"],["/static/js/3.9e85634c.chunk.js","e2ffe6931a23b6c617b2d6906e3ec003"],["/static/js/4.279f56c9.chunk.js","b8c8d2b9d31a70f3421b798bfa97a5e9"],["/static/js/5.64dcd413.chunk.js","f733747d945a2ddd49762a19fa386b1b"],["/static/js/6.6abf7497.chunk.js","32d9758c3b4b6032eb9d0e3736c768b8"],["/static/js/7.fffb04ff.chunk.js","4f4410ca24e645c883fca7468630085d"],["/static/js/8.eea7ecd0.chunk.js","5ac45cc2019b4c419eab79a9633f65c5"],["/static/js/9.5f8f979a.chunk.js","86b43cc8f8aeafc7c3ecda500832fc43"],["/static/js/main.49df0276.js","4a06c109011cf7faf0f11ba79374e09a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});