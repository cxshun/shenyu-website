"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[88036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24791:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"2.2.0",sidebar_position:9,keywords:["release-notes"],description:"release-notes"},i="2.2.0",l={unversionedId:"2.2.0-release",id:"2.2.0-release",isDocsHomePage:!1,title:"2.2.0",description:"release-notes",source:"@site/event/2.2.0-release.md",sourceDirName:".",slug:"/2.2.0-release",permalink:"/event/2.2.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.2.0-release.md",version:"current",lastUpdatedBy:"\u613f\u51cc\u98de",lastUpdatedAt:1670153767,formattedLastUpdatedAt:"12/4/2022",sidebarPosition:9,frontMatter:{title:"2.2.0",sidebar_position:9,keywords:["release-notes"],description:"release-notes"}},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"220"},"2.2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete plug-in architecture design, plug-in hot-swappable."),(0,a.kt)("li",{parentName:"ul"},"Fully supports all versions of dubbo, alibaba-dubbo, apache-dubbo."),(0,a.kt)("li",{parentName:"ul"},"Support dubbo generalization call, multi-parameter, complex parameter interface."),(0,a.kt)("li",{parentName:"ul"},"Enhance the monitoring plug-in, remove influxdb support, increase memory, CPU, QPS, TPS, response delay and other indicators, and support access to Prometheus."),(0,a.kt)("li",{parentName:"ul"},"The springCloud plug-in supports two registration centers, eureka and nacos."),(0,a.kt)("li",{parentName:"ul"},"Waf plug-in enhancements, black and white albums, and mixed modes."),(0,a.kt)("li",{parentName:"ul"},"Removed the Hystrix fuse function, independent as a plug-in support."),(0,a.kt)("li",{parentName:"ul"},"Modify the data synchronization method bug in Zookeeper, and add the nacos synchronization method."),(0,a.kt)("li",{parentName:"ul"},"Diversified customer support, providing traditional and springboot access to spring."),(0,a.kt)("li",{parentName:"ul"},"Optimize the soul-background control interface."),(0,a.kt)("li",{parentName:"ul"},"Load balancing algorithm bug repair."),(0,a.kt)("li",{parentName:"ul"},"Fix bugs when uploading large files.")))}u.isMDXComponent=!0}}]);