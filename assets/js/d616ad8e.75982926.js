"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97102],{15680:(e,n,i)=>{i.d(n,{xA:()=>s,yg:()=>y});var l=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var g=l.createContext({}),u=function(e){var n=l.useContext(g),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},s=function(e){var n=u(e.components);return l.createElement(g.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,g=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(i),d=t,y=p["".concat(g,".").concat(d)]||p[d]||c[d]||r;return i?l.createElement(y,o(o({ref:n},s),{},{components:i})):l.createElement(y,o({ref:n},s))}));function y(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=d;var a={};for(var g in n)hasOwnProperty.call(n,g)&&(a[g]=n[g]);a.originalType=e,a[p]="string"==typeof e?e:t,o[1]=a;for(var u=2;u<r;u++)o[u]=i[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},21147:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>g});var l=i(58168),t=(i(96540),i(15680));const r={title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},o="1. Overview",a={unversionedId:"plugin-center/observability/logging-plugin",id:"version-2.4.3/plugin-center/observability/logging-plugin",isDocsHomePage:!1,title:"Logging Plugin",description:"logging plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/observability/logging-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-plugin",permalink:"/docs/2.4.3/plugin-center/observability/logging-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/observability/logging-plugin.md",version:"2.4.3",frontMatter:{title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Waf Plugin",permalink:"/docs/2.4.3/plugin-center/authority-and-certification/waf-plugin"},next:{title:"Logging-RocketMQ Plugin",permalink:"/docs/2.4.3/plugin-center/observability/logging-rocketmq"}},g=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[]},{value:"2.5 Examples",id:"25-examples",children:[]},{value:"2.5.1 Collect all http request log",id:"251-collect-all-http-request-log",children:[{value:"2.5.1.1 Selector Configuration",id:"2511-selector-configuration",children:[]},{value:"2.5.1.2 Rule Configuration",id:"2512-rule-configuration",children:[]},{value:"2.5.1.3 Call Http Service",id:"2513-call-http-service",children:[]},{value:"2.5.1.4 Check Result",id:"2514-check-result",children:[]}]}],u={toc:g},s="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(s,(0,l.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"1-overview"},"1. Overview"),(0,t.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Logging-Console Plugin")),(0,t.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Users may want to view the information about request(including request headers, request parameters, response headers, response body...etc) where in the side of gateway when debugging during development or troubleshooting problems online.")),(0,t.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Collect http request url, header, request body, response and response body by logback or log4j, the log file will be saved locally. ")),(0,t.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Module ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-pluign-logging-console"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Class ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.console.LoggingConsolePlugin")))),(0,t.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Since shenyu 2.4.0")),(0,t.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,t.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(56053).A})),(0,t.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,t.yg)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-console</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,t.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e loggingConsole set Status enable.")),(0,t.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.4.3/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,t.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,t.yg)("h2",{id:"251-collect-all-http-request-log"},"2.5.1 Collect all http request log"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"you must open loggingConsole plugin before you use loggingConsole plugin.")),(0,t.yg)("h3",{id:"2511-selector-configuration"},"2.5.1.1 Selector Configuration"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(26229).A})),(0,t.yg)("h3",{id:"2512-rule-configuration"},"2.5.1.2 Rule Configuration"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(47350).A})),(0,t.yg)("h3",{id:"2513-call-http-service"},"2.5.1.3 Call Http Service"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(12119).A})),(0,t.yg)("h3",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,t.yg)("p",null,"if the request arrived successfully, you will see request information as follow."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'Request Uri: http://localhost:9195/test/payment\nRequest Method: POST\n\n[Request Headers Start]\nContent-Type: application/json\nContent-Length: 46\nHost: localhost:9195\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.13 (Java/11.0.11)\nCookie: JSESSIONID=CD325CE813F61BB37783A1D0835959DD\nAccept-Encoding: gzip,deflate\n[Request Headers End]\n\n[Request Body Start]\n{\n  "userId": "11",\n  "userName": "xiaoming"\n}\n[Request Body End]\n\nResponse Code: 200 OK\n\n[Response Headers Start]\ntransfer-encoding: chunked\nContent-Length: 37\nContent-Type: application/json\n[Response Headers End]\n\n[Response Body Start]\n{"userId":"11","userName":"xiaoming"}\n[Response Body End]\n')),(0,t.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"loggingConsole")," set Status disable.")),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(78708).A})))}p.isMDXComponent=!0},12119:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"},47350:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/log-rule-en-d09e07905e13a68c6f28941fe2d5a8e1.jpg"},26229:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/log-selector-en-cfb6bca5a768524b0300d65eee1947d2.jpg"},56053:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/loggingConsole-use-en-64a3c389309209c07d4ae4602e0e3895.png"},78708:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/unenable-log-plugin-en-dba4c92e874037084d051575fa90e2e0.jpg"}}]);