"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[30935],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(o,".").concat(d)]||u[d]||h[d]||p;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,s=new Array(p);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<p;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61587:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const p={title:"Quick start with Http",description:"Quick start with http"},s=void 0,i={unversionedId:"quick-start/quick-start-http",id:"version-2.5.1/quick-start/quick-start-http",isDocsHomePage:!1,title:"Quick start with Http",description:"Quick start with http",source:"@site/versioned_docs/version-2.5.1/quick-start/quick-start-http.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-http",permalink:"/docs/2.5.1/quick-start/quick-start-http",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/quick-start/quick-start-http.md",version:"2.5.1",frontMatter:{title:"Quick start with Http",description:"Quick start with http"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Quick start with gRPC",permalink:"/docs/2.5.1/quick-start/quick-start-grpc"},next:{title:"Quick start with Motan",permalink:"/docs/2.5.1/quick-start/quick-start-motan"}},o=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-http project",id:"run-the-shenyu-examples-http-project",children:[]},{value:"Test",id:"test",children:[]}],c={toc:o},l="wrapper";function u(e){let{components:t,...p}=e;return(0,a.yg)(l,(0,r.A)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Http. You can get the code example of this document by clicking ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"here"),"."),(0,a.yg)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,a.yg)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,a.yg)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,a.yg)("p",null,"After successful startup, you need to open the Divide plugin on in the BasicConfig ",(0,a.yg)("inlineCode",{parentName:"p"},"->")," Plugin. In the Apache ShenYu gateway, the HTTP request is handled by the Divide plugin."),(0,a.yg)("img",{src:"/img/shenyu/quick-start/http/http_open_en.png",width:"60%",height:"50%"}),(0,a.yg)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,a.yg)("p",null,"Add the following dependencies to the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--if you use http proxy start this--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.yg)("h2",{id:"run-the-shenyu-examples-http-project"},"Run the shenyu-examples-http project"),(0,a.yg)("p",null,"Download ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,a.yg)("p",null,"Execute the ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.http.ShenyuTestHttpApplication")," main method to start project."),(0,a.yg)("p",null,"Since ",(0,a.yg)("inlineCode",{parentName:"p"},"2.4.3"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu.client.http.props.port")," can be non-configured if you like."),(0,a.yg)("p",null,"The following log appears when the startup is successful:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 00:57:07.561  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/test/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/test/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.577  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/save","pathDesc":"Save order","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/save","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.587  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**/name","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**/name","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.596  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/findById","pathDesc":"Find by id","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/findById","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.606  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:08.023  INFO 3700 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8188\n2021-02-10 00:57:08.026  INFO 3700 --- [           main] o.d.s.e.http.ShenyuTestHttpApplication     : Started ShenyuTestHttpApplication in 2.555 seconds (JVM running for 3.411) \n')),(0,a.yg)("h2",{id:"test"},"Test"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http")," project will automatically register interface methods annotated with ",(0,a.yg)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," in the Apache ShenYu gateway after successful startup."),(0,a.yg)("p",null,"Open PluginList -> Proxy -> divide to see the list of plugin rule configurations:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(61146).A})),(0,a.yg)("p",null,"Use PostMan to simulate HTTP to request your http service:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(3250).A})),(0,a.yg)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your http service","[local:no Shenyu proxy]",":"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(87600).A})),(0,a.yg)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your http service","[Shenyu proxy]",":"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(45905).A})))}u.isMDXComponent=!0},87600:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/idea-http-test-local-3e6960c11dc2bd689ec5276b5e219ce3.png"},45905:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/idea-http-test-proxy-bf5aad9695bc73dc71565ea308ad1ef1.png"},3250:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/postman-test-ffc28736280dc05a51162a4db2a0a7df.png"},61146:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/rule-list-44d335cb7d35496ced765ebf3751ac55.png"}}]);