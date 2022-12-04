"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[15474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21883:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"gRPC Plugin",keywords:["grpc-plugin"],description:"grpc-plugin"},p=void 0,l={unversionedId:"plugin-center/rpc-proxy/grpc-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/grpc-plugin",isDocsHomePage:!1,title:"gRPC Plugin",description:"grpc-plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/grpc-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/grpc-plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/grpc-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/grpc-plugin.md",version:"2.4.0",frontMatter:{title:"gRPC Plugin",keywords:["grpc-plugin"],description:"grpc-plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Dubbo Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/dubbo-plugin"},next:{title:"Motan Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/motan-plugin"}},o=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[{value:"Selector Handler",id:"selector-handler",children:[]}]},{value:"Metadata",id:"metadata",children:[]}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The grpc plugin is a plugin that converts the Http protocol into the grpc protocol.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-grpc"},"Quick start with gRPC")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," client access, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/grpc-proxy"},"gRPC Proxy")," ."))),(0,a.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,a.kt)("p",null,"After the client accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information. You can see it in PluginList -> rpc proxy -> grpc. For details about the selector and rule configuration, see ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,a.kt)("h3",{id:"selector-handler"},"Selector Handler"),(0,a.kt)("img",{src:"/img/shenyu/plugin/grpc/selector_en.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"Selector Handler, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," field, is the processing operation that the gateway can perform after matching the traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config details\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aenter the ip:port of your real service .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1aindicates the Http protocol. Generally, the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),". If the value is not specified, the default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1aservice weight.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\uff1aopen or close."))))),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," interface method, will correspond to a metadata, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," application client access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,a.kt)("img",{src:"/img/shenyu/plugin/grpc/metadata_en.png",width:"80%",height:"80%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Path: http request path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RpcExpand: other configurations of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," interface, which support the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," format, are as follows:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timeout": 5000,\n  "methodType": "SERVER_STREAMING"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," interface.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc"),"."))))}u.isMDXComponent=!0}}]);