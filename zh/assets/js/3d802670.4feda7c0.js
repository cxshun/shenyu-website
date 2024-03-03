"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[92527],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,d=u["".concat(s,".").concat(g)]||u[g]||y[g]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62556:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={description:"Consul",sidebar_position:5,title:"Consul \u793a\u4f8b"},l="Consul \u65b9\u5f0f\u6ce8\u518c ShenYu \u7f51\u5173",i={unversionedId:"consul",id:"version-1.0.0/consul",isDocsHomePage:!1,title:"Consul \u793a\u4f8b",description:"Consul",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientDotnet/version-1.0.0/consul.md",sourceDirName:".",slug:"/consul",permalink:"/zh/shenyuClientDotnet/consul",version:"1.0.0",lastUpdatedBy:"loongs-zhang",lastUpdatedAt:1709449496,formattedLastUpdatedAt:"2024/3/3",sidebarPosition:5,frontMatter:{description:"Consul",sidebar_position:5,title:"Consul \u793a\u4f8b"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Etcd \u793a\u4f8b",permalink:"/zh/shenyuClientDotnet/etcd"}},s=[{value:"ASP.NET Core \u9879\u76ee",id:"aspnet-core-\u9879\u76ee",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"consul-\u65b9\u5f0f\u6ce8\u518c-shenyu-\u7f51\u5173"},"Consul \u65b9\u5f0f\u6ce8\u518c ShenYu \u7f51\u5173"),(0,o.yg)("h2",{id:"aspnet-core-\u9879\u76ee"},"ASP.NET Core \u9879\u76ee"),(0,o.yg)("p",null,"\u5bf9\u4e8e ASP.NET Core \u9879\u76ee\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-dotnet/tree/main/examples/AspNetCoreExample"},"example code"),"\u3002\u4f60\u9700\u8981\u505a\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u5c06 ShenYu \u52a0\u5165\u5230 ASP.NET Core \u9879\u76ee\u4f9d\u8d56\u4e2d\u3002")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"dotnet add package <todo-shenyu-asp.net-core package>\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u5728 ",(0,o.yg)("inlineCode",{parentName:"li"},"Startup.ConfigureServices")," \u4e2d\u52a0\u5165 ",(0,o.yg)("inlineCode",{parentName:"li"},"ShenyuRegister")," service\u3002")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},"public void ConfigureServices(IServiceCollection services)\n{\n    ...\n    services.AddShenyuRegister(this.Configuration);\n    ...\n}\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u5728 ",(0,o.yg)("inlineCode",{parentName:"li"},"appsettings.json")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Shenyu": {\n    "Register": {\n      "RegisterType": "consul",\n      "ServerList": "localhost:8500",\n      "Props": {\n        "Id": "shenyuAdmin",\n        "Name": "shenyuAdmin",\n        "Tags": "test1,test2",\n        "Port": 8500,\n        "EnableTagOverride": false,\n        "Token": ""\n      }\n    },\n    "Client": {\n      "AppName": "dotnet-example",\n      "ContextPath": "/dotnet",\n      "IsFull": false,\n      "ClientType": "http"\n    }\n  }\n}\n')),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"\u5f00\u542f\u5141\u8bb8\u901a\u8fc7 ip \u8bbf\u95ee")),(0,o.yg)("p",null,"\u5f53\u8fd0\u884c ASP.NET Core \u9879\u76ee\u65f6\uff0c\u9ed8\u8ba4\u53ea\u80fd\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"localhost")," \u8bbf\u95ee\u3002\u60f3\u8981\u5141\u8bb8 ip \u8bbf\u95ee\uff0c\u9700\u8981\u8bbe\u7f6e\u4e0b ",(0,o.yg)("inlineCode",{parentName:"p"},"ASPNETCORE_URLS")," \u73af\u5883\u53d8\u91cf\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"export ASPNETCORE_URLS=http://+:5000\n")),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"\u542f\u52a8 application")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# build project\ndotnet build --configuration Release\n# start project\ncd examples/AspNetCoreExample/bin/Release/netcoreapp3.1\ndotnet AspNetCoreExample.dll\n")),(0,o.yg)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u7684\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8fdb\u5165 ",(0,o.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u9875\u9762\u770b\u5230\u8fd9\u4e9b API \u5df2\u7ecf\u6ce8\u518c\u5230 ShenYu."))}u.isMDXComponent=!0}}]);