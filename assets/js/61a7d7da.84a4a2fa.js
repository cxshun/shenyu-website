"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[39912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(n),d=r,N=k["".concat(p,".").concat(d)]||k[d]||u[d]||i;return n?a.createElement(N,l(l({ref:t},s),{},{components:n})):a.createElement(N,l({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58823:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Mock Plugin",keywords:["mock"],description:"mock plugin"},l="1. Overview",o={unversionedId:"plugin-center/mock/mock-plugin",id:"version-2.5.1/plugin-center/mock/mock-plugin",isDocsHomePage:!1,title:"Mock Plugin",description:"mock plugin",source:"@site/versioned_docs/version-2.5.1/plugin-center/mock/mock-plugin.md",sourceDirName:"plugin-center/mock",slug:"/plugin-center/mock/mock-plugin",permalink:"/docs/2.5.1/plugin-center/mock/mock-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/plugin-center/mock/mock-plugin.md",version:"2.5.1",frontMatter:{title:"Mock Plugin",keywords:["mock"],description:"mock plugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Cache Plugin",permalink:"/docs/2.5.1/plugin-center/cache/cache-plugin"},next:{title:"Custom Load Balancer",permalink:"/docs/2.5.1/developer/spi/custom-load-balance"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin Code",id:"14-plugin-code",children:[]},{value:"1.5 Added since which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Import pom",id:"21-import-pom",children:[]},{value:"2.2 Enable plugin",id:"22-enable-plugin",children:[]},{value:"2.3 Config plugin",id:"23-config-plugin",children:[]},{value:"2.4 <code>${}</code> supported syntax",id:"24--supported-syntax",children:[]}],m={toc:p},s="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mock Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify the status code and response body for the request to facilitate testing.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the status code and body of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"${}")," placeholder to automatically generate data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," In order to support a more flexible data generation method, the mock plug-in supports users to use SpEL expressions to generate mock data. Using SpEL expressions may lead to the risk of executing malicious scripts or applying destructive programs. We recommend that you be extra careful when using them, use them in a safe environment as much as possible, such as an intranet environment, and follow security best practices."))),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core module ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-mock")),(0,r.kt)("li",{parentName:"ul"},"Core class ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.MockPlugin"))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added since which shenyu version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.5.0")),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-import-pom"},"2.1 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mock</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"22-enable-plugin"},"2.2 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"mock")," set Status enable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9623).Z})),(0,r.kt)("h2",{id:"23-config-plugin"},"2.3 Config plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selector and rule config, please refer: ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),"."),(0,r.kt)("li",{parentName:"ul"},"shenyu-admin mock plugin configuration, supports configuring httpStatusCode and responseContent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"httpStatusCode:the status code of the request."),(0,r.kt)("li",{parentName:"ul"},"responseContent:the response body of the request,support configuring ",(0,r.kt)("inlineCode",{parentName:"li"},"${}")," placeholders to generate random data.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91754).Z})),(0,r.kt)("h2",{id:"24--supported-syntax"},"2.4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"${}")," supported syntax"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${int|min-max}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random integers from ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", inclusive of ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${int|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${double|min-max|format}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random floating point numbers from ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"format"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${double|10-20}")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"${double|10-20.5|%.2f}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${email}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random email addresses.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${phone}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random 13-digit mobile number.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${zh|min-max}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random Chinese strings of length ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${zh|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${en|min-max}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random English strings of length ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${en|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${bool}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate a random ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," value i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${list|[arg1,arg2...]}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Randomly returns any value in a list as a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${list|[gril,boy]}")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"boy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"girl"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${current|format}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Returns the current time and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," to format, ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," can be default, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-dd HH:mm:ss"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${current}"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"${current|YYYY-MM-dd}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"del"},"${array|item|length}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," According to the ",(0,r.kt)("inlineCode",{parentName:"li"},"item")," format definition, an array of length ",(0,r.kt)("inlineCode",{parentName:"li"},"length")," can be generated. All the above data generation rules can be nested in ",(0,r.kt)("inlineCode",{parentName:"li"},"item"),", and the result will be automatically added with ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},'${array|{"name":"test"}|3}')," result is ",(0,r.kt)("inlineCode",{parentName:"li"},'[{"name":"test"},{"name":"test"},{"name":"test"}]'),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},'${array|{"age":${int|18-65}}|3}'),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"${expression|expression}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Spel")," expressions are currently supported with built-in functions and arguments, which fully replace the old ${} syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#int(min,max)}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Generate random integers from ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),", inclusive of ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"${expression|#int(1,2)}"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#double(min,max)}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random floating point numbers from ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"format"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#double(10.5,12.0)}"),",",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#double(10.5,12.0,'\uffe5%.2f')}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#email()}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random email addresses."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#phone()}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random 13-digit mobile number."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|zh(min,max)}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random Chinese strings of length ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#zh(1,10)}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#bool()}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate a random ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," value i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#oneOf(arg1,arg2...)}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Randomly returns any value in a list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#oneOf('shenyu','number',1)}"),"  will return ",(0,r.kt)("inlineCode",{parentName:"li"},"'shenyu'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'number'"),"or",(0,r.kt)("inlineCode",{parentName:"li"},"1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|current()}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Returns the current time and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," to format, ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," can be default, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-dd HH:mm:ss"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example\uff1a"),"  ",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#current()}"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#current('YYYY-MM-dd')}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#array(item,length)}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description:")," According to the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," format definition, an array of length ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," can be generated. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"expression|#array('shenyu',3)")," would generate ",(0,r.kt)("inlineCode",{parentName:"p"},'["shenyu","shenyu","shenyu"]'),"."),(0,r.kt)("p",{parentName:"li"},"You can use it nested like",(0,r.kt)("inlineCode",{parentName:"p"},"${expression|#array(#bool(),2)}"),"or",(0,r.kt)("inlineCode",{parentName:"p"},"${expression|#array(#array('shenyu',2),2)}"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|#req}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Req is built-in request parameters ,which can generate response data based on request content"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#req.method}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#req.queries['query_name']}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"${req.queries.query_name}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#req.uri}"),"\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"jsonPath")," is used when the request body is json . For example ,when the request body is ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name":"shenyu"}'),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|#req.json.name}"),'would return "shenyu"')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${expression|spel}"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),"\uff1aUse Spel expressions directly to generate data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|T(java.time.LocalDate).now()}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"${expression|1==1}"))))),(0,r.kt)("p",null,"It is recommended to use the new '${}' syntax. The old syntax may be removed at an later date."),(0,r.kt)("p",null,"Function replaceable table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"old"),(0,r.kt)("th",{parentName:"tr",align:"left"},"new"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${int","|","min-max}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#int(min,max)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${double","|","min-max","|","format}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#double(min,max)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${email}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#email()}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${phone}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#phone()}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${zh","|","min-max}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#zh(min,max)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${en","|","min-max}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#en(min,max)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${list","|","[arg1,arg2...]","}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#oneOf(arg1,agr2...)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${current","|","format}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#current(format)}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${bool}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression","|","#bool()}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"${array","|","item","|","length}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"${expression#array(item,length)}")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You do not need to use add ",(0,r.kt)("inlineCode",{parentName:"strong"},'""')," on both sides of ",(0,r.kt)("inlineCode",{parentName:"strong"},"${}"),", the generated content will be prefixed and suffixed according to the definition of generator")))}k.isMDXComponent=!0},9623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-mock-plugin-en-4c1452eb346e287d11b94f8cdf4cbec7.png"},91754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mock-rule-configuration-en-f71ebf28e7338971afc9136819d32277.png"}}]);