"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46272],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),y=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},m=function(e){var t=y(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=y(n),o=a,d=s["".concat(l,".").concat(o)]||s[o]||p[o]||c;return n?r.createElement(d,g(g({ref:t},m),{},{components:n})):r.createElement(d,g({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,g=new Array(c);g[0]=o;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,g[1]=i;for(var y=2;y<c;y++)g[y]=n[y];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},47778:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const c={sidebar_position:8,title:"Benchmark Test Report",keywords:["test","benchmark-test"],description:"ShenYu Benchmark Test Report"},g=void 0,i={unversionedId:"benchmark-test/benchmark-test",id:"version-2.6.0/benchmark-test/benchmark-test",isDocsHomePage:!1,title:"Benchmark Test Report",description:"ShenYu Benchmark Test Report",source:"@site/versioned_docs/version-2.6.0/benchmark-test/benchmark-test.md",sourceDirName:"benchmark-test",slug:"/benchmark-test/benchmark-test",permalink:"/docs/2.6.0/benchmark-test/benchmark-test",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/benchmark-test/benchmark-test.md",version:"2.6.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Benchmark Test Report",keywords:["test","benchmark-test"],description:"ShenYu Benchmark Test Report"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Thread Model",permalink:"/docs/2.6.0/developer/thread-model"}},l=[{value:"Hardware",id:"hardware",children:[{value:"Back-end Mock Service Server:",id:"back-end-mock-service-server",children:[]},{value:"Gateway node server:",id:"gateway-node-server",children:[]}]},{value:"ShenYu Version",id:"shenyu-version",children:[]},{value:"Test Tool",id:"test-tool",children:[]},{value:"Test Case Description",id:"test-case-description",children:[{value:"Instruction",id:"instruction",children:[]},{value:"JVM Configuration",id:"jvm-configuration",children:[]},{value:"Public Configuration",id:"public-configuration",children:[]},{value:"WebClient Configuration",id:"webclient-configuration",children:[]},{value:"Netty Client Configuration",id:"netty-client-configuration",children:[]}]},{value:"Benchmark Test Results",id:"benchmark-test-results",children:[{value:"Direct Access to Back-end Test Result",id:"direct-access-to-back-end-test-result",children:[]},{value:"Access to Back-end Services via NettyClient Test Result",id:"access-to-back-end-services-via-nettyclient-test-result",children:[]},{value:"Access to Back-end Services via WebClient Test Result",id:"access-to-back-end-services-via-webclient-test-result",children:[]}]}],y={toc:l},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hardware"},"Hardware"),(0,a.yg)("h3",{id:"back-end-mock-service-server"},"Back-end Mock Service Server:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CPU: 4 cores and 8 threads Intel Cascade Lake @ 3.0GHz"),(0,a.yg)("li",{parentName:"ul"},"RAM: 16G")),(0,a.yg)("h3",{id:"gateway-node-server"},"Gateway node server:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CPU: 4 cores and 8 threads Intel Cascade Lake @ 3.0GHz"),(0,a.yg)("li",{parentName:"ul"},"RAM: 16G")),(0,a.yg)("p",null,"The test tool takes up few resources and is installed on the gateway node server."),(0,a.yg)("h2",{id:"shenyu-version"},"ShenYu Version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ShenYu Admin: 2.6.0"),(0,a.yg)("li",{parentName:"ul"},"ShenYu Bootstrap: 2.6.0")),(0,a.yg)("h2",{id:"test-tool"},"Test Tool"),(0,a.yg)("p",null,"wrk-4.2.0"),(0,a.yg)("h2",{id:"test-case-description"},"Test Case Description"),(0,a.yg)("h3",{id:"instruction"},"Instruction"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use the Mock service to simulate an interface with an average response time of 20ms and about 2k response messages"),(0,a.yg)("li",{parentName:"ul"},"Each test lasts 3 minutes"),(0,a.yg)("li",{parentName:"ul"},"JDK version: OpenJdk-1.8.0"),(0,a.yg)("li",{parentName:"ul"},"The HTTP request side is tested with ",(0,a.yg)("inlineCode",{parentName:"li"},"NettyClient")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"WebClient")," respectively"),(0,a.yg)("li",{parentName:"ul"},"Log level is set to ",(0,a.yg)("inlineCode",{parentName:"li"},"WARN")),(0,a.yg)("li",{parentName:"ul"},"Apache ShenYu Bootstrap deploy mode: standalone"),(0,a.yg)("li",{parentName:"ul"},"Apache ShenYu Admin deploy in ",(0,a.yg)("inlineCode",{parentName:"li"},"Back-end Mock Service Server"))),(0,a.yg)("h3",{id:"jvm-configuration"},"JVM Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-Xmx 4g \n-Xms 4g \n-Xmn 1g \n-Xss 512k \n-XX: +DisableExplicitGC \n-XX: LargePageSizeInBytes=128m\n")),(0,a.yg)("h3",{id:"public-configuration"},"Public Configuration"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"application.yml\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},"matchCache:\n  selector:\n    selectorEnabled: true\n    initialCapacity: 10000 # initial capacity in cache\n    maximumSize: 10000 # max size in cache\n  rule:\n    initialCapacity: 10000 # initial capacity in cache\n    maximumSize: 65536 # max size in cache\ntrie:\n  enabled: true\n  childrenSize: 10000\n  pathVariableSize: 1000\n  pathRuleCacheSize: 1000\n  matchMode: antPathMatch\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},'netty:\n  http:\n  # set to false, user can custom the netty tcp server config.\n  webServerFactoryEnabled: true\n  selectCount: 1\n  workerCount: 8\n  accessLog: false\n  serverSocketChannel:\n    soRcvBuf: 87380\n    soBackLog: 128\n    soReuseAddr: false\n    connectTimeoutMillis: 10000\n    writeBufferHighWaterMark: 65536\n    writeBufferLowWaterMark: 32768\n    writeSpinCount: 16\n    autoRead: false\n    allocType: "pooled"\n    messageSizeEstimator: 8\n    singleEventExecutorPerGroup: true\n  socketChannel:\n    soKeepAlive: false\n    soReuseAddr: false\n    soLinger: -1\n    tcpNoDelay: true\n    soRcvBuf: 87380\n    soSndBuf: 16384\n    ipTos: 0\n    allowHalfClosure: false\n    connectTimeoutMillis: 10000\n    writeBufferHighWaterMark: 65536\n    writeBufferLowWaterMark: 32768\n    writeSpinCount: 16\n    autoRead: false\n    allocType: "pooled"\n    messageSizeEstimator: 8\n    singleEventExecutorPerGroup: true\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"  file:\n    enabled: false\n    maxSize : 10\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"  cross:\n    enabled: false\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"logging:\n  level:\n    root: warn\n    org.springframework.boot: warn\n    org.apache.ibatis: warn\n    org.apache.shenyu.bonuspoint: warn\n    org.apache.shenyu.lottery: warn\n    org.apache.shenyu: warn\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"logback.xml")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},'    <root level="WARN">\n        <appender-ref ref="ASYNC_STDOUT"/>\n        <appender-ref ref="ASYNC_FILE"/>\n        <appender-ref ref="ASYNC_ERROR_FILE"/>\n    </root>\n')),(0,a.yg)("h3",{id:"webclient-configuration"},"WebClient Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},"httpclient:\n  strategy: webClient # netty\n  connectTimeout: 45000 # 45000\n  responseTimeout: 3000 # 3000\n  readerIdleTime: 3000 # 3000\n  writerIdleTime: 3000 # 3000\n  allIdleTime: 3000 # 3000\n  readTimeout: 3000 # 3000\n  writeTimeout: 3000 # 3000\n  wiretap: false # false\n  keepAlive: false # false\n  maxInMemorySize: 1 # 1\n  pool:\n    type: ELASTIC # ELASTIC\n    name: proxy # proxy\n    maxConnections: 16 # 16\n    acquireTimeout: 45000 # 45000\n    maxIdleTime: 3000 # 3000\n")),(0,a.yg)("h3",{id:"netty-client-configuration"},"Netty Client Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},"httpclient:\n  strategy: netty # netty\n  connectTimeout: 45000 # 45000\n  responseTimeout: 3000 # 3000\n  readerIdleTime: 3000 # 3000\n  writerIdleTime: 3000 # 3000\n  allIdleTime: 3000 # 3000\n  readTimeout: 3000 # 3000\n  writeTimeout: 3000 # 3000\n  wiretap: false # false\n  keepAlive: false # false\n  maxInMemorySize: 1 # 1\n  pool:\n    type: ELASTIC # ELASTIC\n    name: proxy # proxy\n    maxConnections: 16 # 16\n    acquireTimeout: 45000 # 45000\n    maxIdleTime: 3000 # 3000\n")),(0,a.yg)("h2",{id:"benchmark-test-results"},"Benchmark Test Results"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Direct Access to Back-end Test Result")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"QPS")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"50% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"75% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"90% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"99% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4(ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"\u6700\u5927\u54cd\u5e94\u65f6\u95f4(ms)")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"28998.20"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.81"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.78"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.26"),(0,a.yg)("td",{parentName:"tr",align:"center"},"41.24"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20.92"),(0,a.yg)("td",{parentName:"tr",align:"center"},"402.90")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"netty")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"currency"),(0,a.yg)("th",{parentName:"tr",align:"center"},"QPS"),(0,a.yg)("th",{parentName:"tr",align:"center"},"50% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"75% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"90% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"99% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4(ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u6700\u5927\u54cd\u5e94\u65f6\u95f4(ms)"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"600  currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20472.95"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.37"),(0,a.yg)("td",{parentName:"tr",align:"center"},"25.36"),(0,a.yg)("td",{parentName:"tr",align:"center"},"32.89"),(0,a.yg)("td",{parentName:"tr",align:"center"},"69.92"),(0,a.yg)("td",{parentName:"tr",align:"center"},"22.09"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1043.33")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"800  currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20703.55"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.57"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.32"),(0,a.yg)("td",{parentName:"tr",align:"center"},"40.11"),(0,a.yg)("td",{parentName:"tr",align:"center"},"77.28"),(0,a.yg)("td",{parentName:"tr",align:"center"},"26.11"),(0,a.yg)("td",{parentName:"tr",align:"center"},"576.47")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1000 currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20979.91"),(0,a.yg)("td",{parentName:"tr",align:"center"},"29.21"),(0,a.yg)("td",{parentName:"tr",align:"center"},"37.86"),(0,a.yg)("td",{parentName:"tr",align:"center"},"47.23"),(0,a.yg)("td",{parentName:"tr",align:"center"},"80.91"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.20"),(0,a.yg)("td",{parentName:"tr",align:"center"},"860.55")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1200 currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"21129.88"),(0,a.yg)("td",{parentName:"tr",align:"center"},"32.45"),(0,a.yg)("td",{parentName:"tr",align:"center"},"42.40"),(0,a.yg)("td",{parentName:"tr",align:"center"},"52.68"),(0,a.yg)("td",{parentName:"tr",align:"center"},"96.10"),(0,a.yg)("td",{parentName:"tr",align:"center"},"35.06"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1070")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"webClient")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"currency"),(0,a.yg)("th",{parentName:"tr",align:"center"},"QPS"),(0,a.yg)("th",{parentName:"tr",align:"center"},"50% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"75% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"90% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"99% latency (ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4(ms)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u6700\u5927\u54cd\u5e94\u65f6\u95f4(ms)"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"600  currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18640.47"),(0,a.yg)("td",{parentName:"tr",align:"center"},"15.77"),(0,a.yg)("td",{parentName:"tr",align:"center"},"24.77"),(0,a.yg)("td",{parentName:"tr",align:"center"},"38.26"),(0,a.yg)("td",{parentName:"tr",align:"center"},"80.31"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20.32"),(0,a.yg)("td",{parentName:"tr",align:"center"},"852.06")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"800  currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18723.44"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18.12"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.69"),(0,a.yg)("td",{parentName:"tr",align:"center"},"44.96"),(0,a.yg)("td",{parentName:"tr",align:"center"},"95.3"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.52"),(0,a.yg)("td",{parentName:"tr",align:"center"},"765.26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1000 currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18928.99"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.99"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.42"),(0,a.yg)("td",{parentName:"tr",align:"center"},"49.09"),(0,a.yg)("td",{parentName:"tr",align:"center"},"108.84"),(0,a.yg)("td",{parentName:"tr",align:"center"},"25.93"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1040")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1200 currency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18965.37"),(0,a.yg)("td",{parentName:"tr",align:"center"},"22.10"),(0,a.yg)("td",{parentName:"tr",align:"center"},"34.62"),(0,a.yg)("td",{parentName:"tr",align:"center"},"54.48"),(0,a.yg)("td",{parentName:"tr",align:"center"},"122.31"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.66"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1075")))),(0,a.yg)("h3",{id:"direct-access-to-back-end-test-result"},"Direct Access to Back-end Test Result"),(0,a.yg)("h4",{id:"test-result"},"Test Result"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"QPS")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"50% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"75% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"90% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"99% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Avg response time (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Max response time (ms)")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"28998.20"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.81"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.78"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.26"),(0,a.yg)("td",{parentName:"tr",align:"center"},"41.24"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20.92"),(0,a.yg)("td",{parentName:"tr",align:"center"},"402.90")))),(0,a.yg)("h4",{id:"screenshot-of-test-result"},"Screenshot of Test Result"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/origin/1.png",width:"100%",height:"100%"}),(0,a.yg)("h3",{id:"access-to-back-end-services-via-nettyclient-test-result"},"Access to Back-end Services via NettyClient Test Result"),(0,a.yg)("h5",{id:"test-result-1"},"Test Result"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"currency"),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"QPS")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"50% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"75% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"90% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"99% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Avg response time (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Max response time (ms)")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"600 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20472.95"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.37"),(0,a.yg)("td",{parentName:"tr",align:"center"},"25.36"),(0,a.yg)("td",{parentName:"tr",align:"center"},"32.89"),(0,a.yg)("td",{parentName:"tr",align:"center"},"69.92"),(0,a.yg)("td",{parentName:"tr",align:"center"},"22.09"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1043.33")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"800 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20703.55"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.57"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.32"),(0,a.yg)("td",{parentName:"tr",align:"center"},"40.11"),(0,a.yg)("td",{parentName:"tr",align:"center"},"77.28"),(0,a.yg)("td",{parentName:"tr",align:"center"},"26.11"),(0,a.yg)("td",{parentName:"tr",align:"center"},"576.47")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1000 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20979.91"),(0,a.yg)("td",{parentName:"tr",align:"center"},"29.21"),(0,a.yg)("td",{parentName:"tr",align:"center"},"37.86"),(0,a.yg)("td",{parentName:"tr",align:"center"},"47.23"),(0,a.yg)("td",{parentName:"tr",align:"center"},"80.91"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.20"),(0,a.yg)("td",{parentName:"tr",align:"center"},"860.55")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1200 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"21129.88"),(0,a.yg)("td",{parentName:"tr",align:"center"},"32.45"),(0,a.yg)("td",{parentName:"tr",align:"center"},"42.40"),(0,a.yg)("td",{parentName:"tr",align:"center"},"52.68"),(0,a.yg)("td",{parentName:"tr",align:"center"},"96.10"),(0,a.yg)("td",{parentName:"tr",align:"center"},"35.06"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1070")))),(0,a.yg)("h4",{id:"screenshot-of-test-result-1"},"Screenshot of Test Result"),(0,a.yg)("h5",{id:"600-concurrency"},"600 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/600-currency/8-thread/1-netty-cache-selector.png",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/600-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/600-currency/8-thread/3-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"800-concurrency"},"800 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/800-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/800-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/800-currency/8-thread/3-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"1000-concurrency"},"1000 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1000-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1000-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1000-currency/8-thread/3-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"1200-concurrency"},"1200 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1200-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1200-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/netty/1200-currency/8-thread/3-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h3",{id:"access-to-back-end-services-via-webclient-test-result"},"Access to Back-end Services via WebClient Test Result"),(0,a.yg)("h4",{id:"test-result-2"},"Test Result"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"currency"),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"QPS")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"50% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"75% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"90% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"99% latency (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Avg response time (ms)")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"Max response time (ms)")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"600 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18640.47"),(0,a.yg)("td",{parentName:"tr",align:"center"},"15.77"),(0,a.yg)("td",{parentName:"tr",align:"center"},"24.77"),(0,a.yg)("td",{parentName:"tr",align:"center"},"38.26"),(0,a.yg)("td",{parentName:"tr",align:"center"},"80.31"),(0,a.yg)("td",{parentName:"tr",align:"center"},"20.32"),(0,a.yg)("td",{parentName:"tr",align:"center"},"852.06")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"800 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18723.44"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18.12"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.69"),(0,a.yg)("td",{parentName:"tr",align:"center"},"44.96"),(0,a.yg)("td",{parentName:"tr",align:"center"},"95.3"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.52"),(0,a.yg)("td",{parentName:"tr",align:"center"},"765.26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1000 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18928.99"),(0,a.yg)("td",{parentName:"tr",align:"center"},"19.99"),(0,a.yg)("td",{parentName:"tr",align:"center"},"31.42"),(0,a.yg)("td",{parentName:"tr",align:"center"},"49.09"),(0,a.yg)("td",{parentName:"tr",align:"center"},"108.84"),(0,a.yg)("td",{parentName:"tr",align:"center"},"25.93"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1040")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"1200 concurrency"),(0,a.yg)("td",{parentName:"tr",align:"center"},"18965.37"),(0,a.yg)("td",{parentName:"tr",align:"center"},"22.10"),(0,a.yg)("td",{parentName:"tr",align:"center"},"34.62"),(0,a.yg)("td",{parentName:"tr",align:"center"},"54.48"),(0,a.yg)("td",{parentName:"tr",align:"center"},"122.31"),(0,a.yg)("td",{parentName:"tr",align:"center"},"28.66"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1075")))),(0,a.yg)("h4",{id:"screenshot-of-test-result-2"},"Screenshot of Test Result"),(0,a.yg)("h5",{id:"600-concurrency-1"},"600 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/600-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/600-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/600-currency/8-thread/3-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"800-concurrency-1"},"800 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/800-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/800-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"1000-concurrency-1"},"1000 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/1000-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/1000-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("h5",{id:"1200-concurrency-1"},"1200 concurrency"),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/1200-currency/8-thread/1-netty-cache-selector.jpg",width:"100%",height:"100%"}),(0,a.yg)("img",{src:"/img/shenyu/benchmark-test/http/1200-currency/8-thread/2-netty-cache-selector.jpg",width:"100%",height:"100%"}))}s.isMDXComponent=!0}}]);