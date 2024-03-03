"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97149],{15680:(e,a,r)=>{r.d(a,{xA:()=>c,yg:()=>m});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=t.createContext({}),d=function(e){var a=t.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=d(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,m=p["".concat(u,".").concat(b)]||p[b]||l[b]||o;return r?t.createElement(m,i(i({ref:a},c),{},{components:r})):t.createElement(m,i({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},15124:(e,a,r)=>{r.r(a),r.d(a,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(58168),n=(r(96540),r(15680));const o={title:"Quick start with Dubbo",description:"Quick start with Dubbo"},i=void 0,s={unversionedId:"quick-start/quick-start-dubbo",id:"version-2.5.0/quick-start/quick-start-dubbo",isDocsHomePage:!1,title:"Quick start with Dubbo",description:"Quick start with Dubbo",source:"@site/versioned_docs/version-2.5.0/quick-start/quick-start-dubbo.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-dubbo",permalink:"/docs/2.5.0/quick-start/quick-start-dubbo",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/quick-start/quick-start-dubbo.md",version:"2.5.0",frontMatter:{title:"Quick start with Dubbo",description:"Quick start with Dubbo"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Cluster Deployment",permalink:"/docs/2.5.0/deployment/deployment-cluster"},next:{title:"Quick start with gRPC",permalink:"/docs/2.5.0/quick-start/quick-start-grpc"}},u=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-dubbo project",id:"run-the-shenyu-examples-dubbo-project",children:[]},{value:"Test",id:"test",children:[]}],d={toc:u},c="wrapper";function p(e){let{components:a,...o}=e;return(0,n.yg)(c,(0,t.A)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Dubbo. You can get the code example of this document by clicking ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.5.0/shenyu-examples/shenyu-examples-dubbo"},"here"),"."),(0,n.yg)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,n.yg)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,n.yg)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,n.yg)("p",null,"After successful startup, you need to open the Dubbo plugin on in the BasicConfig ",(0,n.yg)("inlineCode",{parentName:"p"},"->")," Plugin, and set your registry address. Please make sure the registry center is open locally."),(0,n.yg)("img",{src:"/img/shenyu/quick-start/dubbo/dubbo_open_en.png",width:"60%",height:"50%"}),(0,n.yg)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,n.yg)("p",null,"If client is ",(0,n.yg)("inlineCode",{parentName:"p"},"apache dubbo"),", registry center is ",(0,n.yg)("inlineCode",{parentName:"p"},"Zookeeper"),", please refer to the following configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu  apache dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.dubbo</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>2.7.5</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency start --\x3e\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>4.0.1</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency end --\x3e\n        \x3c!-- apache shenyu  apache dubbo plugin end--\x3e\n")),(0,n.yg)("p",null,"If client is ",(0,n.yg)("inlineCode",{parentName:"p"},"alibaba dubbo"),", registry center is ",(0,n.yg)("inlineCode",{parentName:"p"},"Zookeeper"),", please refer to the following configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>${alibaba.dubbo.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>${curator.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n")),(0,n.yg)("h2",{id:"run-the-shenyu-examples-dubbo-project"},"Run the shenyu-examples-dubbo project"),(0,n.yg)("p",null,"Download ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.5.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," ."),(0,n.yg)("p",null,"replace the register address in ",(0,n.yg)("inlineCode",{parentName:"p"},"shenyu-examples-alibaba-dubbo-service/src/main/resources/spring-dubbo.xml")," with your local zk address, such as:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<dubbo:registry address="zookeeper://localhost:2181"/>\n')),(0,n.yg)("p",null,"Execute the ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.alibaba.dubbo.service.TestAlibabaDubboApplication")," main method to start dubbo project."),(0,n.yg)("p",null,"The following log appears when the startup is successful:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'2021-02-06 20:58:01.807  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/insert","pathDesc":"Insert a row of data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"insert","ruleName":"/dubbo/insert","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.DubboTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.821  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findAll","pathDesc":"Get all data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findAll","ruleName":"/dubbo/findAll","parameterTypes":"","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.833  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findById","pathDesc":"Query by Id","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findById","ruleName":"/dubbo/findById","parameterTypes":"java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.844  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByListId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByListId","ruleName":"/dubbo/findByListId","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.855  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByIdsAndName","ruleName":"/dubbo/findByIdsAndName","parameterTypes":"java.util.List,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.866  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSave","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSave","ruleName":"/dubbo/batchSave","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.876  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByArrayIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByArrayIdsAndName","ruleName":"/dubbo/findByArrayIdsAndName","parameterTypes":"[Ljava.lang.Integer;,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.889  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTestAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTestAndName","ruleName":"/dubbo/saveComplexBeanTestAndName","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.901  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSaveAndNameAndId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSaveAndNameAndId","ruleName":"/dubbo/batchSaveAndNameAndId","parameterTypes":"java.util.List,java.lang.String,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.911  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTest","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTest","ruleName":"/dubbo/saveComplexBeanTest","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.922  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByStringArray","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByStringArray","ruleName":"/dubbo/findByStringArray","parameterTypes":"[Ljava.lang.String;","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n')),(0,n.yg)("p",null,"Note: When you need to expose ",(0,n.yg)("inlineCode",{parentName:"p"},"multiple protocols")," at the same time, please do not configure ",(0,n.yg)("inlineCode",{parentName:"p"},"shenyu.client.dubbo.props.port"),"."),(0,n.yg)("h2",{id:"test"},"Test"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"shenyu-examples-dubbo")," project will automatically register interface methods annotated with ",(0,n.yg)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," in the Apache ShenYu gateway after successful startup."),(0,n.yg)("p",null,"Open PluginList -> rpc proxy -> dubbo to see the list of plugin rule configurations:"),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(36080).A})),(0,n.yg)("p",null,"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"PostMan")," to simulate ",(0,n.yg)("inlineCode",{parentName:"p"},"HTTP")," to request your ",(0,n.yg)("inlineCode",{parentName:"p"},"Dubbo")," service:"),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(47621).A})),(0,n.yg)("p",null,"Complex multi-parameter example: The related interface implementation class is ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.alibaba.dubbo.service.impl.DubboMultiParamServiceImpl#batchSaveAndNameAndId"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'@Override\n@ShenyuDubboClient(path = "/batchSaveAndNameAndId")\npublic DubboTest batchSaveAndNameAndId(List<DubboTest> dubboTestList, String id, String name) {\n    DubboTest test = new DubboTest();\n    test.setId(id);\n    test.setName("hello world shenyu alibaba dubbo param batchSaveAndNameAndId :" + name + ":" + dubboTestList.stream().map(DubboTest::getName).collect(Collectors.joining("-")));\n    return test;\n}\n')),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(60655).A})),(0,n.yg)("p",null,"When your arguments do not match, the following exception will occur:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"2021-02-07 22:24:04.015 ERROR 14860 --- [:20888-thread-3] o.d.shenyu.web.handler.GlobalErrorHandler  : [e47b2a2a] Resolved [ShenyuException: org.apache.dubbo.remoting.RemotingException: java.lang.IllegalArgumentException: args.length != types.length\njava.lang.IllegalArgumentException: args.length != types.length\n    at org.apache.dubbo.common.utils.PojoUtils.realize(PojoUtils.java:91)\n    at org.apache.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:82)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:41)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:150)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:100)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:175)\n    at org.apache.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:51)\n    at org.apache.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:57)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n] for HTTP POST /dubbo/batchSaveAndNameAndId\n")))}p.isMDXComponent=!0},47621:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/postman-findbyid-2db0a41b2665dfc615923b07b0d27221.jpg"},60655:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/postman-multiparams-b5bf03d0e31f67a605b7f2b19775ba34.jpg"},36080:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/rule-list-826032a15f07a3e467617873e9ab894c.jpg"}}]);