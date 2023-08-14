"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49916:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Run Integration Test Locally",description:"Run Integration Test Locally",tags:["integration test"]},l=void 0,i={unversionedId:"developer/integration-test",id:"version-2.6.0/developer/integration-test",isDocsHomePage:!1,title:"Run Integration Test Locally",description:"Run Integration Test Locally",source:"@site/versioned_docs/version-2.6.0/developer/integration-test.md",sourceDirName:"developer",slug:"/developer/integration-test",permalink:"/docs/developer/integration-test",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/developer/integration-test.md",version:"2.6.0",frontMatter:{title:"Run Integration Test Locally",description:"Run Integration Test Locally",tags:["integration test"]},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"File Upload And Download",permalink:"/docs/developer/file-and-image"},next:{title:"Local Model",permalink:"/docs/developer/local-model"}},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Start integration test locally",id:"start-integration-test-locally",children:[]}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the code of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu"),"."),(0,a.kt)("li",{parentName:"ol"},"Install and start docker.")),(0,a.kt)("h3",{id:"start-integration-test-locally"},"Start integration test locally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build with Maven")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build integrated tests")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Start docker compose")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You need to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ matrix.case }}")," with the exact directory, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http"),".")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n")))}u.isMDXComponent=!0}}]);