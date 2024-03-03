"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28163],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56769:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const i={sidebar_position:9,title:"Soul Optimize",keywords:["soul"],description:"performance optimization for soul"},a=void 0,l={unversionedId:"developer-guide/soul-optimize",id:"version-2.3.0-Legacy/developer-guide/soul-optimize",isDocsHomePage:!1,title:"Soul Optimize",description:"performance optimization for soul",source:"@site/versioned_docs/version-2.3.0-Legacy/developer-guide/soul-optimize.md",sourceDirName:"developer-guide",slug:"/developer-guide/soul-optimize",permalink:"/docs/2.3.0-Legacy/developer-guide/soul-optimize",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/developer-guide/soul-optimize.md",version:"2.3.0-Legacy",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Soul Optimize",keywords:["soul"],description:"performance optimization for soul"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Thread Model",permalink:"/docs/2.3.0-Legacy/developer-guide/thread"},next:{title:"Doc Download",permalink:"/docs/2.3.0-Legacy/doc-download"}},p=[{value:"Description",id:"description",children:[]},{value:"Time Consumption",id:"time-consumption",children:[]},{value:"Netty Optimization",id:"netty-optimization",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This doc shows how to do performance optimization for soul.")),(0,o.yg)("h2",{id:"time-consumption"},"Time Consumption"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Soul is JVM driven and processing time for a single request is nearly between ",(0,o.yg)("inlineCode",{parentName:"li"},"1-3")," ms.")),(0,o.yg)("h2",{id:"netty-optimization"},"Netty Optimization"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"spring-webflux")," is one of dependencies of soul, and it uses Netty in lower layer."),(0,o.yg)("li",{parentName:"ul"},"The demo down below demonstrates tuning soul by customizing params in Netty.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'@Bean\n public NettyReactiveWebServerFactory nettyReactiveWebServerFactory() {\n     NettyReactiveWebServerFactory webServerFactory = new NettyReactiveWebServerFactory();\n     webServerFactory.addServerCustomizers(new EventLoopNettyCustomizer());\n     return webServerFactory;\n }\n\nprivate static class EventLoopNettyCustomizer implements NettyServerCustomizer {\n\n    @Override\n    public HttpServer apply(final HttpServer httpServer) {\n        return httpServer\n                .tcpConfiguration(tcpServer -> tcpServer\n                        .runOn(LoopResources.create("soul-netty", 1, DEFAULT_IO_WORKER_COUNT, true), false)\n                        .selectorOption(ChannelOption.SO_REUSEADDR, true)\n                        .selectorOption(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT)\n                        .option(ChannelOption.TCP_NODELAY, true)\n                        .option(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT));\n    }\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Soul-bootstrap offers this class, you may modify it when benchmarking your app if necessary."),(0,o.yg)("li",{parentName:"ul"},"You can get references of business thread model from ",(0,o.yg)("a",{parentName:"li",href:"./thread"},"thread model"))))}u.isMDXComponent=!0}}]);