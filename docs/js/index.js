!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!v[e]||!b[e])return;for(var r in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(f[r]=n[r]);0==--m&&0===y&&O()}(e,r),n&&n(e,r)};var r,t=!0,o="84ec2a11e45924a2a151",i={},l=[],a=[];function c(e){var n=x[e];if(!n)return P;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(l=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),l=[]),P(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===s&&u("prepare"),y++,P.e(e).then(n,(function(e){throw n(),e}));function n(){y--,"prepare"===s&&(g[e]||j(e),0===y&&0===m&&O())}},t.t=function(e,n){return 1&n&&(e=t(e)),P.t(e,-2&n)},t}function d(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":(f={})[n]=e[n],u("ready");break;case"ready":D(n);break;case"prepare":case"check":case"dispose":case"apply":(w=w||[]).push(n)}},check:B,apply:_,status:function(e){if(!e)return s;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:i[n]};return r=void 0,t}var p=[],s="idle";function u(e){s=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,f,E,w,m=0,y=0,g={},b={},v={};function A(e){return+e+""===e?+e:e}function B(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return t=e,u("check"),(n=1e4,n=n||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}}))).then((function(e){if(!e)return u(k()?"ready":"idle"),null;b={},g={},v=e.c,E=e.h,u("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));f={};return j(0),"prepare"===s&&0===y&&0===m&&O(),n}));var n}function j(e){v[e]?(b[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function O(){u("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then((function(){return _(t)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&n.push(A(r));e.resolve(n)}}function _(n){if("ready"!==s)throw new Error("apply() is only allowed in ready status");return function n(t){var a,c,d,p,s;function h(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,l=o.chain;if((p=x[i])&&(!p.hot._selfAccepted||p.hot._selfInvalidated)){if(p.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(p.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var a=0;a<p.parents.length;a++){var c=p.parents[a],d=x[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([c]),moduleId:i,parentId:c};-1===n.indexOf(c)&&(d.hot._acceptedDependencies[i]?(r[c]||(r[c]=[]),m(r[c],[i])):(delete r[c],n.push(c),t.push({chain:l.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function m(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}k();var y={},g=[],b={},B=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var j in f)if(Object.prototype.hasOwnProperty.call(f,j)){var O;s=A(j),O=f[j]?h(s):{type:"disposed",moduleId:j};var _=!1,D=!1,H=!1,I="";switch(O.chain&&(I="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(O),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),H=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return u("abort"),Promise.reject(_);if(D)for(s in b[s]=f[s],m(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(y[s]||(y[s]=[]),m(y[s],O.outdatedDependencies[s]));H&&(m(g,[O.moduleId]),b[s]=B)}var C,F=[];for(c=0;c<g.length;c++)s=g[c],x[s]&&x[s].hot._selfAccepted&&b[s]!==B&&!x[s].hot._selfInvalidated&&F.push({module:s,parents:x[s].parents.slice(),errorHandler:x[s].hot._selfAccepted});u("dispose"),Object.keys(v).forEach((function(e){!1===v[e]&&function(e){delete installedChunks[e]}(e)}));var M,z,q=g.slice();for(;q.length>0;)if(s=q.pop(),p=x[s]){var R={},S=p.hot._disposeHandlers;for(d=0;d<S.length;d++)(a=S[d])(R);for(i[s]=R,p.hot.active=!1,delete x[s],delete y[s],d=0;d<p.children.length;d++){var U=x[p.children[d]];U&&((C=U.parents.indexOf(s))>=0&&U.parents.splice(C,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(p=x[s]))for(z=y[s],d=0;d<z.length;d++)M=z[d],(C=p.children.indexOf(M))>=0&&p.children.splice(C,1);u("apply"),void 0!==E&&(o=E,E=void 0);for(s in f=void 0,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var T=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(p=x[s])){z=y[s];var N=[];for(c=0;c<z.length;c++)if(M=z[c],a=p.hot._acceptedDependencies[M]){if(-1!==N.indexOf(a))continue;N.push(a)}for(c=0;c<N.length;c++){a=N[c];try{a(z)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:z[c],error:e}),t.ignoreErrored||T||(T=e)}}}for(c=0;c<F.length;c++){var G=F[c];s=G.module,l=G.parents,r=s;try{P(s)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||T||(T=e)}}if(T)return u("fail"),Promise.reject(T);if(w)return n(t).then((function(e){return g.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return u("idle"),new Promise((function(e){e(g)}))}(n=n||{})}function k(){if(w)return f||(f={}),w.forEach(D),w=void 0,!0}function D(n){Object.prototype.hasOwnProperty.call(f,n)||(f[n]=e[n])}var x={};function P(n){if(x[n])return x[n].exports;var r=x[n]={i:n,l:!1,exports:{},hot:d(n),parents:(a=l,l=[],a),children:[]};return e[n].call(r.exports,r,r.exports,c(n)),r.l=!0,r.exports}P.m=e,P.c=x,P.d=function(e,n,r){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(P.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)P.d(r,t,function(n){return e[n]}.bind(null,t));return r},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="./",P.h=function(){return o},c(1)(P.s=1)}([function(e,n){e.exports='<h1 id="-">个人信息</h1>\n<ul>\n<li>周鹏 / 男 / 1995</li>\n<li>专科 / 湖南信息职业技术学院（软件技术专业）</li>\n<li>工作年限：5年</li>\n<li>在线简历(gitpage): <a href="http://www.zhouziwu.com">http://www.zhouziwu.com</a></li>\n<li>技术博客(gitpage)：<a href="http://www.zpblogs.com/myBlogs/">http://www.zpblogs.com/myBlogs/</a></li>\n<li>Github: <a href="https://github.com/Richard-Choooou">https://github.com/Richard-Choooou</a></li>\n</ul>\n<hr>\n<h1 id="-">联系方式</h1>\n<ul>\n<li>电话：13120665335</li>\n<li>Email: <a href="mailto:2264746084@qq.com">2264746084@qq.com</a></li>\n<li>微信：13120665335（周子物）</li>\n</ul>\n<hr>\n<h1 id="-">个人简介</h1>\n<ul>\n<li>5年前端开发经验，熟悉 React、Vue2 技术栈。</li>\n<li>了解 android 开发，并有实际项目经验。</li>\n<li>目前从事 python 后端开发。</li>\n</ul>\n<hr>\n<h1 id="-">工作经历</h1>\n<h2 id="-2018-8-3-5-">武汉小果科技有限公司 2018年8月 - 至今【3.5年】</h2>\n<ul>\n<li><p>零售组前端组长 2018年8月 - 2021年8月 </p>\n<p>  负责组员编码指导，项目核心功能编写，以及难点攻坚等，推动了公司从<strong>后端模版渲染</strong>到<strong>前后端分离</strong>开发模式的转换，落地了 <strong>vue</strong>、<strong>react</strong>、<strong>typescript</strong>、<strong>flutter</strong> 等技术的应用。</p>\n</li>\n<li><p>批发组后端开发 2021年9月 - 至今</p>\n</li>\n</ul>\n<h2 id="-2016-9-2018-8-2-">上海六感科技有限公司 2016年9月-2018年8月【2年】</h2>\n<hr>\n<h1 id="-">项目经历</h1>\n<h2 id="-">武汉小果科技有限公司</h2>\n<h3 id="-">森果零售收银台</h3>\n<p>称重收银系统，实现商品选取、称重收银、打印、订单管理等功能。早期使用 flutter 进行开发，后期因兼容 windows 平台，重构为 web 开发，并使用 hybrid 技术实现跨平台。</p>\n<h4 id="-">技术选型</h4>\n<ul>\n<li>react</li>\n<li>typescript</li>\n<li>jss （css in js）</li>\n<li>mobx</li>\n<li>electron</li>\n<li>android(java 语言)</li>\n</ul>\n<h4 id="-">技术细节</h4>\n<ul>\n<li>使用 hybird 技术，使之跨 android、windows 以及 linux 平台运行</li>\n<li>编写 js-bridge 实现 web 与原生平台通信，详见<a href="https://www.zpblogs.com/myBlogs/2021/02/07/%E6%A3%AE%E6%9E%9C%E6%94%B6%E9%93%B6%E5%8F%B0jsbridge%E8%AE%BE%E8%AE%A1">森果收银台jsbridge设计</a></li>\n<li>使用串口通信实现通讯称重量读取，详见<a href="https://www.zpblogs.com/myBlogs/2021/01/20/%E9%80%9A%E8%AE%AF%E7%A7%B0%E5%AF%B9%E6%8E%A5%E6%96%87%E6%A1%A3/">森果收银台-通讯称对接文档</a></li>\n<li>使用 usb 通信实现打印功能，详见<a href="https://www.zpblogs.com/myBlogs/2021/01/22/%E6%A3%AE%E6%9E%9C%E6%94%B6%E9%93%B6%E5%8F%B0-%E6%89%93%E5%8D%B0%E6%9C%BA%E5%AF%B9%E6%8E%A5%E6%96%87%E6%A1%A3/">森果收银台-打印机对接文档</a></li>\n<li>编写 nodejs 原生扩展，详见<a href="https://www.zpblogs.com/myBlogs/2020/06/27/%E4%BD%BF%E7%94%A8-c-%E8%B0%83%E7%94%A8-windows-%E6%89%93%E5%8D%B0-api-%E8%BF%9B%E8%A1%8C%E6%89%93%E5%8D%B0/">使用c++调用 windows打印 api 进行打印</a></li>\n<li>设计主副屏通信，展示更丰富订单信息，详见<a href="https://www.zpblogs.com/myBlogs/2021/08/20/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E5%89%AF%E5%B1%8F%E9%80%9A%E4%BF%A1%E8%AE%BE%E8%AE%A1/">森果零售收银台主副屏通信设计</a></li>\n<li>使用面向对象将收银台整体抽象成类，并使用 mobx 进行状态管理，详见<a href="https://www.zpblogs.com/myBlogs/2021/08/23/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1">森果收银台面向对象设计</a></li>\n<li>使用职责链模式，优化订单结算流程，详见<a href="https://www.zpblogs.com/myBlogs/2021/08/27/%E6%A3%AE%E6%9E%9C%E9%9B%B6%E5%94%AE%E6%94%B6%E9%93%B6%E5%8F%B0%E7%BB%93%E7%AE%97%E6%B5%81%E7%A8%8B%E4%B8%8E%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F/">森果零售收银台结算流程与职责链模式</a></li>\n</ul>\n<h3 id="-">森果用户反馈系统</h3>\n<p>用于管理客户在使用森果各个系统时提交的 bug 反馈以及功能建议等信息。</p>\n<h4 id="-">技术选型</h4>\n<ul>\n<li>tornado(python)</li>\n<li>vue2 (pc端)</li>\n<li>react + typescript (移动端)</li>\n</ul>\n<h4 id="-">技术细节</h4>\n<ul>\n<li>编写反馈表单插件，集成到各个子系统。</li>\n<li>与 tower（项目管理工具）打通，进行联动。 </li>\n</ul>\n<h3 id="-app-">森果 app 管理平台</h3>\n<p>一个自发项目，用于管理森果各个app，实现版本管理，更新描述，统一下载地址等功能。</p>\n<h4 id="-">技术选型</h4>\n<ul>\n<li>midway(nodejs)</li>\n</ul>\n<h4 id="-">技术细节</h4>\n<p>后端进行模版渲染，但为之编写了一套 webpack 多页面脚手架工具，以提升开发效率。</p>\n<h3 id="-">其它</h3>\n<ul>\n<li>森果零售通（react、typescript）</li>\n<li>森果采购配货系统（vue2）</li>\n</ul>\n<h2 id="-">上海六感科技有限公司</h2>\n<p>主要使用 vue2 以及 jquery 进行开发，细节略过。</p>\n<ul>\n<li>五菱E100 web商城</li>\n<li>五菱E100-CRM系统</li>\n<li>华为人机功效评估系统</li>\n</ul>\n<hr>\n<h1 id="-">开源项目</h1>\n<h2 id="-">图片压缩跨平台客户端工具</h2>\n<p>基于electron react开发</p>\n<p>地址<a href="https://github.com/Richard-Choooou/image-compress">https://github.com/Richard-Choooou/image-compress</a></p>\n<h2 id="npm-">NPM库</h2>\n<h3 id="webpack-markdown-pdf-plugin">webpack-markdown-pdf-plugin</h3>\n<p>一个将markdown文件转换为pdf的webpack plugin</p>\n<p>地址<a href="https://www.npmjs.com/package/webpack-markdown-pdf-plugin">https://www.npmjs.com/package/webpack-markdown-pdf-plugin</a></p>\n<h3 id="best-calendar">best-calendar</h3>\n<p>一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历</p>\n<p>地址<a href="https://www.npmjs.com/package/best-calendar">https://www.npmjs.com/package/best-calendar</a></p>\n'},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t);$("#markdownContainer").html(o.a)}]);