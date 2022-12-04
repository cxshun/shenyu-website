"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74919:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:4,title:"Fetching Correct IP Address And Host",keywords:["soul"],description:"Fetching correct IP address and host"},i=void 0,s={unversionedId:"developer-guide/custom-parsing-ip-and-host",id:"version-2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host",isDocsHomePage:!1,title:"Fetching Correct IP Address And Host",description:"Fetching correct IP address and host",source:"@site/versioned_docs/version-2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-parsing-ip-and-host",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host.md",version:"2.3.0-Legacy",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Fetching Correct IP Address And Host",keywords:["soul"],description:"Fetching correct IP address and host"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"File Uploading And Downloading",permalink:"/docs/2.3.0-Legacy/developer-guide/file-and-image"},next:{title:"Custom Response",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-result"}},l=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Implement through a Plugin",id:"implement-through-a-plugin",children:[]}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This doc demonstrates how to get correct IP address and host when soul serves behind nginx reverse proxy."),(0,o.kt)("li",{parentName:"ul"},"After fetched real IP and host, you can match them with plugins and selectors.")),(0,o.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The embedded implementation in soul is :",(0,o.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.web.forwarde.ForwardedRemoteAddressResolver"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You need to config ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," first to get correct IP address and host."))),(0,o.kt)("h2",{id:"implement-through-a-plugin"},"Implement through a Plugin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Declare a new class named "A" and implements ',(0,o.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.RemoteAddressResolver"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface RemoteAddressResolver {\n\n    /**\n     * Resolve inet socket address.\n     *\n     * @param exchange the exchange\n     * @return the inet socket address\n     */\n    default InetSocketAddress resolve(ServerWebExchange exchange) {\n        return exchange.getRequest().getRemoteAddress();\n    }\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService a() {\n         return new A\n   }\n")))}c.isMDXComponent=!0}}]);