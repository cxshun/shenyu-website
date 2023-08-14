"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[57041],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),o=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=o(e.components);return i.createElement(u.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=o(t),m=a,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||r;return t?i.createElement(g,l(l({ref:n},d),{},{components:t})):i.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55070:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},l="1. Overview",p={unversionedId:"plugin-center/http-process/parammapping-plugin",id:"version-2.5.1/plugin-center/http-process/parammapping-plugin",isDocsHomePage:!1,title:"ParamMapping Plugin",description:"paramMapping-plugin",source:"@site/versioned_docs/version-2.5.1/plugin-center/http-process/parammapping-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/parammapping-plugin",permalink:"/docs/2.5.1/plugin-center/http-process/parammapping-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/plugin-center/http-process/parammapping-plugin.md",version:"2.5.1",frontMatter:{title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"ModifyResponse Plugin",permalink:"/docs/2.5.1/plugin-center/http-process/modifyresponse-plugin"},next:{title:"Redirect Plugin",permalink:"/docs/2.5.1/plugin-center/http-process/redirect-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Add parameters in request",id:"251-add-parameters-in-request",children:[]}]}],o={toc:u},d="wrapper";function s(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,i.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-overview"},"1. Overview"),(0,a.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ParamMapping Plugin")),(0,a.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add/remove/replace certain fixed parameters to the request")),(0,a.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"paramMapping")," is used to edit your request parameters.")),(0,a.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Module ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-param-mapping"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.param.mapping.ParamMappingPlugin")))),(0,a.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,a.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,a.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(74327).Z})),(0,a.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"li"},"paramMapping")," dependency in the pom.xml file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,a.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"paramMapping")," set Status enabled.")),(0,a.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,a.kt)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you should open this plugin when using.")),(0,a.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Selectors and rules, please refer to:",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Only those matched requests can be modified your request body."))),(0,a.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64591).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"param details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addParameterKeys"),": add a new ",(0,a.kt)("inlineCode",{parentName:"li"},"key-value")," on body"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": replace request body's ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeParameterKeys"),": remove a body ",(0,a.kt)("inlineCode",{parentName:"li"},"key")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"param_mapping modify the request body is achieved through ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."))),(0,a.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,a.kt)("h3",{id:"251-add-parameters-in-request"},"2.5.1 Add parameters in request"),(0,a.kt)("h4",{id:"2511-config-plugin"},"2.5.1.1 Config Plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you should open the plugin when using.")),(0,a.kt)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,a.kt)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64591).Z})),(0,a.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0crequest body is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,a.kt)("h4",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,a.kt)("p",null,"open the plugin\uff0cthe final request body is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,a.kt)("p",null,"add a new key-value ",(0,a.kt)("inlineCode",{parentName:"p"},"name:shenyu"),",replace the key ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),", remove the key ",(0,a.kt)("inlineCode",{parentName:"p"},"data.value")," ."),(0,a.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"paramMapping")," set Status disable.")))}s.isMDXComponent=!0},64591:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"},74327:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);