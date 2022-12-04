"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[29197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50854:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Debug and run agent module locally",keywords:["Agent"],description:"Debug and run the agent module locally"},l=void 0,i={unversionedId:"developer/debug-agent",id:"version-2.4.2/developer/debug-agent",isDocsHomePage:!1,title:"Debug and run agent module locally",description:"Debug and run the agent module locally",source:"@site/versioned_docs/version-2.4.2/developer/debug-agent.md",sourceDirName:"developer",slug:"/developer/debug-agent",permalink:"/docs/2.4.2/developer/debug-agent",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/developer/debug-agent.md",version:"2.4.2",frontMatter:{title:"Debug and run agent module locally",keywords:["Agent"],description:"Debug and run the agent module locally"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Custom Sign Algorithm",permalink:"/docs/2.4.2/developer/custom-sign-algorithm"},next:{title:"A multilingual HTTP client",permalink:"/docs/2.4.2/developer/developer-shenyu-client"}},u=[{value:"Description",id:"description",children:[]},{value:"Prepare",id:"prepare",children:[]},{value:"Set JVM startup parameters",id:"set-jvm-startup-parameters",children:[]},{value:"Run/Debug",id:"rundebug",children:[]}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This article will introduce how to debug and run the ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-agent")," module locally")),(0,a.kt)("h2",{id:"prepare"},"Prepare"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pull the Apache ShenYu code"),(0,a.kt)("li",{parentName:"ol"},"Install IDEA"),(0,a.kt)("li",{parentName:"ol"},"Refer to ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.4.2/deployment/deployment-local"},"local deployment")," to download and compile the code")),(0,a.kt)("h2",{id:"set-jvm-startup-parameters"},"Set JVM startup parameters"),(0,a.kt)("p",null,"In IDEA, set VM options in the startup parameters of ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication.java")," as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-javaagent:~/shenyu/shenyu-dist/shenyu-agent-dist/target/shenyu-agent/shenyu-agent.jar\n")),(0,a.kt)("p",null,"Among them, the parameter followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"-javaagent:")," is the absolute path of ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-agent.jar"),", which is packaged by ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-dist"),"."),(0,a.kt)("h2",{id:"rundebug"},"Run/Debug"),(0,a.kt)("p",null,"Then, start ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication.java")," for normal operation or debugging, and the shenyu-agent module can be debugged with breakpoints normally."))}d.isMDXComponent=!0}}]);