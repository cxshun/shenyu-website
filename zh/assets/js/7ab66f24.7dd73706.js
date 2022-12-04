"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[72509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),d=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,c=m["".concat(p,".").concat(s)]||m[s]||k[s]||r;return n?l.createElement(c,i(i({ref:t},o),{},{components:n})):l.createElement(c,i({ref:t},o))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60683:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const r={title:"Sentinel\u63d2\u4ef6",keywords:["Sentinel"],description:"sentinel\u63d2\u4ef6"},i="1. \u6982\u8ff0",u={unversionedId:"plugin-center/fault-tolerance/sentinel-plugin",id:"version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel\u63d2\u4ef6",description:"sentinel\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/sentinel-plugin",permalink:"/zh/docs/2.4.3/plugin-center/fault-tolerance/sentinel-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/plugin-center/fault-tolerance/sentinel-plugin.md",version:"2.4.3",frontMatter:{title:"Sentinel\u63d2\u4ef6",keywords:["Sentinel"],description:"sentinel\u63d2\u4ef6"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Resilience4j\u63d2\u4ef6",permalink:"/zh/docs/2.4.3/plugin-center/fault-tolerance/resilience4j-plugin"},next:{title:"CryptorRequest \u63d2\u4ef6",permalink:"/zh/docs/2.4.3/plugin-center/authority-and-certification/cryptor-request-plugin"}},p=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u9009\u62e9\u5668\u914d\u9970",id:"242-\u9009\u62e9\u5668\u914d\u9970",children:[]},{value:"2.4.3 \u89c4\u5219\u914d\u7f6e",id:"243-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u4f7f\u7528sentinel\u8fdb\u884c\u6d41\u91cf\u63a7\u5236",id:"251-\u4f7f\u7528sentinel\u8fdb\u884c\u6d41\u91cf\u63a7\u5236",children:[]},{value:"2.5.2 \u4f7f\u7528sentinel\u8fdb\u884c\u7194\u65ad\u964d\u7ea7\u63a7\u5236",id:"252-\u4f7f\u7528sentinel\u8fdb\u884c\u7194\u65ad\u964d\u7ea7\u63a7\u5236",children:[]}]}],d={toc:p};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,a.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sentinel\u63d2\u4ef6")),(0,a.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u9650\u6d41\u4e0e\u7194\u65ad\u7684\u53ef\u9009\u9009\u62e9\u4e4b\u4e00\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\u63d2\u4ef6\u4e3a\u7f51\u5173\u7194\u65ad\u9650\u6d41\u63d0\u4f9b\u80fd\u529b\u3002")),(0,a.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u63a7\u5236"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7194\u65ad\u548c\u670d\u52a1\u964d\u7ea7")),(0,a.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6838\u5fc3\u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-sentinel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sentinel.SentinelPlugin")))),(0,a.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2.4.0")),(0,a.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,a.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26692).Z})),(0,a.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel")," \u4f9d\u8d56\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu sentinel plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-sentinel</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu sentinel plugin end--\x3e\n")),(0,a.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,a.kt)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("h3",{id:"242-\u9009\u62e9\u5668\u914d\u9970"},"2.4.2 \u9009\u62e9\u5668\u914d\u9970"),(0,a.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u7b2c\u4e00\u6b21\u7b5b\u9009\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u5b57\u6bb5\u3002"),(0,a.kt)("img",{src:"/img/shenyu/plugin/sentinel/selector_zh.png",width:"80%",height:"80%"}),(0,a.kt)("h3",{id:"243-\u89c4\u5219\u914d\u7f6e"},"2.4.3 \u89c4\u5219\u914d\u7f6e"),(0,a.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u6700\u7ec8\u7b5b\u9009\uff0c\u6709\u89c4\u5219\u5904\u7406\u903b\u8f91\u3002"),(0,a.kt)("img",{src:"/img/shenyu/plugin/sentinel/rule_zh.png",width:"80%",height:"80%"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"field"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"),(0,a.kt)("th",{parentName:"tr",align:null},"field type"),(0,a.kt)("th",{parentName:"tr",align:null},"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleCount"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Doule"),(0,a.kt)("td",{parentName:"tr",align:null},"\u964d\u7ea7\u9608\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleEnable"),(0,a.kt)("td",{parentName:"tr",align:null},"1(enabled)"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(\u662f\u5426\u5f00\u542f\u6d41\u63a7 (1\u62160) ) \uff1a\u662f\u5426\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"td"},"sentinel"),"\u7684\u6d41\u63a7\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleGrade"),(0,a.kt)("td",{parentName:"tr",align:null},"0(slow call ratio)"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(\u65ad\u8def\u5668\u7b56\u7565): \u652f\u6301\u79d2\u7ea7RT/\u79d2\u7ea7Error Ratio/\u5206\u949f\u7ea7Error Count\u7b56\u7565\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleMinRequestAmount"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65ad\u8def\u5668\u6700\u5c0f\u8bf7\u6c42\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleSlowRatioThreshold"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0d"),(0,a.kt)("td",{parentName:"tr",align:null},"Double"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9000\u5316\u7684\u6162\u6bd4\u7387\u9608\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleStatIntervals"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u964d\u7ea7\u7684\u72b6\u6001\u95f4\u9694\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"degradeRuleTimeWindow"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9000\u5316\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior"),(0,a.kt)("td",{parentName:"tr",align:null},"0(direact reject)"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6548\u679c\uff08\u76f4\u63a5\u62d2\u7edd/\u6392\u961f/\u6162\u542f\u52a8/\u51b7\u542f\u52a8+\u5300\u901f\u5668\uff09\uff0c\u4e0d\u652f\u6301\u8c03\u7528\u5173\u7cfb\u6d41\u63a7\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-direct rejection by default"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"direct rejection by default \uff08\u76f4\u63a5\u62d2\u7edd\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-warm up"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"warm up \uff08\u51b7\u542f\u52a8\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-constant speed queuing"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"constant speed queuing \uff08\u5300\u901f\u6392\u961f\uff0c\u6f0f\u6876\u7b97\u6cd5 \uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleControlBehavior-preheating uniformly queued"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u51b7\u542f\u52a8+\u5300\u901f\u5668\uff0c\u9664\u4e86\u8ba9\u6d41\u91cf\u7f13\u6162\u589e\u52a0\uff0c\u8fd8\u8fd8\u63a7\u5236\u7684\u4e86\u8bf7\u6c42\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u8ba9\u8bf7\u6c42\u5747\u5300\u901f\u5ea6\u901a\u8fc7\u3002\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleMaxQueueingTimeMs"),(0,a.kt)("td",{parentName:"tr",align:null},"500ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u6392\u961f\u7b49\u5f85\u65f6\u957f\uff08\u5728 \u201cpreheating uniformly queued\u201c, \u201cconstant speed queuing\u201c \u6a21\u5f0f\u751f\u6548\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleWarmUpPeriodSec"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51b7\u542f\u52a8\u9884\u70ed\u65f6\u957f\uff08\u79d2\uff09  (\u5728 \u201cpreheating uniformly queued\u201d \u201cwarm up\u201d \u6a21\u5f0f\u4e0b\u751f\u6548)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleCount"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u54e8\u5175\u6d41\u63a7\u5236\u8ba1\u6570\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleEnable"),(0,a.kt)("td",{parentName:"tr",align:null},"1(enabled)"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u54e8\u5175\u6d41\u63a7\u529f\u80fd\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flowRuleGrade"),(0,a.kt)("td",{parentName:"tr",align:null},"1(QPS)"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u6d41\u9608\u503c\u7684\u7c7b\u578b\uff08QPS \u6216 Thread Count\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fallbackUri"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65ad\u8def\u540e\u964d\u7ea7\u7684uri\u3002")))),(0,a.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,a.kt)("h3",{id:"251-\u4f7f\u7528sentinel\u8fdb\u884c\u6d41\u91cf\u63a7\u5236"},"2.5.1 \u4f7f\u7528sentinel\u8fdb\u884c\u6d41\u91cf\u63a7\u5236"),(0,a.kt)("h4",{id:"2511-\u63d2\u4ef6\u914d\u7f6e"},"2.5.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.kt)("h4",{id:"2512-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(46416).Z})),(0,a.kt)("h4",{id:"2513-\u89c4\u5219\u914d\u7f6e"},"2.5.1.3 \u89c4\u5219\u914d\u7f6e"),(0,a.kt)("p",null,"\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\uff0c \u8fd9\u91cc\u53ea\u5bf9\u90e8\u5206\u5b57\u6bb5\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53617).Z})),(0,a.kt)("p",null,"\u4f7f\u7528qps\u9650\u6d41\u7b56\u7565\uff0c\u5e76\u4e14qps\u4e3a10\uff0c\u62d2\u7edd\u7b56\u7565\u4e3a\u76f4\u63a5\u62d2\u7edd\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n}\n')),(0,a.kt)("h4",{id:"2514-\u901a\u8fc7apache-jmeter\u8bf7\u6c42\u7f51\u5173"},"2.5.1.4 \u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter"),"\u8bf7\u6c42\u7f51\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jmeter\u7ebf\u7a0b\u7ec4\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74501).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jmeter http\u8bf7\u6c42\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11676).Z})),(0,a.kt)("h4",{id:"2515-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.5 \u9a8c\u8bc1\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90658).Z})),(0,a.kt)("h3",{id:"252-\u4f7f\u7528sentinel\u8fdb\u884c\u7194\u65ad\u964d\u7ea7\u63a7\u5236"},"2.5.2 \u4f7f\u7528sentinel\u8fdb\u884c\u7194\u65ad\u964d\u7ea7\u63a7\u5236"),(0,a.kt)("h4",{id:"2521-\u63d2\u4ef6\u914d\u7f6e"},"2.5.2.1 \u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.kt)("h4",{id:"2522-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.2.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(46416).Z})),(0,a.kt)("h4",{id:"2523-\u89c4\u5219\u914d\u7f6e"},"2.5.2.3 \u89c4\u5219\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7932).Z})),(0,a.kt)("p",null,"\u5f53degrade strategy\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"exception number"),"\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold"),"\u65e0\u6548\u3002 \u5f53\u5355\u4f4d\u65f6\u95f4\u5185\u7684\u6700\u5c0f\u8bf7\u6c42\u6570\u4e3a 5\uff0c\u4e14\u8bf7\u6c42\u53d1\u751f\u7684\u5f02\u5e38\u5927\u4e8e 3 \u65f6\uff0c\u5c06\u89e6\u53d1\u65ad\u8def\u5668\u3002"),(0,a.kt)("p",null,"\u5f53degrade strategy\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"slow call ratio"),"\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold"),"\u6709\u6548\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"degradeRuleCount"),"\u8868\u793aRT\uff08\u4f8b\u5982200\uff09\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/order")\n@ShenyuSpringMvcClient("/order")\npublic class OrderController {\n\n    /**\n     * Save order dto.\n     *\n     * @param orderDTO the order dto\n     * @return the order dto\n     */\n    @PostMapping("/save")\n    @ShenyuSpringMvcClient("/save")\n    public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n\n        Random random = new Random();\n        int num = random.nextInt(100);\n        if (num > 40) {\n            throw new RuntimeException("num great than 20");\n        }\n        orderDTO.setName("hello world save order");\n        return orderDTO;\n    }\n\n}\n')),(0,a.kt)("h4",{id:"2524-\u901a\u8fc7apache-jmeter\u8bf7\u6c42\u7f51\u5173"},"2.5.2.4 \u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter"),"\u8bf7\u6c42\u7f51\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jmeter\u7ebf\u7a0b\u7ec4\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74501).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jmeter http\u8bf7\u6c42\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11676).Z})),(0,a.kt)("h4",{id:"2525-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.2.5 \u9a8c\u8bc1\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(67275).Z})),(0,a.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}o.isMDXComponent=!0},26692:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"},7932:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/example-circuitbreaker-rule-23ad5dcc03364812c69954f80c5c3500.png"},67275:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/example-circuitbreaker-02859aa4ac59f7c652b3c99ba9baf4b8.png"},53617:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/example-rule-zh-49d617990fbfa018631a165347ec1b5e.png"},46416:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/example-selector-zh-1a8962c916e696101689e85ca8594b08.png"},74501:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/sentinel-flow-control-config-a199d4df41efcc9c6a8b70dc7f0e3548.png"},11676:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/sentinel-flow-control-http-c656d6e601942c7c6f9ee04aa61d95e2.png"},90658:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/sentinel-flow-control-91b365f39a45d8bd4d3998b9e9278ea0.png"}}]);