"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[55013],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(r),y=a,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||o;return r?t.createElement(d,p(p({ref:n},c),{},{components:r})):t.createElement(d,p({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[g]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},90080:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(58168),a=(r(96540),r(15680));const o={title:"gRPC Proxy",keywords:["gRPC"],description:"gRPC access shenyu gateway"},p=void 0,i={unversionedId:"user-guide/proxy/grpc-proxy",id:"version-2.6.0/user-guide/proxy/grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"gRPC access shenyu gateway",source:"@site/versioned_docs/version-2.6.0/user-guide/proxy/grpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/grpc-proxy",permalink:"/docs/2.6.0/user-guide/proxy/grpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/user-guide/proxy/grpc-proxy.md",version:"2.6.0",frontMatter:{title:"gRPC Proxy",keywords:["gRPC"],description:"gRPC access shenyu gateway"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Dubbo Proxy",permalink:"/docs/2.6.0/user-guide/proxy/dubbo-proxy"},next:{title:"Http Proxy",permalink:"/docs/2.6.0/user-guide/proxy/http-proxy"}},l=[{value:"Add gRPC plugin in gateway",id:"add-grpc-plugin-in-gateway",children:[]},{value:"gRPC service access gateway",id:"grpc-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],s={toc:l},c="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document is intended to help the ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," service access the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," plugin to handle ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," service."),(0,a.yg)("p",null,"Before the connection, start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," plugin, and add related dependencies on the gateway and ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," application client. Refer to the previous ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-grpc"},"Quick start with gRPC")," ."),(0,a.yg)("p",null,"For details about client access configuration, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.yg)("p",null,"For details about data synchronization configurations, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,a.yg)("h2",{id:"add-grpc-plugin-in-gateway"},"Add gRPC plugin in gateway"),(0,a.yg)("p",null,"Add the following dependencies in the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu grpc plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-grpc</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu grpc plugin end--\x3e\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Restart the gateway service.")),(0,a.yg)("h2",{id:"grpc-service-access-gateway"},"gRPC service access gateway"),(0,a.yg)("p",null,"You can refer to\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-grpc"},"shenyu-examples-grpc")," ."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"In the microservice built by ",(0,a.yg)("inlineCode",{parentName:"li"},"gRPC"),", add the following dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-grpc</artifactId>\n            <version>${shenyu.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>guava</artifactId>\n                    <groupId>com.google.guava</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")),(0,a.yg)("p",null,"Execute command to generate java code in  ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mvn protobuf:compile \nmvn protobuf:compile-custom \n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Add the following configuration to application.yaml:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    grpc:\n      props:\n        contextPath: /grpc\n        appName: grpc\n        ipAndPort: 127.0.0.1:38080\n        port: 38080\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuGrpcClient")," Annotation on the ",(0,a.yg)("inlineCode",{parentName:"li"},"gRPC")," service interface implementation class. Start your service provider, after successful registration, in the background management system go to PluginList -> rpc proxy -> gRPC, you will see automatic registration of selectors and rules information.")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @ShenyuGrpcClient(path = "/echo", desc = "echo")\n    public void echo(EchoRequest request, StreamObserver<EchoResponse> responseObserver) {\n        System.out.println("Received: " + request.getMessage());\n        EchoResponse.Builder response = EchoResponse.newBuilder()\n                .setMessage("ReceivedHELLO")\n                .addTraces(Trace.newBuilder().setHost(getHostname()).build());\n        responseObserver.onNext(response.build());\n        responseObserver.onCompleted();\n    }\n\n')),(0,a.yg)("h2",{id:"user-request"},"User Request"),(0,a.yg)("p",null,"You can request your gRPC service by Http. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix that you access to configure ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath"),"."),(0,a.yg)("p",null,"If your ",(0,a.yg)("inlineCode",{parentName:"p"},"proto")," file is defined as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message EchoRequest {\n  string message = 1;\n}\n")),(0,a.yg)("p",null,"So the request parameters look like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "message": "hello grpc"\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"The parameters are currently passed in ",(0,a.yg)("inlineCode",{parentName:"p"},"json")," format, and the name of ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"data"),", which you can reset in ",(0,a.yg)("inlineCode",{parentName:"p"},"GrpcConstants.JSON_DESCRIPTOR_PROTO_FIELD_NAME"),"; The ",(0,a.yg)("inlineCode",{parentName:"p"},"value")," is passed in according to the ",(0,a.yg)("inlineCode",{parentName:"p"},"proto")," file you define."),(0,a.yg)("p",null,"the Apache ShenYu can support streaming calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," service, passing multiple arguments in the form of an array."),(0,a.yg)("p",null,"If your ",(0,a.yg)("inlineCode",{parentName:"p"},"proto")," file is defined as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message RequestData {\n  string text = 1;\n}\n")),(0,a.yg)("p",null,"The corresponding method call request parameters are as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UNARY"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CLIENT_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SERVER_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BIDI_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')))}g.isMDXComponent=!0}}]);