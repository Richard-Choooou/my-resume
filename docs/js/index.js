!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!v[e]||!b[e])return;for(var r in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(g[r]=n[r]);0==--m&&0===E&&j()}(e,r),n&&n(e,r)};var r,t=!0,o="6701f7c2ea7d025dff0c",i=1e4,a={},p=[],c=[];function s(e){var n=_[e];if(!n)return D;var t=function(t){return n.hot.active?(_[t]?-1===_[t].parents.indexOf(e)&&_[t].parents.push(e):(p=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),p=[]),D(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===u&&h("prepare"),E++,D.e(e).then(n,function(e){throw n(),e});function n(){E--,"prepare"===u&&(y[e]||k(e),0===E&&0===m&&j())}},t.t=function(e,n){return 1&n&&(e=t(e)),D.t(e,-2&n)},t}function d(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:A,apply:O,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:a[e]};return r=void 0,n}var l=[],u="idle";function h(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,g,w,m=0,E=0,y={},b={},v={};function B(e){return+e+""===e?+e:e}function A(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;b={},y={},v=e.c,w=e.h,h("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});g={};return k(0),"prepare"===u&&0===E&&0===m&&j(),n});var n}function k(e){v[e]?(b[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):y[e]=!0}function j(){h("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return O(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&n.push(B(r));e.resolve(n)}}function O(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,i,c,s;function d(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,a=o.chain;if((c=_[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var p=0;p<c.parents.length;p++){var s=c.parents[p],d=_[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(d.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),l(r[s],[i])):(delete r[s],n.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var f={},m=[],E={},y=function(){console.warn("[HMR] unexpected require("+A.moduleId+") to disposed module")};for(var b in g)if(Object.prototype.hasOwnProperty.call(g,b)){var A;s=B(b);var k=!1,j=!1,O=!1,P="";switch((A=g[b]?d(s):{type:"disposed",moduleId:b}).chain&&(P="\nUpdate propagation: "+A.chain.join(" -> ")),A.type){case"self-declined":n.onDeclined&&n.onDeclined(A),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+A.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(A),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+A.moduleId+" in "+A.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(A),n.ignoreUnaccepted||(k=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(A),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(A),O=!0;break;default:throw new Error("Unexception type "+A.type)}if(k)return h("abort"),Promise.reject(k);if(j)for(s in E[s]=g[s],l(m,A.outdatedModules),A.outdatedDependencies)Object.prototype.hasOwnProperty.call(A.outdatedDependencies,s)&&(f[s]||(f[s]=[]),l(f[s],A.outdatedDependencies[s]));O&&(l(m,[A.moduleId]),E[s]=y)}var x,C=[];for(t=0;t<m.length;t++)s=m[t],_[s]&&_[s].hot._selfAccepted&&C.push({module:s,errorHandler:_[s].hot._selfAccepted});h("dispose"),Object.keys(v).forEach(function(e){!1===v[e]&&function(e){delete installedChunks[e]}(e)});for(var H,I,M=m.slice();M.length>0;)if(s=M.pop(),c=_[s]){var R={},z=c.hot._disposeHandlers;for(i=0;i<z.length;i++)(r=z[i])(R);for(a[s]=R,c.hot.active=!1,delete _[s],delete f[s],i=0;i<c.children.length;i++){var q=_[c.children[i]];q&&((x=q.parents.indexOf(s))>=0&&q.parents.splice(x,1))}}for(s in f)if(Object.prototype.hasOwnProperty.call(f,s)&&(c=_[s]))for(I=f[s],i=0;i<I.length;i++)H=I[i],(x=c.children.indexOf(H))>=0&&c.children.splice(x,1);for(s in h("apply"),o=w,E)Object.prototype.hasOwnProperty.call(E,s)&&(e[s]=E[s]);var S=null;for(s in f)if(Object.prototype.hasOwnProperty.call(f,s)&&(c=_[s])){I=f[s];var U=[];for(t=0;t<I.length;t++)if(H=I[t],r=c.hot._acceptedDependencies[H]){if(-1!==U.indexOf(r))continue;U.push(r)}for(t=0;t<U.length;t++){r=U[t];try{r(I)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:I[t],error:e}),n.ignoreErrored||S||(S=e)}}}for(t=0;t<C.length;t++){var F=C[t];s=F.module,p=[s];try{D(s)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||S||(S=r),S||(S=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||S||(S=e)}}return S?(h("fail"),Promise.reject(S)):(h("idle"),new Promise(function(e){e(m)}))}var _={};function D(n){if(_[n])return _[n].exports;var r=_[n]={i:n,l:!1,exports:{},hot:d(n),parents:(c=p,p=[],c),children:[]};return e[n].call(r.exports,r,r.exports,s(n)),r.l=!0,r.exports}D.m=e,D.c=_,D.d=function(e,n,r){D.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,n){if(1&n&&(e=D(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(D.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)D.d(r,t,function(n){return e[n]}.bind(null,t));return r},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="./",D.h=function(){return o},s(1)(D.s=1)}([function(e,n){e.exports='<h1 id="-">个人信息</h1>\n<ul>\n<li>周鹏 / 男 / 1995</li>\n<li>专科 / 湖南信息职业技术学院（软件技术专业）</li>\n<li>工作年限：2年</li>\n<li>在线简历(gitpage): <a href="http://www.zhouziwu.com">http://www.zhouziwu.com</a></li>\n<li>技术博客(gitpage)：<a href="http://www.zpblogs.com/myBlogs/">http://www.zpblogs.com/myBlogs/</a></li>\n<li>Github: <a href="https://github.com/Richard-Choooou">https://github.com/Richard-Choooou</a></li>\n<li>期望职位：web前端中高级程序员</li>\n<li>期望薪资：税前月薪14K（武汉）16K（北上广深）</li>\n<li>当前所在城市： 武汉</li>\n<li>期望城市：武汉</li>\n</ul>\n<hr>\n<h1 id="-">联系方式</h1>\n<ul>\n<li>Email: <a href="mailto:2264746084@qq.com">2264746084@qq.com</a></li>\n<li>微信：zpIsBest（子物）</li>\n</ul>\n<hr>\n<h1 id="-">自我评价</h1>\n<p>虽然工作时间不长，但是过往的工作经历以及平时自我学习使我的技能得到了磨炼。能够独立承担起WEB前端项目的构建，熟练使用<strong>js（ES6）</strong>、<strong>css(scss)</strong>、<strong>html(5)</strong> 等基本技能进行项目开发，使用 <strong>webpack</strong> <strong>gulp</strong>等构建工具提升项目的开发效率以及性能优化。熟悉 <strong>VUE</strong> 技术栈，能够将前端项目的规范与性能再提升一个档次。同时对于其它技术栈也有探索与实践，可根据不同业务需求进行多方位的技术选型。爱好开源，有自己的开源项目，且曾经给element-ui提交过PR。</p>\n<hr>\n<h1 id="-">工作经历</h1>\n<h2 id="-2018-8-">武汉小果科技有限公司 （2018年8月 ~ 至今）</h2>\n<h3 id="-">森果采购配货系统</h3>\n<p>用于服务水果贸易交易中转站业务。有 <strong>对账中心</strong> 、 <strong>采购单</strong>、 <strong>商品库</strong>、 <strong>仓库</strong>、 <strong>供货商</strong>、 <strong>店铺</strong>以及<strong>员工</strong>等主要模块。</p>\n<p>解决了水果这个传统行业对于采购配货流程沟通效率低下，业务繁杂等问题。</p>\n<p>在此项目中，我主要负责项目构建，模块拆分，基础组件的编写，核心模块的编写。</p>\n<h3 id="-">森果微页面组件系统</h3>\n<p>一套可高度定制组件系统，客户可以使用此系统对在线商城进行定制化配置，从组件排序到组件形态均可随意定制，与有赞商城业务系统相仿。关于开发过程中的思考以及实践可以<a href="http://www.zpblogs.com/myBlogs/2018/09/15/%E6%A3%AE%E6%9E%9C%E5%BE%AE%E5%95%86%E5%9F%8E%E7%BB%84%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E6%96%B9%E6%A1%88%E5%8F%8A%E6%80%9D%E8%80%83/">点此</a>了解。</p>\n<p>在此项目中，我主要负责技术选型，工程化配置，以及难点攻坚。</p>\n<h2 id="-2016-9-2018-8-">上海六感科技有限公司 （2016年9月-2018年8月）</h2>\n<h3 id="-e100-web-">五菱E100 web商城</h3>\n<p>该系统主要服务于五菱E100系列车型以及汽车相关配件售卖，共有<strong>车商城</strong>、<strong>精品商城</strong>、<strong>购物车</strong>、<strong>个人中心</strong>等4大模块。</p>\n<p>我主要负责项目构建，性能优化，基础组件编写以及购车流程的开发。</p>\n<h3 id="-e100-crm-">五菱E100-CRM系统</h3>\n<p>E100商城的后台管理系统，用于管理门店信息、用户信息、车辆信息配置、商品信息配置、app以及web端界面管理、活动信息配置、交易流水对账，以及门店下单等功能，使用vue技术栈以及element-ui组件库开发。</p>\n<p>我主要负责项目维护以及二次开发。</p>\n<h3 id="-">华为人机功效评估系统</h3>\n<p>该系统为华为内部项目，主要用于对于微型基站安装时安装难易度，以及对于环境影响的评估，分为<strong>人机评估</strong>、<strong>环境评估</strong>、<strong>竞争分析</strong>、<strong>文档查询</strong>以及 <strong>设计反推</strong> 等模块，使用jquery完成开发。</p>\n<p>其中人机及环境评估主要功能为，根据用户输入的安装选项，后台通过算法的到评分返回给前端，前端对评分进行数据可视化展示，主要用到了eCharts库。</p>\n<p>我主要负责环境及人机评估模块的开发。</p>\n<hr>\n<h1 id="-">开源项目</h1>\n<h2 id="-">图片压缩跨平台客户端工具</h2>\n<p>基于electron react开发</p>\n<p>地址<a href="https://github.com/Richard-Choooou/image-compress">https://github.com/Richard-Choooou/image-compress</a></p>\n<h2 id="-">多玩囧图个人版（微信小程序）</h2>\n<p>线上项目，可搜索体验，平均每月1200累计访问人数。</p>\n<p>扫码体验</p>\n<p><img src="https://user-images.githubusercontent.com/23492006/50738344-d0e42c00-120d-11e9-9838-f4c583b2b27e.jpg" alt="gh_ec2f445d137e_258"></p>\n<p>地址<a href="https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp">https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp</a></p>\n<h2 id="npm-">NPM库</h2>\n<h3 id="webpack-markdown-pdf-plugin">webpack-markdown-pdf-plugin</h3>\n<p>一个将markdown文件转换为pdf的webpack plugin</p>\n<p>地址<a href="https://www.npmjs.com/package/webpack-markdown-pdf-plugin">https://www.npmjs.com/package/webpack-markdown-pdf-plugin</a></p>\n<h3 id="sticky-list-headers">sticky-list-headers</h3>\n<p>一个滚动列表导航吸顶的工具库</p>\n<p>地址<a href="https://www.npmjs.com/package/sticky-list-headers">https://www.npmjs.com/package/sticky-list-headers</a></p>\n<h3 id="best-calendar">best-calendar</h3>\n<p>一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历</p>\n<p>地址<a href="https://www.npmjs.com/package/best-calendar">https://www.npmjs.com/package/best-calendar</a></p>\n<h3 id="drag-area">drag-area</h3>\n<p>一个可拖拽定位区域的工具库，类似于淘宝后台的页面定制功能</p>\n<p>地址<a href="https://www.npmjs.com/package/drag-area">https://www.npmjs.com/package/drag-area</a></p>\n<h1 id="-">公司技术分享相关讲义</h1>\n<p>webpack配置从0到1，<a href="http://www.zpblogs.com/myBlogs/2018/10/08/%E6%A3%AE%E6%9E%9C%E5%86%85%E9%83%A8%E5%88%86%E4%BA%AB%EF%BC%9Awebpack%E9%85%8D%E7%BD%AE%E4%BB%8E0%E5%88%B01/#more">点击查看</a></p>\n<p>es6: promise与async<a href="http://www.zpblogs.com/myBlogs/2018/09/26/%E6%A3%AE%E6%9E%9C%E5%86%85%E9%83%A8%E5%88%86%E4%BA%AB%EF%BC%9Apromise%E4%B8%8Easync/">点击查看</a></p>\n<p>es6: Proxy<a href="http://www.zpblogs.com/myBlogs/2018/09/26/%E6%A3%AE%E6%9E%9C%E5%86%85%E9%83%A8%E5%88%86%E4%BA%AB%EF%BC%9AProxy%E4%B8%8EReflect/#more">点击查看</a></p>\n<p>es6: set和map集集合<a href="http://www.zpblogs.com/myBlogs/2018/09/25/%E6%A3%AE%E6%9E%9C%E5%86%85%E9%83%A8%E5%88%86%E4%BA%AB%EF%BC%9Aset%E5%92%8Cmap%E9%9B%86%E9%9B%86%E5%90%88/">点击查看</a></p>\n'},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t);$("#markdownContainer").html(o.a)}]);