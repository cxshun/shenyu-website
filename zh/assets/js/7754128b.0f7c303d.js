"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[86753],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},g=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,u=s["".concat(l,".").concat(c)]||s[c]||y[c]||a;return t?i.createElement(u,p(p({ref:n},g),{},{components:t})):i.createElement(u,p({ref:n},g))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<a;d++)p[d]=t[d];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66256:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(58168),r=(t(96540),t(15680));const a={title:"SPI\u6269\u5c55\u8bbe\u8ba1",keywords:["spi design"],description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd"},p=void 0,o={unversionedId:"design/spi-design",id:"design/spi-design",isDocsHomePage:!1,title:"SPI\u6269\u5c55\u8bbe\u8ba1",description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design/spi-design.md",sourceDirName:"design",slug:"/design/spi-design",permalink:"/zh/docs/next/design/spi-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/design/spi-design.md",version:"current",frontMatter:{title:"SPI\u6269\u5c55\u8bbe\u8ba1",keywords:["spi design"],description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd"},sidebar:"tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aef\u6ce8\u518c\u8bbe\u8ba1",permalink:"/zh/docs/next/design/register-center-design"},next:{title:"WASM\u63d2\u4ef6\u8bbe\u8ba1",permalink:"/zh/docs/next/design/wasm-plugin-design"}},l=[{value:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55",id:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55",children:[]},{value:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55",id:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55",children:[]},{value:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55",id:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55",children:[]},{value:"RateLimiter\u6269\u5c55",id:"ratelimiter\u6269\u5c55",children:[]},{value:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55",id:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55",children:[]},{value:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55",id:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55",children:[]},{value:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55",id:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55",children:[]}],d={toc:l},g="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SPI")," \u5168\u79f0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Service Provider Interface"),", \u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"JDK")," \u5185\u7f6e\u7684\u4e00\u79cd\u670d\u52a1\u63d0\u4f9b\u53d1\u73b0\u529f\u80fd, \u4e00\u79cd\u52a8\u6001\u66ff\u6362\u53d1\u73b0\u7684\u673a\u5236\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-spi"},"shenyu-spi")," \u662f",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u81ea\u5b9a\u4e49\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"SPI"),"\u6269\u5c55\u5b9e\u73b0\uff0c\u8bbe\u8ba1\u548c\u5b9e\u73b0\u539f\u7406\u53c2\u8003\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"Dubbo"),"\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://dubbo.apache.org/zh/docs/v2.7/dev/impls/"},"SPI\u6269\u5c55\u5b9e\u73b0")," \u3002"),(0,r.yg)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55"},"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55"),(0,r.yg)("p",null,"\u901a\u8fc7\u54ea\u79cd\u65b9\u5f0f\u5b9e\u73b0\u670d\u52a1\u7684\u6ce8\u518c\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Consul"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Http"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3002\u6ce8\u518c\u4e2d\u5fc3\u7684\u6269\u5c55\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\uff0c\u63a5\u53e3\u5206\u522b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuServerRegisterRepository")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuClientRegisterRepository")," \u3002"),(0,r.yg)("h3",{id:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55"},"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55"),(0,r.yg)("p",null,"\u8d1f\u8d23\u670d\u52a1\u7684\u76d1\u63a7\uff0c\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"SPI"),"\u52a0\u8f7d\u5177\u4f53\u5b9e\u73b0\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus")," \uff0c\u670d\u52a1\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"MetricsService")," \u3002"),(0,r.yg)("h3",{id:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55"},"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55"),(0,r.yg)("p",null,"\u4ece\u591a\u4e2a\u670d\u52a1\u63d0\u4f9b\u65b9\u4e2d\u9009\u62e9\u4e00\u4e2a\u8fdb\u884c\u8c03\u7528\uff0c\u5f53\u524d\u652f\u6301\u7684\u7b97\u6cd5\u6709",(0,r.yg)("inlineCode",{parentName:"p"},"Hash"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Random")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"RoundRobin"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalance")," \u3002"),(0,r.yg)("h3",{id:"ratelimiter\u6269\u5c55"},"RateLimiter\u6269\u5c55"),(0,r.yg)("p",null,"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiter"),"\u63d2\u4ef6\u4e2d\uff0c\u4f7f\u7528\u4f55\u79cd\u9650\u6d41\u7b97\u6cd5\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Concurrent"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"LeakyBucket"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"SlidingWindow")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenBucket"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiterAlgorithm")," \u3002"),(0,r.yg)("h3",{id:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55"},"\u5339\u914d\u65b9\u5f0f\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"And"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Or"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"MatchStrategy")," \u3002"),(0,r.yg)("h3",{id:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55"},"\u6761\u4ef6\u53c2\u6570\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u6761\u4ef6\u53c2\u6570\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"URI"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"RequestMethod"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Query"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Post"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"IP"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Host"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Cookie")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Header"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"ParameterData")," \u3002"),(0,r.yg)("h3",{id:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55"},"\u6761\u4ef6\u7b56\u7565\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u6761\u4ef6\u7b56\u7565\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Match"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Contains"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Equals"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Regex"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"TimerAfter"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"TimerBefore"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"Exclude"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"PredicateJudge")," \u3002"))}s.isMDXComponent=!0}}]);