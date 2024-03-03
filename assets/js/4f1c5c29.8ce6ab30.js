"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[77874],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(a),m=r,y=l["".concat(p,".").concat(m)]||l[m]||h[m]||o;return a?n.createElement(y,c(c({ref:t},u),{},{components:a})):n.createElement(y,c({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90714:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={title:"[Apache ShenYu WASM 1.0.0 Version Release]",description:"Apache ShenYu 1.0.0 Version Release",categories:"Apache ShenYu WASM",tags:["Apache ShenYu WASM","WASM"],date:new Date("2024-01-06T00:00:00.000Z")},c=void 0,i={permalink:"/news/Apache-ShenYu-WASM-release-version-1.0.0",source:"@site/news/Apache-ShenYu-WASM-release-version-1.0.0.md",title:"[Apache ShenYu WASM 1.0.0 Version Release]",description:"Apache ShenYu 1.0.0 Version Release",date:"2024-01-06T00:00:00.000Z",formattedDate:"January 6, 2024",tags:[{label:"Apache ShenYu WASM",permalink:"/news/tags/apache-shen-yu-wasm"},{label:"WASM",permalink:"/news/tags/wasm"}],readingTime:.96,truncated:!1,nextItem:{title:"[Apache ShenYu 2.6.0 Version Release]",permalink:"/news/Apache-ShenYu-release-version-2.6.0"}},p=[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu WASM",id:"apache-shenyu-wasm",children:[{value:"New Feature",id:"new-feature",children:[]}]},{value:"Refactor",id:"refactor",children:[]},{value:"Become a contributor",id:"become-a-contributor",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],s={toc:p},u="wrapper";function l(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"apache-shenyu"},"Apache ShenYu"),(0,r.yg)("p",null,"Apache ShenYu is a responsive API gateway developed using Java Reactor. With its high performance, dynamic and flexible traffic control, hot swap, easy deployment and other features, out of the box to provide users with a full lifecycle of 'API' gateway, including 'API' registration, service proxy, protocol conversion, 'API' documentation and 'API' governance and other functions. Apache ShenYu graduated as an Apache top-level project in 'July 2022'."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"website: ",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org"},"https://shenyu.apache.org")),(0,r.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu"},"https://github.com/apache/shenyu"))),(0,r.yg)("h2",{id:"apache-shenyu-wasm"},"Apache ShenYu WASM"),(0,r.yg)("p",null,"Apache ShenYu WASM is a WASM SDK for Java which developed based on Java Native Interface and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer"},"wasmer")," , with cross-platform and easy-to-use."),(0,r.yg)("h3",{id:"new-feature"},"New Feature"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Simplify usage"),(0,r.yg)("li",{parentName:"ol"},"Support the use of user-defined dynamic link libraries")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"the specific use please see: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-wasm/blob/master/README.md"},"https://github.com/apache/shenyu-wasm/blob/master/README.md"))),(0,r.yg)("h2",{id:"refactor"},"Refactor"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Refactor repository from ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wasmerio/wasmer-java"},"wasmer-java"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"specific pr please see: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-wasm/pull/3"},"https://github.com/apache/shenyu-wasm/pull/3"))),(0,r.yg)("h2",{id:"become-a-contributor"},"Become a contributor"),(0,r.yg)("p",null,"We welcome every contributor to join ShenYu, and welcome contributors to participate in ShenYu in the spirit of Apache Way!"),(0,r.yg)("p",null,"See the contributor guidelines:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/community/contributor-guide"},"https://shenyu.apache.org/community/contributor-guide"))),(0,r.yg)("h2",{id:"special-thanks"},"Special Thanks"),(0,r.yg)("p",null,"Thanks to all the contributors of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer"},"wasmer")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer-java"},"wasmer-java"),". Without you guys, there would be no existence of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-wasm"},"shenyu-wasm")," !"))}l.isMDXComponent=!0}}]);