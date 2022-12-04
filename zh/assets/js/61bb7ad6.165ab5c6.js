"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38667:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Context Path\u63d2\u4ef6",keywords:["contextPath"],description:"contextPath\u63d2\u4ef6"},l="1. \u6982\u8ff0",p={unversionedId:"plugin-center/http-process/contextpath-plugin",id:"version-2.4.2/plugin-center/http-process/contextpath-plugin",isDocsHomePage:!1,title:"Context Path\u63d2\u4ef6",description:"contextPath\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/http-process/contextpath-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/contextpath-plugin",permalink:"/zh/docs/2.4.2/plugin-center/http-process/contextpath-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/http-process/contextpath-plugin.md",version:"2.4.2",frontMatter:{title:"Context Path\u63d2\u4ef6",keywords:["contextPath"],description:"contextPath\u63d2\u4ef6"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"\u6570\u636e\u540c\u6b65\u914d\u7f6e",permalink:"/zh/docs/2.4.2/user-guide/use-data-sync"},next:{title:"ModifyResponse\u63d2\u4ef6",permalink:"/zh/docs/2.4.2/plugin-center/http-process/modifyresponse-plugin"}},c=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165 pom",id:"22-\u5bfc\u5165-pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u793a\u4f8b \u8bbe\u7f6e\u670d\u52a1\u7684\u4e0a\u4e0b\u6587\u8def\u5f84",id:"251-\u793a\u4f8b-\u8bbe\u7f6e\u670d\u52a1\u7684\u4e0a\u4e0b\u6587\u8def\u5f84",children:[]},{value:"2.5.2 \u793a\u4f8b \u589e\u52a0\u524d\u7f00",id:"252-\u793a\u4f8b-\u589e\u52a0\u524d\u7f00",children:[]}]}],o={toc:c};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u8def\u5f84\u63d2\u4ef6")),(0,r.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e0d\u540c\u7684\u4e0a\u4e0b\u6587\u8def\u5f84\u6765\u505a\u670d\u52a1\u7684\u6d41\u91cf\u6cbb\u7406")),(0,r.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u670d\u52a1\u7684\u4e0a\u4e0b\u6587\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u63a5\u53e3\u8c03\u7528\u7684\u65f6\u5019\u63d2\u4ef6\u7edf\u4e00\u7ed9\u670d\u52a1\u7684\u63a5\u53e3\u5730\u5740\u52a0\u4e0a\u524d\u7f00")),(0,r.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-context-path")),(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.context.path.ContextPathPlugin"))),(0,r.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.3.0")),(0,r.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(54248).Z})),(0,r.kt)("h2",{id:"22-\u5bfc\u5165-pom"},"2.2 \u5bfc\u5165 pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n")),(0,r.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"contextPath")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78627).Z})),(0,r.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5ba2\u6237\u7aef\u9879\u76ee\u7684 contextPath")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65226).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"shenyu-admin contextPath \u63d2\u4ef6\u914d\u7f6e\uff0c\u53ef\u4ee5\u914d\u7f6e contextPath \u548c addPrefix\uff1acontextPath \u5b9a\u4e49\u4e86 contextPath \u7684\u503c\uff0caddPrefix \u5b9a\u4e49\u4e86\u63a5\u53e3\u8c03\u7528\u65f6\u9700\u8981\u81ea\u52a8\u589e\u52a0\u7684\u7684\u524d\u7f00\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84401).Z})),(0,r.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,r.kt)("h3",{id:"251-\u793a\u4f8b-\u8bbe\u7f6e\u670d\u52a1\u7684\u4e0a\u4e0b\u6587\u8def\u5f84"},"2.5.1 \u793a\u4f8b \u8bbe\u7f6e\u670d\u52a1\u7684\u4e0a\u4e0b\u6587\u8def\u5f84"),(0,r.kt)("h4",{id:"2511-\u53c2\u8003\u672c\u5730\u90e8\u7f72\u542f\u52a8-admin-\u548c\u7f51\u5173"},"2.5.1.1 \u53c2\u8003",(0,r.kt)("a",{parentName:"h4",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,r.kt)("h4",{id:"2512-\u53c2\u8003-22-\u5bfc\u5165-pom-\u5e76\u91cd\u542f\u7f51\u5173"},"2.5.1.2 \u53c2\u8003 2.2 \u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,r.kt)("h4",{id:"2513-\u53c2\u8003-23-\u542f\u7528\u63d2\u4ef6"},"2.5.1.3 \u53c2\u8003 2.3 \u542f\u7528\u63d2\u4ef6"),(0,r.kt)("h4",{id:"2514-\u5ba2\u6237\u7aef\u9879\u76ee\u914d\u7f6e-contextpath"},"2.5.1.4 \u5ba2\u6237\u7aef\u9879\u76ee\u914d\u7f6e contextPath"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),"\uff0c\u5e76\u5728 application.yml \u4e2d\u914d\u7f6e contextPath\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65226).Z})),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\uff0c\u53ef\u4ee5\u770b\u5230 shenyu-admin \u4e2d\u591a\u4e86\u4e00\u6761 context \u7684 selector \u548c rule \u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51336).Z})),(0,r.kt)("h4",{id:"2515-\u63a5\u53e3\u8c03\u7528"},"2.5.1.5 \u63a5\u53e3\u8c03\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40322).Z})),(0,r.kt)("h3",{id:"252-\u793a\u4f8b-\u589e\u52a0\u524d\u7f00"},"2.5.2 \u793a\u4f8b \u589e\u52a0\u524d\u7f00"),(0,r.kt)("h4",{id:"2521-\u53c2\u8003\u672c\u5730\u90e8\u7f72\u542f\u52a8-admin-\u548c\u7f51\u5173"},"2.5.2.1 \u53c2\u8003",(0,r.kt)("a",{parentName:"h4",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,r.kt)("h4",{id:"2522-\u53c2\u8003-22-\u5bfc\u5165-pom-\u5e76\u91cd\u542f\u7f51\u5173"},"2.5.2.2 \u53c2\u8003 2.2 \u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,r.kt)("h4",{id:"2523-\u53c2\u8003-23-\u542f\u7528\u63d2\u4ef6"},"2.5.2.3 \u53c2\u8003 2.3 \u542f\u7528\u63d2\u4ef6"),(0,r.kt)("h4",{id:"2524-\u5ba2\u6237\u7aef\u9879\u76ee\u914d\u7f6e-contextpath"},"2.5.2.4 \u5ba2\u6237\u7aef\u9879\u76ee\u914d\u7f6e contextPath"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),"\uff0c\u5e76\u5728 application.yml \u4e2d\u914d\u7f6e contextPath\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65226).Z})),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\uff0c\u53ef\u4ee5\u770b\u5230 shenyu-admin \u4e2d\u591a\u4e86\u4e00\u6761 context \u7684 selector \u548c rule \u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51336).Z})),(0,r.kt)("h4",{id:"2525-\u4fee\u6539-addprefix-\u7684\u503c"},"2.5.2.5 \u4fee\u6539 addPrefix \u7684\u503c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(75279).Z})),(0,r.kt)("h4",{id:"2526-\u4fee\u6539\u9009\u62e9\u5668\u548c\u6761\u4ef6\u914d\u7f6e\u4e2d-uri-\u7684\u503c\u5220\u9664\u6389-addprefix-\u90e8\u5206\u7531\u4e8e\u672c\u4f8b\u4f7f\u7528\u4e86-http-\u534f\u8bae\u7684\u670d\u52a1\u56e0\u6b64\u9700\u8981\u4fee\u6539-divide-\u63d2\u4ef6"},"2.5.2.6 \u4fee\u6539\u9009\u62e9\u5668\u548c\u6761\u4ef6\u914d\u7f6e\u4e2d uri \u7684\u503c\uff0c\u5220\u9664\u6389 addPrefix \u90e8\u5206\uff0c\u7531\u4e8e\u672c\u4f8b\u4f7f\u7528\u4e86 http \u534f\u8bae\u7684\u670d\u52a1\uff0c\u56e0\u6b64\u9700\u8981\u4fee\u6539 divide \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81381).Z})),(0,r.kt)("h4",{id:"2525-\u63a5\u53e3\u8c03\u7528"},"2.5.2.5 \u63a5\u53e3\u8c03\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86891).Z})),(0,r.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"contextPath")," \u8bbe\u7f6e\u4e3a\u7981\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32942).Z})))}s.isMDXComponent=!0},75279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-prefix-cn-f009132b3cceabafe388efbcabcbe7fa.png"},65226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/client-project-config-1b8ee987a5aaf08a17499f11a013f548.png"},51336:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/context-path-selector-and-rule-cn-253c4ba6eaf87cf9ed322ec3f7524bd9.png"},32942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/disable-cn-01f8d126b2d438b71a5902dc8eff1498.png"},78627:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-cn-403522bfb6430c05c8bd374d1745e0cf.png"},86891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/invoke-interface-add-prefix-51c6dfad10bf466ae61d0bfc507a7443.png"},40322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/invoke-interface-cde95ab27ebf6f7608fcfe075e5245f7.png"},84401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin-config-cn-364f918ac9cbd261010f6bfcec6e622d.png"},54248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/procedure-cn-1b0a93e976c595d1e66fd4c75ebb035e.png"},81381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remove-add-prefix-cn-a31153b7e5797b3b21d8f16cc415ff40.png"}}]);