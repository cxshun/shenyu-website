"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47797],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30468:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={title:"Spring Cloud\u5feb\u901f\u5f00\u59cb",description:"Spring Cloud\u5feb\u901f\u5f00\u59cb"},o=void 0,s={unversionedId:"quick-start/quick-start-springcloud",id:"version-2.6.0/quick-start/quick-start-springcloud",isDocsHomePage:!1,title:"Spring Cloud\u5feb\u901f\u5f00\u59cb",description:"Spring Cloud\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/quick-start/quick-start-springcloud.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-springcloud",permalink:"/zh/docs/quick-start/quick-start-springcloud",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/quick-start/quick-start-springcloud.md",version:"2.6.0",frontMatter:{title:"Spring Cloud\u5feb\u901f\u5f00\u59cb",description:"Spring Cloud\u5feb\u901f\u5f00\u59cb"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Sofa\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start/quick-start-sofa"},next:{title:"Tars\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start/quick-start-tars"}},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884cshenyu-examples-springcloud",id:"\u8fd0\u884cshenyu-examples-springcloud",children:[]},{value:"\u6d4b\u8bd5Http\u8bf7\u6c42",id:"\u6d4b\u8bd5http\u8bf7\u6c42",children:[]}],p={toc:l},c="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u670d\u52a1\u63a5\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u7a0b\u4e0b\u627e\u5230\u672c\u6587\u6863\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-springcloud"},"\u793a\u4f8b\u4ee3\u7801")," \u3002"),(0,i.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"springCloud")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.kt)("img",{src:"/img/shenyu/quick-start/springcloud/springCloud-plugin-enable.png",width:"60%",height:"50%"}),(0,i.kt)("p",null,"\u542f\u52a8\u7f51\u5173\uff0c\u5982\u679c\u662f\u901a\u8fc7\u6e90\u7801\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002")),(0,i.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u6ce8\u518c\u4e2d\u5fc3\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu springCloud plugin start--\x3e\n               <dependency>\n                    <groupId>org.apache.shenyu</groupId>\n                    <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n                    <version>${project.version}</version>\n                </dependency>\n\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-commons</artifactId>\n                    <version>2.2.0.RELEASE</version>\n                </dependency>\n\n                <dependency>\n                    <groupId>org.apache.shenyu</groupId>\n                    <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n                    <version>${project.version}</version>\n                </dependency>\n        \x3c!-- springCloud if you config register center is eureka please dependency end--\x3e\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n                    <version>2.2.0.RELEASE</version>\n                </dependency>\n        \x3c!-- apache shenyu springCloud plugin end--\x3e\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eureka"),"\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"eureka:\n  client:\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true\n")),(0,i.kt)("p",null,"\u7279\u522b\u6ce8\u610f: \u8bf7\u4fdd\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\u4e3a\u5f00\u542f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u65b9\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u65b9\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableDiscoveryClient\npublic class ShenyuBootstrapApplication {\n    \n    /**\n     * Main Entrance.\n     *\n     * @param args startup arguments\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuBootstrapApplication.class, args);\n    }\n}\n")),(0,i.kt)("p",null,"\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u9879\u76ee\u3002"),(0,i.kt)("h2",{id:"\u8fd0\u884cshenyu-examples-springcloud"},"\u8fd0\u884cshenyu-examples-springcloud"),(0,i.kt)("p",null,"\u793a\u4f8b\u9879\u76ee\u4e2d\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"eureka")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7684\u6ce8\u518c\u4e2d\u5fc3\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"eureka"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u793a\u4f8b\u4e2d\u63d0\u4f9b\u7684\u5e94\u7528\u3002"),(0,i.kt)("p",null,"\u4e0b\u8f7d ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-eureka"},"shenyu-examples-eureka")," \u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-springcloud"},"shenyu-examples-springcloud")," ."),(0,i.kt)("p",null,"\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"eureka"),"\u670d\u52a1\uff0c\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.eureka.EurekaServerApplication"),"main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,i.kt)("p",null,"\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"spring cloud"),"\u670d\u52a1\uff0c\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.springcloud.ShenyuTestSpringCloudApplication"),"main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"2.4.3"),"\u5f00\u59cb\uff0c\u7528\u6237\u53ef\u4ee5\u4e0d\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu.client.springCloud.props.port"),"\u3002"),(0,i.kt)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 14:03:51.301  INFO 2860 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService \'applicationTaskExecutor\'\n2021-02-10 14:03:51.669  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/save","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/save","enabled":true} \n2021-02-10 14:03:51.676  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**","enabled":true} \n2021-02-10 14:03:51.682  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/findById","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/findById","enabled":true} \n2021-02-10 14:03:51.688  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**/name","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**/name","enabled":true} \n2021-02-10 14:03:51.692  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/test/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/test/**","enabled":true} \n2021-02-10 14:03:52.806  WARN 2860 --- [           main] ockingLoadBalancerClientRibbonWarnLogger : You already have RibbonLoadBalancerClient on your classpath. It will be used by default. As Spring Cloud Ribbon is in maintenance mode. We recommend switching to BlockingLoadBalancerClient instead. In order to use it, set the value of `spring.cloud.loadbalancer.ribbon.enabled` to `false` or remove spring-cloud-starter-netflix-ribbon from your project.\n2021-02-10 14:03:52.848  WARN 2860 --- [           main] iguration$LoadBalancerCaffeineWarnLogger : Spring Cloud LoadBalancer is currently working with default default cache. You can switch to using Caffeine cache, by adding it to the classpath.\n2021-02-10 14:03:52.921  INFO 2860 --- [           main] o.s.c.n.eureka.InstanceInfoFactory       : Setting initial instance status as: STARTING\n2021-02-10 14:03:52.949  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Initializing Eureka in region us-east-1\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON encoding codec LegacyJacksonJson\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON decoding codec LegacyJacksonJson\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML encoding codec XStreamXml\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML decoding codec XStreamXml\n2021-02-10 14:03:53.263  INFO 2860 --- [           main] c.n.d.s.r.aws.ConfigClusterResolver      : Resolving eureka endpoints via configuration\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Disable delta property : false\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Single vip registry refresh property : null\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Force full registry fetch : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application is null : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Registered Applications size is zero : true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application version is -1: true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Getting all instance registry info from the eureka server\n2021-02-10 14:03:53.754  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : The response status is 200\n2021-02-10 14:03:53.756  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Starting heartbeat executor: renew interval is: 30\n2021-02-10 14:03:53.758  INFO 2860 --- [           main] c.n.discovery.InstanceInfoReplicator     : InstanceInfoReplicator onDemand update allowed rate per min is 4\n2021-02-10 14:03:53.761  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Discovery Client initialized at timestamp 1612937033760 with initial instances count: 0\n2021-02-10 14:03:53.762  INFO 2860 --- [           main] o.s.c.n.e.s.EurekaServiceRegistry        : Registering application SPRINGCLOUD-TEST with eureka with status UP\n2021-02-10 14:03:53.763  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Saw local status change event StatusChangeEvent [timestamp=1612937033763, current=UP, previous=STARTING]\n2021-02-10 14:03:53.765  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884: registering service...\n2021-02-10 14:03:53.805  INFO 2860 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8884 (http) with context path \'\'\n2021-02-10 14:03:53.807  INFO 2860 --- [           main] .s.c.n.e.s.EurekaAutoServiceRegistration : Updating port to 8884\n2021-02-10 14:03:53.837  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884 - registration status: 204\n2021-02-10 14:03:54.231  INFO 2860 --- [           main] o.d.s.e.s.ShenyuTestSpringCloudApplication : Started ShenyuTestSpringCloudApplication in 6.338 seconds (JVM running for 7.361) \n')),(0,i.kt)("h2",{id:"\u6d4b\u8bd5http\u8bf7\u6c42"},"\u6d4b\u8bd5Http\u8bf7\u6c42"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-examples-springcloud"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringCloudClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002"),(0,i.kt)("p",null,"\u6253\u5f00",(0,i.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> springCloud")," \u53ef\u4ee5\u770b\u5230\u63d2\u4ef6\u89c4\u5219\u914d\u7f6e\u5217\u8868\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(43671).Z})),(0,i.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"postman"),"\u6a21\u62df",(0,i.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SpringCloud"),"\u670d\u52a1\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(17921).Z})),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDEA HTTP Client")," \u63d2\u4ef6\u6a21\u62df",(0,i.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SpringCloud"),"\u670d\u52a1","[\u672c\u5730\u8bbf\u95ee\uff0c\u4e0d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u4ee3\u7406]",":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(37768).Z})),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDEA HTTP Client")," \u63d2\u4ef6\u6a21\u62df",(0,i.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SpringCloud"),"\u670d\u52a1","[\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u4ee3\u7406]",":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(41066).Z})))}u.isMDXComponent=!0},37768:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/idea-http-test-local-bd2ea4b9e8ab5d867edc120e3946e00c.png"},41066:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/idea-http-test-proxy-fc83eddb6fa4a74cc790258ac670a8ec.png"},17921:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/postman-test-1bd985bc5b3dbe25e90f5c01d2ee1094.png"},43671:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/rule-list-9a66ac71f764e2766fb7880c1811bae2.png"}}]);