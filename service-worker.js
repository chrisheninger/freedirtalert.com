"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ad33bd0d1e51c8bcbfccebbe76fcea0a"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.4bb77553.chunk.js","4fca0d3e7af38feea532b1811f6013c2"],["/static/js/1.e665a575.chunk.js","638f42cec9a37bcb1c70b7e7253c96b1"],["/static/js/10.408349ce.chunk.js","caa8908d2a10e632597cb4daef87b17e"],["/static/js/11.52001f61.chunk.js","2b2807e903b87648467e49db9ba3b377"],["/static/js/12.7830dd88.chunk.js","62e6a953368a90210dbe1884360dc7b4"],["/static/js/13.d8500380.chunk.js","db6bf39c837eb823f71ce1523a692a22"],["/static/js/14.e7f224d0.chunk.js","b46f9dd79262143b74e01d5e66537995"],["/static/js/15.221c9d10.chunk.js","36b89ad0d6eb9e8deca632ace7d30a38"],["/static/js/16.c7be5679.chunk.js","18b844faee8e85c76e74a029554829b6"],["/static/js/17.cb8af082.chunk.js","d557a250f07230db17a315896727c40e"],["/static/js/18.dea2bce5.chunk.js","05cf03548f2b239a29eb39bd776e901e"],["/static/js/19.6998d758.chunk.js","70c214329eecf47f06501250169889ae"],["/static/js/2.33f10629.chunk.js","feb5d77e4731fac67365f416ffc0bff3"],["/static/js/20.cb1f3bb7.chunk.js","77519459a693887afccd83cae36c588d"],["/static/js/21.0248cb7b.chunk.js","789b6198f6d094a1b3512948a6d4379f"],["/static/js/22.6ac0acd6.chunk.js","da42be2c6066054f107a26920276aa83"],["/static/js/3.072594eb.chunk.js","034b7ecd0cb0e91c45e2ac5b32f52772"],["/static/js/4.1519d231.chunk.js","6e85b52efd62a768fa87799a4a3e05fd"],["/static/js/5.09c3f4c5.chunk.js","106c3040f34f9f10aeee1e8eb2505119"],["/static/js/6.cb2bed91.chunk.js","c4ba05f7aed25c7e9bb4b0e8b21f2059"],["/static/js/7.8c037692.chunk.js","5f2c9adc323b522ce859ca8128034822"],["/static/js/8.1363745b.chunk.js","d3998b12e648b43580c8e96aba126ef1"],["/static/js/9.0237aa2b.chunk.js","688c2b43fa08024513714f19fc57a1fe"],["/static/js/main.d303155c.js","b51bd4a19c501eed6cda023674603041"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});