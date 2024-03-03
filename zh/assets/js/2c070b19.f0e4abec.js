"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[24161],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>s});var r=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function g(e,n){if(null==e)return{};var a,r,l=function(e,n){if(null==e)return{};var a,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),m=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,l=e.mdxType,t=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),y=m(a),u=l,s=y["".concat(p,".").concat(u)]||y[u]||N[u]||t;return a?r.createElement(s,i(i({ref:n},o),{},{components:a})):r.createElement(s,i({ref:n},o))}));function s(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=a.length,i=new Array(t);i[0]=u;var g={};for(var p in n)hasOwnProperty.call(n,p)&&(g[p]=n[p]);g.originalType=e,g[y]="string"==typeof e?e:l,i[1]=g;for(var m=2;m<t;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99368:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>t,metadata:()=>g,toc:()=>p});var r=a(58168),l=(a(96540),a(15680));const t={title:"Mock \u63d2\u4ef6",keywords:["mock"],description:"mock\u63d2\u4ef6"},i="1. \u6982\u8ff0",g={unversionedId:"plugin-center/mock/mock-plugin",id:"version-2.6.1/plugin-center/mock/mock-plugin",isDocsHomePage:!1,title:"Mock \u63d2\u4ef6",description:"mock\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/mock/mock-plugin.md",sourceDirName:"plugin-center/mock",slug:"/plugin-center/mock/mock-plugin",permalink:"/zh/docs/plugin-center/mock/mock-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/mock/mock-plugin.md",version:"2.6.1",frontMatter:{title:"Mock \u63d2\u4ef6",keywords:["mock"],description:"mock\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u7f13\u5b58\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/cache/cache-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",permalink:"/zh/docs/developer/spi/custom-load-balance"}},p=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c",children:[]},{value:"2.1 \u5bfc\u5165 pom",id:"21-\u5bfc\u5165-pom",children:[]},{value:"2.2 \u542f\u7528\u63d2\u4ef6",id:"22-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.3 \u914d\u7f6e\u63d2\u4ef6",id:"23-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.4 <code>${}</code> \u652f\u6301\u7684\u8bed\u6cd5",id:"24--\u652f\u6301\u7684\u8bed\u6cd5",children:[]}],m={toc:p},o="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(o,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,l.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Mock\u63d2\u4ef6")),(0,l.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4e3a\u8bf7\u6c42\u6307\u5b9a\u54cd\u5e94\u72b6\u6001\u7801\u548c\u54cd\u5e94\u4f53\u65b9\u4fbf\u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,l.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bf7\u6c42\u7684\u54cd\u5e94\u72b6\u6001\u7801\u548c\u54cd\u5e94\u4f53\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"li"},"${}")," \u5360\u4f4d\u7b26\u81ea\u52a8\u751f\u6210\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u6ce8\u610f:")," mock \u63d2\u4ef6\u4e3a\u4e86\u652f\u6301\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u751f\u6210\u65b9\u5f0f\uff0c\u652f\u6301\u7528\u6237\u4f7f\u7528 SpEL \u8868\u8fbe\u5f0f\u751fmock\u6570\u636e\u3002\u4f7f\u7528SpEL\u8868\u8fbe\u5f0f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6267\u884c\u6076\u610f\u811a\u672c\u6216\u5e94\u7528\u7834\u574f\u6027\u7a0b\u5e8f\u7684\u98ce\u9669\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u4f7f\u7528\u65f6\u683c\u5916\u5c0f\u5fc3\uff0c\u5c3d\u53ef\u80fd\u5728\u5b89\u5168\u7684\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4f8b\u5982\u5185\u7f51\u73af\u5883\uff0c\u5e76\u9075\u5faa\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u3002")),(0,l.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-mock")),(0,l.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b ",(0,l.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.MockPlugin"))),(0,l.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"2.5.0")),(0,l.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,l.yg)("h2",{id:"21-\u5bfc\u5165-pom"},"2.1 \u5bfc\u5165 pom"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mock</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,l.yg)("h2",{id:"22-\u542f\u7528\u63d2\u4ef6"},"2.2 \u542f\u7528\u63d2\u4ef6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"mock")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(61985).A})),(0,l.yg)("h2",{id:"23-\u914d\u7f6e\u63d2\u4ef6"},"2.3 \u914d\u7f6e\u63d2\u4ef6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,l.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"shenyu-admin mock \u63d2\u4ef6\u914d\u7f6e\uff0c\u652f\u6301\u914d\u7f6e httpStatusCode \u548c responseContent\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"httpStatusCode:\u914d\u7f6e\u8bf7\u6c42\u7684\u54cd\u5e94\u7801\u3002"),(0,l.yg)("li",{parentName:"ul"},"responseContent:\u914d\u7f6e\u54cd\u5e94\u4f53\u5185\u5bb9\uff0c\u652f\u6301\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"li"},"${}")," \u5360\u4f4d\u7b26\u751f\u6210\u968f\u673a\u6570\u636e  \u3002")))),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(76107).A})),(0,l.yg)("h2",{id:"24--\u652f\u6301\u7684\u8bed\u6cd5"},"2.4 ",(0,l.yg)("inlineCode",{parentName:"h2"},"${}")," \u652f\u6301\u7684\u8bed\u6cd5"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${int|min-max}"))),"   "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u7684\u968f\u673a\u6574\u6570\uff0c\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u3002 "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${int|10-20}"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${double|min-max|format}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u7684\u968f\u673a\u6d6e\u70b9\u6570 \uff0c\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff0c\u5e76\u6309\u7167 ",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u8fdb\u884c\u683c\u5f0f\u5316\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${double|10-20}")," , ",(0,l.yg)("inlineCode",{parentName:"li"},"${double|10-20.5|%.2f}"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${email}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u968f\u673a\u7684\u90ae\u7bb1\u5730\u5740\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${phone}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u968f\u673a\u768413\u4f4d\u624b\u673a\u53f7\u7801\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${zh|min-max}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \uff08\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff09\u7684\u968f\u673a\u4e2d\u6587\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${zh|10-20}"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${en|min-max}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \uff08\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff09\u7684\u968f\u673a\u82f1\u6587\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${en|10-20}"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${bool}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u968f\u673a\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," \u7c7b\u578b\u7684\u503c \u5373 ",(0,l.yg)("inlineCode",{parentName:"li"},"true")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"li"},"false"),"\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${list|[arg1,arg2...]}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u968f\u673a\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u503c"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${list|[gril,boy]}")," \u4f1a\u8fd4\u56de girl \u6216 boy \u4e2d\u4efb\u610f\u4e00\u4e2a\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${current|format}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u5e76\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u683c\u5f0f\u5316\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u53ef\u7f3a\u7701\uff0c\u9ed8\u8ba4\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"YYYY-MM-dd HH:mm:ss"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${current}"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"${current|YYYY-MM-dd}"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("del",{parentName:"strong"},(0,l.yg)("inlineCode",{parentName:"del"},"${array|item|length}")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u6309\u7167 ",(0,l.yg)("inlineCode",{parentName:"li"},"item")," \u683c\u5f0f\u5b9a\u4e49\u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"length")," \u7684\u6570\u7ec4, ",(0,l.yg)("inlineCode",{parentName:"li"},"item")," \u4e2d\u53ef\u4ee5\u5d4c\u5957\u4f7f\u7528\u4e0a\u8ff0\u7684\u6240\u6709\u6570\u636e\u751f\u6210\u89c4\u5219\uff0c\u7ed3\u679c\u4f1a\u81ea\u52a8\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"li"},"[]"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},'${array|{"name":"test"}|3}')," \u4f1a\u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},'[{"name":"test"},{"name":"test"},{"name":"test"}]'),"\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},'${array|{"age":${int|18-65}}|3}'))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"${expression|expression}")),(0,l.yg)("p",null,"\u76ee\u524d\u652f\u6301spel\u8868\u8fbe\u5f0f\u5e76\u5185\u7f6e\u4e86\u4e00\u4e9b\u51fd\u6570\u548c\u53c2\u6570\uff0c\u5b8c\u5168\u53ef\u66ff\u6362\u65e7\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"${}"),"\u8bed\u6cd5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#int(min,max)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u7684\u968f\u673a\u6574\u6570\uff0c\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u3002 ")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#int(1,2)}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#double(min,max)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \u7684\u968f\u673a\u6d6e\u70b9\u6570 \uff0c\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff0c\u5e76\u6309\u7167 ",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u8fdb\u884c\u683c\u5f0f\u5316\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#double(10.5,12.0)}"),",",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#double(10.5,12.0,'\uffe5%.2f')}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#email()}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u968f\u673a\u7684\u90ae\u7bb1\u5730\u5740\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#phone()}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a"),"  \u751f\u6210\u968f\u673a\u768413\u4f4d\u624b\u673a\u53f7\u7801\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|zh(min,max)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \uff08\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff09\u7684\u968f\u673a\u4e2d\u6587\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#zh(1,10)}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|en(min,max)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a"),"  \u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"max")," \uff08\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"min")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"max"),"\uff09\u7684\u968f\u673a\u82f1\u6587\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#en(1,10)}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#bool()}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u751f\u6210\u968f\u673a\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," \u7c7b\u578b\u7684\u503c \u5373 ",(0,l.yg)("inlineCode",{parentName:"li"},"true")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"li"},"false"),"\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#oneOf(arg1,arg2...)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u968f\u673a\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u503c\uff0c\u4e0d\u9650\u5236\u7c7b\u578b"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#oneOf('shenyu','number',1)}")," \u4f1a\u8fd4\u56de 'shneyu' \u6216 'number' \u6216\u8005\u6570\u503c1\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|current()}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e\uff1a")," \u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u5e76\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u683c\u5f0f\u5316\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"format")," \u53ef\u7f3a\u7701\uff0c\u9ed8\u8ba4\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"YYYY-MM-dd HH:mm:ss"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#current()}"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#current('YYYY-MM-dd')}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#array(item,length)}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u6309\u7167 ",(0,l.yg)("inlineCode",{parentName:"p"},"item")," \u683c\u5f0f\u5b9a\u4e49\u751f\u6210\u957f\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"length")," \u7684\u6570\u7ec4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")," ",(0,l.yg)("inlineCode",{parentName:"p"},"expression|#array('shenyu',3)")," \u4f1a\u751f\u6210 ",(0,l.yg)("inlineCode",{parentName:"p"},'["shenyu","shenyu","shenyu"]'),"."),(0,l.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u5d4c\u5957\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"${expression|#array(#bool(),2)}"),"\u6216\u8005",(0,l.yg)("inlineCode",{parentName:"p"},"${expression|#array(#array('shenyu',2),2)}"))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|#req}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u5185\u7f6e\u8bf7\u6c42\u53c2\u6570\uff0c\u53ef\u6839\u636e\u8bf7\u6c42\u5185\u5bb9\u751f\u6210\u54cd\u5e94\u6570\u636e"),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#req.method}"),"\u3001",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#req.queries['query_name']}"),"\u3001",(0,l.yg)("inlineCode",{parentName:"li"},"${req.queries.query_name}"),"\u3001",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#req.uri}"),"\u3002\u5f53\u8bf7\u6c42\u4f53\u4e3ajson\u65f6,\u53ef\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"li"},"jsonPath"),"\uff0c\u6bd4\u5982\u8bf7\u6c42\u4f53\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},'{"name":"shenyu"}'),"\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|#req.json.name}"),'\u5c06\u8fd4\u56de"shenyu"'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"${expression|spel}"))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u8bf4\u660e"),"\uff1a\u76f4\u63a5\u4f7f\u7528Spel\u8868\u8fbe\u5f0f\u751f\u6210\u6570\u636e"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u793a\u4f8b"),"\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|T(java.time.LocalDate).now()}"),"\u3001",(0,l.yg)("inlineCode",{parentName:"li"},"${expression|1==1}"))),(0,l.yg)("p",{parentName:"li"},"\u5efa\u8bae\u4f7f\u7528\u65b0\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"${}"),"\u8bed\u6cd5\uff0c\u65e7\u7684\u8bed\u6cd5\u529f\u80fd\u53ef\u80fd\u62e9\u671f\u88ab\u79fb\u9664\u3002"),(0,l.yg)("p",{parentName:"li"},"\u529f\u80fd\u53ef\u66ff\u6362\u67e5\u770b\u8868\uff1a"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"old"),(0,l.yg)("th",{parentName:"tr",align:null},"new"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${int","|","min-max}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#int(min,max)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${double","|","min-max","|","format}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#double(min,max)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${email}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#email()}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${phone}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#phone()}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${zh","|","min-max}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#zh(min,max)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${en","|","min-max}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#en(min,max)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${list","|","[arg1,arg2...]","}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#oneOf(arg1,agr2...)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${current","|","format}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#current(format)}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${bool}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression","|","#bool()}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"${array","|","item","|","length}"),(0,l.yg)("td",{parentName:"tr",align:null},"${expression#array(item,length)}")))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"strong"},'""')," \u5305\u88f9 ",(0,l.yg)("inlineCode",{parentName:"strong"},"${}")," ,mock\u63d2\u4ef6\u4f1a\u6839\u636e ",(0,l.yg)("inlineCode",{parentName:"strong"},"generator"),"\u7684\u5b9a\u4e49\u589e\u52a0\u524d\u7f00\u548c\u540e\u7f00\u3002")))}y.isMDXComponent=!0},61985:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/enable-mock-plugin-zh-6925181b0abc8ae524aab8285b30444a.png"},76107:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/mock-rule-configuration-zh-44468a4098be522ed5fddbe098b9bf77.png"}}]);