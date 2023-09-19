"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15791:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"2.4.0",sidebar_position:7,keywords:["release-notes"],description:"release-notes"},l="2.4.0",o={unversionedId:"2.4.0-release",id:"2.4.0-release",isDocsHomePage:!1,title:"2.4.0",description:"release-notes",source:"@site/event/2.4.0-release.md",sourceDirName:".",slug:"/2.4.0-release",permalink:"/event/2.4.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.4.0-release.md",version:"current",lastUpdatedBy:"Runqi Zhao",lastUpdatedAt:1695092191,formattedLastUpdatedAt:"9/19/2023",sidebarPosition:7,frontMatter:{title:"2.4.0",sidebar_position:7,keywords:["release-notes"],description:"release-notes"}},u=[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],p={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"240"},"2.4.0"),(0,a.kt)("h2",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support reading init_script file which is not under resource/directory"),(0,a.kt)("li",{parentName:"ul"},"Display the plugin menus in categories"),(0,a.kt)("li",{parentName:"ul"},"Admin add execute Multi-path sql script"),(0,a.kt)("li",{parentName:"ul"},"IpUtils add a parameter to select the network ip"),(0,a.kt)("li",{parentName:"ul"},"Add parameter-mapping plugin"),(0,a.kt)("li",{parentName:"ul"},"Support Consul as shenyu-register-center"),(0,a.kt)("li",{parentName:"ul"},"Support Etcd as shenyu-sync-data-center"),(0,a.kt)("li",{parentName:"ul"},"Add sentinel customized fallbackhandler"),(0,a.kt)("li",{parentName:"ul"},"Add response plugin"),(0,a.kt)("li",{parentName:"ul"},"Add JWT plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Request plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Motan plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Logging plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Modify-response plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Oauth2 plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Menu Resource Permissions"),(0,a.kt)("li",{parentName:"ul"},"Add Data Permissions")),(0,a.kt)("h2",{id:"api-changes"},"API Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the project name from Soul to ShenYu"),(0,a.kt)("li",{parentName:"ul"},"Change the group id from org.dromara to org.apache.shenyu")),(0,a.kt)("h2",{id:"enhancement"},"Enhancement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H2 support insert ingore into in Mysql model"),(0,a.kt)("li",{parentName:"ul"},"Improvements For the Apache Dubbo plugin"),(0,a.kt)("li",{parentName:"ul"},"Optimization of GRPC plugin")),(0,a.kt)("h2",{id:"refactor"},"Refactor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Refactor code about "async invoke" is not supported in Dubbo lower than 2.7.3'),(0,a.kt)("li",{parentName:"ul"},"Replace the term Operator by Predicate"),(0,a.kt)("li",{parentName:"ul"},"Refine judge conditions operator"),(0,a.kt)("li",{parentName:"ul"},"Refactor PredicateJudge module using SPI"),(0,a.kt)("li",{parentName:"ul"},"Refactor code about client register")),(0,a.kt)("h2",{id:"bug-fix"},"Bug Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix the JwtUtil.getUserId method bug"),(0,a.kt)("li",{parentName:"ul"},"Fix the shenyu-spring-boot-starter bug"),(0,a.kt)("li",{parentName:"ul"},"The encoded urlPath will be re-encoded in WebClientPlugin"),(0,a.kt)("li",{parentName:"ul"},'Replace The Risky Cryptographic Algorithm "AES/ECB/NoPadding"'),(0,a.kt)("li",{parentName:"ul"},"ReadTimeoutHandler on a channel which in a PooledConnectionProvider would cause an unexpected ReadTimeoutException"),(0,a.kt)("li",{parentName:"ul"},"Got ClassNotFoundException while start my Gateway in 2.4.8 spring boot")))}c.isMDXComponent=!0}}]);