"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[88243],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61642:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Helm Deployment",description:"Helm Deployment"},i=void 0,o={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Helm Deployment",description:"Helm Deployment",source:"@site/helm/index.md",sourceDirName:".",slug:"/index",permalink:"/helm/index",version:"current",lastUpdatedBy:"moremind",lastUpdatedAt:1692004906,formattedLastUpdatedAt:"8/14/2023",frontMatter:{title:"Helm Deployment",description:"Helm Deployment"},sidebar:"community"},d=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Tools",id:"tools",children:[]},{value:"Database",id:"database",children:[]}]},{value:"Add Helm repository",id:"add-helm-repository",children:[]},{value:"Install",id:"install",children:[{value:"Deployment prerequisites",id:"deployment-prerequisites",children:[]},{value:"Instructions",id:"instructions",children:[]},{value:"h2 as database",id:"h2-as-database",children:[]},{value:"MySQL as database",id:"mysql-as-database",children:[]},{value:"PostgreSQL as database(Version of ShenYu &gt; 2.5.0)",id:"postgresql-as-databaseversion-of-shenyu--250",children:[]},{value:"Oracle as database",id:"oracle-as-database",children:[]}]},{value:"Q&amp;A",id:"qa",children:[{value:"1. you need to modify a lot of configuration information, such as modify the application.yml, how to install",id:"1-you-need-to-modify-a-lot-of-configuration-information-such-as-modify-the-applicationyml-how-to-install",children:[]},{value:"2. How to install only admin or bootstrap",id:"2-how-to-install-only-admin-or-bootstrap",children:[]},{value:"3. How to install old version ShenYu",id:"3-how-to-install-old-version-shenyu",children:[]},{value:"How to configure JVM options and modify Kubernetes resource quotas(Version of ShenYu &gt; 2.5.0)",id:"how-to-configure-jvm-options-and-modify-kubernetes-resource-quotasversion-of-shenyu--250",children:[]}]},{value:"Values configuration instructions",id:"values-configuration-instructions",children:[{value:"Global Configuration",id:"global-configuration",children:[]},{value:"shenyu-admin configuration",id:"shenyu-admin-configuration",children:[]},{value:"shenyu-bootstrap configuration",id:"shenyu-bootstrap-configuration",children:[]},{value:"Database configuration",id:"database-configuration",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]},{value:"Oracle",id:"oracle",children:[]},{value:"application.yml configuration",id:"applicationyml-configuration",children:[]}]},{value:"GitHub Repository",id:"github-repository",children:[]}],p={toc:d},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article introduces the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," to deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"tools"},"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes &\uff06 Kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm"))),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/deployment/deployment-before/"},"Deployment Prerequisites document"),".")),(0,r.kt)("h2",{id:"add-helm-repository"},"Add Helm repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add shenyu https://apache.github.io/shenyu-helm-chart\nhelm repo update\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"deployment-prerequisites"},"Deployment prerequisites"),(0,r.kt)("p",null,"Before reading this document, you need to read ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/deployment/deployment-before/"},"Deployment prerequisites")," to complete the environment preparation before deploying ShenYu."),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Install the application"),": By default, both admin and bootstrap are installed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service Exposure"),": Use NodePort to expose the service, the default port is ",(0,r.kt)("inlineCode",{parentName:"li"},"31095")," for admin and ",(0,r.kt)("inlineCode",{parentName:"li"},"31195")," for bootstrap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database"),": Currently supports h2, MySQL, PostgreSQL, Oracle as database. Default is h2.")),(0,r.kt)("h3",{id:"h2-as-database"},"h2 as database"),(0,r.kt)("p",null,"Running the following command will install admin and bootstrap under shenyu namespace and create namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace\n")),(0,r.kt)("h3",{id:"mysql-as-database"},"MySQL as database"),(0,r.kt)("p",null,"Modify and copy the following command and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=mysql \\\n      --set dataSource.mysql.ip=127.0.0.1 \\\n      --set dataSource.mysql.port=3306 \\\n      --set dataSource.mysql.username=root \\\n      --set dataSource.mysql.password=123456 \n")),(0,r.kt)("h3",{id:"postgresql-as-databaseversion-of-shenyu--250"},"PostgreSQL as database(Version of ShenYu > 2.5.0)"),(0,r.kt)("p",null,"Modify the following command and copy it to execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=pg \\\n      --set dataSource.pg.ip=127.0.0.1 \\\n      --set dataSource.pg.port=5432 \\\n      --set dataSource.pg.username=postgres \\\n      --set dataSource.pg.password=123456\n")),(0,r.kt)("h3",{id:"oracle-as-database"},"Oracle as database"),(0,r.kt)("p",null,"Modify the following command and copy it to execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set dataSource.active=oracle \\\n      --set dataSource.oracle.ip=127.0.0.1 \\\n      --set dataSource.oracle.port=1521 \\\n      --set dataSource.oracle.serviceName=shenyu \\\n      --set dataSource.oracle.username=root \\\n      --set dataSource.oracle.password=123456\n")),(0,r.kt)("h2",{id:"qa"},"Q&A"),(0,r.kt)("h3",{id:"1-you-need-to-modify-a-lot-of-configuration-information-such-as-modify-the-applicationyml-how-to-install"},"1. you need to modify a lot of configuration information, such as modify the application.yml, how to install"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"download the complete values.yaml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Latest chart version: ",(0,r.kt)("inlineCode",{parentName:"li"},"helm show values shenyu/shenyu > values.yaml")),(0,r.kt)("li",{parentName:"ul"},"Specific chart version, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"0.2.0"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"helm show values shenyu/shenyu --version=0.2.0 > values.yaml"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"modify the values.yaml file"),(0,r.kt)("li",{parentName:"ol"},"Change the corresponding configuration and execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"helm install")," command with the format ",(0,r.kt)("inlineCode",{parentName:"li"},"-f values.yaml"),".\nFor example: ",(0,r.kt)("inlineCode",{parentName:"li"},"helm install shenyu shenyu/shenyu -n=shenyu --create-namespace -f values.yaml"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"P.S.\n",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/gateway-property-config"},"bootstrap configuration description"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/admin-property-config"},"admin configuration description"))),(0,r.kt)("h3",{id:"2-how-to-install-only-admin-or-bootstrap"},"2. How to install only admin or bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install only admin: add ",(0,r.kt)("inlineCode",{parentName:"li"},"-set bootstrap.enabled=false")," to the end of the helm install command"),(0,r.kt)("li",{parentName:"ul"},"Install only bootstrap: add ",(0,r.kt)("inlineCode",{parentName:"li"},"--set admin.enabled=false")," to the end of the helm install command")),(0,r.kt)("h3",{id:"3-how-to-install-old-version-shenyu"},"3. How to install old version ShenYu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm search repo shenyu -l\n")),(0,r.kt)("p",null,"You will get output similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME CHART VERSION APP VERSION DESCRIPTION\nshenyu/shenyu 0.2.0 2.5.0 Helm Chart for deploying Apache ShenYu in Kubernetes\n...\n...\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_VERSION")," is the version of ShenYu and ",(0,r.kt)("inlineCode",{parentName:"p"},"CHART_VERSION")," is the version of Helm Chart."),(0,r.kt)("p",null,"Select the corresponding Chart version according to the version of ShenYu you want to install, and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-version=CHART_VERSION")," parameter at the end of the command. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install shenyu shenyu/shenyu -n=shenyu --version=0.2.0 --create-namespace\n")),(0,r.kt)("h3",{id:"how-to-configure-jvm-options-and-modify-kubernetes-resource-quotasversion-of-shenyu--250"},"How to configure JVM options and modify Kubernetes resource quotas(Version of ShenYu > 2.5.0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure JVM parameters via ",(0,r.kt)("inlineCode",{parentName:"li"},"admin.jvmOpts")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.jvmOpts")),(0,r.kt)("li",{parentName:"ul"},"Configure Kubernetes resource quotas via ",(0,r.kt)("inlineCode",{parentName:"li"},"admin.resources")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.resources"),".")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'helm install shenyu shenyu/shenyu -n=shenyu --create-namespace \\\n      --set admin.javaOpts="-Xms256m -Xmx512m" \\\n      --set admin.resources.requests.memory=512Mi \\\n      --set admin.resources.limits.memory=1Gi \\\n      --set admin.resources.requests.cpu=500m \\\n      --set admin.resources.limits.cpu=1 \n')),(0,r.kt)("h2",{id:"values-configuration-instructions"},"Values configuration instructions"),(0,r.kt)("h3",{id:"global-configuration"},"Global Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2.5.1"')),(0,r.kt)("td",{parentName:"tr",align:null},"shenyu version, it is not recommended to modify, please install the corresponding version directly")))),(0,r.kt)("h3",{id:"shenyu-admin-configuration"},"shenyu-admin configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.replicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"number of replicas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"apache/shenyu-admin"')),(0,r.kt)("td",{parentName:"tr",align:null},"image name (you can modify this field to support custom images)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.nodePort"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"31095")),(0,r.kt)("td",{parentName:"tr",align:null},"NodePort port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.javaOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu/blob/master/shenyu-dist/shenyu-admin-dist/docker/entrypoint.sh"},"see here")),(0,r.kt)("td",{parentName:"tr",align:null},"JVM parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.resources"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"omit"),(0,r.kt)("td",{parentName:"tr",align:null},"K8s resource quota")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.autoscaling.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.autoscaling.minReplicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"minReplicas in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.autoscaling.maxReplicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"maxReplicas in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.autoscaling.targetCPUUtilizationPercentage"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"75")),(0,r.kt)("td",{parentName:"tr",align:null},"targetCPUUtilizationPercentage in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.autoscaling.targetMemoryUtilizationPercentage"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"75")),(0,r.kt)("td",{parentName:"tr",align:null},"targetMemoryUtilizationPercentage in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.ingress.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.ingress.hosts","[0]",".host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shenyu-admin.local")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress host, u can set not only one  host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.ingress.hosts","[0]",".paths","[0]",".path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress host, u can set not only one  path")))),(0,r.kt)("h3",{id:"shenyu-bootstrap-configuration"},"shenyu-bootstrap configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install bootstrap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.replicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"number of replicas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"apache/shenyu-bootstrap"')),(0,r.kt)("td",{parentName:"tr",align:null},"image name (you can modify this field to support custom images)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.nodePort"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"31195")),(0,r.kt)("td",{parentName:"tr",align:null},"NodePort Port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.javaOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu/blob/master/shenyu-dist/shenyu-bootstrap-dist/docker/entrypoint.sh"},"see here")),(0,r.kt)("td",{parentName:"tr",align:null},"JVM parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.resources"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"K8s resource quota")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.autoscaling.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.autoscaling.minReplicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"minReplicas in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.autoscaling.maxReplicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"maxReplicas in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.autoscaling.targetCPUUtilizationPercentage"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"75")),(0,r.kt)("td",{parentName:"tr",align:null},"targetCPUUtilizationPercentage in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.autoscaling.targetMemoryUtilizationPercentage"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"75")),(0,r.kt)("td",{parentName:"tr",align:null},"targetMemoryUtilizationPercentage in hpa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.ingress.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to install ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.ingress.hosts","[0]",".host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shenyu-boostrap.local")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress host, u can set not only one  host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.ingress.hosts","[0]",".paths","[0]",".path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress host, u can set not only one  path")))),(0,r.kt)("h3",{id:"database-configuration"},"Database configuration"),(0,r.kt)("h4",{id:"general-database-configuration"},"General database configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.active"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"h2"')),(0,r.kt)("td",{parentName:"tr",align:null},"Database to use, supports ",(0,r.kt)("inlineCode",{parentName:"td"},"h2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pg"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.initEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize the database, only ",(0,r.kt)("inlineCode",{parentName:"td"},"h2")," is available")))),(0,r.kt)("h4",{id:"h2"},"h2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.h2.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"sa"')),(0,r.kt)("td",{parentName:"tr",align:null},"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.h2.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"sa"')),(0,r.kt)("td",{parentName:"tr",align:null},"password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.h2.url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},'custom url, default h2 url is "jdbc:h2:mem:~/shenyu;DB_CLOSE_DELAY=-1;MODE=MySQL;"')))),(0,r.kt)("h4",{id:"mysql"},"MySQL"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.urlOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Use custom datasource url and ignore other configs, the format is jdbc:mysql://xxxxxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.ip"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3306")),(0,r.kt)("td",{parentName:"tr",align:null},"port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"root"')),(0,r.kt)("td",{parentName:"tr",align:null},"Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.driverClass"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"com.mysql.cj.jdbc.Driver"')),(0,r.kt)("td",{parentName:"tr",align:null},"mysql driver class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.mysql.connectorVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"8.0.23"')),(0,r.kt)("td",{parentName:"tr",align:null},"connector version(",(0,r.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/"},"maven connector list"),")")))),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.ip"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.urlOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Use custom datasource url and ignore other configs, the format is jdbc:postgresql://xxxxxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5432")),(0,r.kt)("td",{parentName:"tr",align:null},"port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"postgres"')),(0,r.kt)("td",{parentName:"tr",align:null},"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"postgres"')),(0,r.kt)("td",{parentName:"tr",align:null},"password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.driverClass"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"org.postgresql.Driver"')),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL driver class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.pg.connectorVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"42.2.18"')),(0,r.kt)("td",{parentName:"tr",align:null},"connector version (",(0,r.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/org/postgresql/postgresql/"},"maven connector list"),")")))),(0,r.kt)("h3",{id:"oracle"},"Oracle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.urlOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Use custom datasource url and ignore other configs, the format is jdbc:oracle:xxxxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.ip"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1521")),(0,r.kt)("td",{parentName:"tr",align:null},"port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"root"')),(0,r.kt)("td",{parentName:"tr",align:null},"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"shenyu"')),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle service name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.driverClass"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"oracle.jdbc.OracleDriver"')),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle driver class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource.oracle.connectorVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"19.3.0.0"')),(0,r.kt)("td",{parentName:"tr",align:null},"connector version(",(0,r.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/oracle/ojdbc/ojdbc8/"},"maven connector list"),")")))),(0,r.kt)("h3",{id:"applicationyml-configuration"},"application.yml configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configuration-item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applicationConfig.bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"slightly"),(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap configuration, ",(0,r.kt)("a",{parentName:"td",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/gateway-property-config"},"bootstrap configuration description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applicationConfig.admin"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"omit"),(0,r.kt)("td",{parentName:"tr",align:null},"admin configuration, ",(0,r.kt)("a",{parentName:"td",href:"https://shenyu.apache.org/zh/docs/user-guide/property-config/admin-property-config"},"admin configuration description"))))),(0,r.kt)("h2",{id:"github-repository"},"GitHub Repository"),(0,r.kt)("p",null,"Welcome to contribute to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-helm-chart"},"shenyu-helm-chart"),"."))}s.isMDXComponent=!0}}]);