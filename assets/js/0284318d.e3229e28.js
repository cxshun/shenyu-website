"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(a),d=s,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(g,i(i({ref:t},h),{},{components:a})):n.createElement(g,i({ref:t},h))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26910:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>m,default:()=>k,frontMatter:()=>v,metadata:()=>b,toc:()=>f});var n=a(87462),s=a(67294),r=a(3905),i=a(24973);const o="downloadContainer_Jybv",c="downloadCard_XkRQ",l="downloadCardTitle_ABJq",h="downloadCardButton_T3P7",p="dropDownContainer_fBfA",u="versionTitle_BkaR",d="downloadLinks_53Ef",g=[{title:(0,i.I)({message:"Source Codes"}),versions:[{versionTitle:"2.5.0",targets:{zip:"https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip",asc:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip.asc",sha512:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip.sha512"}},{versionTitle:"2.4.3",targets:{zip:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip",asc:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip.sha512"}},{versionTitle:"2.4.2",targets:{zip:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip",asc:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip.sha512"}}]},{title:(0,i.I)({message:"ShenYu-Admin Binary Distribution"}),versions:[{versionTitle:"2.5.0",targets:{tar:"https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz",asc:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz.asc",sha512:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz.sha512"}},{versionTitle:"2.4.3",targets:{tar:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz",asc:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz.sha512"}},{versionTitle:"2.4.2",targets:{tar:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz",asc:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz.sha512"}}]},{title:(0,i.I)({message:"ShenYu-Bootstrap Binary Distribution"}),versions:[{versionTitle:"2.5.0",targets:{tar:"https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz",asc:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz.asc",sha512:"https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz.sha512"}},{versionTitle:"2.4.3",targets:{tar:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz",asc:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz.sha512"}},{versionTitle:"2.4.2",targets:{tar:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz",asc:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz.asc",sha512:"https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz.sha512"}}]},{title:(0,i.I)({message:"ShenYu client golang Source Codes"}),versions:[{versionTitle:"1.0.0",targets:{tar:"https://www.apache.org/dyn/closer.lua/shenyu/shenyu-client-golang/v1.0.0/shenyu-client-golang-v1.0.0-src.tar.gz",asc:"https://downloads.apache.org/shenyu/shenyu-client-golang/v1.0.0/shenyu-client-golang-v1.0.0-src.tar.gz.asc",sha512:"https://downloads.apache.org/shenyu/shenyu-client-golang/v1.0.0/shenyu-client-golang-v1.0.0-src.tar.gz.sha512"}}]},{title:(0,i.I)({message:"ShenYu client .NET Source Codes"}),versions:[{versionTitle:"1.0.0",targets:{tar:"https://www.apache.org/dyn/closer.lua/shenyu/shenyu-client-dotnet/v1.0.0/shenyu-client-dotnet-v1.0.0-src.tar.gz",asc:"https://downloads.apache.org/shenyu/shenyu-client-dotnet/v1.0.0/shenyu-client-dotnet-v1.0.0-src.tar.gz.asc",sha512:"https://downloads.apache.org/shenyu/shenyu-client-dotnet/v1.0.0/shenyu-client-dotnet-v1.0.0-src.tar.gz.sha512"}}]},{title:(0,i.I)({message:"ShenYu Nginx Source Codes"}),versions:[{versionTitle:"1.0.0-1",targets:{tar:"https://www.apache.org/dyn/closer.lua/shenyu/shenyu-nginx/1.0.0-1/shenyu-nginx-1.0.0-1-src.tar.gz",asc:"https://downloads.apache.org/shenyu/shenyu-nginx/1.0.0-1/shenyu-nginx-1.0.0-1-src.tar.gz.asc",sha512:"https://downloads.apache.org/shenyu/shenyu-nginx/1.0.0-1/shenyu-nginx-1.0.0-1-src.tar.gz.sha512"}}]}];const y=function(){const e=Array(g.length).fill(!1),[t,a]=(0,s.useState)(e),n=(0,s.useCallback)((t=>{const{target:n}=t,s=n.getAttributeNode("id")?.value;s&&"dropDownButton"===s||a(e)}),[]);(0,s.useEffect)((()=>(document.addEventListener("click",(e=>{n(e)})),document.removeEventListener("click",(e=>{n(e)})))),[]);const r=(0,s.useCallback)((e=>{const n=t.map(((t,a)=>a===e&&!t));a([...n])}),[t]);return s.createElement("div",{className:o},g.map(((e,a)=>{const{versions:n,title:o}=e;return s.createElement("div",{className:c,key:a},s.createElement("div",{className:l},o),s.createElement("button",{id:"dropDownButton",className:h,onClick:()=>{r(a)}},s.createElement(i.Z,null,"Source")),t[a]&&s.createElement("div",{className:p},n.map(((e,t)=>{const{versionTitle:a,targets:n}=e,r=Object.keys(n).map((e=>({title:e,link:n[e]})));return s.createElement("div",{key:t},s.createElement("div",{className:u},a),s.createElement("div",{className:d},r.map(((e,t)=>{const a="["+e.title+"]";return s.createElement("a",{href:e.link,key:t},a)}))))}))))})))},v={title:"Download",keywords:["Download"],description:"Download"},m=void 0,b={type:"mdx",permalink:"/download",source:"@site/src/pages/download.mdx"},f=[{value:"Download",id:"download",children:[]},{value:"All Releases",id:"all-releases",children:[]},{value:"Verify the Releases",id:"verify-the-releases",children:[]},{value:"PDF",id:"pdf",children:[]}],w={toc:f};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," is released as source code tarballs with corresponding binary tarballs for convenience."),(0,r.kt)("p",null,"The downloads are distributed via mirror sites and should be checked for tampering using GPG or SHA-512."),(0,r.kt)(y,{mdxType:"DownloadCompoent"}),(0,r.kt)("h2",{id:"all-releases"},"All Releases"),(0,r.kt)("p",null,"Find all releases in the ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/"},"Archive repository"),"."),(0,r.kt)("h2",{id:"verify-the-releases"},"Verify the Releases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://downloads.apache.org/shenyu/KEYS"},"PGP signatures KEYS")),(0,r.kt)("p",null,"It is essential that you verify the integrity of the downloaded files using the PGP or SHA signatures.\nThe PGP signatures can be verified using GPG or PGP.\nPlease download the KEYS as well as the asc signature files for relevant distribution.\nIt is recommended to get these files from the main distribution directory and not from the mirrors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --import KEYS\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pgpk -a KEYS\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pgp -ka KEYS\n")),(0,r.kt)("p",null,"To verify the binaries/sources you can download the relevant asc files for it from main distribution directory and follow the below guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify apache-shenyu-********.asc apache-shenyu-*********\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pgpv apache-shenyu-********.asc\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pgp apache-shenyu-********.asc\n")),(0,r.kt)("h2",{id:"pdf"},"PDF"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," provides a packaged and downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},"PDF")," of the docs for users and developers to use."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/pdf/apache_shenyu_docs_en.pdf"},"English"))))}k.isMDXComponent=!0},24973:(e,t,a)=>{a.d(t,{Z:()=>p,I:()=>h});var n=a(67294);const s=/{\w+}/g,r="{}";function i(e,t){const a=[],i=e.replace(s,(e=>{const s=e.substr(1,e.length-2),i=null==t?void 0:t[s];if(void 0!==i){const e=n.isValidElement(i)?i:String(i);return a.push(e),r}return e}));return 0===a.length?e:a.every((e=>"string"==typeof e))?i.split(r).reduce(((e,t,n)=>{var s;return e.concat(t).concat(null!==(s=a[n])&&void 0!==s?s:"")}),""):i.split(r).reduce(((e,t,s)=>[...e,n.createElement(n.Fragment,{key:s},t,a[s])]),[])}function o(e){let{children:t,values:a}=e;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,a)}var c=a(57529);function l(e){let{id:t,message:a}=e;var n;return null!==(n=c[null!=t?t:a])&&void 0!==n?n:a}function h(e,t){let{message:a,id:n}=e;var s;return i(null!==(s=l({message:a,id:n}))&&void 0!==s?s:a,t)}function p(e){let{children:t,id:a,values:s}=e;var r;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const i=null!==(r=l({message:t,id:a}))&&void 0!==r?r:t;return n.createElement(o,{values:s},i)}}}]);