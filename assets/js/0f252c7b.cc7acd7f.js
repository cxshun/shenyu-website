"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[23264],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,y=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88943:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const i={title:"Using Shenyu-SDK-Feign",keywords:["Using Shenyu-Sdk","feign"],description:"Using Shenyu-Sdk-Feign"},s=void 0,o={unversionedId:"user-guide/sdk-usage/shenyu-sdk-feign",id:"version-2.6.1/user-guide/sdk-usage/shenyu-sdk-feign",isDocsHomePage:!1,title:"Using Shenyu-SDK-Feign",description:"Using Shenyu-Sdk-Feign",source:"@site/versioned_docs/version-2.6.1/user-guide/sdk-usage/shenyu-sdk-feign.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-feign",permalink:"/docs/user-guide/sdk-usage/shenyu-sdk-feign",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/user-guide/sdk-usage/shenyu-sdk-feign.md",version:"2.6.1",frontMatter:{title:"Using Shenyu-SDK-Feign",keywords:["Using Shenyu-Sdk","feign"],description:"Using Shenyu-Sdk-Feign"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Using Eureka with Shenyu-SDK",permalink:"/docs/user-guide/sdk-usage/shenyu-sdk-eureka"},next:{title:"Using Nacos with Shenyu-SDK",permalink:"/docs/user-guide/sdk-usage/shenyu-sdk-nacos"}},l=[{value:"Shenyu sdk-feign",id:"shenyu-sdk-feign",children:[{value:"Maven dependency",id:"maven-dependency",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file",children:[]}]},{value:"Writing the local interface for the SDK",id:"writing-the-local-interface-for-the-sdk",children:[]}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"shenyu-sdk-feign"},"Shenyu sdk-feign"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Integrate ",(0,r.yg)("inlineCode",{parentName:"p"},"open Feign")," to implement declarative SDK call gateway API.\nLike 'shenyu sdk', 'shenyu sdk feign' is another option;\nfor more information see :"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-consul"},"shenyu-sdk-consul")),(0,r.yg)("li",{parentName:"ul"},"please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-etcd"},"shenyu-sdk-etcd")),(0,r.yg)("li",{parentName:"ul"},"please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-eureka"},"shenyu-sdk-eureka")),(0,r.yg)("li",{parentName:"ul"},"please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-nacos"},"shenyu-sdk-nacos")),(0,r.yg)("li",{parentName:"ul"},"please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-zookeeper"},"shenyu-sdk-zookeeper")))),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file of the application client, introduce the following dependencies(Compatible with ",(0,r.yg)("inlineCode",{parentName:"p"},"FeignClient"),")."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-openfeign</artifactId>\n        <version>${spring-cloud.version}</version>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk-feign</artifactId>\n        <version>2.6.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("h3",{id:"edit-the-configuration-file"},"Edit the configuration file"),(0,r.yg)("p",null,"Add the following configuration in the application client's ",(0,r.yg)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sdk:\n    enabled: true\n    register-type: consul\n    server-lists: localhost\n    props:\n      algorithm: roundRobin\n      scheme: http\n\n# if not use openFeign and springCloud-loadBalance, feign client options must be enabled.\nfeign:\n  client:\n    httpclient:\n      enabled: true\n\n# registerType: service registration type, fill in consul.\n# serverLists: consul client agent address (sidecar deployment mode (single machine or cluster), can also be the address of consul server agent (can only connect to one consul server agent node, if it is a cluster, then there will be a single point of failure problem)).\n\n# algorithm: load balance algorithm.\n# scheme: Request protocol.\n\n")),(0,r.yg)("h2",{id:"writing-the-local-interface-for-the-sdk"},"Writing the local interface for the SDK"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the project startup class, annotate ",(0,r.yg)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")'),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"basePackages")," maintains the package location of Shenyu-Sdk's corresponding maintained gateway API interface.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create an interface and use the ",(0,r.yg)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")')," annotation to mark it, where ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," represents the gateway service name. If you need to define multiple beans to maintain the gateway's API, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"contextId")," as the corresponding bean alias.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the defined interface, add the methods of the interface to be mapped to the shenyu gateway, where the ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"@xxMapping")," corresponds to the path of the corresponding request in the gateway."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("p",null,"Project startup class"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.feign.EnableShenyuClients;\n\n@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.feign.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,r.yg)("p",null,"Shenyu-SDK interface"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.feign.ShenyuClient;\n\n@ShenyuClient(name = "shenyu-gateway", contextId = "ShenyuSdkApiName", path = "/feign/shenyu/client")\npublic interface ShenyuFeignClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n\n    /**\n     * annoTest.\n     *\n     * @param cookie     cookie\n     * @param header     header\n     * @param id         id\n     * @param requestDto requestDto\n     * @return sdkTestDto\n     */\n    @PostMapping("/{id}/anno")\n    SdkTestDto annoTest(@CookieValue("cookie") String cookie, @RequestHeader("header") String header, @PathVariable("id") String id, @RequestBody SdkTestDto requestDto);\n\n}\n')),(0,r.yg)("p",null,"For more information, refer to the sample project ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk/shenyu-examples-sdk-feign"},"shenyu-examples-sdk-feign")))}d.isMDXComponent=!0}}]);