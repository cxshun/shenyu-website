"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(l,".").concat(s)]||c[s]||d[s]||i;return n?r.createElement(k,p(p({ref:t},m),{},{components:n})):r.createElement(k,p({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74900:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Motan\u63d2\u4ef6",keywords:["Motan"],description:"Motan\u63d2\u4ef6"},p=void 0,o={unversionedId:"plugin-center/proxy/motan-plugin",id:"plugin-center/proxy/motan-plugin",isDocsHomePage:!1,title:"Motan\u63d2\u4ef6",description:"Motan\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/motan-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/motan-plugin",permalink:"/zh/docs/next/plugin-center/proxy/motan-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/motan-plugin.md",version:"current",frontMatter:{title:"Motan\u63d2\u4ef6",keywords:["Motan"],description:"Motan\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"gRPC\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/grpc-plugin"},next:{title:"Mqtt \u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/mqtt-plugin"}},l=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u8bb2\u89e3",id:"\u63d2\u4ef6\u8bb2\u89e3",children:[]}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Motan"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u4e8e\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"Motan\u534f\u8bae"),"\u8bf7\u6c42\u7684\u6838\u5fc3\u5904\u7406\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\uff0c\u5f00\u542f\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-motan"},"Motan\u5feb\u901f\u5f00\u59cb")," \u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Motan"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/motan-proxy"},"Motan\u670d\u52a1\u63a5\u5165")," \u3002"))),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u8bb2\u89e3"},"\u63d2\u4ef6\u8bb2\u89e3"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u63a5\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u540e\uff0c\u4f1a\u81ea\u52a8\u6ce8\u518c\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728\u63d2\u4ef6\u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"->")," rpc proxy ",(0,a.kt)("inlineCode",{parentName:"p"},"->")," motan \u4e2d\u67e5\u770b\u3002 \u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,a.kt)("h4",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u63a5\u53e3\u65b9\u6cd5\uff0c\u90fd\u4f1a\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\uff0c\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u4f1a\u81ea\u52a8\u6ce8\u518c\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684\u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"--\x3e")," \u5143\u6570\u636e\u7ba1\u7406\u4e2d\u67e5\u770b\u3002"),(0,a.kt)("img",{src:"/img/shenyu/plugin/motan/metadata.png",width:"60%",height:"50%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5e94\u7528\u540d\u79f0\uff1a\u8be5\u6761\u5143\u6570\u636e\u6240\u5c5e\u7684\u5e94\u7528\u540d\u79f0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u540d\u79f0\uff1a\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u540d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8def\u5f84\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u8bf7\u6c42\u8def\u5f84\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8def\u5f84\u63cf\u8ff0\uff1a\u5bf9\u8be5\u8def\u5f84\u7684\u8bf4\u660e\uff0c\u65b9\u4fbf\u67e5\u770b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53c2\u6570\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u6309\u7167\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u987a\u5e8f\uff0c\u901a\u8fc7\u534a\u89d2\u9017\u53f7\u5206\u9694\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rpc\u6269\u5c55\u53c2\u6570\uff1a\u63cf\u8ff0\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u4e2d\u6bcf\u4e2a\u63a5\u53e3\u4fe1\u606f\u3002\u6bd4\u5982\uff0c\u4e0b\u9762\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u7684\u63a5\u53e3\u4fe1\u606f\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ]\n    }\n  ],\n  "group": "motan-shenyu-rpc"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u63a5\u53e3\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u63a5\u53e3\u5168\u9650\u5b9a\u540d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Rpc"),"\u7c7b\u578b\uff1a\u4e0b\u62c9\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"motan"),"\u3002"))))}m.isMDXComponent=!0}}]);