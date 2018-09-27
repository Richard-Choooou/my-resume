!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!w[e]||!m[e])return;for(var r in m[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--v&&0===g&&D()}(e,r),n&&n(e,r)};var r,t=!0,o="b80ae938a1de4c01a41c",c=1e4,i={},d=[],a=[];function l(e){var n=P[e];if(!n)return A;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),A(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var c in A)Object.prototype.hasOwnProperty.call(A,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===u&&p("prepare"),g++,A.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===u&&(b[e]||E(e),0===g&&0===v&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),A.t(e,-2&n)},t}var s=[],u="idle";function p(e){u=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var f,h,y,v=0,g=0,b={},m={},w={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=A.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;m={},b={},w=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return E(0),"prepare"===u&&0===g&&0===v&&D(),n})}function E(e){w[e]?(m[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=A.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):b[e]=!0}function D(){p("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return j(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(O(r));e.resolve(n)}}function j(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,c,a,l;function s(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=P[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],s=P[l];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([l]),moduleId:c,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[c]?(r[l]||(r[l]=[]),f(r[l],[c])):(delete r[l],n.push(l),t.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var v={},g=[],b={},m=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var E;l=O(_);var D=!1,j=!1,x=!1,H="";switch((E=h[_]?s(l):{type:"disposed",moduleId:_}).chain&&(H="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+E.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(E),n.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(E),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(E),x=!0;break;default:throw new Error("Unexception type "+E.type)}if(D)return p("abort"),Promise.reject(D);if(j)for(l in b[l]=h[l],f(g,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,l)&&(v[l]||(v[l]=[]),f(v[l],E.outdatedDependencies[l]));x&&(f(g,[E.moduleId]),b[l]=m)}var k,I=[];for(t=0;t<g.length;t++)l=g[t],P[l]&&P[l].hot._selfAccepted&&I.push({module:l,errorHandler:P[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,S,U=g.slice();U.length>0;)if(l=U.pop(),a=P[l]){var q={},L=a.hot._disposeHandlers;for(c=0;c<L.length;c++)(r=L[c])(q);for(i[l]=q,a.hot.active=!1,delete P[l],delete v[l],c=0;c<a.children.length;c++){var T=P[a.children[c]];T&&((k=T.parents.indexOf(l))>=0&&T.parents.splice(k,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=P[l]))for(S=v[l],c=0;c<S.length;c++)M=S[c],(k=a.children.indexOf(M))>=0&&a.children.splice(k,1);for(l in p("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var R=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=P[l])){S=v[l];var C=[];for(t=0;t<S.length;t++)if(M=S[t],r=a.hot._acceptedDependencies[M]){if(-1!==C.indexOf(r))continue;C.push(r)}for(t=0;t<C.length;t++){r=C[t];try{r(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[t],error:e}),n.ignoreErrored||R||(R=e)}}}for(t=0;t<I.length;t++){var N=I[t];l=N.module,d=[l];try{A(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||R||(R=r),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||R||(R=e)}}return R?(p("fail"),Promise.reject(R)):(p("idle"),new Promise(function(e){e(g)}))}var P={};function A(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:j,status:function(e){if(!e)return u;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,l(n)),t.l=!0,t.exports}A.m=e,A.c=P,A.d=function(e,n,r){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)A.d(r,t,function(n){return e[n]}.bind(null,t));return r},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/",A.h=function(){return o},l(0)(A.s=0)}([function(e,n,r){"use strict";r.r(n);let t=new(r(0).default)("container");document.getElementById("add").addEventListener("click",function(){t.addArea({width:100,height:60,rotate:0,x:100,y:100,left:20,top:20,background:"#2aa7ff",opacity:.7})}),clear.addEventListener("click",function(){t.removeAllArea()}),getAllAreas.addEventListener("click",function(){console.log(t.getAllAreas())}),getAllAreasInfo.addEventListener("click",function(){const e=t.getAllAreasInfo();console.log(e),console.log("left 百分比",e[0].leftProportion),console.log("top 百分比",e[0].topProportion),console.log("width 百分比",e[0].widthProportion),console.log("height 百分比",e[0].heightProportion)}),t.on("areaDbClick",function(e){console.log(e)}),console.log(t)}]);