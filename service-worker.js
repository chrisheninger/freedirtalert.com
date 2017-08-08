"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dcb3cf4af7a27c6c352761a8c06b13a2"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b0047e34.chunk.js","603606b2a35ac62f518177794e541819"],["/static/js/1.5770d620.chunk.js","55cb4e783486752b6d391205a31279ac"],["/static/js/10.6b530395.chunk.js","9ec12076f55159ed2a4a0104e7fa0dd3"],["/static/js/11.5a6f9e3a.chunk.js","a8f66eb3b88ef78acfb2e330a38147f6"],["/static/js/12.48beb7ba.chunk.js","29b8c5918e4ff3b2699216bf784e0674"],["/static/js/13.d03090b4.chunk.js","622230617fe61a3430740cbca165301f"],["/static/js/14.6041ece1.chunk.js","77990fdc7e22e03a707ba73bc1f34e6c"],["/static/js/15.e8bbad46.chunk.js","69506c518401fbcefff99f1cf86cff2c"],["/static/js/16.2b987677.chunk.js","0611a20756b71cf779220b7c6d33a982"],["/static/js/17.a4610379.chunk.js","865fe8a3e580566962d59e490636bfe6"],["/static/js/18.e710a1ea.chunk.js","e2055006c50c330fe9ee193f66ada186"],["/static/js/19.bfdc1d7f.chunk.js","64deea8aa7b8d80a71164d9187ca0ce6"],["/static/js/2.92a4b954.chunk.js","81413b2ce03ca774c6c30188601ea286"],["/static/js/20.8d23a0c8.chunk.js","171dd650cc6591ef834d11fb4cd0115d"],["/static/js/21.bb8e0c70.chunk.js","7c09e8fc0322310cdbc5bc31a5d7074b"],["/static/js/22.f664919c.chunk.js","ed270cf33985f162f2c7c5ee6a648e50"],["/static/js/3.47e8c068.chunk.js","b1932efd8a0fe342a4c9991a240364db"],["/static/js/4.93514545.chunk.js","9e5897d759ee96d0d84976fc1f7255d0"],["/static/js/5.ec08ea92.chunk.js","8f4487e3237a96c2b31743f985c8eff8"],["/static/js/6.43fe83b7.chunk.js","54a5b6f2ca11ec227d7132ccb3b2dbc6"],["/static/js/7.62f71ede.chunk.js","1e2799173d7dad4fad0143ed1336980f"],["/static/js/8.c8c7ebac.chunk.js","a72830df8a36400f4937636ce65a342c"],["/static/js/9.ec60802b.chunk.js","d1cd41682f800eb97242c4beb0764c8c"],["/static/js/main.247bab1c.js","839cf41c89778505b3e6d1b859e739c0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});