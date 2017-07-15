"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","65ff0f7118451ba5573d1205ebf01f04"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3cfea363.chunk.js","b884c3bb92dbfbaf318a38400bc496ff"],["/static/js/1.2a6ae652.chunk.js","2bf23d4b9d6a91f8726347826b6d9fe1"],["/static/js/10.aaeeb805.chunk.js","6b01c7da9ca8281cc0757da727006cc5"],["/static/js/11.dc8dd6f3.chunk.js","69c2d04f18de4f283a6f7be3c3217ac0"],["/static/js/12.2f1e7b19.chunk.js","1f568457738d7f80e4429f513b25708c"],["/static/js/13.618ce195.chunk.js","4e35af6174d09f981ea9f4d863a8d1ca"],["/static/js/14.74d83269.chunk.js","9e0a902b424c8f00b8226e000864a19e"],["/static/js/15.e986a975.chunk.js","c2fc571fa75a07fe623d617dfcf712b9"],["/static/js/16.e267185a.chunk.js","65512616ca2b4b16a90d4e91722ed241"],["/static/js/17.830c36ef.chunk.js","3a9049e5927f4f86546664620c2a3903"],["/static/js/18.4d060127.chunk.js","f3c8b43c445488a591cb61cc476115be"],["/static/js/19.a5d4d023.chunk.js","92cb45a7c40be0749b7c5d17eb373f4e"],["/static/js/2.fa0493dd.chunk.js","0b62eeb8a0ff8116b5a7c2f2aa40ae88"],["/static/js/20.ca8b7bc6.chunk.js","642e0118e2abacd7d536e20cafb8aa6a"],["/static/js/21.a7373d98.chunk.js","1ae68c02245226cfad4d0fc3531cab6e"],["/static/js/22.4bae3c02.chunk.js","9d3dc9f63008d3d2cd9f406a2de009fe"],["/static/js/3.c54d2179.chunk.js","ca5ac0ce689d4ec789868f711e726e39"],["/static/js/4.3c84e403.chunk.js","0e55ed859736ad34f4cec5d3d4958c73"],["/static/js/5.e0b762a2.chunk.js","4e292c5b6dc2880c818b66c8aef69414"],["/static/js/6.721f5ace.chunk.js","5738d4e640c1bb012c3b17797b5314d5"],["/static/js/7.bb46eb8a.chunk.js","597c345716dc77d41fd0cde6936c41c4"],["/static/js/8.e30b4e72.chunk.js","2c8063734da71120e137dcc98f1be7ca"],["/static/js/9.5915fb52.chunk.js","ade3a9063563302e93f5cbdacade9111"],["/static/js/main.b49035d0.js","4b3f4d38591b2b4f24a9d55bcc2a2421"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});