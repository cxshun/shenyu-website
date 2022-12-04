"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(n),g=i,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:i,a[1]=u;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61276:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},a="1. Overview",u={unversionedId:"plugin-center/http-process/rewrite-plugin",id:"version-2.4.2/plugin-center/http-process/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite Plugin",description:"rewrite plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/rewrite-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/rewrite-plugin",permalink:"/docs/2.4.2/plugin-center/http-process/rewrite-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/rewrite-plugin.md",version:"2.4.2",frontMatter:{title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"RequestPlugin",permalink:"/docs/2.4.2/plugin-center/http-process/request-plugin"},next:{title:"Divide Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/divide-plugin"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Example for rewriting uri",id:"251-example-for-rewriting-uri",children:[]}]}],o={toc:p};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-overview"},"1. Overview"),(0,i.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rewrite Plugin")),(0,i.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The request uri can be different from the target service by rewriting the path.")),(0,i.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This plugin is used to rewrite the request uri.")),(0,i.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Core Moudule ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-rewrite"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Core Class ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.rewrite.RewritePlugin")))),(0,i.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,i.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,i.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79415).Z})),(0,i.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import maven config in shenyu-bootstrap project's ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file..")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,i.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," set Status enabled.\n",(0,i.kt)("img",{src:n(18629).Z}))),(0,i.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,i.kt)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable the plugin before using."),(0,i.kt)("li",{parentName:"ul"},"Disable the plugin if don't use. ")),(0,i.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),".")),(0,i.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23955).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Param details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex"),": The regular expression that matches the part of uri to be rewrited."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace"),": The content of replacement.")))),(0,i.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,i.kt)("h3",{id:"251-example-for-rewriting-uri"},"2.5.1 Example for rewriting uri"),(0,i.kt)("h4",{id:"2511-run-the-shenyu-examples-http-project"},"2.5.1.1 Run the shenyu-examples-http project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", please refer to ",(0,i.kt)("a",{parentName:"li",href:"../../quick-start/quick-start-http#run-the-shenyu-examples-http-project"},"Run the shenyu-examples-http project"))),(0,i.kt)("h4",{id:"2511-plugin-config"},"2.5.1.1 Plugin Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refer to ",(0,i.kt)("a",{parentName:"li",href:"#241-plugin-config"},"2.4.1")," to configure plugin.")),(0,i.kt)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refer to ",(0,i.kt)("a",{parentName:"li",href:"#242-selector-config"},"2.4.2")," to configure selector")),(0,i.kt)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15933).Z})),(0,i.kt)("p",null,"The request ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/hello")," would be rewrited to ",(0,i.kt)("inlineCode",{parentName:"p"},"/hi")),(0,i.kt)("h4",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,i.kt)("p",null,"Use some tool (such as Postman) to make a request:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(92205).Z})),(0,i.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," set Status disable.")))}s.isMDXComponent=!0},92205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_example_result-1f6860e296fc5418aa97ad425dca82b3.png"},15933:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_example_rule-5ad55fb5d2a785738487d663b9c49977.png"},18629:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_open_en-6f19bcb0b1115b24a6bf49b382938253.png"},23955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_rule_config-d5e17a2648c2d6a0e0def60767164ae5.png"},79415:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_use_en-805b67cd07b5e0c64168d13424be9f8c.png"}}]);