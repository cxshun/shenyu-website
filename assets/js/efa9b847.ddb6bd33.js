"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[17569],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>h});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return t?i.createElement(h,o(o({ref:n},g),{},{components:t})):i.createElement(h,o({ref:n},g))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74890:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=t(87462),l=(t(67294),t(3905));const r={title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},o="1. Overview",a={unversionedId:"plugin-center/observability/logging-plugin",id:"plugin-center/observability/logging-plugin",isDocsHomePage:!1,title:"Logging Plugin",description:"logging plugin",source:"@site/docs/plugin-center/observability/logging-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-plugin",permalink:"/docs/next/plugin-center/observability/logging-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/observability/logging-plugin.md",version:"current",frontMatter:{title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},sidebar:"tutorialSidebar",previous:{title:"Logging-Kafka Plugin",permalink:"/docs/next/plugin-center/observability/logging-kafka"},next:{title:"Logging-Pulsar Plugin",permalink:"/docs/next/plugin-center/observability/logging-pulsar"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[]},{value:"2.5 Examples",id:"25-examples",children:[]},{value:"2.5.1 Collect all http request log",id:"251-collect-all-http-request-log",children:[{value:"2.5.1.1 Selctor Configuration",id:"2511-selctor-configuration",children:[]},{value:"2.5.1.2 Rule Configuration",id:"2512-rule-configuration",children:[]},{value:"2.5.1.3 Call Http Service",id:"2513-call-http-service",children:[]},{value:"2.5.1.4 Check Result",id:"2514-check-result",children:[]}]}],s={toc:u};function g(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1-overview"},"1. Overview"),(0,l.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Logging-Console Plugin")),(0,l.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users may want to view the information about request(including request headers, request parameters, response headers, response body...etc) where in the side of gateway when debugging during development or troubleshooting problems online.")),(0,l.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Collect http request url, header, request body, response and response body by logback or log4j, the log file will be saved locally. ")),(0,l.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Core Module ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-pluign-logging-console"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Core Class ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.console.LoggingConsolePlugin")))),(0,l.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,l.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,l.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(4394).Z})),(0,l.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-console</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e loggingConsole set Status enable.")),(0,l.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,l.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,l.kt)("h2",{id:"251-collect-all-http-request-log"},"2.5.1 Collect all http request log"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"you must open loggingConsole plugin before you use loggingConsole plugin.")),(0,l.kt)("h3",{id:"2511-selctor-configuration"},"2.5.1.1 Selctor Configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(90646).Z})),(0,l.kt)("h3",{id:"2512-rule-configuration"},"2.5.1.2 Rule Configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(69666).Z})),(0,l.kt)("h3",{id:"2513-call-http-service"},"2.5.1.3 Call Http Service"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(76921).Z})),(0,l.kt)("h3",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,l.kt)("p",null,"if the request arrived successfully, you will see request information as follow."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Request Uri: http://localhost:9195/test/payment\nRequest Method: POST\n\n[Request Headers Start]\nContent-Type: application/json\nContent-Length: 46\nHost: localhost:9195\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.13 (Java/11.0.11)\nCookie: JSESSIONID=CD325CE813F61BB37783A1D0835959DD\nAccept-Encoding: gzip,deflate\n[Request Headers End]\n\n[Request Body Start]\n{\n  "userId": "11",\n  "userName": "xiaoming"\n}\n[Request Body End]\n\nResponse Code: 200 OK\n\n[Response Headers Start]\ntransfer-encoding: chunked\nContent-Length: 37\nContent-Type: application/json\n[Response Headers End]\n\n[Response Body Start]\n{"userId":"11","userName":"xiaoming"}\n[Response Body End]\n')),(0,l.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"loggingConsole")," set Status disable.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(45124).Z})))}g.isMDXComponent=!0},76921:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"},69666:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/log-rule-en-d09e07905e13a68c6f28941fe2d5a8e1.jpg"},90646:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/log-selector-en-cfb6bca5a768524b0300d65eee1947d2.jpg"},4394:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/loggingConsole-use-en-64a3c389309209c07d4ae4602e0e3895.png"},45124:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/unenable-log-plugin-en-dba4c92e874037084d051575fa90e2e0.jpg"}}]);