"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[96529],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||y[m]||s;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30500:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(58168),r=(t(96540),t(15680));const s={title:"Websocket\u5feb\u901f\u5f00\u59cb",description:"Websocket\u5feb\u901f\u5f00\u59cb"},a=void 0,i={unversionedId:"quick-start/quick-start-websocket",id:"version-2.5.0/quick-start/quick-start-websocket",isDocsHomePage:!1,title:"Websocket\u5feb\u901f\u5f00\u59cb",description:"Websocket\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/quick-start/quick-start-websocket.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-websocket",permalink:"/zh/docs/2.5.0/quick-start/quick-start-websocket",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/quick-start/quick-start-websocket.md",version:"2.5.0",frontMatter:{title:"Websocket\u5feb\u901f\u5f00\u59cb",description:"Websocket\u5feb\u901f\u5f00\u59cb"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Tars\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/2.5.0/quick-start/quick-start-tars"},next:{title:"\u6570\u636e\u6743\u9650\u7ba1\u7406",permalink:"/zh/docs/2.5.0/user-guide/admin-usage/data-permission"}},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884cshenyu-examples-websocket\u9879\u76ee",id:"\u8fd0\u884cshenyu-examples-websocket\u9879\u76ee",children:[]},{value:"\u6d4b\u8bd5websocket\u8bf7\u6c42",id:"\u6d4b\u8bd5websocket\u8bf7\u6c42",children:[]},{value:"\u9644\u4ef6",id:"\u9644\u4ef6",children:[]}],c={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,r.yg)("inlineCode",{parentName:"p"},"Websocket"),"\u670d\u52a1\u63a5\u5165\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002"),(0,r.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u8fd0\u7ef4\u90e8\u7f72"),"\u7684\u5185\u5bb9\uff0c\u90e8\u7f72 Shenyu \u7f51\u5173")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u90e8\u7f72 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u670d\u52a1")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u9875\u9762\u7684\u57fa\u7840\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"li"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/enable_websocket_zh.png",width:"60%",height:"50%"}),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u90e8\u7f72 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," \u670d\u52a1")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8\u4e4b\u540e ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," \u4f1a\u6839\u636e ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu.sync.websocket.url"),"\u914d\u7f6e\u7684\u5730\u5740\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"websocket")," \u534f\u8bae\u8fdb\u884c\u6570\u636e\u540c\u6b65")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\uff0c\u9ed8\u8ba4\u5df2\u5f15\u5165\u8be5\u4f9d\u8d56\u3002")),(0,r.yg)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,r.yg)("inlineCode",{parentName:"p"},"Websocket"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--shenyu websocket plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.yg)("h2",{id:"\u8fd0\u884cshenyu-examples-websocket\u9879\u76ee"},"\u8fd0\u884cshenyu-examples-websocket\u9879\u76ee"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket/shenyu-example-spring-annotation-websocket"},"shenyu-examples-websocket"),"\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"native-websocket")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"reactive-websocket")," \u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket"},"shenyu-examples-websocket")," \u4e0b\u7684\u5b50\u9879\u76ee\uff09")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8fd0\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.websocket.TestAnnotationWebsocketApplication")," main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"examples\u9879\u76ee\u4f1a\u6839\u636e ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu.register.serverLists")," \u914d\u7f6e\u7684\u5730\u5740\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"http")," \u534f\u8bae\u5c06 websocket \u670d\u52a1\u7684\u4fe1\u606f\u540c\u6b65\u7ed9 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),", \u4e4b\u540e\u518d\u7531 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u540c\u6b65\u7ed9 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap"),"\u3002")),(0,r.yg)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'2022-08-09 23:37:34.994  INFO 61398 --- [or_consumer_-21] o.a.s.r.client.http.utils.RegisterUtils  : metadata client register success: {"appName":"ws-annotation","contextPath":"/ws-annotation","path":"/ws-annotation/myWs","rpcType":"websocket","ruleName":"/ws-annotation/myWs","enabled":true,"pluginNames":[],"registerMetaData":false,"timeMillis":1660059454701} \n2022-08-09 23:37:35.019  INFO 61398 --- [or_consumer_-18] o.a.s.r.client.http.utils.RegisterUtils  : uri client register success: {"protocol":"ws://","appName":"ws-annotation","contextPath":"/ws-annotation","rpcType":"websocket","host":"192.168.1.3","port":8001} \n')),(0,r.yg)("h2",{id:"\u6d4b\u8bd5websocket\u8bf7\u6c42"},"\u6d4b\u8bd5websocket\u8bf7\u6c42"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-websocket"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,r.yg)("inlineCode",{parentName:"li"},"@ShenyuSpringWebSocketClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\uff0c\u5e76\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u9875\u9762 -> \u63d2\u4ef6\u5217\u8868 -> Proxy -> Websocket \u770b\u5230 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-websocket")," \u670d\u52a1\u6ce8\u518c\u7684\u4fe1\u606f\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"li",href:"/zh/docs/2.5.0/plugin-center/proxy/websocket-plugin"},"Websocket\u63d2\u4ef6"),"\u624b\u52a8\u6dfb\u52a0\u914d\u7f6e\u3002")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/auto_register_zh.png",width:"60%",height:"50%"}),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u9762\u4f7f\u7528\u6d4b\u8bd5\u4ee3\u7801(\u89c1\u9644\u4ef6)\u6a21\u62df ",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket")," \u534f\u8bae\u7684\u8bf7\u6c42\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket"),"\u670d\u52a1\u3002")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/test_result_en.png",width:"60%",height:"50%"}),(0,r.yg)("h2",{id:"\u9644\u4ef6"},"\u9644\u4ef6"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"websocket\u8c03\u8bd5\u4ee3\u7801")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a websocket.html \u7684\u6587\u4ef6\uff0c\u590d\u5236\u4e0b\u9762\u7684\u4ee3\u7801\u5230\u6587\u4ef6\u4e2d"),(0,r.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668\u6253\u5f00 websocket.html")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE HTML>\n<html>\n<head>\n    <meta http-equiv="content-type" content="text/html" />\n    <title>Shenyu WebSocket Test</title>\n    <script>\n        var websocket;\n        function connect() {\n            try {\n                websocket = new WebSocket(document.getElementById("url").value);\n                websocket.onopen = onOpen;\n                websocket.onerror = onError;\n                websocket.onmessage = onReceive;\n                websocket.onclose = onClose;\n            } catch (e) {\n                alert(\'[websocket] establish connection error.\');\n            }\n        }\n        function onOpen() {\n            alert(\'[websocket] connect success.\');\n        }\n        function onError(e) {\n            alert("[websocket] connect error. code: " + e.code);\n        }\n        function onReceive(msg) {\n            var show = document.getElementById("show");\n            show.innerHTML += "[Server Response] => " + msg.data + "<br/>";\n            show.scrollTop = show.scrollHeight;\n        }\n        function onClose(e) {\n            console.log("[websocket] connect closed. code: " + e.code)\n            alert("[websocket] connect closed.");\n            document.getElementById("show").innerHTML = "";\n            document.getElementById("msg").value = "";\n            websocket = null;\n        }\n        function buttonClose() {\n            if (websocket == null) {\n                console.log("Please establish a connection first.")\n            } else {\n                websocket.close(1000);\n                document.getElementById("show").innerHTML = "";\n                document.getElementById("msg").value = "";\n            }\n        }\n        function send() {\n            if (websocket == null) {\n                alert("Please establish a connection first.")\n            } else {\n                var msg = document.getElementById("msg").value;\n                show.innerHTML += "[Client Request] => " + msg + "<br/>";\n                websocket.send(msg);\n            }\n        }\n    <\/script>\n</head>\n<body>\n    <input id="url" type="text" value="ws://localhost:9195/ws-annotation/myWs"><br />\n    <input id="msg" type="text"><br />\n    <button id="connect" onclick="connect();">Connect</button>\n    <button id="send" onclick="send();">Send</button>\n    <button id="close" onclick="buttonClose();">Close</button></br>\n    <div id="show" class="show"></div>\n</body>\n</html>\n<style>\n    input {\n        width: 400px;\n        margin-bottom: 10px;\n    }\n    .show {\n        width: 600px;\n        height: 400px;\n        overflow-y: auto;\n        border: 1px solid #333;\n        margin-top: 10px;\n    }\n</style>\n')))}u.isMDXComponent=!0}}]);