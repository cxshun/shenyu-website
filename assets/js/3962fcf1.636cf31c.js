"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[21439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93636:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Kubernetes Controller Config",description:"Kubernetes Controller Config"},i=void 0,o={unversionedId:"user-guide/kubernetes-controller/config",id:"version-2.6.0/user-guide/kubernetes-controller/config",isDocsHomePage:!1,title:"Kubernetes Controller Config",description:"Kubernetes Controller Config",source:"@site/versioned_docs/version-2.6.0/user-guide/kubernetes-controller/config.md",sourceDirName:"user-guide/kubernetes-controller",slug:"/user-guide/kubernetes-controller/config",permalink:"/docs/user-guide/kubernetes-controller/config",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/user-guide/kubernetes-controller/config.md",version:"2.6.0",frontMatter:{title:"Kubernetes Controller Config",description:"Kubernetes Controller Config"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Build And Deploy Kubernetes Controller",permalink:"/docs/user-guide/kubernetes-controller/build-deploy"},next:{title:"The client registers the API documentation",permalink:"/docs/user-guide/api-doc/shenyu-annotation-apidoc"}},u=[{value:"Enable HTTPS",id:"enable-https",children:[]},{value:"Ingress configuration",id:"ingress-configuration",children:[{value:"General",id:"general",children:[]},{value:"Divide plugin (HTTP proxy)",id:"divide-plugin-http-proxy",children:[]}]}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces Kubernetes Controller configuration."),(0,a.kt)("h2",{id:"enable-https"},"Enable HTTPS"),(0,a.kt)("p",null,"To enable HTTPS, you need to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"sni protocol")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," file of the gateway:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n   netty:\n     http:\n       sni:\n         enabled: true\n         mod: k8s #k8s mode applies\n         defaultK8sSecretNamespace: shenyu-ingress #The namespace of the default secret resource\n         defaultK8sSecretName: default-cert #default secret resource name\n")),(0,a.kt)("p",null,"Among them, the default secret resource must be available, but it will not be actually used at present."),(0,a.kt)("h2",{id:"ingress-configuration"},"Ingress configuration"),(0,a.kt)("p",null,"ShenYu Kubernetes Controller implements the K8s native Ingress standard, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"K8s official documentation")," for the use of the native standard"),(0,a.kt)("p",null,"In addition, Apache ShenYu has expanded based on the Annotation field of Ingress, and the configuration is shown in the following tables:"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubernetes.io/ingress.class"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Fill in shenyu")))),(0,a.kt)("h3",{id:"divide-plugin-http-proxy"},"Divide plugin (HTTP proxy)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/loadbalancer"),(0,a.kt)("td",{parentName:"tr",align:null},"random"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Load balancing algorithm, optional hash, random, roundRobin, leastActive, p2c, shortestResponse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/retry"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of failed retries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"3000"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Backend request timeout, in milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/header-max-size"),(0,a.kt)("td",{parentName:"tr",align:null},"10240"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum size of the request header, unit byte")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/request-max-size"),(0,a.kt)("td",{parentName:"tr",align:null},"102400"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum request body size, unit byte")))))}d.isMDXComponent=!0}}]);