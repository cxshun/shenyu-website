"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[87486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=o(n),g=a,h=u["".concat(c,".").concat(g)]||u[g]||m[g]||p;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55291:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={title:"gRPC\u5feb\u901f\u5f00\u59cb",description:"gRPC\u5feb\u901f\u5f00\u59cb"},i=void 0,l={unversionedId:"quick-start/quick-start-grpc",id:"version-2.4.1/quick-start/quick-start-grpc",isDocsHomePage:!1,title:"gRPC\u5feb\u901f\u5f00\u59cb",description:"gRPC\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/quick-start/quick-start-grpc.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-grpc",permalink:"/zh/docs/2.4.1/quick-start/quick-start-grpc",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/quick-start/quick-start-grpc.md",version:"2.4.1",frontMatter:{title:"gRPC\u5feb\u901f\u5f00\u59cb",description:"gRPC\u5feb\u901f\u5f00\u59cb"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Dubbo\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/2.4.1/quick-start/quick-start-dubbo"},next:{title:"Http\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/2.4.1/quick-start/quick-start-http"}},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884c shenyu-examples-grpc \u9879\u76ee",id:"\u8fd0\u884c-shenyu-examples-grpc-\u9879\u76ee",children:[]},{value:"\u7b80\u5355\u6d4b\u8bd5",id:"\u7b80\u5355\u6d4b\u8bd5",children:[]},{value:"\u6d41\u5f0f\u8c03\u7528",id:"\u6d41\u5f0f\u8c03\u7528",children:[]}],o={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u670d\u52a1\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u7a0b\u4e0b\u627e\u5230\u672c\u6587\u6863\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.1/shenyu-examples/shenyu-examples-grpc"},"\u793a\u4f8b\u4ee3\u7801")," \u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-plugin-enable.png",width:"60%",height:"50%"}),(0,a.kt)("p",null,"\u542f\u52a8\u7f51\u5173\uff0c\u5982\u679c\u662f\u901a\u8fc7\u6e90\u7801\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002")),(0,a.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu grpc plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-grpc</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu grpc plugin end--\x3e\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c-shenyu-examples-grpc-\u9879\u76ee"},"\u8fd0\u884c shenyu-examples-grpc \u9879\u76ee"),(0,a.kt)("p",null,"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.1/shenyu-examples/shenyu-examples-grpc"},"shenyu-examples-grpc")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," \u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," \u4ee3\u7801:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn protobuf:compile //\u7f16\u8bd1\u6d88\u606f\u5bf9\u8c61\nmvn protobuf:compile-custom //\u4f9d\u8d56\u6d88\u606f\u5bf9\u8c61,\u751f\u6210\u63a5\u53e3\u670d\u52a1\n")),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u4f60\u662f\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u5de5\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Maven")," \u5de5\u5177\u680f\u4e2d\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf:compile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf:compile-custom"),"\uff0c\u7136\u540e\u53f3\u952e ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Maven Build")," \u4e00\u952e\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," \u6587\u4ef6\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"java"),"\u4ee3\u7801\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/gen-proto.png",width:"40%",height:"50%"}),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.grpc.ShenyuTestGrpcApplication")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff0c\u8868\u793a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u670d\u52a1\u6210\u529f\u6ce8\u518c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-19] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/clientStreamingFun","pathDesc":"clientStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"clientStreamingFun","ruleName":"/grpc/clientStreamingFun","parameterTypes":"io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"CLIENT_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-17] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/echo","pathDesc":"echo","rpcType":"grpc","serviceName":"echo.EchoService","methodName":"echo","ruleName":"/grpc/echo","parameterTypes":"echo.EchoRequest,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"UNARY\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-20] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/bidiStreamingFun","pathDesc":"bidiStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"bidiStreamingFun","ruleName":"/grpc/bidiStreamingFun","parameterTypes":"io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"BIDI_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-21] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/unaryFun","pathDesc":"unaryFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"unaryFun","ruleName":"/grpc/unaryFun","parameterTypes":"stream.RequestData,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"UNARY\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-18] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/serverStreamingFun","pathDesc":"serverStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"serverStreamingFun","ruleName":"/grpc/serverStreamingFun","parameterTypes":"stream.RequestData,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"SERVER_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n')),(0,a.kt)("h2",{id:"\u7b80\u5355\u6d4b\u8bd5"},"\u7b80\u5355\u6d4b\u8bd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-grpc"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuGrpcClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002"),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> grpc")," \u53ef\u4ee5\u770b\u5230\u63d2\u4ef6\u89c4\u5219\u914d\u7f6e\u5217\u8868\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-service.png",width:"80%",height:"50%"}),(0,a.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," \u6a21\u62df ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u670d\u52a1\u3002\n\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "message": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-echo.png",width:"80%",height:"50%"}),(0,a.kt)("p",null,"\u5f53\u524d\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," \u7684\u683c\u5f0f\u4f20\u9012\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u7684\u540d\u79f0\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"GrpcConstants.JSON_DESCRIPTOR_PROTO_FIELD_NAME")," \u4e2d\u8fdb\u884c\u91cd\u7f6e\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u7684\u4f20\u5165\u5219\u6839\u636e\u4f60\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," \u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u6d41\u5f0f\u8c03\u7528"},"\u6d41\u5f0f\u8c03\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u53ef\u4ee5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u7684\u6d41\u5f0f\u8c03\u7528\uff0c\u4e0b\u9762\u5c55\u793a\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u56db\u79cd\u65b9\u6cd5\u7c7b\u578b\u7684\u8c03\u7528\u3002 \u5728\u6d41\u5f0f\u8c03\u7528\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u9012\u591a\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNARY"))),(0,a.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," \u6a21\u62df ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\uff0c\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"UNARY"),"\u8c03\u7528\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-unary.png",width:"80%",height:"50%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_STREAMING"))),(0,a.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," \u6a21\u62df ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\uff0c\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_STREAMING"),"\u8c03\u7528\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-client-stream.png",width:"80%",height:"50%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_STREAMING"))),(0,a.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," \u6a21\u62df ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\uff0c\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_STREAMING"),"\u8c03\u7528\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-server-stream.png",width:"80%",height:"50%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BIDI_STREAMING"))),(0,a.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," \u6a21\u62df ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\uff0c\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"BIDI_STREAMING"),"\u8c03\u7528\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-bidi-stream.png",width:"80%",height:"50%"}))}s.isMDXComponent=!0}}]);