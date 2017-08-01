"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d4763fdc174cdbcebc6bdbc915a734dc"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.4706ed18.chunk.js","4995804b557d5858b8b0782cc2be608b"],["/static/js/1.4a8306d8.chunk.js","285e2234b48e38795a32528d36980947"],["/static/js/10.8825f951.chunk.js","4c046662baead359491323e6cf4dd035"],["/static/js/11.5f79a866.chunk.js","f3a296187ab44dfe4ad62351fed58e4d"],["/static/js/12.3a3fe241.chunk.js","fbf1a26f7837c15dbbeac807952fa6bf"],["/static/js/13.a8a2b766.chunk.js","ff45d7fecc0de14d4c3a713b25a0a563"],["/static/js/14.d6e5f8c8.chunk.js","b54b555319414cd6ef30f48390efc608"],["/static/js/15.a0407165.chunk.js","cf057b081cdb5f683aca758bc579ac1d"],["/static/js/16.86ac425e.chunk.js","8fb7aa2809aa638d5a540c99ce495ea2"],["/static/js/17.95133059.chunk.js","5127619c60c8ffa716fa9d523ae2e5d7"],["/static/js/18.805fb2c3.chunk.js","00da1fbc19c9cc10a5c8608f8f47dd4f"],["/static/js/19.ad56b8f8.chunk.js","60e3088d9421d6061d1e5cbd2031d13d"],["/static/js/2.95a9e219.chunk.js","5eceba2059ba477acb629ba3e5a6c4e2"],["/static/js/20.326276af.chunk.js","ee5772b72e4bb504f0a93127814e4ff8"],["/static/js/21.a71bee28.chunk.js","9e06fd91c30345a17f1a346972bfc7d5"],["/static/js/22.ca3575b6.chunk.js","cf5ec2fe2117d5d86cd090dabb6ff0f2"],["/static/js/3.1abb264f.chunk.js","7943ccad90845d7d5d12249ba2563a03"],["/static/js/4.b5f1f049.chunk.js","8e02a3e1a688fbab63b24f46d60f21a7"],["/static/js/5.f083af5d.chunk.js","16aa3b7194b6d14ff5c7ee902e9ac9d4"],["/static/js/6.63b20a85.chunk.js","bcc5226795e172241d5d9560d4050bc5"],["/static/js/7.cf5b82f3.chunk.js","429fd626ec0ab2de7111dd37198fc1dc"],["/static/js/8.4064c040.chunk.js","4f6dd01916332e8e37f5178bddf3f11b"],["/static/js/9.f736eacb.chunk.js","e58db4d5a72081021563e3b11d474d37"],["/static/js/main.39b0ea26.js","d542905f8637716fcf5b6a13e6d71d4e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});