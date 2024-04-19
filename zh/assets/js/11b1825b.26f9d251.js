"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[23713],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>s});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y=n.createContext({}),p=function(e){var a=n.useContext(y),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(y.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),o=r,s=m["".concat(y,".").concat(o)]||m[o]||u[o]||l;return t?n.createElement(s,g(g({ref:a},d),{},{components:t})):n.createElement(s,g({ref:a},d))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=o;var i={};for(var y in a)hasOwnProperty.call(a,y)&&(i[y]=a[y]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var p=2;p<l;p++)g[p]=t[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},30839:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=t(58168),r=(t(96540),t(15680));const l={title:"Helm\u90e8\u7f72",keywords:["Helm"],description:"Helm\u90e8\u7f72"},g=void 0,i={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Helm\u90e8\u7f72",description:"Helm\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs-helm/current/index.md",sourceDirName:".",slug:"/index",permalink:"/zh/helm/index",version:"current",lastUpdatedBy:"Kerwin Bryant",lastUpdatedAt:1713543939,formattedLastUpdatedAt:"2024/4/19",frontMatter:{title:"Helm\u90e8\u7f72",keywords:["Helm"],description:"Helm\u90e8\u7f72"},sidebar:"community"},y=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",children:[{value:"\u5de5\u5177",id:"\u5de5\u5177",children:[]},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",children:[]}]},{value:"\u6dfb\u52a0 Helm \u4ed3\u5e93",id:"\u6dfb\u52a0-helm-\u4ed3\u5e93",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"h2 \u4f5c\u4e3a\u6570\u636e\u5e93",id:"h2-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[]},{value:"MySQL \u4f5c\u4e3a\u6570\u636e\u5e93",id:"mysql-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[]},{value:"PostgreSQL \u4f5c\u4e3a\u6570\u636e\u5e93(ShenYu \u7248\u672c &gt; 2.5.0)",id:"postgresql-\u4f5c\u4e3a\u6570\u636e\u5e93shenyu-\u7248\u672c--250",children:[]},{value:"Oracle \u4f5c\u4e3a\u6570\u636e\u5e93",id:"oracle-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[]}]},{value:"Q&amp;A",id:"qa",children:[{value:"1. \u9700\u8981\u5927\u91cf\u4fee\u6539\u914d\u7f6e\u4fe1\u606f\uff0c\u5982\u4fee\u6539 application.yml \uff0c\u5982\u4f55\u5b89\u88c5",id:"1-\u9700\u8981\u5927\u91cf\u4fee\u6539\u914d\u7f6e\u4fe1\u606f\u5982\u4fee\u6539-applicationyml-\u5982\u4f55\u5b89\u88c5",children:[]},{value:"2. \u5982\u4f55\u53ea\u5b89\u88c5 admin \u6216 bootstrap",id:"2-\u5982\u4f55\u53ea\u5b89\u88c5-admin-\u6216-bootstrap",children:[]},{value:"3. \u5982\u4f55\u5b89\u88c5\u65e7\u7248\u672c ShenYu",id:"3-\u5982\u4f55\u5b89\u88c5\u65e7\u7248\u672c-shenyu",children:[]},{value:"\u5982\u4f55\u914d\u7f6e JVM \u53c2\u6570\u4ee5\u53ca\u4fee\u6539 Kubernetes \u8d44\u6e90\u914d\u989d(ShenYu \u7248\u672c &gt; 2.5.0)",id:"\u5982\u4f55\u914d\u7f6e-jvm-\u53c2\u6570\u4ee5\u53ca\u4fee\u6539-kubernetes-\u8d44\u6e90\u914d\u989dshenyu-\u7248\u672c--250",children:[]}]},{value:"Values \u914d\u7f6e\u8bf4\u660e",id:"values-\u914d\u7f6e\u8bf4\u660e",children:[{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",children:[]},{value:"shenyu-admin \u914d\u7f6e",id:"shenyu-admin-\u914d\u7f6e",children:[]},{value:"shenyu-bootstrap \u914d\u7f6e",id:"shenyu-bootstrap-\u914d\u7f6e",children:[]},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]},{value:"Oracle",id:"oracle",children:[]},{value:"application.yml \u914d\u7f6e",id:"applicationyml-\u914d\u7f6e",children:[]}]},{value:"GitHub \u4ed3\u5e93",id:"github-\u4ed3\u5e93",children:[]}],p={toc:y},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"helm")," \u6765\u90e8\u7f72 ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,r.yg)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.yg)("h3",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/zh-cn/docs/setup/"},"Kubernetes &\uff06 Kubectl")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://helm.sh/zh/docs/intro/install/"},"Helm"))),(0,r.yg)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,r.yg)("h2",{id:"\u6dfb\u52a0-helm-\u4ed3\u5e93"},"\u6dfb\u52a0 Helm \u4ed3\u5e93"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo add shenyu https://apache.github.io/shenyu-helm-chart\nhelm repo update\n")),(0,r.yg)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.yg)("h3",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5b89\u88c5\u5e94\u7528"),"\uff1a\u9ed8\u8ba4\u540c\u65f6\u5b89\u88c5 admin \u4e0e bootstrap\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u670d\u52a1\u66b4\u9732"),"\uff1a\u4f7f\u7528 NodePort \u66b4\u9732\u670d\u52a1\uff0cadmin \u9ed8\u8ba4\u7aef\u53e3\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"31095"),", bootstrap \u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"31195"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6570\u636e\u5e93"),"\uff1a\u76ee\u524d\u652f\u6301 h2, MySQL, PostgreSQL, Oracle \u4f5c\u4e3a\u6570\u636e\u5e93\u3002\u9ed8\u8ba4\u4f7f\u7528 h2\u3002")),(0,r.yg)("h3",{id:"h2-\u4f5c\u4e3a\u6570\u636e\u5e93"},"h2 \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,r.yg)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4f1a\u5728 shenyu namespace \u4e0b\u5b89\u88c5 admin \u4e0e bootstrap \uff0c\u5e76\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace\n")),(0,r.yg)("h3",{id:"mysql-\u4f5c\u4e3a\u6570\u636e\u5e93"},"MySQL \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,r.yg)("p",null,"\u4fee\u6539\u4ee5\u4e0b\u547d\u4ee4\u5e76\u590d\u5236\uff0c\u6267\u884c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=mysql \\\n      --set dataSource.mysql.ip=127.0.0.1 \\\n      --set dataSource.mysql.port=3306 \\\n      --set dataSource.mysql.username=root \\\n      --set dataSource.mysql.password=123456 \n")),(0,r.yg)("h3",{id:"postgresql-\u4f5c\u4e3a\u6570\u636e\u5e93shenyu-\u7248\u672c--250"},"PostgreSQL \u4f5c\u4e3a\u6570\u636e\u5e93(ShenYu \u7248\u672c > 2.5.0)"),(0,r.yg)("p",null,"\u4fee\u6539\u4ee5\u4e0b\u547d\u4ee4\u5e76\u590d\u5236\uff0c\u6267\u884c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=pg \\\n      --set dataSource.pg.ip=127.0.0.1 \\\n      --set dataSource.pg.port=5432 \\\n      --set dataSource.pg.username=postgres \\\n      --set dataSource.pg.password=123456\n")),(0,r.yg)("h3",{id:"oracle-\u4f5c\u4e3a\u6570\u636e\u5e93"},"Oracle \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,r.yg)("p",null,"\u4fee\u6539\u4ee5\u4e0b\u547d\u4ee4\u5e76\u590d\u5236\uff0c\u6267\u884c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=oracle \\\n      --set dataSource.oracle.ip=127.0.0.1 \\\n      --set dataSource.oracle.port=1521 \\\n      --set dataSource.oracle.serviceName=shenyu \\\n      --set dataSource.oracle.username=root \\\n      --set dataSource.oracle.password=123456\n")),(0,r.yg)("h2",{id:"qa"},"Q&A"),(0,r.yg)("h3",{id:"1-\u9700\u8981\u5927\u91cf\u4fee\u6539\u914d\u7f6e\u4fe1\u606f\u5982\u4fee\u6539-applicationyml-\u5982\u4f55\u5b89\u88c5"},"1. \u9700\u8981\u5927\u91cf\u4fee\u6539\u914d\u7f6e\u4fe1\u606f\uff0c\u5982\u4fee\u6539 application.yml \uff0c\u5982\u4f55\u5b89\u88c5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b8c\u6574 values.yaml")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6700\u65b0 chart \u7248\u672c\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"helm show values shenyu/shenyu > values.yaml")),(0,r.yg)("li",{parentName:"ul"},"\u7279\u5b9a chart \u7248\u672c, \u5982 ",(0,r.yg)("inlineCode",{parentName:"li"},"0.2.0"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"helm show values shenyu/shenyu --version=0.2.0 > values.yaml"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u6539 values.yaml \u6587\u4ef6"),(0,r.yg)("li",{parentName:"ol"},"\u66f4\u6539\u76f8\u5e94\u914d\u7f6e\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"-f values.yaml")," \u7684\u683c\u5f0f\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"helm install")," \u547d\u4ee4\u3002\n\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace -f values.yaml"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u9644\uff1a\n",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/gateway-property-config"},"bootstrap \u914d\u7f6e\u8bf4\u660e"),"\n",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/admin-property-config"},"admin \u914d\u7f6e\u8bf4\u660e"))),(0,r.yg)("h3",{id:"2-\u5982\u4f55\u53ea\u5b89\u88c5-admin-\u6216-bootstrap"},"2. \u5982\u4f55\u53ea\u5b89\u88c5 admin \u6216 bootstrap"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u53ea\u5b89\u88c5 admin:     \u5728 helm \u5b89\u88c5\u547d\u4ee4\u672b\u5c3e\u52a0\u4e0a ",(0,r.yg)("inlineCode",{parentName:"li"},"--set bootstrap.enabled=false")),(0,r.yg)("li",{parentName:"ul"},"\u53ea\u5b89\u88c5 bootstrap: \u5728 helm \u5b89\u88c5\u547d\u4ee4\u672b\u5c3e\u52a0\u4e0a ",(0,r.yg)("inlineCode",{parentName:"li"},"--set admin.enabled=false"))),(0,r.yg)("h3",{id:"3-\u5982\u4f55\u5b89\u88c5\u65e7\u7248\u672c-shenyu"},"3. \u5982\u4f55\u5b89\u88c5\u65e7\u7248\u672c ShenYu"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm search repo shenyu -l\n")),(0,r.yg)("p",null,"\u4f60\u4f1a\u5f97\u5230\u7c7b\u4f3c\u7684\u8f93\u51fa\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"NAME            CHART VERSION   APP VERSION   DESCRIPTION\nshenyu/shenyu   0.2.0           2.5.0         Helm Chart for deploying Apache ShenYu in Kubernetes\n...\n...\n")),(0,r.yg)("p",null,"\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"APP_VERSION")," \u662f ShenYu \u7684\u7248\u672c\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"CHART_VERSION")," \u662f Helm Chart \u7684\u7248\u672c\u3002"),(0,r.yg)("p",null,"\u6839\u636e\u8981\u5b89\u88c5\u7684 ShenYu \u7248\u672c\u6765\u9009\u62e9\u5bf9\u5e94\u7684 Chart \u7248\u672c\uff0c\u5728\u547d\u4ee4\u672b\u5c3e\u52a0\u4e0a ",(0,r.yg)("inlineCode",{parentName:"p"},"--version=CHART_VERSION")," \u53c2\u6570\u5373\u53ef\u3002\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --version=0.2.0 --create-namespace\n")),(0,r.yg)("h3",{id:"\u5982\u4f55\u914d\u7f6e-jvm-\u53c2\u6570\u4ee5\u53ca\u4fee\u6539-kubernetes-\u8d44\u6e90\u914d\u989dshenyu-\u7248\u672c--250"},"\u5982\u4f55\u914d\u7f6e JVM \u53c2\u6570\u4ee5\u53ca\u4fee\u6539 Kubernetes \u8d44\u6e90\u914d\u989d(ShenYu \u7248\u672c > 2.5.0)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"admin.javaOpts")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"bootstrap.javaOpts")," \u6765\u914d\u7f6e JVM \u53c2\u6570"),(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"admin.resources")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"bootstrap.resources")," \u6765\u914d\u7f6e Kubernetes \u8d44\u6e90\u914d\u989d\u3002")),(0,r.yg)("p",null,"\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set admin.javaOpts="-Xms256m -Xmx512m" \\\n      --set admin.resources.requests.memory=512Mi \\\n      --set admin.resources.limits.memory=1Gi \\\n      --set admin.resources.requests.cpu=500m \\\n      --set admin.resources.limits.cpu=1 \\\n')),(0,r.yg)("h2",{id:"values-\u914d\u7f6e\u8bf4\u660e"},"Values \u914d\u7f6e\u8bf4\u660e"),(0,r.yg)("h3",{id:"\u5168\u5c40\u914d\u7f6e"},"\u5168\u5c40\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"2.5.1"')),(0,r.yg)("td",{parentName:"tr",align:null},"shenyu \u7248\u672c\uff0c\u4e0d\u5efa\u8bae\u4fee\u6539\uff0c\u8bf7\u76f4\u63a5\u5b89\u88c5\u5bf9\u5e94\u7248\u672c")))),(0,r.yg)("h3",{id:"shenyu-admin-\u914d\u7f6e"},"shenyu-admin \u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5b89\u88c5 admin")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.replicas"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"1")),(0,r.yg)("td",{parentName:"tr",align:null},"\u526f\u672c\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.image"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"apache/shenyu-admin"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u955c\u50cf\u540d\u79f0\uff08\u53ef\u4ee5\u4fee\u6539\u6b64\u5b57\u6bb5\u4ee5\u652f\u6301\u5b9a\u5236\u5316\u955c\u50cf\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.nodePort"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"31095")),(0,r.yg)("td",{parentName:"tr",align:null},"NodePort \u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.javaOpts"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/shenyu/blob/master/shenyu-dist/shenyu-admin-dist/docker/entrypoint.sh"},"\u8be6\u89c1\u8fd9\u91cc")),(0,r.yg)("td",{parentName:"tr",align:null},"JVM \u53c2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"admin.resources"),(0,r.yg)("td",{parentName:"tr",align:null},"dict"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"K8s \u8d44\u6e90\u914d\u989d")))),(0,r.yg)("h3",{id:"shenyu-bootstrap-\u914d\u7f6e"},"shenyu-bootstrap \u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5b89\u88c5 bootstrap")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.replicas"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2")),(0,r.yg)("td",{parentName:"tr",align:null},"\u526f\u672c\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.image"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"apache/shenyu-bootstrap"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u955c\u50cf\u540d\u79f0\uff08\u53ef\u4ee5\u4fee\u6539\u6b64\u5b57\u6bb5\u4ee5\u652f\u6301\u5b9a\u5236\u5316\u955c\u50cf\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.nodePort"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"31195")),(0,r.yg)("td",{parentName:"tr",align:null},"NodePort \u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.javaOpts"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/shenyu/blob/master/shenyu-dist/shenyu-bootstrap-dist/docker/entrypoint.sh"},"\u8be6\u89c1\u8fd9\u91cc")),(0,r.yg)("td",{parentName:"tr",align:null},"JVM \u53c2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.resources"),(0,r.yg)("td",{parentName:"tr",align:null},"dict"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"K8s \u8d44\u6e90\u914d\u989d")))),(0,r.yg)("h3",{id:"\u6570\u636e\u5e93\u914d\u7f6e"},"\u6570\u636e\u5e93\u914d\u7f6e"),(0,r.yg)("h4",{id:"\u6570\u636e\u5e93\u603b\u914d\u7f6e"},"\u6570\u636e\u5e93\u603b\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.active"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"h2"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684\u6570\u636e\u5e93\uff0c\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"h2"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"mysql"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"pg"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.initEnabled"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c\u4ec5 ",(0,r.yg)("inlineCode",{parentName:"td"},"h2")," \u6709\u6548")))),(0,r.yg)("h4",{id:"h2"},"h2"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.h2.username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"sa"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.h2.password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"sa"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.h2.url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"``"),(0,r.yg)("td",{parentName:"tr",align:null},'\u81ea\u5b9a\u4e49 url, \u9ed8\u8ba4\u7684 h2 url \u662f "jdbc:h2:mem:~/shenyu;DB_CLOSE_DELAY=-1;MODE=MySQL;"')))),(0,r.yg)("h4",{id:"mysql"},"MySQL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.urlOverride"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5b8c\u6574url\uff0c\u5e76\u5ffd\u7565IP\u7b49\u5b57\u6bb5\u7684\u914d\u7f6e\uff0c\u683c\u5f0f\uff1ajdbc:mysql://xxxxxxx")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"3306")),(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"root"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.driverClass"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"com.mysql.cj.jdbc.Driver"')),(0,r.yg)("td",{parentName:"tr",align:null},"mysql driver class \u540d\u5b57")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.mysql.connectorVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"8.0.23"')),(0,r.yg)("td",{parentName:"tr",align:null},"connector \u7248\u672c(",(0,r.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/"},"maven connector \u5217\u8868"),")")))),(0,r.yg)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.urlOverride"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5b8c\u6574url\uff0c\u5e76\u5ffd\u7565IP\u7b49\u5b57\u6bb5\u7684\u914d\u7f6e\uff0c\u683c\u5f0f\uff1ajdbc:postgresql://xxxxxxx")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"5432")),(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"postgres"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.driverClass"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"org.postgresql.Driver"')),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL driver class \u540d\u5b57")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.pg.connectorVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"42.2.18"')),(0,r.yg)("td",{parentName:"tr",align:null},"connector \u7248\u672c(",(0,r.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/org/postgresql/postgresql/"},"maven connector \u5217\u8868"),")")))),(0,r.yg)("h3",{id:"oracle"},"Oracle"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.urlOverride"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5b8c\u6574url\uff0c\u5e76\u5ffd\u7565IP\u7b49\u5b57\u6bb5\u7684\u914d\u7f6e\uff0c\u683c\u5f0f\uff1ajdbc:oracle:xxx")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"1521")),(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"root"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'""')),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.serviceName"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"shenyu"')),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.driverClass"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"oracle.jdbc.OracleDriver"')),(0,r.yg)("td",{parentName:"tr",align:null},"Oracle driver class \u540d\u5b57")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSource.oracle.connectorVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"19.3.0.0"')),(0,r.yg)("td",{parentName:"tr",align:null},"connector \u7248\u672c(",(0,r.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/oracle/ojdbc/ojdbc8/"},"maven connector \u5217\u8868"),")")))),(0,r.yg)("h3",{id:"applicationyml-\u914d\u7f6e"},"application.yml \u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationConfig.bootstrap"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7565"),(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap \u914d\u7f6e\uff0c",(0,r.yg)("a",{parentName:"td",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/gateway-property-config"},"bootstrap \u914d\u7f6e\u8bf4\u660e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationConfig.admin"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7565"),(0,r.yg)("td",{parentName:"tr",align:null},"admin \u914d\u7f6e\uff0c",(0,r.yg)("a",{parentName:"td",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/admin-property-config"},"admin \u914d\u7f6e\u8bf4\u660e"))))),(0,r.yg)("h2",{id:"github-\u4ed3\u5e93"},"GitHub \u4ed3\u5e93"),(0,r.yg)("p",null,"\u6b22\u8fce\u8d21\u732e\uff01\u4ee3\u7801\u4ed3\u5e93\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-helm-chart"},"shenyu-helm-chart")," \u3002"))}m.isMDXComponent=!0}}]);