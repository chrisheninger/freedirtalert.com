"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","cea8eaea2027d428456249373e17581b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.8f959ed8.chunk.js","5b44105e17b23b81837815b8aa44929f"],["/static/js/1.d41d93f7.chunk.js","3db1e7dc79ef9b45c3cfc2dae5dc7394"],["/static/js/10.a3be20d6.chunk.js","a83fe99e6e307b3d387f530ca65c7e4f"],["/static/js/11.294fcfbc.chunk.js","109e3ea3ef68d8a6ec2b6688fb77f8ff"],["/static/js/12.b0d20790.chunk.js","14f7f161e944fdc0a08d8e456a0a3966"],["/static/js/13.6a894d32.chunk.js","023b892b67e4787de61dd8a12adf9984"],["/static/js/14.5cfd5ddf.chunk.js","2d38d015317f726c3954e599282a810f"],["/static/js/15.7ea481b4.chunk.js","b3f3d0ffcff72924d69e90f9f9d55e10"],["/static/js/16.9af531cc.chunk.js","6e79b358bdeab62e9d413cb2eb70e51c"],["/static/js/17.75581ebf.chunk.js","e3b47f5c26fb65f04c87026a86ae6b9f"],["/static/js/18.e294b70a.chunk.js","9873301d6e90998e14e3e735905eda82"],["/static/js/19.76e26b7f.chunk.js","f235d0bdcdff0158be149badf739125d"],["/static/js/2.e1be6e1e.chunk.js","577374f42b0a1b30d3c89a98f96c576e"],["/static/js/20.3e68436e.chunk.js","07fc17be0168ffb635cb72ee4446b566"],["/static/js/21.009b258a.chunk.js","c86a45079930949fa44e101d1fdf547d"],["/static/js/22.d69187cb.chunk.js","60d20d45cf0cb535e68a866b00991771"],["/static/js/3.944bdf76.chunk.js","3a7dfe6dd5880a2e3b0b8b07b8b4bc17"],["/static/js/4.ee6f5935.chunk.js","0f53652f9dedfc0d057039e42acde96d"],["/static/js/5.ce61471c.chunk.js","ced7fdc7304b26f66168d219b1b84465"],["/static/js/6.9944f962.chunk.js","935175df5071d295e5dcaca1a7a0d78b"],["/static/js/7.9b187966.chunk.js","855e7f719851e3c83077d866be167b92"],["/static/js/8.65002be3.chunk.js","07995e6f0aad11bb298205b1fdbc4589"],["/static/js/9.9c50b4f1.chunk.js","01b52267d80aa2ae78da122875a390c9"],["/static/js/main.241b42be.js","e1bf9cc1f11e6048e687e7549418e9f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var c=new Request(n,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});