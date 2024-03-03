"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[60011],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),s=r,y=g["".concat(p,".").concat(s)]||g[s]||m[s]||i;return t?a.createElement(y,o(o({ref:n},u),{},{components:t})):a.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},74079:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},o=void 0,l={unversionedId:"plugin-center/rpc-proxy/motan-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/motan-plugin",isDocsHomePage:!1,title:"Motan Plugin",description:"motan-plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/motan-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/motan-plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/motan-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/motan-plugin.md",version:"2.4.0",frontMatter:{title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"gRPC Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/grpc-plugin"},next:{title:"Sofa Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/sofa-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The motan plugin is a plugin that converts the Http protocol into the motan protocol.")),(0,r.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../quick-start/quick-start-motan"},"Quick start with Motan")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Motan")," client access, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.0/user-guide/proxy/motan-proxy"},"Motan Proxy")," ."))),(0,r.yg)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.yg)("p",null,"After the client accesses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information."),(0,r.yg)("p",null,"You can see it in PluginList -> rpc proxy -> motan. For details about the selector and rule configuration, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("p",null,"Each ",(0,r.yg)("inlineCode",{parentName:"p"},"motan")," interface method, will correspond to a metadata, when the ",(0,r.yg)("inlineCode",{parentName:"p"},"motan")," application client access to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,r.yg)("img",{src:"/img/shenyu/plugin/motan/metadata_en.png",width:"60%",height:"50%"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Path: http request path.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcExpand: description of each interface in a ",(0,r.yg)("inlineCode",{parentName:"p"},"motan")," service. For example, here is the interface information for the ",(0,r.yg)("inlineCode",{parentName:"p"},"motan")," service:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ]\n    }\n  ],\n  "group": "motan-shenyu-rpc"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"motan")," interface.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,r.yg)("inlineCode",{parentName:"p"},"motan"),"."))))}g.isMDXComponent=!0}}]);