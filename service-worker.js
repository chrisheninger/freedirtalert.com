"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","433a86b544de81135efc0531e2c54ff5"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.94a4a742.chunk.js","8561e07f1229767a0ad3844d23fd343d"],["/static/js/1.dade94fe.chunk.js","67ae50e9c5457e6bf6df3d20bf85b69b"],["/static/js/10.0a16c02e.chunk.js","cc1bf23ed7535a933e95287fc32658da"],["/static/js/11.f427ba7b.chunk.js","1837b6dbfe085b5a1966efda96f7e5dd"],["/static/js/12.6dd184c3.chunk.js","35cbdc49416cb243bca0d895c2e49c6e"],["/static/js/13.a622bfca.chunk.js","48fb9f02bea823ed0a799f2134d626c8"],["/static/js/14.ed94f5f9.chunk.js","9f4ee874f2872f028d6577f067510f02"],["/static/js/15.7d5b7ee9.chunk.js","82cc35d582447318ccf9365f79d5eb25"],["/static/js/16.4ddc7655.chunk.js","7981f9b4adfbcd30811557477ff38629"],["/static/js/17.6e937665.chunk.js","ba266174ab0ef153b8fa2bf356b86769"],["/static/js/18.917a88af.chunk.js","061037ec08be69d93ef49563d94a6b56"],["/static/js/19.883fd225.chunk.js","ecbacbae9d02e783975420721ee10d09"],["/static/js/2.872f1857.chunk.js","5d4ffa0b6d083aa6f0bcea0e7114c5d1"],["/static/js/20.ea998d58.chunk.js","bc49a28c8446b77273f3b092e595f8e7"],["/static/js/21.5fdc7f4b.chunk.js","6f3d7d6612cbfce619f7d7dd911faca6"],["/static/js/22.4a5c1606.chunk.js","44e7c2825458dd946a5d5c7b0b2e229f"],["/static/js/3.566d25c3.chunk.js","1188c61c9d436adf60622a4dd0f9c781"],["/static/js/4.4a786653.chunk.js","0c1c16b82daf13effb78ad647ec56981"],["/static/js/5.d4481548.chunk.js","830868ba8d56794bd4c48c9c07d14612"],["/static/js/6.24043ae8.chunk.js","5e4f023a588742635d3fbe54cf209725"],["/static/js/7.353a1828.chunk.js","eaf424666ae3fcab4ea22770819bd753"],["/static/js/8.35598d82.chunk.js","5fafdca6a342ddb1c55dcd7f77660ac5"],["/static/js/9.ecddf070.chunk.js","185bd2a8ce572d137f3b5c822ed59d35"],["/static/js/main.a2c8df16.js","1b5e3beacfa46d47d713d046ebb14455"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});