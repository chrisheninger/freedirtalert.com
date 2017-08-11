"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f90e9b70459a7f29bb9a1f8522581801"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.53f623fb.chunk.js","da39d3839685f14aff552165837e6cb7"],["/static/js/1.824887df.chunk.js","2bdadb118c59b270af64f8e74962850f"],["/static/js/10.3568cf5d.chunk.js","71f2415eb7b215996be659b4f5561f5d"],["/static/js/11.8da48aed.chunk.js","f2cacf93a51fd051251f74d4b286f8a1"],["/static/js/12.ac51fc05.chunk.js","5cb1778bcad220084ee6d6513a153476"],["/static/js/13.7615d28f.chunk.js","30509a6ae3ab8a7df21a0331887cd2d5"],["/static/js/14.3680f302.chunk.js","1c9b7ec83d247e6b4c8896717d593ae3"],["/static/js/15.639f4796.chunk.js","a30d6eeff1c62e1d0af63bcb866efe45"],["/static/js/16.07ee17d9.chunk.js","787e667c3c8fb834fea8328185004120"],["/static/js/17.ea34be28.chunk.js","953fef44d82805adfa92376ae31d06a7"],["/static/js/18.803de8b5.chunk.js","e0fcfb6a8032b6d7c07f6061e0254f20"],["/static/js/19.d31b9a14.chunk.js","63cf9399ac6495ff7f3c689f49ec2b51"],["/static/js/2.543cce87.chunk.js","ffce8e4f11faee8e99a996495026ede9"],["/static/js/20.b857651b.chunk.js","264d8007ba3601c73a0b7113bde0f05e"],["/static/js/21.552b8398.chunk.js","8949b4fff2c994978bd1f9c9ef7a9649"],["/static/js/22.b010f5da.chunk.js","c73665441b096ed88baa0aa4101f7d91"],["/static/js/3.31854a3c.chunk.js","e90381cbe659f5515f9d596cd9f3c3ff"],["/static/js/4.8d603f0f.chunk.js","f80ce05db19b2e2f4f5d4357c0345077"],["/static/js/5.e3a29271.chunk.js","eed0d4eff5063ee7289b3fb842fc3447"],["/static/js/6.b2466a80.chunk.js","b4c08d76c1f29059cadd6c9f3e27424c"],["/static/js/7.c967b44a.chunk.js","a8f9ee1fc0a3d74306c58ad3535192d1"],["/static/js/8.27d0c293.chunk.js","870d2b837c33c7f11e72e0a6128f7008"],["/static/js/9.391bc52b.chunk.js","92a8ce5f41bdfc294293a15aee5e27e0"],["/static/js/main.9737d1f6.js","b143b2decdfde23525dfaf0f4b074896"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});