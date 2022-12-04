"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[48922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(f,a(a({ref:n},s),{},{components:t})):i.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3576:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const l={title:"Resilience4j Plugin",keywords:["Resilience4j"],description:"resilience4j plugin"},a=void 0,o={unversionedId:"plugin-center/fault-tolerance/resilience4j-plugin",id:"version-2.4.3/plugin-center/fault-tolerance/resilience4j-plugin",isDocsHomePage:!1,title:"Resilience4j Plugin",description:"resilience4j plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/fault-tolerance/resilience4j-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/resilience4j-plugin",permalink:"/docs/2.4.3/plugin-center/fault-tolerance/resilience4j-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/fault-tolerance/resilience4j-plugin.md",version:"2.4.3",frontMatter:{title:"Resilience4j Plugin",keywords:["Resilience4j"],description:"resilience4j plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"RateLimiter Plugin",permalink:"/docs/2.4.3/plugin-center/fault-tolerance/rate-limiter-plugin"},next:{title:"Sentinel Plugin",permalink:"/docs/2.4.3/plugin-center/fault-tolerance/sentinel-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add resilience4j plugin dependency",id:"add-resilience4j-plugin-dependency",children:[]},{value:"Resilience4j Config",id:"resilience4j-config",children:[]}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Resilience4j")," is one of the options that supports flow control and circuit breaking."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Resilience4j")," supports flow control and circuit breaking functions for gateway.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("p",null,"Select a mode to start shenyu-admin. For details, see  deployment. For example, with ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," starts the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," background management system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In BasicConfig --\x3e Plugin --\x3e resilience4j, set to enable."),(0,r.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,r.kt)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-1.png",width:"80%",height:"80%"}),(0,r.kt)("h2",{id:"add-resilience4j-plugin-dependency"},"Add resilience4j plugin dependency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"resilience4j")," dependency in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu resilience4j plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-resilience4j</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu resilience4j plugin end--\x3e\n")),(0,r.kt)("h2",{id:"resilience4j-config"},"Resilience4j Config"),(0,r.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,r.kt)("h4",{id:"selector-config"},"Selector Config"),(0,r.kt)("p",null,"It is used to filter traffic for the first time and does not require handle fields."),(0,r.kt)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-2.png",width:"80%",height:"80%"}),(0,r.kt)("h4",{id:"rule-config"},"Rule Config"),(0,r.kt)("p",null,"For the final filtering of traffic, there is a rule handler logic."),(0,r.kt)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-3.png",width:"80%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resilience4j Processing Details"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"limitForPeriod")," \uff1aConfigures the number of permissions available during one limit refresh period,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"50"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"limitRefreshPeriod")," \uff1aConfigures the period of a limit refresh. After each period the rate limiter sets its permissions count back to the limitForPeriod value,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"500"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeoutDurationRate")," \uff1aConfigures wait time(ms) a thread waits for a permission,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"5000"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"circuitEnable")," \uff1aConfigures circuitBreaker enable, ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),":OFF ,",(0,r.kt)("inlineCode",{parentName:"p"},"1"),":ON ,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"failureRateThreshold")," \uff1aConfigures the failure rate threshold in percentage,When the failure rate is equal or greater than the threshold the CircuitBreaker transitions to open and starts short-circuiting calls,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"50"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fallbackUri")," \uff1aConfigures the fall back uri.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"minimumNumberOfCalls")," \uff1aConfigures the minimum number of calls which are required (per sliding window period) before the CircuitBreaker can calculate the error rate or slow call rate,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bufferSizeInHalfOpen"),"\uff1aConfigures the number of permitted calls when the CircuitBreaker is half open,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"10"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"slidingWindowSize")," \uff1aConfigures the size of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"slidingWindowType")," \uff1aConfigures the type of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,\nSliding window can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),":count-based or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),":time-based.,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeoutDuration")," \uff1aConfigures request CircuitBreaker timeout(ms),default value:",(0,r.kt)("inlineCode",{parentName:"p"},"30000"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"waitIntervalInOpen")," \uff1aConfigures the circuitBreaker time(ms) of duration,default value:",(0,r.kt)("inlineCode",{parentName:"p"},"10"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"automaticTransitionFromOpenToHalfOpenEnabled")," \uff1aConfigures automatically transition from open state to half open state,",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":ON, ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":OFF, default value:",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))))))}s.isMDXComponent=!0}}]);