"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4c855b055bdd92d86043eb5fac34226b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.940f6a32.chunk.js","3fe393b4ae172415cb4c21e2544ff329"],["/static/js/1.3fb7ec29.chunk.js","14f81105c946f308c428f0ad07850139"],["/static/js/10.bd4cb1d2.chunk.js","52770ed58131836a03cb7100e4de04ed"],["/static/js/11.b28955db.chunk.js","dd82312b911e22f8723a46f66e99404c"],["/static/js/12.111a75d4.chunk.js","9c3e55011c865a2b67767ecf557e9a72"],["/static/js/13.27f820a8.chunk.js","1714b593156c4b11d45dd76cd819201d"],["/static/js/14.9ae8032f.chunk.js","4a6d05f3ffaad7e021e281827958fff8"],["/static/js/15.eef10d72.chunk.js","d77e9daa858f8d53fc66c30ca47328b4"],["/static/js/16.73e2cae1.chunk.js","34e64ce6536eb799e7d1b408f0a677fe"],["/static/js/17.69b34310.chunk.js","11f3e81cbca2ed0d78c82cf8595f830e"],["/static/js/18.1697d33d.chunk.js","5bbc15a35c05dc52f185bc5dbaad7702"],["/static/js/19.57c38a27.chunk.js","a3067005bbee35c6775e9e631cf1f95b"],["/static/js/2.9ad9e2ec.chunk.js","2e4cac7e42490da9f7f2eb287f8147c6"],["/static/js/20.a222f004.chunk.js","b19c123489d7652d3b6e1466eb32cfcf"],["/static/js/21.4ca7e711.chunk.js","1edf33422866c978bfa5e5e8875bb7f9"],["/static/js/22.f6110026.chunk.js","f395939faf8798b6165c04e3051ea332"],["/static/js/3.1b0d3eef.chunk.js","6225c73b4f93f06744ca0ff890e83518"],["/static/js/4.325a57e2.chunk.js","3d527ed0ad2187267bc03a2acd91eb3d"],["/static/js/5.e775a012.chunk.js","51542e176dc0665b527085bca1f2a5b1"],["/static/js/6.cbe07111.chunk.js","6972e391f9be3c87a699ab4e136e04e6"],["/static/js/7.955bd9e5.chunk.js","f5bd31cd4edf713943a5ff0d8b8a16fd"],["/static/js/8.dbacd6e4.chunk.js","b60188cb0ce2d0f4c2cb7843bfbb1b50"],["/static/js/9.3b0c2cc5.chunk.js","a934d6b0cdb9de2d3dccaf28bb21db94"],["/static/js/main.a2efa396.js","9026db524305faee6b9e181a18939b25"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});