"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[86836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53516:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Quick start with Tars",description:"Quick start with Tars"},o=void 0,s={unversionedId:"quick-start/quick-start-tars",id:"version-2.3.0-Legacy/quick-start/quick-start-tars",isDocsHomePage:!1,title:"Quick start with Tars",description:"Quick start with Tars",source:"@site/versioned_docs/version-2.3.0-Legacy/quick-start/quick-start-tars.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-tars",permalink:"/docs/2.3.0-Legacy/quick-start/quick-start-tars",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/quick-start/quick-start-tars.md",version:"2.3.0-Legacy",frontMatter:{title:"Quick start with Tars",description:"Quick start with Tars"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Quick start with SpringCloud",permalink:"/docs/2.3.0-Legacy/quick-start/quick-start-springcloud"},next:{title:"Divide Plugin",permalink:"/docs/2.3.0-Legacy/plugins/divide-plugin"}},l=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-tars project",id:"run-the-soul-examples-tars-project",children:[]},{value:"Tars plugin settings",id:"tars-plugin-settings",children:[]},{value:"Testing",id:"testing",children:[]}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document introduces how to quickly access the Soul Gateway using Tars. You can get the code example of this document by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-tars"},"here"),"."),(0,a.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),"."),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-bootstrap")," need to import tars dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-tars</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>com.tencent.tars</groupId>\n    <artifactId>tars-client</artifactId>\n    <version>1.7.2</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"run-the-soul-examples-tars-project"},"Run the soul-examples-tars project"),(0,a.kt)("p",null,"Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-tars"},"soul-examples-tars")),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," to be your local IP"),(0,a.kt)("p",null,"Modify config ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/SoulExampleServer.SoulExampleApp.config.conf"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is recommended to make clear the meaning of the main configuration items of config, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/TarsCloud/TarsJava/blob/master/docs/tars_java_user_guide.md"},"refer to the development guide")),(0,a.kt)("li",{parentName:"ul"},"bind IP in config should pay attention to providing cost machine"),(0,a.kt)("li",{parentName:"ul"},"local=..., Indicates the open port that the native machine connects to the tarsnode. If there is no tarsnode, this configuration can be dropped"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locator"),": Indicates the address (frame address) of the main control center, which is used to obtain the IP list according to the service name, If Registry is not required to locate the service, this configuration can be dropped"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node=tars.tarsnode.ServerObj@xxxx"),", Indicates the address of the connected tarsnode. If there is no tarsnode locally, this configuration can be removed")),(0,a.kt)("p",null,"More config configuration instructions, Please refer to",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TarsCloud/TarsJava/blob/master/docs/tars_java_user_guide.md"},"TARS Official Documentation")),(0,a.kt)("p",null,"Execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.tars.SoulTestTarsApplication")," main method to start project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration file address")," needs to be specified in the startup command when the service starts ",(0,a.kt)("strong",{parentName:"p"},"-Dconfig=xxx/SoulExampleServer.SoulExampleApp.config.conf")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"-Dconfig")," parameter is not added, the configuration may throw the following exceptions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"com.qq.tars.server.config.ConfigurationException: error occurred on load server config\n    at com.qq.tars.server.config.ConfigurationManager.loadServerConfig(ConfigurationManager.java:113)\n    at com.qq.tars.server.config.ConfigurationManager.init(ConfigurationManager.java:57)\n    at com.qq.tars.server.core.Server.loadServerConfig(Server.java:90)\n    at com.qq.tars.server.core.Server.<init>(Server.java:42)\n    at com.qq.tars.server.core.Server.<clinit>(Server.java:38)\n    at com.qq.tars.spring.bean.PropertiesListener.onApplicationEvent(PropertiesListener.java:37)\n    at com.qq.tars.spring.bean.PropertiesListener.onApplicationEvent(PropertiesListener.java:31)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:172)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:165)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:139)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:127)\n    at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:76)\n    at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:53)\n    at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:345)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:1226)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:1215)\n    at org.dromara.soul.examples.tars.SoulTestTarsApplication.main(SoulTestTarsApplication.java:38)\nCaused by: java.lang.NullPointerException\n    at java.io.FileInputStream.<init>(FileInputStream.java:130)\n    at java.io.FileInputStream.<init>(FileInputStream.java:93)\n    at com.qq.tars.common.util.Config.parseFile(Config.java:211)\n    at com.qq.tars.server.config.ConfigurationManager.loadServerConfig(ConfigurationManager.java:63)\n    ... 17 more\nThe exception occurred at load server config\n")),(0,a.kt)("p",null,"The following log appears when the startup is successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[SERVER] server starting at tcp -h 127.0.0.1 -p 21715 -t 60000...\n[SERVER] server started at tcp -h 127.0.0.1 -p 21715 -t 60000...\n[SERVER] server starting at tcp -h 127.0.0.1 -p 21714 -t 3000...\n[SERVER] server started at tcp -h 127.0.0.1 -p 21714 -t 3000...\n[SERVER] The application started successfully.\nThe session manager service started...\n[SERVER] server is ready...\n2021-02-09 13:28:24.643  INFO 16016 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 55290 (http) with context path \'\'\n2021-02-09 13:28:24.645  INFO 16016 --- [           main] o.d.s.e.tars.SoulTestTarsApplication     : Started SoulTestTarsApplication in 4.232 seconds (JVM running for 5.1)\n2021-02-09 13:28:24.828  INFO 16016 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : tars client register success: {"appName":"127.0.0.1:21715","contextPath":"/tars","path":"/tars/helloInt","pathDesc":"","rpcType":"tars","serviceName":"SoulExampleServer.SoulExampleApp.HelloObj","methodName":"helloInt","ruleName":"/tars/helloInt","parameterTypes":"int,java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"helloInt\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.Integer\\"},{\\"methodName\\":\\"hello\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.String\\"}]}","enabled":true} \n2021-02-09 13:28:24.837  INFO 16016 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : tars client register success: {"appName":"127.0.0.1:21715","contextPath":"/tars","path":"/tars/hello","pathDesc":"","rpcType":"tars","serviceName":"SoulExampleServer.SoulExampleApp.HelloObj","methodName":"hello","ruleName":"/tars/hello","parameterTypes":"int,java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"helloInt\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.Integer\\"},{\\"methodName\\":\\"hello\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.String\\"}]}","enabled":true} \n')),(0,a.kt)("h2",{id:"tars-plugin-settings"},"Tars plugin settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enabled the ",(0,a.kt)("inlineCode",{parentName:"li"},"tars")," plugin in the ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," plugin management.")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-examples-tars")," project will automatically register interface methods annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@SoulTarsClient")," in the soul gateway after successful startup."),(0,a.kt)("p",null,"Open Plugin Management -> tars to see the list of plugin rule configurations"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(91080).Z})),(0,a.kt)("p",null,"Use PostMan to simulate HTTP to request your tars service"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1173).Z})))}c.isMDXComponent=!0},1173:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/postman-test-71e1f81f98f8a0547421fddce8ae259a.png"},91080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rule-list-bb247d24aa2f5e009b4749dd447e9018.png"}}]);