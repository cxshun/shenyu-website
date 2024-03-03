"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82096],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>s});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,s=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(s,l(l({ref:t},y),{},{components:r})):n.createElement(s,l({ref:t},y))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:a,l[1]=g;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78338:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={title:"Client Property Config",keywords:["Config"],description:"Client Property Config"},l=void 0,g={unversionedId:"user-guide/property-config/client-property-config",id:"version-2.4.1/user-guide/property-config/client-property-config",isDocsHomePage:!1,title:"Client Property Config",description:"Client Property Config",source:"@site/versioned_docs/version-2.4.1/user-guide/property-config/client-property-config.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/client-property-config",permalink:"/docs/2.4.1/user-guide/property-config/client-property-config",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/user-guide/property-config/client-property-config.md",version:"2.4.1",frontMatter:{title:"Client Property Config",keywords:["Config"],description:"Client Property Config"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Admin Property Config",permalink:"/docs/2.4.1/user-guide/property-config/admin-property-config"},next:{title:"Gateway Property Config",permalink:"/docs/2.4.1/user-guide/property-config/gateway-property-config"}},p=[{value:"Property Config",id:"property-config",children:[]},{value:"Property Detail",id:"property-detail",children:[]}],o={toc:p},y="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This paper mainly explains how to configure the properties of Apache ShenYu when the client accesses the gateway."),(0,a.yg)("p",null,"Set the ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu")," property in your microservice, for example, in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.1/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")," :"),(0,a.yg)("img",{src:"/img/shenyu/config/shenyu_client_application_config.png",width:"80%",height:"70%"}),(0,a.yg)("h3",{id:"property-config"},"Property Config"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189\n      nacosNameSpace: ShenyuRegisterCenter\n\n")),(0,a.yg)("h3",{id:"property-detail"},"Property Detail"),(0,a.yg)("h5",{id:"shenyuclient-config"},"shenyu.client config"),(0,a.yg)("p",null,"This section describes configurations related to client access. For details about client access principles, see: ",(0,a.yg)("a",{parentName:"p",href:"../../design/register-center-design"},"Application Client Access")," , for client access configuration, see: ",(0,a.yg)("a",{parentName:"p",href:"../register-center-access"},"Application Client Access Config")," ."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"registerType"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"http"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Which mode to use for registry. Currently, http, zookeeper, etcd, consul and nacos are supported.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"serverLists"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Configure the address of the registry. In clustering, multiple addresses are separated by commas (,).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"props"),(0,a.yg)("td",{parentName:"tr",align:"left"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"left"},"The value of the property varies according to the registerType.")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"props")," config")),(0,a.yg)("p",null,"When microservices are built by different protocols, the property configuration is slightly different. The general attributes are as follows:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"contextPath"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"The route prefix of the microservice in the gateway.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"appName"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"microservice name. ",(0,a.yg)("inlineCode",{parentName:"td"},"springcloud")," service don't set, please set ",(0,a.yg)("inlineCode",{parentName:"td"},"spring.application.name"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"host"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"microservice address")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"port"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"microservice port")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"isFull"),(0,a.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},"false"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Whether to proxy the all service, currently just applies to ",(0,a.yg)("inlineCode",{parentName:"td"},"springmvc"),"/ ",(0,a.yg)("inlineCode",{parentName:"td"},"springcloud"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"ipAndPort"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Service IP and port address, currently just applies to ",(0,a.yg)("inlineCode",{parentName:"td"},"gRPC")," Proxy.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"shutdownWaitTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"3000"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"shutdown wait time(millisecond)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"delayOtherHooksExecTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"2000"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"hook")," execute time(millisecond)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"applicationShutdownHooksClassName"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("inlineCode",{parentName:"td"},"java.lang.ApplicationShutdownHooks")),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"hook")," execute class name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"applicationShutdownHooksFieldName"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("inlineCode",{parentName:"td"},"hooks")),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"hook")," execute field name")))),(0,a.yg)("p",null,"The value of the property varies according to the ",(0,a.yg)("inlineCode",{parentName:"p"},"registerType"),"."),(0,a.yg)("p",null,"When the registerType is ",(0,a.yg)("inlineCode",{parentName:"p"},"nacos"),", there has no other properties."),(0,a.yg)("p",null,"When the registerType is ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),", the supported properties are as follows."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"30000"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"session time out(millisecond)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"3000"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"connection time out(millisecond)")))),(0,a.yg)("p",null,"When the registerType is ",(0,a.yg)("inlineCode",{parentName:"p"},"etcd"),", the supported properties are as follows."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"etcdTimeout"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"30000"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"etcd time out(millisecond)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"etcdTTL"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"5"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"client lease time to live(second)")))),(0,a.yg)("p",null,"When the registerType is ",(0,a.yg)("inlineCode",{parentName:"p"},"nacos"),", the supported properties are as follows."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"nacosNameSpace"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"namespace")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"username"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},'""'),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"username")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"password"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},'""'),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"password")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"accessKey"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},'""'),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"accessKey")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"secretKey"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},'""'),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,a.yg)("p",null,"When the registerType is ",(0,a.yg)("inlineCode",{parentName:"p"},"consul"),", no other property configuration is provided. please set ",(0,a.yg)("inlineCode",{parentName:"p"},"spring.cloud.consul")," for the configuration."))}d.isMDXComponent=!0}}]);