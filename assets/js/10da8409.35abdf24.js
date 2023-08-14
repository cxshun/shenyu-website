"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[54442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?r.createElement(m,p(p({ref:n},c),{},{components:t})):r.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},45930:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"gRPC Proxy",keywords:["gRPC"],description:"gRPC access shenyu gateway"},p=void 0,i={unversionedId:"user-guide/proxy/grpc-proxy",id:"version-2.5.1/user-guide/proxy/grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"gRPC access shenyu gateway",source:"@site/versioned_docs/version-2.5.1/user-guide/proxy/grpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/grpc-proxy",permalink:"/docs/2.5.1/user-guide/proxy/grpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/user-guide/proxy/grpc-proxy.md",version:"2.5.1",frontMatter:{title:"gRPC Proxy",keywords:["gRPC"],description:"gRPC access shenyu gateway"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Dubbo Proxy",permalink:"/docs/2.5.1/user-guide/proxy/dubbo-proxy"},next:{title:"Http Proxy",permalink:"/docs/2.5.1/user-guide/proxy/http-proxy"}},l=[{value:"Add gRPC plugin in gateway",id:"add-grpc-plugin-in-gateway",children:[]},{value:"gRPC service access gateway",id:"grpc-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," service."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-grpc"},"Quick start with gRPC")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,a.kt)("h2",{id:"add-grpc-plugin-in-gateway"},"Add gRPC plugin in gateway"),(0,a.kt)("p",null,"Add the following dependencies in the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu grpc plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-grpc</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu grpc plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restart the gateway service.")),(0,a.kt)("h2",{id:"grpc-service-access-gateway"},"gRPC service access gateway"),(0,a.kt)("p",null,"You can refer to\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-grpc"},"shenyu-examples-grpc")," ."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the microservice built by ",(0,a.kt)("inlineCode",{parentName:"li"},"gRPC"),", add the following dependencies:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-grpc</artifactId>\n            <version>${shenyu.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>guava</artifactId>\n                    <groupId>com.google.guava</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")),(0,a.kt)("p",null,"Execute command to generate java code in  ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn protobuf:compile \nmvn protobuf:compile-custom \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the following configuration to application.yaml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    grpc:\n      props:\n        contextPath: /grpc\n        appName: grpc\n        ipAndPort: 127.0.0.1:38080\n        port: 38080\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuGrpcClient")," Annotation on the ",(0,a.kt)("inlineCode",{parentName:"li"},"gRPC")," service interface implementation class. Start your service provider, after successful registration, in the background management system go to PluginList -> rpc proxy -> gRPC, you will see automatic registration of selectors and rules information.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @ShenyuGrpcClient(path = "/echo", desc = "echo")\n    public void echo(EchoRequest request, StreamObserver<EchoResponse> responseObserver) {\n        System.out.println("Received: " + request.getMessage());\n        EchoResponse.Builder response = EchoResponse.newBuilder()\n                .setMessage("ReceivedHELLO")\n                .addTraces(Trace.newBuilder().setHost(getHostname()).build());\n        responseObserver.onNext(response.build());\n        responseObserver.onCompleted();\n    }\n\n')),(0,a.kt)("h2",{id:"user-request"},"User Request"),(0,a.kt)("p",null,"You can request your gRPC service by Http. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix that you access to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),"."),(0,a.kt)("p",null,"If your ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," file is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message EchoRequest {\n  string message = 1;\n}\n")),(0,a.kt)("p",null,"So the request parameters look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "message": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"The parameters are currently passed in ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," format, and the name of ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", which you can reset in ",(0,a.kt)("inlineCode",{parentName:"p"},"GrpcConstants.JSON_DESCRIPTOR_PROTO_FIELD_NAME"),"; The ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is passed in according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," file you define."),(0,a.kt)("p",null,"the Apache ShenYu can support streaming calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," service, passing multiple arguments in the form of an array."),(0,a.kt)("p",null,"If your ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," file is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message RequestData {\n  string text = 1;\n}\n")),(0,a.kt)("p",null,"The corresponding method call request parameters are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNARY"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_STREAMING"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_STREAMING"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BIDI_STREAMING"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);