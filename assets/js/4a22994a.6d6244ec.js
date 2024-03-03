"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[24677],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,y=u["".concat(d,".").concat(f)]||u[f]||s[f]||o;return r?t.createElement(y,l(l({ref:n},c),{},{components:r})):t.createElement(y,l({ref:n},c))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9231:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(58168),i=(r(96540),r(15680));const o={title:"File Upload And Download",keywords:["File"],description:"file upload and download"},l=void 0,a={unversionedId:"developer/file-and-image",id:"version-2.4.3/developer/file-and-image",isDocsHomePage:!1,title:"File Upload And Download",description:"file upload and download",source:"@site/versioned_docs/version-2.4.3/developer/file-and-image.md",sourceDirName:"developer",slug:"/developer/file-and-image",permalink:"/docs/2.4.3/developer/file-and-image",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/developer/file-and-image.md",version:"2.4.3",frontMatter:{title:"File Upload And Download",keywords:["File"],description:"file upload and download"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"A multilingual HTTP client",permalink:"/docs/2.4.3/developer/developer-shenyu-client"},next:{title:"Run Integration Test Locally",permalink:"/docs/2.4.3/developer/integration-test"}},d=[{value:"description",id:"description",children:[]},{value:"File Upload",id:"file-upload",children:[]},{value:"File Download",id:"file-download",children:[]}],p={toc:d},c="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"This doc gives a brief description for upload and download files using ",(0,i.yg)("inlineCode",{parentName:"li"},"Apache ShenYu"),".")),(0,i.yg)("h2",{id:"file-upload"},"File Upload"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The default file size limit is ",(0,i.yg)("inlineCode",{parentName:"li"},"10M"),"."),(0,i.yg)("li",{parentName:"ul"},"For custom limitation, use",(0,i.yg)("inlineCode",{parentName:"li"},"--file.size")," with an integer variable. e.g.",(0,i.yg)("inlineCode",{parentName:"li"},"--file.size = 30")),(0,i.yg)("li",{parentName:"ul"},"Upload your files just as way you did before")),(0,i.yg)("h2",{id:"file-download"},"File Download"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," supports download files in stream. There is no need to change anything.")))}u.isMDXComponent=!0}}]);