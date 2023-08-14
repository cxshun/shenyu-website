"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[65894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,m=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(m,i(i({ref:t},g),{},{components:n})):a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56982:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Logging-Pulsar Plugin",keywords:["Logging","pulsar"],description:"Logging-Pulsar Plugin"},i="1. Overview",o={unversionedId:"plugin-center/observability/logging-pulsar",id:"version-2.6.0/plugin-center/observability/logging-pulsar",isDocsHomePage:!1,title:"Logging-Pulsar Plugin",description:"Logging-Pulsar Plugin",source:"@site/versioned_docs/version-2.6.0/plugin-center/observability/logging-pulsar.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-pulsar",permalink:"/docs/plugin-center/observability/logging-pulsar",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/plugin-center/observability/logging-pulsar.md",version:"2.6.0",frontMatter:{title:"Logging-Pulsar Plugin",keywords:["Logging","pulsar"],description:"Logging-Pulsar Plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Logging Plugin",permalink:"/docs/plugin-center/observability/logging-plugin"},next:{title:"Logging-RocketMQ Plugin",permalink:"/docs/plugin-center/observability/logging-rocketmq"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"1.6 Technical Solutions",id:"16-technical-solutions",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Open the plugin and configure pulsar, configure it as follows.",id:"241-open-the-plugin-and-configure-pulsar-configure-it-as-follows",children:[]},{value:"2.4.2 Configuring Selectors and Rulers",id:"242-configuring-selectors-and-rulers",children:[]}]},{value:"2.5 Logging Info",id:"25-logging-info",children:[]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Collect Http Log by Pulsar",id:"261-collect-http-log-by-pulsar",children:[]}]}],s={toc:p},g="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(g,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging-Pulsar Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"collect http request log to Pulsar, consume Pulsar message to another application and analysis.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," The gateway receives requests from the client, forwards them to the server, and returns the server results to the client. The gateway can record the details of each request\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","The list includes: request time, request parameters, request path, response result, response status code, time consumption, upstream IP, exception information waiting.",(0,r.kt)("br",{parentName:"p"}),"\n","The Logging-Pulsar plugin is a plugin that records access logs and sends them to the Pulsar cluster.")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Module ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-pulsar"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Class ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.pulsar.LoggingPulsarPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Claas ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.pulsar.client.PulsarLogCollectClient")))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since ShenYu 2.5.1")),(0,r.kt)("h2",{id:"16-technical-solutions"},"1.6 Technical Solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Architecture Diagram")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90306).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Full asynchronous collection and delivery of ",(0,r.kt)("inlineCode",{parentName:"p"},"Logging")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Logging platform by consuming the logs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar")," cluster for repository, and then using ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Kibana")," or other visualization platform to display"))),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4394).Z})),(0,r.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"Logging-Pulsar")," dependency to the gateway's ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," \x3c!--shenyu logging-pulsar plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-pulsar</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu logging-pulsar plugin end--\x3e\n")),(0,r.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e Basic Configuration --\x3e Plugin Management --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"loggingPulsar"),", configure the pulsar parameter and set it to on.")),(0,r.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.kt)("h3",{id:"241-open-the-plugin-and-configure-pulsar-configure-it-as-follows"},"2.4.1 Open the plugin and configure pulsar, configure it as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70792).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The individual configuration items are described as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"config-item"),(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"remarks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message Queue Topics"),(0,r.kt)("td",{parentName:"tr",align:"left"},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"serviceUrl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message queue service address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sampleRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sampling rate, range 0~1, 0: off, 0.01: acquisition 1%, 1: acquisition 100%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 1, all collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"compressAlg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compression algorithm, no compression by default, currently supports LZ4 compression"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, no compression by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxResponseBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum response size, above the threshold no response will be collected"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxRequestBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum request body size, above the threshold no request body will be collected"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")))),(0,r.kt)("p",null,'Except for topic, serviceUrl, all others are optional, in most cases only these 3 items need to be configured. The default group id is "shenyu-access-logging"'),(0,r.kt)("h3",{id:"242-configuring-selectors-and-rulers"},"2.4.2 Configuring Selectors and Rulers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For detailed configuration of selectors and rules, please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule management"),"\u3002")),(0,r.kt)("p",null,"In addition, sometimes a large gateway cluster corresponds to multiple applications (business), different applications (business) corresponds to different topics, related to isolation,",(0,r.kt)("br",{parentName:"p"}),"\n","then you can configure different topics (optional) and sampling rate (optional) by selector, the meaning of the configuration items as shown in the table above.",(0,r.kt)("br",{parentName:"p"}),"\n","The operation is shown below:\n",(0,r.kt)("img",{src:n(15901).Z})),(0,r.kt)("h2",{id:"25-logging-info"},"2.5 Logging Info"),(0,r.kt)("p",null,"collect request info as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Client IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request time string, format: yyyy-MM-dd HH:mm:ss.SSS"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method (different rpc type is not the same, http class for: get, post wait, rpc class for the interface name)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request query parameters"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request Body (body of binary type will not be captured)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request uri"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body size"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"rpc type"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"response status"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Upstream (program providing the service) IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Time taken by the upstream (program providing the service) to respond to the request (ms ms)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested user agent"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"host"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested host"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested modules"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested path"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested Link Tracking ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Need to access link tracking plugins, such as skywalking,zipkin"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"26-examples"},"2.6 Examples"),(0,r.kt)("h3",{id:"261-collect-http-log-by-pulsar"},"2.6.1 Collect Http Log by Pulsar"),(0,r.kt)("h4",{id:"2611-plugin-configuration"},"2.6.1.1 Plugin Configuration"),(0,r.kt)("p",null,"Open the plugin and configure pulsar, configure it as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70792).Z})),(0,r.kt)("h4",{id:"2612-selector-configuration"},"2.6.1.2 Selector Configuration"),(0,r.kt)("p",null,"For detailed configuration of selectors and rules, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule management"),"\u3002"),(0,r.kt)("p",null,"In addition, sometimes a large gateway cluster corresponds to multiple applications (business), different applications (business) corresponds to different topics, related to isolation,",(0,r.kt)("br",{parentName:"p"}),"\n","then you can configure different topics (optional) and samplingf rate (optional) by selector, the meaning of the configuration items as shown in the table above.",(0,r.kt)("br",{parentName:"p"}),"\n","The operation is shown below:\n",(0,r.kt)("img",{src:n(73824).Z})),(0,r.kt)("h4",{id:"2613-rule-configuration"},"2.6.1.3 Rule Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(36764).Z})),(0,r.kt)("h4",{id:"2614-request-service"},"2.6.1.4 Request Service"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64474).Z})),(0,r.kt)("h4",{id:"2615-consumption-and-display-of-logging"},"2.6.1.5 Consumption and display of Logging"),(0,r.kt)("p",null,"As each logging platform has differences, such as storage available clickhouse, ElasticSearch, etc., visualization has self-developed or open source Grafana, Kibana, etc..",(0,r.kt)("br",{parentName:"p"}),"\n","Logging-Pulsar plugin uses Pulsar to decouple production and consumption, while outputting logs in json format,\nconsumption and visualization require users to choose different technology stacks to achieve their own situation.="),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"loggingPulsar")," set Status disable.")))}u.isMDXComponent=!0},15901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logging-config-7d106f4fbe790030983a05d502a4279d.png"},4394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loggingConsole-use-en-64a3c389309209c07d4ae4602e0e3895.png"},36764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/log-rule-485f460982c9a3179d2aec6baed5cad3.jpg"},73824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logging-option-topic-8f4ee3bca20050803cde1168d93f7743.jpg"},90306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logging-pulsar-arch-2d4e314b30134d63840444462d10840b.jpg"},70792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logging-pulsar-config-76f49201912f1a8b106efaa6244997dc.jpg"},64474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"}}]);