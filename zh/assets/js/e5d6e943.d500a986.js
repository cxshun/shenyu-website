"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[66244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99066:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:13,title:"Websocket\u652f\u6301",keywords:["soul"],description:"websocket\u652f\u6301"},l=void 0,a={unversionedId:"plugins/websocket-plugin",id:"version-2.3.0-Legacy/plugins/websocket-plugin",isDocsHomePage:!1,title:"Websocket\u652f\u6301",description:"websocket\u652f\u6301",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/websocket-plugin.md",sourceDirName:"plugins",slug:"/plugins/websocket-plugin",permalink:"/zh/docs/2.3.0-Legacy/plugins/websocket-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/websocket-plugin.md",version:"2.3.0-Legacy",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Websocket\u652f\u6301",keywords:["soul"],description:"websocket\u652f\u6301"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/rewrite-plugin"},next:{title:"Context Path\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/context-path-plugin"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u8bf7\u6c42\u8def\u5f84",id:"\u8bf7\u6c42\u8def\u5f84",children:[]}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"soul\u7f51\u5173\u662f\u652f\u6301 websocket\u7684\u4ee3\u7406\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"websocket\u652f\u6301\u4e2d\uff0c\u4f7f\u7528\u4e86divide\u63d2\u4ef6\u3002"))),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-admin")," --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,o.kt)("inlineCode",{parentName:"p"},"divide"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u65b0\u589e\u4f9d\u8d56"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-divide</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n")),(0,o.kt)("h2",{id:"\u8bf7\u6c42\u8def\u5f84"},"\u8bf7\u6c42\u8def\u5f84"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528soul\u4ee3\u7406websocket\u7684\u65f6\u5019\uff0c\u5176\u8bf7\u6c42\u8def\u5f84\u4e3a\uff08\u4f8b\u5b50\uff09\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\u53c2\u6570\u8be6\u89e3:\n1.localhost:8080 \u662fsoul\u542f\u52a8\u7684ip\u548c\u7aef\u53e3\u3002\n2.module\uff08\u5fc5\u586b\uff09\uff1a\u503c\u662f\u4f60\u7528\u6765\u5339\u914dselector\u7684\u5173\u952e\n3.method \uff08\u53c2\u6570\uff09: \u4f60\u7684 websocket\u8def\u5f84\uff0c\u540c\u65f6\u4e5f\u7528\u505a\u5339\u914drule\n4.rpcType \uff1awebsocket \u5fc5\u586b\uff0c\u4e14\u5fc5\u987b\u4e3awebsocket\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"divide"),"\u63d2\u4ef6\u4e2d\u9009\u62e9\u5668\u65b0\u589e\u4e00\u6761\u914d\u7f6e\uff0c\u5982\u4e0b")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/websocket-selector.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u4e00\u6761\u9009\u62e9\u5668\u4e0b\u65b0\u589e\u4e00\u6761 \u89c4\u5219\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/websocket-rule.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u603b\u7ed3\uff0c\u8fd9\u4e2a\u65f6\u5019\u6ce8\u610f\u770b\u4f60\u7684\u8def\u5f84 ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5b83\u5c31\u4f1a\u88ab\u4f60\u65b0\u589e\u7684\u9009\u62e9\u5668\u89c4\u5219\u5339\u914d\uff0c\u7136\u540e\u4ee3\u7406\u7684\u7684\u771f\u5b9ewebsocket\u5730\u5740\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080/websocket"),"\uff0c\u8fd9\u6837soul\u5c31\u8fdb\u884c\u7684websocket\u7684\u4ee3\u7406\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u548cwebsocket\u670d\u52a1\u8fdb\u884c\u901a\u4fe1\u4e86\uff0c\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6700\u540e\u518d\u8bf4\u4e00\u53e5\uff0cmodule\uff0cmethod \u547d\u540d\u548c\u503c\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u81ea\u5df1\u6765\u51b3\u5b9a\uff0c\u6211\u7684\u53ea\u662f\u5217\u5b50\uff0c\u53ea\u8981\u9009\u62e9\u5668 \u548c\u89c4\u5219\u80fd\u591f\u5339\u914d\u5c31\u884c\u3002"))))}c.isMDXComponent=!0}}]);