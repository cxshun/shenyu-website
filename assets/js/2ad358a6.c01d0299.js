"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[58521],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,y=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return t?a.createElement(y,o(o({ref:n},d),{},{components:t})):a.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15006:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={title:"Using Eureka with Shenyu-SDK",keywords:["Using Shenyu-Sdk","Eureka"],description:"Using Shenyu-Sdk"},o=void 0,s={unversionedId:"user-guide/sdk-usage/shenyu-sdk-eureka",id:"user-guide/sdk-usage/shenyu-sdk-eureka",isDocsHomePage:!1,title:"Using Eureka with Shenyu-SDK",description:"Using Shenyu-Sdk",source:"@site/docs/user-guide/sdk-usage/shenyu-sdk-eureka.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-eureka",permalink:"/docs/next/user-guide/sdk-usage/shenyu-sdk-eureka",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/user-guide/sdk-usage/shenyu-sdk-eureka.md",version:"current",frontMatter:{title:"Using Eureka with Shenyu-SDK",keywords:["Using Shenyu-Sdk","Eureka"],description:"Using Shenyu-Sdk"},sidebar:"tutorialSidebar",previous:{title:"Using Etcd with Shenyu-SDK",permalink:"/docs/next/user-guide/sdk-usage/shenyu-sdk-etcd"},next:{title:"Using Shenyu-SDK-Feign",permalink:"/docs/next/user-guide/sdk-usage/shenyu-sdk-feign"}},p=[{value:"Background explanation",id:"background-explanation",children:[]},{value:"Environment preparation",id:"environment-preparation",children:[]},{value:"shenyu-bootstrap",id:"shenyu-bootstrap",children:[{value:"Maven dependency",id:"maven-dependency",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file",children:[]}]},{value:"Client Application",id:"client-application",children:[{value:"Maven dependency",id:"maven-dependency-1",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file-1",children:[]}]},{value:"Writing the local interface for the SDK",id:"writing-the-local-interface-for-the-sdk",children:[]}],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"background-explanation"},"Background explanation"),(0,r.yg)("p",null,"Shenyu offers Shenyu-Sdk to make it easy for services to quickly integrate with the Shenyu gateway. By simply depending on the SDK and doing some simple configuration, client services can call the gateway's exposed APIs as if they were calling local interfaces."),(0,r.yg)("img",{src:"/img/shenyu/sdk/shenyu-sdk_process.png",width:"80%",height:"50%"}),(0,r.yg)("p",null,"The registration center supported by the gateway for client access includes (nacos, eureka, etcd, zookeeper, consul), and the following is the relevant guide for using ",(0,r.yg)("strong",{parentName:"p"},"eureka")," registration center when ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"application client")," are used."),(0,r.yg)("h2",{id:"environment-preparation"},"Environment preparation"),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("inlineCode",{parentName:"p"},"Deployment")," guide, and choose a way to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"."),(0,r.yg)("h2",{id:"shenyu-bootstrap"},"shenyu-bootstrap"),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("p",null,"In the gateway's ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file, introduce the following dependencies."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>${eureka-client.version}</version>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-loadbalancer</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,r.yg)("h3",{id:"edit-the-configuration-file"},"Edit the configuration file"),(0,r.yg)("p",null,"Add the following configuration to the gateway's ",(0,r.yg)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true # Enable service discovery\n  \neureka:\n  client:\n    enabled: true\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/ # Enter your eureka registry center address here\n  instance:\n    prefer-ip-address: true\n")),(0,r.yg)("h2",{id:"client-application"},"Client Application"),(0,r.yg)("h3",{id:"maven-dependency-1"},"Maven dependency"),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file of the application client, introduce the following dependencies."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shenyu-Sdk Core")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-sdk-core</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shenyu-Sdk http implementation")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"HTTP client implementation, offering okhttp and httpclient as implementation options. Other implementations can be created by extending the ",(0,r.yg)("inlineCode",{parentName:"p"},"AbstractShenyuSdkClient")," class.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- httpclient --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-httpclient</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n\n\x3c!-- okhttp --\x3e\n\x3c!-- \n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-okhttp</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n--\x3e\n")),(0,r.yg)("h3",{id:"edit-the-configuration-file-1"},"Edit the configuration file"),(0,r.yg)("p",null,"Add the following configuration in the application client's ",(0,r.yg)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sdk:\n    enabled: true\n    register-type: eureka \n    server-lists: http://localhost:8761/eureka/\n    props:\n      retry:\n        enable: true\n        period: 100\n        maxPeriod: 1000\n        maxAttempts: 5\n      algorithm: roundRobin\n      scheme: http\n      \n# registerType: service registration type, fill in eureka\n# serverList: Enter the eureka server address(es), separated by commas in English.\n# scheme: Request protocol.\n\n# retry: Configuration related to failure retries.\n# retry.period: Retry waiting time.\n# retry.maxPeriod: Maximum retry waiting time .\n# retry.maxAttempts: Maximum retry count.\n")),(0,r.yg)("h2",{id:"writing-the-local-interface-for-the-sdk"},"Writing the local interface for the SDK"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the project startup class, annotate ",(0,r.yg)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")'),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"basePackages")," maintains the package location of Shenyu-Sdk's corresponding maintained gateway API interface.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create an interface and use the ",(0,r.yg)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")')," annotation to mark it, where ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," represents the gateway service name. If you need to define multiple beans to maintain the gateway's API, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"contextId")," as the corresponding bean alias.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the defined interface, add the methods of the interface to be mapped to the shenyu gateway, where the ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"@xxMapping")," corresponds to the path of the corresponding request in the gateway."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("p",null,"Project startup class"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.spring.EnableShenyuClients;\n\n@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,r.yg)("p",null,"Shenyu-SDK interface"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.spring.ShenyuClient;\n\n@ShenyuClient(name = "shenyu-bootstrap", contextId = "ShenyuSdkApiName")\npublic interface ShenyuHttpClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/http/shenyu/client/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n}\n')),(0,r.yg)("p",null,"For more information, refer to the sample project ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk"},"shenyu-examples-sdk")))}u.isMDXComponent=!0}}]);