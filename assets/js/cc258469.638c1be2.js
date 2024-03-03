"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51369],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,y=s["".concat(u,".").concat(d)]||s[d]||g[d]||o;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96560:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const o={title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},a=void 0,l={unversionedId:"plugin-center/common/general-context-plugin",id:"version-2.4.3/plugin-center/common/general-context-plugin",isDocsHomePage:!1,title:"GeneralContext Plugin",description:"generalContext plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/common/general-context-plugin.md",sourceDirName:"plugin-center/common",slug:"/plugin-center/common/general-context-plugin",permalink:"/docs/2.4.3/plugin-center/common/general-context-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/common/general-context-plugin.md",version:"2.4.3",frontMatter:{title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Metrics Plugin",permalink:"/docs/2.4.3/plugin-center/observability/metrics-plugin"},next:{title:"Cache Plugin",permalink:"/docs/2.4.3/plugin-center/cache/cache-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:u},p="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When making invokes to the target service, Apache ShenYu gateway also allows users to use the ",(0,i.yg)("inlineCode",{parentName:"li"},"generalContext")," plugin to pass the service context parameters by reading the header in this request.")),(0,i.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"generalContext"),", set to enable."),(0,i.yg)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.yg)("img",{src:"/img/shenyu/plugin/general-context/general-context-open-en.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Introduce ",(0,i.yg)("inlineCode",{parentName:"li"},"generalContext")," support in the pox.xml file of the gateway.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu general context plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-general-context</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu general context plugin end--\x3e\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,i.yg)("li",{parentName:"ul"},"Only those matched requests can print the information about this request.")),(0,i.yg)("h2",{id:"situation"},"Situation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The parameters in the request header need to be passed to the proxy server."),(0,i.yg)("li",{parentName:"ul"},"Need to replace a key in the request header and pass it to the proxy server.")))}s.isMDXComponent=!0}}]);