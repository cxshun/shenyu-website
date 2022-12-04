"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8533:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},i="Architecture",l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Overview",description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",source:"@site/docs/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/next/index",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/index.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},sidebar:"tutorialSidebar",next:{title:"Admin Database Design",permalink:"/docs/next/design/database-design"}},s=[{value:"Run Apache ShenYu Admin",id:"run-apache-shenyu-admin",children:[]},{value:"Run Apache ShenYu Bootstrap",id:"run-apache-shenyu-bootstrap",children:[]},{value:"Set router",id:"set-router",children:[]}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(28749).Z}),"  "),(0,r.kt)("h1",{id:"what-is-the-apache-shenyu"},"What is the Apache ShenYu?"),(0,r.kt)("p",null,"This is an asynchronous, high-performance, cross-language, responsive API gateway."),(0,r.kt)("h1",{id:"why-named-apache-shenyu"},"Why named Apache ShenYu"),(0,r.kt)("p",null,"ShenYu (\u795e\u79b9) is the honorific name of Chinese ancient monarch Xia Yu (also known in later times as Da Yu), who left behind the touching story of the three times he crossed the Yellow River for the benefit of the people and successfully managed the flooding of the river. He is known as one of the three greatest kings of ancient China, along with Yao and Shun."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firstly, the name ShenYu is to promote the traditional virtues of our Chinese civilisation."),(0,r.kt)("li",{parentName:"ul"},"Secondly, the most important thing about the gateway is the governance of the traffic."),(0,r.kt)("li",{parentName:"ul"},"Finally, the community will do things in a fair, just, open and meritocratic way, paying tribute to ShenYu while also conforming to the Apache Way.")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy: Support for Apache\xae Dubbo\u2122, Spring Cloud, gRPC, Motan, SOFA, TARS, WebSocket, MQTT"),(0,r.kt)("li",{parentName:"ul"},"Security: Sign, OAuth 2.0, JSON Web Tokens, WAF plugin"),(0,r.kt)("li",{parentName:"ul"},"API governance: Request, response, parameter mapping, Hystrix, RateLimiter plugin"),(0,r.kt)("li",{parentName:"ul"},"Observability: Tracing, metrics, logging plugin"),(0,r.kt)("li",{parentName:"ul"},"Dashboard: Dynamic traffic control, visual backend for user menu permissions"),(0,r.kt)("li",{parentName:"ul"},"Extensions: Plugin hot-swapping, dynamic loading"),(0,r.kt)("li",{parentName:"ul"},"Cluster: NGINX, Docker, Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Language: provides .NET, Python, Go, Java client for API register")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"mind-map"},"Mind map"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(20460).Z})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"quick-start-docker"},"Quick Start (docker)"),(0,r.kt)("h3",{id:"run-apache-shenyu-admin"},"Run Apache ShenYu Admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin\n> docker network create shenyu\n> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin\n")),(0,r.kt)("p",null,"Default account: ",(0,r.kt)("strong",{parentName:"p"},"admin")," "),(0,r.kt)("p",null,"Default password: ",(0,r.kt)("strong",{parentName:"p"},"123456")),(0,r.kt)("h3",{id:"run-apache-shenyu-bootstrap"},"Run Apache ShenYu Bootstrap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap\n> docker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap\n")),(0,r.kt)("h3",{id:"set-router"},"Set router"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Real requests  \uff1a",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/helloworld"},"http://127.0.0.1:8080/helloworld"),",")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set routing rules (Standalone)")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"localKey: 123456")," to Headers. If you need to customize the localKey, you can use the sha512 tool to generate the key based on plaintext and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu.local.sha512Key")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--header \'localKey: 123456\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy request \uff1a",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9195/helloworld"},"http://localhost:9195/helloworld"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"plugin"},"Plugin"),(0,r.kt)("p",null," Whenever a request comes in, Apache ShenYu will execute it by all enabled plugins through the chain of responsibility."),(0,r.kt)("p",null," As the heart of Apache ShenYu, plugins are extensible and hot-pluggable."),(0,r.kt)("p",null," Different plugins do different things."),(0,r.kt)("p",null," Of course, users can also customize plugins to meet their own needs."),(0,r.kt)("p",null," If you want to customize, see ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/developer/custom-plugin/"},"custom-plugin")," ."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"selector--rule"},"Selector & Rule"),(0,r.kt)("p",null,"  According to your HTTP request headers, selectors and rules are used to route your requests."),(0,r.kt)("p",null,"  Selector is your first route, It is coarser grained, for example, at the module level."),(0,r.kt)("p",null,"  Rule is your second route and what do you think your request should do. For example a method level in a module."),(0,r.kt)("p",null,"  The selector and the rule match only once, and the match is returned. So the coarsest granularity should be sorted last."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"data-caching--data-sync"},"Data Caching & Data Sync"),(0,r.kt)("p",null,"  Since all data have been cached using ConcurrentHashMap in the JVM, it's very fast."),(0,r.kt)("p",null,"  Apache ShenYu dynamically updates the cache by listening to the ZooKeeper node (or WebSocket push, HTTP long polling) when the user changes configuration information in the background management."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(9372).Z})),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(49595).Z})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK 1.8+")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"stargazers-over-time"},"Stargazers over time"),(0,r.kt)("a",{href:"https://starchart.cc/apache/shenyu.svg"},(0,r.kt)("img",{src:"https://starchart.cc/apache/shenyu.svg"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"contributor-and-support"},"Contributor and Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/community/contributor-guide"},"How to Contribute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:dev@shenyu.apache.org"},"Mailing Lists"))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"known-users"},"Known Users"),(0,r.kt)("p",null,"In order of registration, More access companies are welcome to register at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues/68"},"https://github.com/apache/shenyu/issues/68")," (For open source users only) ."),(0,r.kt)("p",null,"All Users : ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/community/user-registration"},"Known Users")),(0,r.kt)("hr",null))}c.isMDXComponent=!0},28749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-architecture-3d-2b673fe8dfd0ef6a14223ffd00bfe824.png"},20460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-xmind-1e9e293ec1650cd3d74beaf7b48464c1.png"},49595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/config-strategy-processor-en-444a26ebaffbb5cba994880b2487541f.png"},9372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-config-processor-en-170fb1137ef0f931707f12aecd38c455.png"}}]);