"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},45364:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Tars Proxy",description:"Tars Proxy"},i=void 0,s={unversionedId:"user-guide/proxy/tars-proxy",id:"version-2.5.1/user-guide/proxy/tars-proxy",isDocsHomePage:!1,title:"Tars Proxy",description:"Tars Proxy",source:"@site/versioned_docs/version-2.5.1/user-guide/proxy/tars-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/tars-proxy",permalink:"/docs/2.5.1/user-guide/proxy/tars-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/user-guide/proxy/tars-proxy.md",version:"2.5.1",frontMatter:{title:"Tars Proxy",description:"Tars Proxy"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Spring Cloud Proxy",permalink:"/docs/2.5.1/user-guide/proxy/spring-cloud-proxy"},next:{title:"Websocket Proxy",permalink:"/docs/2.5.1/user-guide/proxy/websocket-proxy"}},l=[{value:"Add tars plugin in gateway",id:"add-tars-plugin-in-gateway",children:[]},{value:"Tars service access gateway",id:"tars-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tars")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"tars")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"tars")," service."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"tars")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"tars")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-tars"},"Quick start with Tars")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/use-data-sync"},"Data Synchronization Config"),")."),(0,a.kt)("h2",{id:"add-tars-plugin-in-gateway"},"Add tars plugin in gateway"),(0,a.kt)("p",null,"Add the following dependencies to the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu tars plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-tars</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.tencent.tars</groupId>\n            <artifactId>tars-client</artifactId>\n            <version>1.7.2</version>\n        </dependency>\n        \x3c!-- apache shenyu tars plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restart your gateway service.")),(0,a.kt)("h2",{id:"tars-service-access-gateway"},"Tars service access gateway"),(0,a.kt)("p",null,"Please refer to\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-tars"},"shenyu-examples-tars")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the microservice built by ",(0,a.kt)("inlineCode",{parentName:"li"},"Tars"),", add the following dependencies:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-tars</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    tars:\n      props:\n        contextPath: /tars\n        appName: tars\n        port: 21715\n        host: 192.168.41.103\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsService")," Annotation on the tars service interface implementation class and ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsClient")," on the method, start your service provider, and register successfully. In the background management system, enter PluginList -> rpc proxy -> tars, you will see the automatic registration of selectors and rules information.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @TarsServant("HelloObj")\n    @ShenyuTarsService(serviceName = "ShenyuExampleServer.ShenyuExampleApp.HelloObj")\n    public class HelloServantImpl implements HelloServant {\n        @Override\n        @ShenyuTarsClient(path = "/hello", desc = "hello")\n        public String hello(int no, String name) {\n            return String.format("hello no=%s, name=%s, time=%s", no, name, System.currentTimeMillis());\n        }\n    \n        @Override\n        @ShenyuTarsClient(path = "/helloInt", desc = "helloInt")\n        public int helloInt(int no, String name) {\n            return 1;\n        }\n    }\n\n')),(0,a.kt)("h2",{id:"user-request"},"User Request"),(0,a.kt)("p",null,"You can request your tars service by Http. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/tars/hello")," ."))}u.isMDXComponent=!0}}]);