"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81278],{15680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>m});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),s=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(r),y=t,m=g["".concat(i,".").concat(y)]||g[y]||c[y]||o;return r?n.createElement(m,l(l({ref:a},u),{},{components:r})):n.createElement(m,l({ref:a},u))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:t,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},60863:(e,a,r)=>{r.r(a),r.d(a,{contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(58168),t=(r(96540),r(15680));const o={sidebar_position:5,title:"Sofa\u63a5\u5165\u7f51\u5173",keywords:["sofa"],description:"sofa\u63a5\u5165soul\u7f51\u5173"},l=void 0,p={unversionedId:"users-guide/sofa-rpc-proxy",id:"version-2.3.0-Legacy/users-guide/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa\u63a5\u5165\u7f51\u5173",description:"sofa\u63a5\u5165soul\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/sofa-rpc-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/sofa-rpc-proxy",permalink:"/zh/docs/2.3.0-Legacy/users-guide/sofa-rpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/sofa-rpc-proxy.md",version:"2.3.0-Legacy",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Sofa\u63a5\u5165\u7f51\u5173",keywords:["sofa"],description:"sofa\u63a5\u5165soul\u7f51\u5173"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",permalink:"/zh/docs/2.3.0-Legacy/users-guide/spring-cloud-proxy"},next:{title:"\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565",permalink:"/zh/docs/2.3.0-Legacy/users-guide/use-data-sync"}},i=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5f15\u5165\u7f51\u5173\u5bf9sofa\u652f\u6301\u7684\u63d2\u4ef6",id:"\u5f15\u5165\u7f51\u5173\u5bf9sofa\u652f\u6301\u7684\u63d2\u4ef6",children:[]},{value:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173\uff0c\u53ef\u4ee5\u53c2\u8003\uff1asoul-examples-sofa",id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173\u53ef\u4ee5\u53c2\u8003soul-examples-sofa",children:[]},{value:"sofa \u63d2\u4ef6\u8bbe\u7f6e",id:"sofa-\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",children:[]},{value:"sofa\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e",id:"sofa\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e",children:[]}],s={toc:i},u="wrapper";function g(e){let{components:a,...r}=e;return(0,t.yg)(u,(0,n.A)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6b64\u7bc7\u6587\u7ae0\u662fsofa\u7528\u6237\u4f7f\u7528sofa\u63d2\u4ef6\u652f\u6301\uff0c\u4ee5\u53ca\u81ea\u5df1\u7684sofa\u670d\u52a1\u63a5\u5165soul\u7f51\u5173\u7684\u6559\u7a0b\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u7684\u542f\u52a8 ",(0,t.yg)("inlineCode",{parentName:"li"},"soul-admin"),"\u4ee5\u53ca",(0,t.yg)("a",{parentName:"li",href:"./soul-set-up"},"\u642d\u5efa\u73af\u5883")," Ok\u3002")),(0,t.yg)("h2",{id:"\u5f15\u5165\u7f51\u5173\u5bf9sofa\u652f\u6301\u7684\u63d2\u4ef6"},"\u5f15\u5165\u7f51\u5173\u5bf9sofa\u652f\u6301\u7684\u63d2\u4ef6"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"sofa\u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u6ce8\u518c\u4e2d\u5fc3\u7684jar\u5305\u6362\u6210\u4f60\u7684\uff0c\u4ee5\u4e0b\u662f\u53c2\u8003\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.dromara</groupId>\n           <artifactId>soul-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${last.version}</version>\n       </dependency>\n\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u91cd\u542f\u7f51\u5173\u670d\u52a1\u3002"))),(0,t.yg)("h2",{id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173\u53ef\u4ee5\u53c2\u8003soul-examples-sofa"},"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"h2",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-sofa"},"soul-examples-sofa")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"springboot"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.dromara</groupId>\n           <artifactId>soul-spring-boot-starter-client-sofa</artifactId>\n           <version>${soul.version}</version>\n       </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3\u8be6\u7ec6\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"p",href:"../register-center/register-center-access"},"\u6ce8\u518c\u4e2d\u5fc3\u63a5\u5165"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"spring"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56 \uff1a")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.dromara</groupId>\n           <artifactId>soul-client-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u4f60\u7684 bean\u5b9a\u4e49\u7684xml\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'      <bean id ="sofaServiceBeanPostProcessor" class ="org.dromara.soul.client.sofa.SofaServiceBeanPostProcessor">\n           <constructor-arg  ref="soulRegisterCenterConfig"/>\n      </bean>\n      <bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n             <property name="registerType" value="http"/>\n             <property name="serverList" value="http://localhost:9095"/>\n             <property name="props">\n                <map>\n                  <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n                  <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n                  <entry key="ifFull" value="false"/>\n                </map>\n              </property>\n      </bean>\n')))),(0,t.yg)("h2",{id:"sofa-\u63d2\u4ef6\u8bbe\u7f6e"},"sofa \u63d2\u4ef6\u8bbe\u7f6e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,t.yg)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5176\u6b21\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u4f60\u7684\u6ce8\u518c\u5730\u5740\u6216\u8005\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,t.yg)("h2",{id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"},"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4f60sofa\u670d\u52a1\u5b9e\u73b0\u7c7b\u7684\uff0c\u65b9\u6cd5\u4e0a\u52a0\u4e0a @SoulSofaClient \u6ce8\u89e3\uff0c\u8868\u793a\u8be5\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u542f\u52a8\u4f60\u7684\u63d0\u4f9b\u8005\uff0c\u8f93\u51fa\u65e5\u5fd7 ",(0,t.yg)("inlineCode",{parentName:"p"},"sofa client register success")," \u5927\u529f\u544a\u6210\uff0c\u4f60\u7684sofa\u63a5\u53e3\u5df2\u7ecf\u53d1\u5e03\u5230 soul\u7f51\u5173.\u5982\u679c\u8fd8\u6709\u4e0d\u61c2\u7684\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,t.yg)("inlineCode",{parentName:"p"},"soul-test-sofa"),"\u9879\u76ee\u3002"))),(0,t.yg)("h2",{id:"sofa\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e"},"sofa\u7528\u6237\u8bf7\u6c42\u4ee5\u53ca\u53c2\u6570\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u8bf4\u767d\u4e86\uff0c\u5c31\u662f\u901a\u8fc7http\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684sofa\u670d\u52a1")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"soul\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"contextPath")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u6bd4\u5982\u4f60\u6709\u4e00\u4e2a order\u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u7684\u6ce8\u518c\u8def\u5f84 /order/test/save\n\n# \u73b0\u5728\u5c31\u662f\u901a\u8fc7 post\u65b9\u5f0f\u8bf7\u6c42\u7f51\u5173\uff1ahttp://localhost:9195/order/test/save\n\n# \u5176\u4e2d localhost:9195 \u4e3a\u7f51\u5173\u7684ip\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f9195 \uff0c/order \u662f\u4f60sofa\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 contextPath\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u53c2\u6570\u4f20\u9012\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 http post \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\uff0c\u901a\u8fc7body\uff0cjson\u7c7b\u578b\u4f20\u9012\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u66f4\u591a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\uff0c\u53ef\u4ee5\u53c2\u8003",(0,t.yg)("a",{parentName:"li",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-sofa"},"soul-examples-sofa")," \u4e2d\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u4ee5\u53ca\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\u3002"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5355\u4e2ajava bean\u53c2\u6570\u7c7b\u578b \uff08\u9ed8\u8ba4\uff09")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b9e\u73b0\u591a\u53c2\u6570\u652f\u6301\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5728\u4f60\u642d\u5efa\u7684\u7f51\u5173\u9879\u76ee\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u7c7b A\uff0c\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.sofa.SofaParamResolveService"),"\u3002")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},"   public interface SofaParamResolveService {\n   \n       /**\n        * Build parameter pair.\n        * this is Resolve http body to get sofa param.\n        *\n        * @param body           the body\n        * @param parameterTypes the parameter types\n        * @return the pair\n        */\n       Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n   }\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"body"),"\u4e3ahttp\u4e2dbody\u4f20\u7684json\u5b57\u7b26\u4e32\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"parameterTypes"),": \u5339\u914d\u5230\u7684\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u5219\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},","),"\u5206\u5272\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Pair\u4e2d\uff0cleft\u4e3a\u53c2\u6570\u7c7b\u578b\uff0cright\u4e3a\u53c2\u6570\u503c\uff0c\u8fd9\u662fsofa\u6cdb\u5316\u8c03\u7528\u7684\u6807\u51c6\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u628a\u4f60\u7684\u7c7b\u6ce8\u518c\u6210Spring\u7684bean\uff0c\u8986\u76d6\u9ed8\u8ba4\u7684\u5b9e\u73b0\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},"   @Bean\n    public SofaParamResolveService A() {\n            return new A();\n    }\n")))))}g.isMDXComponent=!0}}]);