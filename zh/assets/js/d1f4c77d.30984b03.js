"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:i,a[1]=u;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96469:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},a=void 0,u={unversionedId:"plugin-center/http-process/request-plugin",id:"version-2.5.0/plugin-center/http-process/request-plugin",isDocsHomePage:!1,title:"Request\u63d2\u4ef6",description:"RequestPlugin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/http-process/request-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/request-plugin",permalink:"/zh/docs/plugin-center/http-process/request-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/http-process/request-plugin.md",version:"2.5.0",frontMatter:{title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Redirect\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/redirect-plugin"},next:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/rewrite-plugin"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]}],o={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8fdb\u884c\u4ee3\u7406\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," \u63d2\u4ef6\u5bf9\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"Cookie")," \u6765\u6dfb\u52a0\u3001\u4fee\u6539\u3001\u79fb\u9664\u8bf7\u6c42\u5934\u3002")),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"request"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," \u7684\u652f\u6301\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u628a\u63d2\u4ef6\u7981\u7528\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n    <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u8fdb\u884c\u81ea\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\u4fee\u6539\u529f\u80fd\u3002"))),(0,i.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u987e\u540d\u601d\u4e49\uff0c\u8bf7\u6c42\u63d2\u4ef6\u5c31\u662f\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," \u8bf7\u6c42\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u5339\u914d\u5230\u8bf7\u6c42\u540e\uff0c\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4fee\u6539\u89c4\u5219\uff0c\u5c31\u4f1a\u6539\u53d8\u4e0b\u6e38\u670d\u52a1\u63a5\u53d7\u5230\u7684\u53c2\u6570\u3002")))}s.isMDXComponent=!0}}]);