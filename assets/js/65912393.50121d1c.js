"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||a;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26360:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"SPI Design",keywords:["spi design"],description:"spi-design"},o=void 0,p={unversionedId:"design/spi-design",id:"version-2.5.1/design/spi-design",isDocsHomePage:!1,title:"SPI Design",description:"spi-design",source:"@site/versioned_docs/version-2.5.1/design/spi-design.md",sourceDirName:"design",slug:"/design/spi-design",permalink:"/docs/2.5.1/design/spi-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/design/spi-design.md",version:"2.5.1",frontMatter:{title:"SPI Design",keywords:["spi design"],description:"spi-design"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Client Registry Design",permalink:"/docs/2.5.1/design/register-center-design"},next:{title:"Deployment Prerequisites",permalink:"/docs/2.5.1/deployment/deployment-before"}},d=[{value:"Registry Center",id:"registry-center",children:[]},{value:"Metrics Center",id:"metrics-center",children:[]},{value:"Load Balance",id:"load-balance",children:[]},{value:"RateLimiter",id:"ratelimiter",children:[]},{value:"Match Strategy",id:"match-strategy",children:[]},{value:"Parameter Data",id:"parameter-data",children:[]},{value:"Predicate Judge",id:"predicate-judge",children:[]}],l={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SPI, called Service Provider Interface, is a built-in JDK Service that provides discovery function and a dynamic replacement discovery mechanism."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-spi"},"shenyu-spi")," is a custom SPI extension implementation for Apache Shenyu gateway. The design and implementation principles refer to ",(0,r.kt)("a",{parentName:"p",href:"https://dubbo.apache.org/en/docs/v2.7/dev/impls/"},"SPI Extension Implementations")," ."),(0,r.kt)("h3",{id:"registry-center"},"Registry Center"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Consul"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Etcd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper")," are supported. The expansion of the registry including client and server, interface respectively ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuServerRegisterRepository")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuClientRegisterRepository"),"."),(0,r.kt)("h3",{id:"metrics-center"},"Metrics Center"),(0,r.kt)("p",null,"Responsible for service monitoring, loading concrete implementation through ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),", currently support ",(0,r.kt)("inlineCode",{parentName:"p"},"Prometheus"),", service interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetricsService"),"."),(0,r.kt)("h3",{id:"load-balance"},"Load Balance"),(0,r.kt)("p",null,"Select one of the service providers to call. Currently, the supported algorithms are ",(0,r.kt)("inlineCode",{parentName:"p"},"Has"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Random"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobin"),", and the extended interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"."),(0,r.kt)("h3",{id:"ratelimiter"},"RateLimiter"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiter")," plugin, which stream limiting algorithm to use, currently supporting ",(0,r.kt)("inlineCode",{parentName:"p"},"Concurren"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LeakyBucke"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SlidingWindow")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenBucket"),", the extension interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiterAlgorithm"),"."),(0,r.kt)("h3",{id:"match-strategy"},"Match Strategy"),(0,r.kt)("p",null,"Which matching method to use when adding selectors And rules, currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"And"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Or"),", And the extension interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"."),(0,r.kt)("h3",{id:"parameter-data"},"Parameter Data"),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),",",(0,r.kt)("inlineCode",{parentName:"p"},"RequestMethod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," are supported. The extended interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"ParameterData"),"."),(0,r.kt)("h3",{id:"predicate-judge"},"Predicate Judge"),(0,r.kt)("p",null,"Which conditional policy to use when adding selectors and rules currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Match"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Contains"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Equals"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Groovy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SpEL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TimerAfter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TimerBefore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Exclude"),". The extension interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"."))}c.isMDXComponent=!0}}]);