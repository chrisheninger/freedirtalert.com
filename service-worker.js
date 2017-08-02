"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","949a99d6b5ad18b9e13ae3c58b6fccb6"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.88294962.chunk.js","5bf880dd04acd3665132632b2751b4c8"],["/static/js/1.6b244419.chunk.js","f81ae7768cbfdc2bd2e8ec97dee171ab"],["/static/js/10.edcd6771.chunk.js","eee947321778efb8c399ad9c96774daf"],["/static/js/11.1bae824d.chunk.js","24ed1628e04f9c1fb331dd7d5c031642"],["/static/js/12.74fa2647.chunk.js","240c38a7b2b80214572b4984e8f4f79e"],["/static/js/13.66a2ebc0.chunk.js","513f5d18a2d3cebea813ff748a795a71"],["/static/js/14.72d758e7.chunk.js","7654fb98cc84934d0a4852aafb4e5763"],["/static/js/15.c7b1a8df.chunk.js","02d8412a60d47b868c33551b9032bb7a"],["/static/js/16.f9df136a.chunk.js","5c886ec792af5493c5aa3cfd21b1c841"],["/static/js/17.29cb3304.chunk.js","14b6cd48d9a31c6959f158f71c68819d"],["/static/js/18.5f0d695e.chunk.js","9ecec6b7d1bb7c5ee92b3f819401425f"],["/static/js/19.57bd64f3.chunk.js","b1c8443beeaffe4c7fe2b6dd013ddd03"],["/static/js/2.7272f63d.chunk.js","bd19ff5544c5e759836ecd682fba6dd2"],["/static/js/20.346eea82.chunk.js","c3371f442b7ac5b54616860d58b2a038"],["/static/js/21.cf6c8fa6.chunk.js","53b8822ae681028cf3d17b2ca82ceef1"],["/static/js/22.ea94e63c.chunk.js","c82ef3fe1a2734c417575539673bd66f"],["/static/js/3.6e54152a.chunk.js","3fff4b541b1a89ad52ab09f70776b544"],["/static/js/4.88201745.chunk.js","2a26b333af03111a4e586faabba5c07c"],["/static/js/5.33928c83.chunk.js","f37dbf3eec33734a1f551aefb9b47b4b"],["/static/js/6.58527f68.chunk.js","7f5a8228f4ada74d431361f1769b5e4f"],["/static/js/7.9a434cad.chunk.js","8e97f427afc5abead8bb69aca415737e"],["/static/js/8.c3870345.chunk.js","eefd59bc72ee70e1b6a627f65048ad1b"],["/static/js/9.1e4ab437.chunk.js","ae6489d441cf68ee6934c15c90095e33"],["/static/js/main.7679e0bd.js","065d769bee3979d9dbab9ce41bb6145b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});