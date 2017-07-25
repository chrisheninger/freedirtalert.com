"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3497c567640e1801ec2ff0e2a91acafa"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.2c96324d.chunk.js","d4491a3dc390b16f4ea3fa38d7abf184"],["/static/js/1.164f9777.chunk.js","50e90198edc7a5bbc0ae4f439778292f"],["/static/js/10.7de7bca4.chunk.js","9f0ffcd28ac2c5a6b8a71c551af822c3"],["/static/js/11.b68d6f6f.chunk.js","29653aad52c6cc21d3f2420445a75b8d"],["/static/js/12.55dff3b0.chunk.js","27a753c527cbe751d75589f62ceaae12"],["/static/js/13.128853f0.chunk.js","748faec1da1eae4aa48dd89b0d5cf92a"],["/static/js/14.d35da21e.chunk.js","f5c628bbeac29c89d43464c8318b869d"],["/static/js/15.c99c6f24.chunk.js","4dbe11ad298de323d86555648d6a735d"],["/static/js/16.38df312a.chunk.js","818365a213622dc6ac0e4ef9547c7470"],["/static/js/17.d04ad224.chunk.js","01ae2357bbea3af8e50af25dad09f430"],["/static/js/18.508debfc.chunk.js","394647da03a4dd5ab39022d882aa4234"],["/static/js/19.ab870a0f.chunk.js","3bc4cd58e98b1e14d7d23878348dec19"],["/static/js/2.d903a1db.chunk.js","966969994c17bcbf524b5570336f8b32"],["/static/js/20.b60134cc.chunk.js","2572cb66b176bc9e677e00c9b1c4422d"],["/static/js/21.24583af9.chunk.js","fad63e4bddeb45bf9592d0116041cef8"],["/static/js/22.7865f3c3.chunk.js","9cab60262a80d812d9f92a2d06d5a9d0"],["/static/js/3.0bf1d163.chunk.js","4c8723afbe011232d9e48bd98b44d7dc"],["/static/js/4.9dbd5cc0.chunk.js","186bb961e793d86eda17aec19ae06f17"],["/static/js/5.e6a4232b.chunk.js","898346bd8f1533b5ba687e99dba5c5f1"],["/static/js/6.9b2abfc3.chunk.js","907533e85856bfd085cf414405b492ae"],["/static/js/7.f73c26db.chunk.js","692359e3417efbffdd5b1a6384107328"],["/static/js/8.6b917513.chunk.js","54cf784c17f5959617047a0275c7d94a"],["/static/js/9.27d119e2.chunk.js","9122acf83215003f94e1325ae2db3c65"],["/static/js/main.b0533f03.js","f73901cb716dfce275a0119cd904c8d2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});