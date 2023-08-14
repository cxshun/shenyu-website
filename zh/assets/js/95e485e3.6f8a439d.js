"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33233:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},l=void 0,o={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"index",description:"Apache ShenYu Nginx Module",source:"@site/shenyuNginx/index.md",sourceDirName:".",slug:"/index",permalink:"/zh/shenyuNginx/index",version:"current",lastUpdatedBy:"moremind",lastUpdatedAt:1692004906,formattedLastUpdatedAt:"2023/8/14",frontMatter:{},sidebar:"community"},s=[{value:"Apache ShenYu Nginx Module",id:"apache-shenyu-nginx-module",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Build from source",id:"build-from-source",children:[]},{value:"Greeting ETCD",id:"greeting-etcd",children:[]},{value:"Greeting Nacos",id:"greeting-nacos",children:[]}]},{value:"Greeting Zookeeper",id:"greeting-zookeeper",children:[{value:"Greeting Consul",id:"greeting-consul",children:[]}]},{value:"Finally",id:"finally",children:[]},{value:"Contributor and Support",id:"contributor-and-support",children:[]},{value:"License",id:"license",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apache-shenyu-nginx-module"},"Apache ShenYu Nginx Module"),(0,a.kt)("p",null,"This module provided SDK to watch available ShenYu instance list as upstream nodes by Service Register Center for OpenResty."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#greeting-etcd"},"ETCD")," (Supported)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#greeting-nacos"},"Nacos")," (Supported)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#greeting-zookeeper"},"Zookeeper")," (Supported)k"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#greeting-consul"},"Consul")," (Supported)")),(0,a.kt)("p",null,"In the cluster mode, Apache ShenYu supports the deployment of multiple ShenYu instances, which may have new instances joining or leaving at any time.\nHence, Apache ShenYu introduces Service Discovery modules to help client to detect the available instances.\nCurrently, Apache ShenYu Bootstrap already supports Apache Zookeeper, Nacos, Etcd, and consul. Client or LoadBalancer can get the available ShenYu instances by those Service register center."),(0,a.kt)("p",null,"Here provides a completed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/tree/main/example"},"examples"),"."),(0,a.kt)("p",null,"======="),(0,a.kt)("p",null,"Here is a completed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/etcd/nginx.conf"},"example")," working with ETCD."),(0,a.kt)("p",null,"Here is a completed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/nacos/nginx.conf"},"example")," working with Nacos."),(0,a.kt)("p",null,"Here is a completed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/consul/nginx.conf"},"example")," working with Consul."),(0,a.kt)("p",null,"Here is a completed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/zookeeper/nginx.conf"},"example")," working with Zookeeper."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prerequisite:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Luarocks"),(0,a.kt)("li",{parentName:"ol"},"OpenResty")),(0,a.kt)("h3",{id:"build-from-source"},"Build from source"),(0,a.kt)("p",null,"The first, clone the source from GitHub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/shenyu-nginx\n")),(0,a.kt)("p",null,"Then, build from source and install."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd shenyu-nginx\nluarocks make rockspec/shenyu-nginx-1.0.0-1.rockspec\n")),(0,a.kt)("h3",{id:"greeting-etcd"},"Greeting ETCD"),(0,a.kt)("p",null,"Modify the Nginx configure, create and initialize the ShenYu Register to connect to the target register center.\nThe module will fetch the all of ShenYu instances which are registered to Etcd in the same cluster.\nIt works like Etcd client to watch(based on long polling) ShenYu instance lists."),(0,a.kt)("p",null,"Here is an example for Etcd."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'init_worker_by_lua_block {\n    local register = require("shenyu.register.etcd")\n    register.init({\n        balancer_type = "chash",\n        etcd_base_url = "http://127.0.0.1:2379",\n    })\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.kt)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"round robin"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd_base_url")," specify the Etcd server.(Currently, authentication is not supported.)")),(0,a.kt)("p",null,"Add an ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream block")," for ShenYu and enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center.\nAnd then pick one up for handling the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'upstream shenyu {\n    server 0.0.0.1; -- bad \n    \n    balancer_by_lua_block {\n        require("shenyu.register.etcd").pick_and_set_peer()\n    }\n}\n')),(0,a.kt)("h3",{id:"greeting-nacos"},"Greeting Nacos"),(0,a.kt)("p",null,"Modify the Nginx configure, create and initialize the ShenYu Register to connect to target register center.  Here is an example for Nacos."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'init_worker_by_lua_block {\n    local register = require("shenyu.register.nacos")\n    register.init({\n        shenyu_storage = ngx.shared.shenyu_storage,\n        balancer_type = "chash",\n        nacos_base_url = "http://127.0.0.1:8848",\n        username = "nacos",\n        password = "naocs",\n    })\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.kt)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"round robin"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"nacos_base_url")," specify the Nacos server address."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"username")," specify the username to log in Nacos. (it is only required when Nacos auth enable)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," specify the password to log in Nacos.")),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," to enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center.\nAnd then pick one up for handling the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'upstream shenyu {\n    server 0.0.0.1; -- bad \n    \n    balancer_by_lua_block {\n        require("shenyu.register.nacos").pick_and_set_peer()\n    }\n}\n')),(0,a.kt)("h2",{id:"greeting-zookeeper"},"Greeting Zookeeper"),(0,a.kt)("p",null,"Modify the Nginx configure, create and initialize the ShenYu register to connect to target register center.\nListen for changes to the node via the zookeeper watch event. Here is an example of the zookeeper configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'init_worker_by_lua_block {\n        local register = require("shenyu.register.zookeeper")\n        register.init({\n           servers = {"127.0.0.1:2181","127.0.0.1:2182"},\n           shenyu_storage = ngx.shared.shenyu_storage,\n           balancer_type = "roundrobin"\n        });\n    }\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"servers")," zookeeper cluster address."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.kt)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"round robin"),".")),(0,a.kt)("p",null,"Modify the upstream to enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center. And then pick one up for handling the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},' upstream shenyu {\n        server 0.0.0.1;\n        balancer_by_lua_block {\n            require("shenyu.register.zookeeper").pick_and_set_peer()\n        }\n    }\n')),(0,a.kt)("h3",{id:"greeting-consul"},"Greeting Consul"),(0,a.kt)("p",null,"Modify the Nginx configure, create and initialize the ShenYu register to connect to target register center.\nListen for changes to the node via the consul watch event. Here is an example of the consul configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'init_worker_by_lua_block {\n    local register = require "shenyu.register.consul";\n    register.init({\n        uri = "http://127.0.0.1:8500",\n        path = "/v1/catalog/service/demo",\n        shenyu_storage = ngx.shared.shenyu_storage,\n        balancer_type = "chash",\n    })\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.kt)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"round robin"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"uri")," consul server address."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," path of service.")),(0,a.kt)("p",null,"Modify the upstream to enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center. And then pick one up for handling the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'\n upstream shenyu {\n        server 0.0.0.1;\n        balancer_by_lua_block {\n            require("shenyu.register.consul").pick_and_set_peer()\n        }\n    }\n')),(0,a.kt)("h2",{id:"finally"},"Finally"),(0,a.kt)("p",null,"Finally, restart OpenResty."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openresty -s reload\n")),(0,a.kt)("h2",{id:"contributor-and-support"},"Contributor and Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/community/contributor-guide"},"How to Contributor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:dev@shenyu.apache.org"},"Mailing Lists"))),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")))}u.isMDXComponent=!0}}]);