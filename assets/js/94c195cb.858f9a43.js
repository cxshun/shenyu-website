"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,m=p["".concat(o,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},40648:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={description:"Etcd",title:"Etcd Example"},c=void 0,s={unversionedId:"etcd",id:"version-1.0.0/etcd",isDocsHomePage:!1,title:"Etcd Example",description:"Etcd",source:"@site/shenyuClientGolang_versioned_docs/version-1.0.0/etcd.md",sourceDirName:".",slug:"/etcd",permalink:"/shenyuClientGolang/etcd",version:"1.0.0",lastUpdatedBy:"moremind",lastUpdatedAt:1692004906,formattedLastUpdatedAt:"8/14/2023",frontMatter:{description:"Etcd",title:"Etcd Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Consul Example",permalink:"/shenyuClientGolang/consul"},next:{title:"Http Example",permalink:"/shenyuClientGolang/http"}},o=[{value:"The Etcd type Register",id:"the-etcd-type-register",children:[]},{value:"Entire Success log",id:"entire-success-log",children:[]}],l={toc:o},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-etcd-type-register"},"The Etcd type Register"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.Fist make sure your Etcd env is correct,the set this necessary param.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //Create ShenYuEtcdClient  start\n    ecp := &etcd_client.EtcdClientParam{\n    EtcdServers: []string{"http://127.0.0.1:2379"}, // require user provider\n    UserName : "" // optional param etcd userName\n    Password : "" // optional param etcd pwd\n    TTL:    50, // optional param key live\n    }\n    \n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.ETCD_CLIENT)\n    client, createResult, err := sdkClient.NewClient(ecp)\n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuEtcdClient error : %v", err)\n    }\n    \n    etcd := client.(*etcd_client.ShenYuEtcdClient)\n    defer etcd.Close()  \n    //Create ShenYuEtcdClient end\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Prepare your service metaData to register")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//metaData is necessary param, this will be register to shenyu gateway to use\n    metaData1 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister1", //require user provide\n        Path:    "your/path1",            //require user provide\n        Enabled: true,                    //require user provide\n        Host:    "127.0.0.1",             //require user provide\n        Port:    "8080",                  //require user provide\n    }\n\n    metaData2 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister2", //require user provide\n        Path:    "your/path2",            //require user provide\n        Enabled: true,                    //require user provide\n        Host:    "127.0.0.1",             //require user provide\n        Port:    "8181",                  //require user provide\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.use client to invoke RegisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'   //register multiple metaData\n    registerResult1, err := etcd.RegisterServiceInstance(metaData1)\n        if !registerResult1 && err != nil {\n        logger.Fatal("Register etcd Instance error : %v", err)\n    }\n\n    registerResult2, err := etcd.RegisterServiceInstance(metaData2)\n        if !registerResult2 && err != nil {\n        logger.Fatal("Register etcd Instance error : %v", err)\n    }\n    //do your logic\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.use client to invoke DeregisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    //your can chose to invoke,not require\n    deRegisterResult1, err := etcd.DeregisterServiceInstance(metaData1)\n        if err != nil {\n        panic(err)\n        }\n\n    deRegisterResult2, err := etcd.DeregisterServiceInstance(metaData2)\n        if err != nil {\n        panic(err)\n        }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.use client to GetServiceInstanceInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //GetServiceInstanceInfo start\n    instanceDetail, err := etcd.GetServiceInstanceInfo(metaData1)\n        nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get etcd client metaData error %v:", err)\n     }\n    \n    //range nodes\n    for index, node := range nodes1 {\n        nodeJson, err := json.Marshal(node)\n        if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n    \n    instanceDetail2, err := etcd.GetServiceInstanceInfo(metaData2)\n        nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n        if !ok {\n            logger.Fatal("get etcd client metaData error %v:", err)\n    }\n    //GetServiceInstanceInfo end\n\n')),(0,a.kt)("h2",{id:"entire-success-log"},"Entire Success log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:66] Create customer etcd client success!\n2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:142] RegisterServiceInstance,result:true\n2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:142] RegisterServiceInstance,result:true\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:71] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"your/path1","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:85] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"your/path2","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:89] > DeregisterServiceInstance start\n2022-08-16 10:19:33 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:101] DeregisterServiceInstance success !\n')))}p.isMDXComponent=!0}}]);