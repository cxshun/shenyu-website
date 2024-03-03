"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8100],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,d=u["".concat(s,".").concat(y)]||u[y]||g[y]||o;return t?l.createElement(d,i(i({ref:n},p),{},{components:t})):l.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},65106:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var l=t(58168),a=(t(96540),t(15680));const o={title:"Websocket\u63d2\u4ef6",keywords:["Websocket"],description:"Websocket\u63d2\u4ef6"},i="1. \u6982\u8ff0",r={unversionedId:"plugin-center/proxy/websocket-plugin",id:"plugin-center/proxy/websocket-plugin",isDocsHomePage:!1,title:"Websocket\u63d2\u4ef6",description:"Websocket\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/websocket-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/websocket-plugin",permalink:"/zh/docs/next/plugin-center/proxy/websocket-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/websocket-plugin.md",version:"current",frontMatter:{title:"Websocket\u63d2\u4ef6",keywords:["Websocket"],description:"Websocket\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Tcp\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/tcp-plugin"},next:{title:"Hystrix\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/fault-tolerance/hystrix-plugin"}},s=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u542f\u7528\u63d2\u4ef6",id:"22-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.3 \u914d\u7f6e\u5ba2\u6237\u7aef\u670d\u52a1",id:"23-\u914d\u7f6e\u5ba2\u6237\u7aef\u670d\u52a1",children:[{value:"2.3.1 \u624b\u52a8\u914d\u7f6e",id:"231-\u624b\u52a8\u914d\u7f6e",children:[]},{value:"2.3.2 \u81ea\u52a8\u914d\u7f6e",id:"232-\u81ea\u52a8\u914d\u7f6e",children:[]}]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u5728\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u63a5\u5165\u53c2\u6570",id:"241-\u5728\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u63a5\u5165\u53c2\u6570",children:[]},{value:"2.4.2 \u5728 shenyu-admin \u914d\u7f6e websocket \u63d2\u4ef6\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f",id:"242-\u5728-shenyu-admin-\u914d\u7f6e-websocket-\u63d2\u4ef6\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 Spring Annotation Websocket\u4f7f\u7528\u793a\u4f8b",id:"251-spring-annotation-websocket\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"2.5.2 Spring Native Websocket \u4f7f\u7528\u793a\u4f8b",id:"252-spring-native-websocket-\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"2.5.3 Spring Reactive Websocket \u4f7f\u7528\u793a\u4f8b",id:"253-spring-reactive-websocket-\u4f7f\u7528\u793a\u4f8b",children:[]}]},{value:"5.1 websocket\u8c03\u8bd5\u4ee3\u7801",id:"51-websocket\u8c03\u8bd5\u4ee3\u7801",children:[]}],c={toc:s},p="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,l.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,a.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Websocket \u63d2\u4ef6")),(0,a.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8f6c\u53d1\u573a\u666f\uff0c\u5904\u7406 websocket\u534f\u8bae \u8bf7\u6c42\uff0c\u5c06\u5176\u8f6c\u53d1\u5230\u540e\u7aef\u5176\u4ed6 websocket \u534f\u8bae\u7684\u670d\u52a1"),(0,a.yg)("li",{parentName:"ul"},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861")),(0,a.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u6839\u636e host\u3001uri\u3001query \u7b49\u8bf7\u6c42\u4fe1\u606f\u505a\u6d41\u91cf\u7684\u6cbb\u7406"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u8bf7\u6c42\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u540c\u65f6\u652f\u6301\u670d\u52a1\u9884\u70ed\uff0c\u76ee\u524d\u652f\u6301\u4e09\u79cd\u7b56\u7565\uff1aip hash\uff08\u5e26\u865a\u62df\u8282\u70b9\u7684\u4e00\u81f4\u6027\u54c8\u5e0c\uff09\u3001round-robbin\uff08\u52a0\u6743\u8f6e\u8be2\uff09\u3001random\uff08\u52a0\u6743\u968f\u673a\uff09"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u63a5\u53e3\u7ea7\u522b\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u8d85\u65f6\u91cd\u8bd5\u6b21\u6570")),(0,a.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-websocket")),(0,a.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b ",(0,a.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.websocket.WebSocketPlugin"))),(0,a.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"2.4.3")),(0,a.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,a.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725162054383",src:t(84946).A})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u540d\u8bcd\u89e3\u91ca")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"shenyu \u7f51\u5173\uff1a\u5305\u542b shenyu-admin \u548c shenyu-bootstrap \u670d\u52a1\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u9879\u76ee\uff1a\u540e\u7aef\u771f\u5b9e websocket \u670d\u52a1")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d41\u7a0b\u89e3\u91ca")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u542f\u52a8 shenyu \u7f51\u5173\u670d\u52a1\uff1a\u53c2\u7167\u8fd0\u7ef4\u90e8\u7f72\uff0c\u542f\u52a8 shenyu-admin \u548c shenyu-bootstrap\uff0c\u786e\u4fdd shenyu \u7f51\u5173\u670d\u52a1\u6b63\u5e38"),(0,a.yg)("li",{parentName:"ol"},"\u5728 shenyu-admin \u4e2d\u542f\u7528 websocket \u63d2\u4ef6\uff1a\u5728 shenyu-admin \u63d2\u4ef6\u7ba1\u7406\u7684\u9875\u9762\u4e2d\u5f00\u542f websocket \u63d2\u4ef6"),(0,a.yg)("li",{parentName:"ol"},"\u914d\u7f6e\u548c\u542f\u52a8\u5ba2\u6237\u7aef\u9879\u76ee\uff1a\u542f\u52a8\u5ba2\u6237\u7aef\u9879\u76ee\uff08\u540e\u7aef\u771f\u5b9e websocket \u670d\u52a1\uff09\uff0c\u5e76\u5c06\u670d\u52a1\u4fe1\u606f\u914d\u7f6e\u5230 shenyu \u7f51\u5173\u4e2d\uff0c\u5206\u4e3a\u624b\u52a8\u914d\u7f6e\u548c\u81ea\u52a8\u914d\u7f6e\u4e24\u79cd\u65b9\u5f0f"),(0,a.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u8f6c\u53d1\u662f\u5426\u6b63\u5e38\uff1a\u68c0\u67e5\u8f6c\u53d1\u80fd\u5426\u6210\u529f")),(0,a.yg)("h2",{id:"22-\u542f\u7528\u63d2\u4ef6"},"2.2 \u542f\u7528\u63d2\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5728 shenyu-admin --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e websocket \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220724223435359",src:t(21951).A})),(0,a.yg)("h2",{id:"23-\u914d\u7f6e\u5ba2\u6237\u7aef\u670d\u52a1"},"2.3 \u914d\u7f6e\u5ba2\u6237\u7aef\u670d\u52a1"),(0,a.yg)("h3",{id:"231-\u624b\u52a8\u914d\u7f6e"},"2.3.1 \u624b\u52a8\u914d\u7f6e"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5728 shenyu-admin \u9875\u9762\u4e0a\u624b\u52a8\u914d\u7f6e\u5ba2\u6237\u7aef\u670d\u52a1\uff0c\u540e\u7aef\u670d\u52a1\u4e0d\u9700\u8981\u4efb\u4f55\u6539\u52a8\uff0c\u5373\u53ef\u5b9e\u73b0 websocket \u534f\u8bae\u8f6c\u53d1")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Websocket \u63d2\u4ef6\u4e2d\u6dfb\u52a0\u9009\u62e9\u5668")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725142728044",src:t(80413).A})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Websocket \u63d2\u4ef6\u4e2d\u6dfb\u52a0\u89c4\u5219")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725142951481",src:t(36730).A})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u542f\u52a8\u5ba2\u6237\u7aef\u9879\u76ee\uff08\u540e\u7aef websocket \u670d\u52a1\uff09")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6d4b\u8bd5\u670d\u52a1\u8f6c\u53d1\u662f\u5426\u6210\u529f"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4ee3\u7801\u89c1\u9644\u4ef65.1")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220726222003131",src:t(80551).A})),(0,a.yg)("h3",{id:"232-\u81ea\u52a8\u914d\u7f6e"},"2.3.2 \u81ea\u52a8\u914d\u7f6e"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u67d0\u4e9b\u573a\u666f\u4f60\u9700\u8981\u901a\u8fc7\u81ea\u52a8\u914d\u7f6e\u6765\u51cf\u5c11\u5de5\u4f5c\u91cf\uff0c\u53ef\u4ee5\u5728\u540e\u7aef\u670d\u52a1\u4e2d\u589e\u52a0\u6ce8\u89e3\uff0c\u5b9e\u73b0\u81ea\u52a8\u914d\u7f6e\u670d\u52a1\u5230 shenyu \u7f51\u5173\u4e2d")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728\u540e\u7aef\u670d\u52a1\u9879\u76ee\u4e2d\u7684 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuSpringWebSocketClient"),"\u6ce8\u89e3\uff0c\u8be5\u6ce8\u89e3\u4f1a\u5c06 websocket \u670d\u52a1\u81ea\u52a8\u6ce8\u518c\u5230 shenyu \u7f51\u5173"),(0,a.yg)("li",{parentName:"ol"},"\u8c03\u6574\u63d2\u4ef6\u914d\u7f6e\uff0c\u914d\u7f6e\u53c2\u6570\u8be6\u60c5\u89c1 2.4.1"),(0,a.yg)("li",{parentName:"ol"},"\u542f\u52a8\u5ba2\u6237\u7aef\u9879\u76ee\uff08\u540e\u7aef websocket \u670d\u52a1\uff09\uff0c\u793a\u4f8b\u4ee3\u7801\u89c1 2.5 \u793a\u4f8b"),(0,a.yg)("li",{parentName:"ol"},"\u68c0\u67e5 shenyu-admin \u9875\u9762\u4e2d\u63d2\u4ef6\u5217\u8868\u670d\u52a1\u6ce8\u518c\u4fe1\u606f\u662f\u5426\u6ce8\u518c\u6210\u529f"),(0,a.yg)("li",{parentName:"ol"},"\u6d4b\u8bd5\u670d\u52a1\u8f6c\u53d1\u662f\u5426\u6210\u529f")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4ee3\u7801\u89c1\u9644\u4ef65.1")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220726221945414",src:t(80551).A})),(0,a.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,a.yg)("h3",{id:"241-\u5728\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u63a5\u5165\u53c2\u6570"},"2.4.1 \u5728\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u63a5\u5165\u53c2\u6570"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u63a5\u5165\u65b9\u5f0f\u548c\u670d\u52a1\u5668\u5730\u5740\uff0c\u53c2\u6570\u4e3a: ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu.register.*"),"\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u4e86 http \u63a5\u5165\u65b9\u5f0f\uff0c\u76ee\u524d\u5ba2\u6237\u7aef\u652f\u6301\u7684\u63a5\u5165\u7684\u65b9\u5f0f\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1ahttp\u3001zookeeper\u3001etcd\u3001nacos\u3001consul\uff0c\u8be6\u7ec6\u7684\u63a5\u5165\u914d\u7f6e\u53c2\u6570\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"li",href:"/zh/docs/next/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u53c2\u6570\u4e3a: ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu.client.websocket.*"),"\uff0c\u5305\u542b\u670d\u52a1\u7684\u540d\u79f0\u3001\u8def\u7531\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\uff0c\u5fc5\u987b\u914d\u7f6e contextPath \u7684\u503c\u4f5c\u4e3a\u6bcf\u4e2a\u670d\u52a1\u7684\u8def\u7531\u5730\u5740\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    serverLists: http://localhost:9095 \n    props:\n      username: admin\n      password: 123456\n  client:\n    websocket:\n      props:\n        contextPath: /ws-annotation \n        appName: ws-annotation\n        port: 8001 # \u9700\u8981\u548c\u670d\u52a1\u7aef\u53e3\u4fdd\u6301\u4e00\u81f4\n")),(0,a.yg)("h3",{id:"242-\u5728-shenyu-admin-\u914d\u7f6e-websocket-\u63d2\u4ef6\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f"},"2.4.2 \u5728 shenyu-admin \u914d\u7f6e websocket \u63d2\u4ef6\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f"),(0,a.yg)("p",null,"\u4f7f\u7528\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u5728\u5ba2\u6237\u7aef\u542f\u52a8\u4e4b\u540e\u4f1a\u5728 shenyu-admin -> \u63d2\u4ef6\u5217\u8868 -> Proxy -> Websocket \u81ea\u52a8\u6ce8\u518c",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219"),"\u4fe1\u606f\u3002\n",(0,a.yg)("img",{alt:"image-20220725222628106",src:t(48317).A})),(0,a.yg)("h4",{id:"2421-\u9009\u62e9\u5668\u7684\u914d\u7f6e"},"2.4.2.1 \u9009\u62e9\u5668\u7684\u914d\u7f6e"),(0,a.yg)("p",null,"Websocket \u9009\u62e9\u5668\u793a\u4f8b\uff0c\u901a\u7528\u9009\u62e9\u5668\u914d\u7f6e\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725222913298",src:t(25075).A})),(0,a.yg)("h5",{id:"24211-\u9009\u62e9\u5668\u5904\u7406\u4fe1\u606f\u914d\u7f6e"},"2.4.2.1.1 \u9009\u62e9\u5668\u5904\u7406\u4fe1\u606f\u914d\u7f6e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"host"),"\uff1a\u586b\u5199 ",(0,a.yg)("inlineCode",{parentName:"li"},"localhost"),"\uff0c\u8be5\u5b57\u6bb5\u6682\u65f6\u6ca1\u4f7f\u7528\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ip:port"),"\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"ip")," \u4e0e\u7aef\u53e3\uff0c\u8fd9\u91cc\u586b\u5199\u4f60\u771f\u5b9e\u670d\u52a1\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"ip")," + \u7aef\u53e3\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"protocol"),"\uff1a\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"ws")," \u534f\u8bae\uff0c\u4e0d\u586b\u5199\u9ed8\u8ba4\u4e3a\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"ws://")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"startupTime"),"\uff1a \u542f\u52a8\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"weight"),"\uff1a\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\uff0c\u670d\u52a1\u542f\u52a8\u81ea\u52a8\u6ce8\u518c\u7684\u9ed8\u8ba4\u503c\u4e3a 50\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"warmupTime"),"\uff1a\u9884\u70ed\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u5728\u9884\u70ed\u4e2d\u7684\u670d\u52a1\u5668\u4f1a\u8ba1\u7b97\u77ac\u65f6\u6743\u91cd\uff0c\u8ba1\u7b97\u503c\u4f1a\u5c0f\u4e8e\u5b9e\u9645\u914d\u7f6e\u7684\u6743\u91cd\uff0c\u4ee5\u4fdd\u62a4\u521a\u542f\u52a8\u7684\u670d\u52a1\u5668\uff0c\u670d\u52a1\u542f\u52a8\u6ce8\u518c\u7684\u9ed8\u8ba4\u503c\u4e3a 10\u3002\u4e3e\u4e2a\u4f8b\u5b50\u9884\u70ed\u65f6\u95f4 100 \u6beb\u79d2\uff0c\u76ee\u524d\u542f\u52a8\u4e86 50 \u6beb\u79d2\uff0c\u914d\u7f6e\u7684\u6743\u91cd 50\uff0c \u5b9e\u9645\u7684\u6743\u91cd\u662f 25\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"status"),"\uff1a\u5f00\u542f\u6216\u5173\u95ed\uff0c\u5f00\u59cb\u72b6\u6001\u6b64\u5904\u7406\u5668\u624d\u6709\u6548\u3002")),(0,a.yg)("h4",{id:"2422-\u89c4\u5219\u7684\u914d\u7f6e"},"2.4.2.2 \u89c4\u5219\u7684\u914d\u7f6e"),(0,a.yg)("p",null,"Websocket \u89c4\u5219\u793a\u4f8b\uff0c\u901a\u7528\u89c4\u5219\u914d\u7f6e\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725223225388",src:t(10570).A})),(0,a.yg)("h5",{id:"24221-\u89c4\u5219\u5904\u7406\u4fe1\u606f\u914d\u7f6e"},"2.4.2.2.1 \u89c4\u5219\u5904\u7406\u4fe1\u606f\u914d\u7f6e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"loadStrategy"),"\uff1a\u5982\u679c websocket \u5ba2\u6237\u7aef\u662f\u4e00\u4e2a\u96c6\u7fa4\uff0cApache ShenYu \u7f51\u5173\u8c03\u7528\u65f6\u91c7\u53d6\u54ea\u79cd\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5f53\u524d\u652f\u6301 roundRobin\u3001random \u548c hash\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"timeout"),"\uff1a\u8c03\u7528\u5ba2\u6237\u7aef\u7684\u8d85\u65f6\u65f6\u95f4\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"retryCount"),"\uff1a\u8c03\u7528\u5ba2\u6237\u7aef\u8d85\u65f6\u5931\u8d25\u7684\u91cd\u8bd5\u6b21\u6570\u3002")),(0,a.yg)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,a.yg)("h3",{id:"251-spring-annotation-websocket\u4f7f\u7528\u793a\u4f8b"},"2.5.1 Spring Annotation Websocket\u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket/shenyu-example-spring-annotation-websocket"},"shenyu-example-spring-annotation-websocket")),(0,a.yg)("h3",{id:"252-spring-native-websocket-\u4f7f\u7528\u793a\u4f8b"},"2.5.2 Spring Native Websocket \u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket/shenyu-example-spring-native-websocket"},"shenyu-example-spring-native-websocket")),(0,a.yg)("h3",{id:"253-spring-reactive-websocket-\u4f7f\u7528\u793a\u4f8b"},"2.5.3 Spring Reactive Websocket \u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket/shenyu-example-spring-reactive-websocket"},"shenyu-example-spring-reactive-websocket")),(0,a.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5728 shenyu-admin --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e \u5173\u95ed websocket \u63d2\u4ef6\u72b6\u6001")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220725141221131",src:t(49164).A})),(0,a.yg)("h1",{id:"4-\u5e38\u89c1\u95ee\u9898"},"4. \u5e38\u89c1\u95ee\u9898"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4.1 websocket \u5efa\u7acb\u8fde\u63a5\u51fa\u73b0 1002 \u9519\u8bef")),(0,a.yg)("p",null,"\u53ef\u80fd\u539f\u56e0\uff1a\u5ba2\u6237\u7aef\u670d\u52a1\u4e0d\u6b63\u5e38\uff0cshenyu \u7f51\u5173\u548c\u5ba2\u6237\u7aef\u9879\u76ee\u4e0d\u80fd\u5efa\u7acb\u6b63\u5e38\u8fde\u63a5\uff0c\u8bf7\u68c0\u67e5\u7f51\u5173\u5230\u5ba2\u6237\u7aef\u7684\u7f51\u7edc\u3001\u5ba2\u6237\u7aef\u670d\u52a1\u662f\u5426\u6b63\u5e38"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4.2 \u591a\u4e2a\u5ba2\u6237\u7aef\u670d\u52a1\u5728 websocket \u9009\u62e9\u5668\u4e2d\u5c55\u793a\u4e3a\u7a7a")),(0,a.yg)("p",null,"\u53ef\u80fd\u539f\u56e0\uff1a\u57fa\u7840\u914d\u7f6e-> \u63d2\u4ef6\u7ba1\u7406 -> websocket -> multiSelectorHandle \u9009\u9879\u9009\u62e9 multiple handle"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image-20220726222250136",src:t(7888).A})),(0,a.yg)("h1",{id:"5-\u9644\u4ef6"},"5. \u9644\u4ef6"),(0,a.yg)("h2",{id:"51-websocket\u8c03\u8bd5\u4ee3\u7801"},"5.1 websocket\u8c03\u8bd5\u4ee3\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a websocket.html \u7684\u6587\u4ef6\uff0c\u590d\u5236\u4e0b\u9762\u7684\u4ee3\u7801\u5230\u6587\u4ef6\u4e2d"),(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668\u6253\u5f00 websocket.html")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE HTML>\n<html>\n<head>\n    <meta http-equiv="content-type" content="text/html" />\n    <title>Shenyu WebSocket Test</title>\n    <script>\n        var websocket;\n        function connect() {\n            try {\n                websocket = new WebSocket(document.getElementById("url").value);\n                websocket.onopen = onOpen;\n                websocket.onerror = onError;\n                websocket.onmessage = onReceive;\n                websocket.onclose = onClose;\n            } catch (e) {\n                alert(\'[websocket] establish connection error.\');\n            }\n        }\n        function onOpen() {\n            alert(\'[websocket] connect success.\');\n        }\n        function onError(e) {\n            alert("[websocket] connect error. code: " + e.code);\n        }\n        function onReceive(msg) {\n            var show = document.getElementById("show");\n            show.innerHTML += "[Server Response] => " + msg.data + "<br/>";\n            show.scrollTop = show.scrollHeight;\n        }\n        function onClose(e) {\n            console.log("[websocket] connect closed. code: " + e.code)\n            alert("[websocket] connect closed.");\n            document.getElementById("show").innerHTML = "";\n            document.getElementById("msg").value = "";\n            websocket = null;\n        }\n        function buttonClose() {\n            if (websocket == null) {\n                console.log("Please establish a connection first.")\n            } else {\n                websocket.close(1000);\n                document.getElementById("show").innerHTML = "";\n                document.getElementById("msg").value = "";\n            }\n        }\n        function send() {\n            if (websocket == null) {\n                alert("Please establish a connection first.")\n            } else {\n                var msg = document.getElementById("msg").value;\n                show.innerHTML += "[Client Request] => " + msg + "<br/>";\n                websocket.send(msg);\n            }\n        }\n    <\/script>\n</head>\n<body>\n    <input id="url" type="text" value="ws://localhost:9195/ws-annotation/myWs"><br />\n    <input id="msg" type="text"><br />\n    <button id="connect" onclick="connect();">Connect</button>\n    <button id="send" onclick="send();">Send</button>\n    <button id="close" onclick="buttonClose();">Close</button></br>\n    <div id="show" class="show"></div>\n</body>\n</html>\n<style>\n    input {\n        width: 400px;\n        margin-bottom: 10px;\n    }\n    .show {\n        width: 600px;\n        height: 400px;\n        overflow-y: auto;\n        border: 1px solid #333;\n        margin-top: 10px;\n    }\n</style>\n')))}u.isMDXComponent=!0},36730:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/add_rule_zh-cbc189a9a83f041ab75aac279225fbe3.png"},80413:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/add_selector_zh-e40b0e4741f5886f4a5fec413b508ee1.png"},48317:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/auto_register_zh-f43761f885f654d602c7a19107c7704b.png"},49164:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/close_websocket_zh-89fef97f7b852c92bcb07b827f004483.png"},10570:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/config_rules_zh-754edc8589163d14fe447d798c9c5fc2.png"},25075:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/config_selectors_zh-7fd38bc74e474dda5f2ed8dac6b7d410.png"},21951:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/enable_websocket_zh-83fa85440a4fe38ddd5864ae97e84dbb.png"},84946:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/procedure_chart_zh-a1e27add4dea389e05ae00e7a2d4f9a6.png"},7888:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/questions_multiSelectorHandle_zh-395a620ff43d7cedcf91c8263b49283a.png"},80551:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/test_result_en-e23f4e8528881c929712ae84b01d53e8.png"}}]);