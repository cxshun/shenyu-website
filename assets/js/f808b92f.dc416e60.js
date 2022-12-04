"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=l,m=c["".concat(u,".").concat(g)]||c[g]||s[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60005:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},i="1. Overview",o={unversionedId:"plugin-center/fault-tolerance/sentinel-plugin",id:"plugin-center/fault-tolerance/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel Plugin",description:"sentinel plugin",source:"@site/docs/plugin-center/fault-tolerance/sentinel-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/sentinel-plugin",permalink:"/docs/next/plugin-center/fault-tolerance/sentinel-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/fault-tolerance/sentinel-plugin.md",version:"current",frontMatter:{title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},sidebar:"tutorialSidebar",previous:{title:"Resilience4j Plugin",permalink:"/docs/next/plugin-center/fault-tolerance/resilience4j-plugin"},next:{title:"Casdoor Plugin",permalink:"/docs/next/plugin-center/security/casdoor"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin configuration",id:"241-plugin-configuration",children:[]},{value:"2.4.2 Selector configuration",id:"242-selector-configuration",children:[]},{value:"2.4.3 Rule configuration",id:"243-rule-configuration",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Using sentinel for flow control",id:"251-using-sentinel-for-flow-control",children:[]},{value:"2.5.2 Using sentinel for request circuit breaker",id:"252-using-sentinel-for-request-circuit-breaker",children:[]}]}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1-overview"},"1. Overview"),(0,l.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sentinel Plugin")),(0,l.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Sentinel")," is one of the options that supports flow control and circuit breaking."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Sentinel")," supports flow control and circuit breaking functions for gateway.")),(0,l.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flow control"),(0,l.kt)("li",{parentName:"ul"},"request circuit breaker and service degrade")),(0,l.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Core Module ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-sentinel"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Core Class ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sentinel.SentinelPlugin")))),(0,l.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Since 2.4.0")),(0,l.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,l.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(74327).Z})),(0,l.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," dependency in the ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway(shenyu-bootstrap).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu sentinel plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-sentinel</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu sentinel plugin end--\x3e\n")),(0,l.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,l.kt)("h3",{id:"241-plugin-configuration"},"2.4.1 Plugin configuration"),(0,l.kt)("h3",{id:"242-selector-configuration"},"2.4.2 Selector configuration"),(0,l.kt)("p",null,"It is used to filter traffic for the first time and does not require ",(0,l.kt)("inlineCode",{parentName:"p"},"handle")," fields."),(0,l.kt)("img",{src:"/img/shenyu/plugin/sentinel/selector_en.png",width:"80%",height:"80%"}),(0,l.kt)("h3",{id:"243-rule-configuration"},"2.4.3 Rule configuration"),(0,l.kt)("p",null,"For the final filtering of traffic, there is a rule handler logic."),(0,l.kt)("img",{src:"/img/shenyu/plugin/sentinel/rule_en.png",width:"80%",height:"80%"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"field type"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleCount"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Doule"),(0,l.kt)("td",{parentName:"tr",align:null},"degrade threshold")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleEnable"),(0,l.kt)("td",{parentName:"tr",align:null},"1(enabled)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"whether enable circuit breaking function of ",(0,l.kt)("inlineCode",{parentName:"td"},"sentinel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleGrade"),(0,l.kt)("td",{parentName:"tr",align:null},"0(slow call ratio)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"circuit breaker strategy, support RT of seconds level/ Error Ratio of seconds level/ Error Count of minutes level strategy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleMinRequestAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"circuit breaker min request amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleSlowRatioThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0d"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"slow ratio threshold of degrading")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleStatIntervals"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"status intervals of degrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"degradeRuleTimeWindow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"time of degrading(unit: second)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior"),(0,l.kt)("td",{parentName:"tr",align:null},"0(direact reject)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"effect(reject directly/ queue/ slow start up), it do not support flow control by invocation relation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-direct rejection by default"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-warm up"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-constant speed queuing"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-preheating uniformly queued"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleMaxQueueingTimeMs"),(0,l.kt)("td",{parentName:"tr",align:null},"500ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},'Maximum queuing time (valid in "preheating uniformly queued", "constant speed queuing" mode)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleWarmUpPeriodSec"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},'Cold start warm-up time (seconds) (valid in "preheating uniformly queued" "warm up" mode)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleCount"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"sentinel flow control count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleEnable"),(0,l.kt)("td",{parentName:"tr",align:null},"1(enabled)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"whether enable sentinel flow control function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flowRuleGrade"),(0,l.kt)("td",{parentName:"tr",align:null},"1(QPS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"type of current limit threshold(QPS or Thread Count)\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fallbackUri"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"degraded uri after circuit breaking.")))),(0,l.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,l.kt)("h3",{id:"251-using-sentinel-for-flow-control"},"2.5.1 Using sentinel for flow control"),(0,l.kt)("h4",{id:"2511-plugin-configuration"},"2.5.1.1 Plugin configuration"),(0,l.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,l.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.kt)("h4",{id:"2512-selector-configuration"},"2.5.1.2 Selector configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(30037).Z})),(0,l.kt)("h4",{id:"2513-rule-configuration"},"2.5.1.3 Rule configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(36780).Z})),(0,l.kt)("p",null,"just use qps flow control strategy, and qps is 10, reject strategy is directly reject."),(0,l.kt)("p",null,"the code is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n}\n')),(0,l.kt)("h4",{id:"2514-request-by-apache-jmeter"},"2.5.1.4 request by ",(0,l.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jmeter thead group config")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(74501).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jmeter http request config")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(11676).Z})),(0,l.kt)("h4",{id:"2515-check-result"},"2.5.1.5 Check result"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(90658).Z})),(0,l.kt)("h3",{id:"252-using-sentinel-for-request-circuit-breaker"},"2.5.2 Using sentinel for request circuit breaker"),(0,l.kt)("h4",{id:"2521-plugin-configuration"},"2.5.2.1 Plugin configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.kt)("h4",{id:"2522-selector-configuration"},"2.5.2.2 Selector configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(30037).Z})),(0,l.kt)("h4",{id:"2523-rule-configuration"},"2.5.2.3 Rule configuration"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7932).Z})),(0,l.kt)("p",null,"when degrade strategy is ",(0,l.kt)("inlineCode",{parentName:"p"},"exception number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold")," is not effective. When the minimum number of requests per unit of time is 5, and the request happens exception great than 3, it will trigger the circuit breaker."),(0,l.kt)("p",null,"when degrade strategy is ",(0,l.kt)("inlineCode",{parentName:"p"},"slow call ratio"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold")," is effective, ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeRuleCount")," means RT(e.g. 200)."),(0,l.kt)("p",null,"the code is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n\n        Random random = new Random();\n        int num = random.nextInt(100);\n        if (num > 40) {\n            throw new RuntimeException("num great than 20");\n        }\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n\n}\n')),(0,l.kt)("h4",{id:"2524-request-by-apache-jmeter"},"2.5.2.4 request by ",(0,l.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jmeter thead group config")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(74501).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jmeter http request config")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(11676).Z})),(0,l.kt)("h4",{id:"2525-check-result"},"2.5.2.5 Check result"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(67275).Z})),(0,l.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," set Status disable.")))}p.isMDXComponent=!0},74327:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},7932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-circuitbreaker-rule-23ad5dcc03364812c69954f80c5c3500.png"},67275:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-circuitbreaker-02859aa4ac59f7c652b3c99ba9baf4b8.png"},36780:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-rule-en-1e1c6c944c9fd26e59bf67b72134bc96.png"},30037:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-selector-en-e663414645580533c9955129d6f307b6.png"},74501:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sentinel-flow-control-config-a199d4df41efcc9c6a8b70dc7f0e3548.png"},11676:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sentinel-flow-control-http-c656d6e601942c7c6f9ee04aa61d95e2.png"},90658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sentinel-flow-control-91b365f39a45d8bd4d3998b9e9278ea0.png"}}]);