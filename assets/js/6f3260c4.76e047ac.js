"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7931],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=u(t),s=l,y=p["".concat(o,".").concat(s)]||p[s]||c[s]||a;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=s;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[p]="string"==typeof e?e:l,i[1]=g;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},72389:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>g,toc:()=>o});var r=t(58168),l=(t(96540),t(15680));const a={title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},i="1. Overview",g={unversionedId:"plugin-center/fault-tolerance/sentinel-plugin",id:"version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel Plugin",description:"sentinel plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/sentinel-plugin",permalink:"/docs/2.4.3/plugin-center/fault-tolerance/sentinel-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin.md",version:"2.4.3",frontMatter:{title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Resilience4j Plugin",permalink:"/docs/2.4.3/plugin-center/fault-tolerance/resilience4j-plugin"},next:{title:"CryptorRequest plugin",permalink:"/docs/2.4.3/plugin-center/authority-and-certification/cryptor-request-plugin"}},o=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin configuration",id:"241-plugin-configuration",children:[]},{value:"2.4.2 Selector configuration",id:"242-selector-configuration",children:[]},{value:"2.4.3 Rule configuration",id:"243-rule-configuration",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Using sentinel for flow control",id:"251-using-sentinel-for-flow-control",children:[]},{value:"2.5.2 Using sentinel for request circuit breaker",id:"252-using-sentinel-for-request-circuit-breaker",children:[]}]}],u={toc:o},d="wrapper";function p(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"1-overview"},"1. Overview"),(0,l.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Sentinel Plugin")),(0,l.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Sentinel")," is one of the options that supports flow control and circuit breaking."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Sentinel")," supports flow control and circuit breaking functions for gateway.")),(0,l.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"flow control"),(0,l.yg)("li",{parentName:"ul"},"request circuit breaker and service degrade")),(0,l.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Core Module ",(0,l.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-sentinel"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Core Class ",(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sentinel.SentinelPlugin")))),(0,l.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Since 2.4.0")),(0,l.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,l.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(86400).A})),(0,l.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add ",(0,l.yg)("inlineCode",{parentName:"li"},"sentinel")," dependency in the ",(0,l.yg)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway(shenyu-bootstrap).")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu sentinel plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-sentinel</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu sentinel plugin end--\x3e\n")),(0,l.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"In ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,l.yg)("h3",{id:"241-plugin-configuration"},"2.4.1 Plugin configuration"),(0,l.yg)("h3",{id:"242-selector-configuration"},"2.4.2 Selector configuration"),(0,l.yg)("p",null,"It is used to filter traffic for the first time and does not require ",(0,l.yg)("inlineCode",{parentName:"p"},"handle")," fields."),(0,l.yg)("img",{src:"/img/shenyu/plugin/sentinel/selector_en.png",width:"80%",height:"80%"}),(0,l.yg)("h3",{id:"243-rule-configuration"},"2.4.3 Rule configuration"),(0,l.yg)("p",null,"For the final filtering of traffic, there is a rule handler logic."),(0,l.yg)("img",{src:"/img/shenyu/plugin/sentinel/rule_en.png",width:"80%",height:"80%"}),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"field"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"field type"),(0,l.yg)("th",{parentName:"tr",align:null},"desc"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleCount"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Doule"),(0,l.yg)("td",{parentName:"tr",align:null},"degrade threshold")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleEnable"),(0,l.yg)("td",{parentName:"tr",align:null},"1(enabled)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"whether enable circuit breaking function of ",(0,l.yg)("inlineCode",{parentName:"td"},"sentinel"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleGrade"),(0,l.yg)("td",{parentName:"tr",align:null},"0(slow call ratio)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"circuit breaker strategy, support RT of seconds level/ Error Ratio of seconds level/ Error Count of minutes level strategy")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleMinRequestAmount"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"circuit breaker min request amount")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleSlowRatioThreshold"),(0,l.yg)("td",{parentName:"tr",align:null},"1.0d"),(0,l.yg)("td",{parentName:"tr",align:null},"Double"),(0,l.yg)("td",{parentName:"tr",align:null},"slow ratio threshold of degrading")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleStatIntervals"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"status intervals of degrade")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"degradeRuleTimeWindow"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"time of degrading(unit: second)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleControlBehavior"),(0,l.yg)("td",{parentName:"tr",align:null},"0(direact reject)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"effect(reject directly/ queue/ slow start up), it do not support flow control by invocation relation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-direct rejection by default"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-warm up"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-constant speed queuing"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-preheating uniformly queued"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleMaxQueueingTimeMs"),(0,l.yg)("td",{parentName:"tr",align:null},"500ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},'Maximum queuing time (valid in "preheating uniformly queued", "constant speed queuing" mode)')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleWarmUpPeriodSec"),(0,l.yg)("td",{parentName:"tr",align:null},"10"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},'Cold start warm-up time (seconds) (valid in "preheating uniformly queued" "warm up" mode)')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleCount"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"sentinel flow control count")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleEnable"),(0,l.yg)("td",{parentName:"tr",align:null},"1(enabled)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"whether enable sentinel flow control function.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flowRuleGrade"),(0,l.yg)("td",{parentName:"tr",align:null},"1(QPS)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"type of current limit threshold(QPS or Thread Count)\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fallbackUri"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"degraded uri after circuit breaking.")))),(0,l.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,l.yg)("h3",{id:"251-using-sentinel-for-flow-control"},"2.5.1 Using sentinel for flow control"),(0,l.yg)("h4",{id:"2511-plugin-configuration"},"2.5.1.1 Plugin configuration"),(0,l.yg)("p",null,"For more information on selectors and rules configuration, see ",(0,l.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"In ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.yg)("h4",{id:"2512-selector-configuration"},"2.5.1.2 Selector configuration"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(19112).A})),(0,l.yg)("h4",{id:"2513-rule-configuration"},"2.5.1.3 Rule configuration"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(93563).A})),(0,l.yg)("p",null,"just use qps flow control strategy, and qps is 10, reject strategy is directly reject."),(0,l.yg)("p",null,"the code is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n}\n')),(0,l.yg)("h4",{id:"2514-request-by-apache-jmeter"},"2.5.1.4 request by ",(0,l.yg)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Jmeter thead group config")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(41606).A})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Jmeter http request config")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(38636).A})),(0,l.yg)("h4",{id:"2515-check-result"},"2.5.1.5 Check result"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(70429).A})),(0,l.yg)("h3",{id:"252-using-sentinel-for-request-circuit-breaker"},"2.5.2 Using sentinel for request circuit breaker"),(0,l.yg)("h4",{id:"2521-plugin-configuration"},"2.5.2.1 Plugin configuration"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"In ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"sentinel")," set to enable.")),(0,l.yg)("h4",{id:"2522-selector-configuration"},"2.5.2.2 Selector configuration"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(19112).A})),(0,l.yg)("h4",{id:"2523-rule-configuration"},"2.5.2.3 Rule configuration"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(62439).A})),(0,l.yg)("p",null,"when degrade strategy is ",(0,l.yg)("inlineCode",{parentName:"p"},"exception number"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold")," is not effective. When the minimum number of requests per unit of time is 5, and the request happens exception great than 3, it will trigger the circuit breaker."),(0,l.yg)("p",null,"when degrade strategy is ",(0,l.yg)("inlineCode",{parentName:"p"},"slow call ratio"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold")," is effective, ",(0,l.yg)("inlineCode",{parentName:"p"},"degradeRuleCount")," means RT(e.g. 200)."),(0,l.yg)("p",null,"the code is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n\n        Random random = new Random();\n        int num = random.nextInt(100);\n        if (num > 40) {\n            throw new RuntimeException("num great than 20");\n        }\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n\n}\n')),(0,l.yg)("h4",{id:"2524-request-by-apache-jmeter"},"2.5.2.4 request by ",(0,l.yg)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Jmeter thead group config")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(41606).A})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Jmeter http request config")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(38636).A})),(0,l.yg)("h4",{id:"2525-check-result"},"2.5.2.5 Check result"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(58010).A})),(0,l.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"In ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"sentinel")," set Status disable.")))}p.isMDXComponent=!0},86400:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},62439:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/example-circuitbreaker-rule-23ad5dcc03364812c69954f80c5c3500.png"},58010:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/example-circuitbreaker-02859aa4ac59f7c652b3c99ba9baf4b8.png"},93563:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/example-rule-en-1e1c6c944c9fd26e59bf67b72134bc96.png"},19112:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/example-selector-en-e663414645580533c9955129d6f307b6.png"},41606:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/sentinel-flow-control-config-a199d4df41efcc9c6a8b70dc7f0e3548.png"},38636:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/sentinel-flow-control-http-c656d6e601942c7c6f9ee04aa61d95e2.png"},70429:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/sentinel-flow-control-91b365f39a45d8bd4d3998b9e9278ea0.png"}}]);