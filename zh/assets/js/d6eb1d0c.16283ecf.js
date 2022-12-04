"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,a(a({ref:t},o),{},{components:n})):r.createElement(k,a({ref:t},o))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89054:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={title:"Hystrix\u63d2\u4ef6",keywords:["Hystrix"],description:"hystrix\u63d2\u4ef6"},a="1. \u6982\u8ff0",p={unversionedId:"plugin-center/fault-tolerance/hystrix-plugin",id:"version-2.5.0/plugin-center/fault-tolerance/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix\u63d2\u4ef6",description:"hystrix\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/fault-tolerance/hystrix-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/hystrix-plugin",permalink:"/zh/docs/plugin-center/fault-tolerance/hystrix-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/fault-tolerance/hystrix-plugin.md",version:"2.5.0",frontMatter:{title:"Hystrix\u63d2\u4ef6",keywords:["Hystrix"],description:"hystrix\u63d2\u4ef6"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Websocket\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/websocket-plugin"},next:{title:"RateLimiter\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/fault-tolerance/rate-limiter-plugin"}},u=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u9009\u62e9\u5668\u914d\u7f6e",children:[]},{value:"2.4.3 \u89c4\u5219\u914d\u7f6e",id:"243-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u4f7f\u7528hystrix\u7194\u65ad\u4fdd\u62a4\u670d\u52a1",id:"251-\u4f7f\u7528hystrix\u7194\u65ad\u4fdd\u62a4\u670d\u52a1",children:[]}]}],s={toc:u};function o(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hystrix\u63d2\u4ef6")),(0,i.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e0d\u7a33\u5b9a\uff0c\u4f7f\u7528hystrix\u7194\u65ad\u4fdd\u62a4\u670d\u52a1")),(0,i.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7194\u65ad\u6d41\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u4fdd\u62a4\u7f51\u5173\u4ee3\u7406\u7684\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u9694\u79bb\u6a21\u5f0f\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"thread")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"semaphore"))),(0,i.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757: ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-hystrix"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b: ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.hystrix.HystrixPlugin")))),(0,i.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.kt)("p",null,"ShenYu 2.4.0"),(0,i.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(26692).Z})),(0,i.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"hystrix"),"\u7684\u4f9d\u8d56\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu hystrix plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-hystrix</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu hystrix plugin end--\x3e\n")),(0,i.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"hystrix")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.kt)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u914d\u7f6e\uff0c\u4f46\u4f60\u5e94\u8be5\u6253\u5f00hystrix\u63d2\u4ef6\u3002")),(0,i.kt)("h3",{id:"242-\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u7b2c\u4e00\u6b21\u7b5b\u9009\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\uff0c \u8fd9\u91cc\u53ea\u5bf9\u90e8\u5206\u5b57\u6bb5\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62213).Z})),(0,i.kt)("h3",{id:"243-\u89c4\u5219\u914d\u7f6e"},"2.4.3 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u6700\u7ec8\u7b5b\u9009\uff0c\u6709\u89c4\u5219\u5904\u7406\u903b\u8f91\uff0c\u9694\u79bb\u6a21\u5f0f\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"semaphore")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20940).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hystrix"),"\u5904\u7406\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8df3\u95f8\u6700\u5c0f\u8bf7\u6c42\u6570\u91cf\uff1a\u6700\u5c0f\u7684\u8bf7\u6c42\u91cf\uff0c\u81f3\u5c11\u8981\u8fbe\u5230\u8fd9\u4e2a\u91cf\u624d\u4f1a\u89e6\u53d1\u7194\u65ad\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9519\u8bef\u767e\u5206\u6bd4\u9600\u503c\uff1a \u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u53d1\u751f\u5f02\u5e38\u7684\u767e\u5206\u6bd4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6700\u5927\u5e76\u53d1\u91cf\uff1a \u6700\u5927\u7684\u5e76\u53d1\u91cf\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8df3\u95f8\u4f11\u7720\u65f6\u95f4",(0,i.kt)("inlineCode",{parentName:"p"},"(ms)"),"\uff1a\u7194\u65ad\u4ee5\u540e\u6062\u590d\u7684\u65f6\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5206\u7ec4",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a:",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath")," \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5931\u8d25\u964d\u7ea7",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\uff1a \u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/fallback/hystrix"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u547d\u4ee4",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8def\u5f84\u63a5\u53e3\u3002"))))),(0,i.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.kt)("h3",{id:"251-\u4f7f\u7528hystrix\u7194\u65ad\u4fdd\u62a4\u670d\u52a1"},"2.5.1 \u4f7f\u7528hystrix\u7194\u65ad\u4fdd\u62a4\u670d\u52a1"),(0,i.kt)("h4",{id:"2511-\u51c6\u5907\u5de5\u4f5c"},"2.5.1.1 \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ShenYu Admin"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ShenYu Bootstrap"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8\u4e00\u4e2a\u540e\u7aef\u670d\u52a1")),(0,i.kt)("h4",{id:"2512-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62213).Z})),(0,i.kt)("h4",{id:"2513-\u89c4\u5219\u914d\u7f6e"},"2.5.1.3 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u56fe\u7247\u7684\u89c4\u5219\u4ec5\u4e3a\u6d4b\u8bd5\u4f7f\u7528\uff0c\u5b9e\u9645\u60c5\u51b5\u53d6\u51b3\u4e8e\u7279\u5b9a\u7684\u573a\u666f\u800c\u5b9a\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78114).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u6848\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/test")\n@ShenyuSpringMvcClient("/test/**")\npublic class HttpTestController {\n    @PostMapping("/testHystrix")\n    public ResultBean ok() {\n        Random random = new Random();\n        int num = random.nextInt(100);\n        if (num > 20) {\n            throw new RuntimeException();\n        }\n        return new ResultBean(200, "ok", null);\n    }\n}\n')),(0,i.kt)("h4",{id:"2514-\u4f7f\u7528apache-jmeter\u53d1\u9001\u8bf7\u6c42"},"2.5.1.4 \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter"),"\u53d1\u9001\u8bf7\u6c42"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73645).Z})),(0,i.kt)("h4",{id:"2515-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.5 \u9a8c\u8bc1\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(64114).Z})),(0,i.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"hystrix")," \u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002"))}o.isMDXComponent=!0},78114:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hystrix-example-rule-zh-b5f61b7b558077029b9089ece78caea1.png"},64114:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hystrix-result-008924e1e83b1489d3f0aaac4e4761df.png"},73645:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hystrix-send-request-bdd87396a153240c2408c12f3e39d5f1.png"},20940:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rule-6bb770dbecab259bbef4ef4083cf36e4.png"},62213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selector-2102a5f17879e0a068321ae92e232ee3.png"},26692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"}}]);