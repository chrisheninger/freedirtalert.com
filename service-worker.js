"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8b797404d06333bf67d34793c8fb0c09"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.821fd4a5.chunk.js","ec666bbc81b1a4777664ebe1a2b83464"],["/static/js/1.804417fc.chunk.js","c515c6080038a051344ce15a49146333"],["/static/js/10.2547747c.chunk.js","671f4aef1ed564a62e8efaf8776ab509"],["/static/js/11.8260326d.chunk.js","03204622de8fedaa9a3f9448abfb604e"],["/static/js/12.7c2c7b74.chunk.js","a12c92e0c979782c822cd3d59a5397cb"],["/static/js/13.773b0966.chunk.js","12f3bc4028942bea70eee93fef9c5d06"],["/static/js/14.680f8e91.chunk.js","e0c6ba61bf4d21fdd3a02e2411eb2822"],["/static/js/15.b1d48e6f.chunk.js","dee1653a26921fdd10fcb754ee64368d"],["/static/js/16.c3b0017e.chunk.js","33a327bf90ee5f37871e4966b44606cd"],["/static/js/17.51a083b7.chunk.js","207a80e59dcf698e951bb2071a34dd33"],["/static/js/18.300d460a.chunk.js","40f0d7fa3bc622cb98a3416fed84e3a9"],["/static/js/19.638d2fef.chunk.js","18bc70468abd0157df9a9782a0184f19"],["/static/js/2.557769df.chunk.js","bf5f58154037f96d9426b48d43050ce8"],["/static/js/20.857a4520.chunk.js","7c83d7df6bed2be3aa4d3c0e244f33c4"],["/static/js/21.189294fe.chunk.js","c139a6f8335d164b9c353f0766bcc885"],["/static/js/22.9697ef5e.chunk.js","f87ebaca156088f2b643880ddde80dd1"],["/static/js/3.bb009f8a.chunk.js","13095ad741ecf4cc3ecc553d6c08d037"],["/static/js/4.84c4b629.chunk.js","6d5f3d563c7c9f004fa9ed88bb6a8c92"],["/static/js/5.6fefc83c.chunk.js","c1c786a19068e2e5f1bf0b502101a0d2"],["/static/js/6.8c11de3d.chunk.js","f128d93ec86f8f0fad02b4e4a1d2811c"],["/static/js/7.d902ba95.chunk.js","e5f4c515ce38a0c9d7bd36fd509c25ac"],["/static/js/8.6857d779.chunk.js","6fbd05e99e0aa0913189ba0d3d810e5b"],["/static/js/9.0ce9ee36.chunk.js","0d827bfd36e73dc9588ca815e30758df"],["/static/js/main.5d09c16c.js","0ab73d3992fcfa0daff65e110c6b36b7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});