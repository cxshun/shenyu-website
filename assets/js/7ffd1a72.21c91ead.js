"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[13811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66011:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"gRPC Plugin",keywords:["grpc-plugin"],description:"grpc-plugin"},p=void 0,l={unversionedId:"plugin-center/proxy/grpc-plugin",id:"version-2.5.0/plugin-center/proxy/grpc-plugin",isDocsHomePage:!1,title:"gRPC Plugin",description:"grpc-plugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/proxy/grpc-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/grpc-plugin",permalink:"/docs/plugin-center/proxy/grpc-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/proxy/grpc-plugin.md",version:"2.5.0",frontMatter:{title:"gRPC Plugin",keywords:["grpc-plugin"],description:"grpc-plugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Dubbo Plugin",permalink:"/docs/plugin-center/proxy/dubbo-plugin"},next:{title:"Motan Plugin",permalink:"/docs/plugin-center/proxy/motan-plugin"}},o=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The grpc plugin is a plugin that converts the Http protocol into the grpc protocol.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-grpc"},"Quick start with gRPC")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gRPC")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/grpc-proxy"},"gRPC Proxy")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New fields and meanings of grpc plugin since ",(0,r.kt)("inlineCode",{parentName:"p"},"2.4.3"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"threadpool"),"\uff1aThere are two types of business thread pools, ",(0,r.kt)("inlineCode",{parentName:"p"},"cached")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"shared"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cached")," is equivalent to the default thread pool officially provided by grpc; "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"shared")," thread pool, just as its name, ",(0,r.kt)("inlineCode",{parentName:"p"},"all proxy plugins")," share a ",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," `Thread pool, the advantage of doing this is that it can reduce the number of thread pools, thereby reducing memory and improving resource utilization."))))),(0,r.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.kt)("p",null,"After the client accesses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information. You can see it in PluginList -> rpc proxy -> grpc. For details about the selector and rule configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,r.kt)("h4",{id:"selector-handler"},"Selector Handler"),(0,r.kt)("img",{src:"/img/shenyu/plugin/grpc/selector_en.png",width:"80%",height:"80%"}),(0,r.kt)("p",null,"Selector Handler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," field, is the processing operation that the gateway can perform after matching the traffic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"config details\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aenter the ip:port of your real service .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1aindicates the Http protocol. Generally, the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"https://"),". If the value is not specified, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1aservice weight.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\uff1aopen or close."))))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc")," interface method, will correspond to a metadata, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc")," application client access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,r.kt)("img",{src:"/img/shenyu/plugin/grpc/metadata_en.png",width:"80%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Path: http request path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcExpand: other configurations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc")," interface, which support the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," format, are as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timeout": 5000,\n  "methodType": "SERVER_STREAMING"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc"),"."))))}u.isMDXComponent=!0}}]);